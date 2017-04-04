"use strict"

module.exports = function() {
    let _ = require('lodash')
    
    let meta_map = new Map()
    let meta_ref = {}
    
    function resolve_ref(ref) {
        return meta_ref[ref]
    }
    
    function public_create_meta(ref,schema) {
        let meta = create_meta(schema)
        meta_ref[ref] = meta
        return meta
    }
    
    function create_meta(schema) {
        let old = meta_map.get(schema)
        if (old) {
            return old
        } else {
            let cur = internal_create_meta(schema)
            if (cur) {
                meta_map.set(schema,cur)
            }
            return cur
        }
    }
	
	function internal_create_meta(schema) {
		let section = schema.title
		let typedict = {
			integer: 'int'
		}
		let lines = _.map(schema.properties,(v,k) => {
            function resolve(v) {
                if (v.$ref) {
                    return resolve(resolve_ref(v.$ref))  
                } 
                let type = typedict[v.type] || v.type
                if (type == "array") {
                    return resolve(v.items) + '[]'
                }
                if (type == "object") {
                    type = create_meta(v).name
                } 
                return type
            }
            let type = resolve(v)
			return `this.${k}/*Category:${section}+EditAnywhere+${type}*/;`
		})
		let code = `
(function () {
	class ${section} ${schema.struct ? '/* Struct */' : ''}{
		properties() {
			${lines.join('\n')}		 
		}
	}
	return ${section}
})() 
`
        return require('uclass')()(global,eval(code))
	}
    
    let tempOuter = JavascriptLibrary.CreatePackage(null,'/Script/GameEditorTemp') 	
	
    function JsonToUObject(meta,obj,outer = tempOuter) {
        let root
        function createMeta(meta,outer) {
            let out = new meta(outer)
            return out
        }
        let out = root = createMeta(meta,outer)
        let k = obj.path
        let v = obj.data
        out.$id = k
        out.$source = obj
        function update(meta,out,v) {
            _.forEach(v,(vv,kk) => {  
                if (out[kk] == undefined) {
                    if (typeof vv == 'string') {
                        out[kk] = vv
                        if (out[kk] != vv) {
                            if (vv == '"null"') {
                                out[kk] = null
                            } else {
                                let object = UObject.Load(vv)
                                out[kk] = object;
                                if(out[kk] == null && object instanceof Blueprint) {
                                    out[kk] = object.GeneratedClass;
                                }
                            }                        
                        }
                    } else {
                        // @TODO: only for UStruct, not for UObject
                        out[kk] = vv
                    }
                } else if (out[kk] instanceof Array) {
                    let arr = []
                    if (vv instanceof Array) {
                        update(meta,arr,vv)
                    }                    
                    out[kk] = arr
                } else if (_.isObject(vv)) {
                    let obj = {}
                    update(meta,obj,vv)
                    out[kk] = obj
                } else if (out[kk].IsGameRef != undefined) {
                    out[kk].Ref = vv
                } else {
                    try {
                        out[kk] = vv
                    }
                    catch (e) {
                        console.error(kk,String)
                    }                    
                }                
            })
        }
        update(meta,out,v)
        
        function serialize(meta,out) {
            if (!out) return null
            var tmp = JSON.parse(JSON.stringify(out,null,2))
            return tmp
        }
        out.toString = function() {
            return JSON.stringify(serialize(meta,out),null,2)
        }
        return out
    }

    return {
        create : public_create_meta,
        get : resolve_ref,
        toUObject : JsonToUObject        
    }
}