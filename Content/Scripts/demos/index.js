/// <reference path="../typings/ue.d.ts">/>
let _ = require('lodash')
let npm = require('./lib/npm')
let localStorage = require('./lib/localStorage')

let selector = require('./build/demo-selector')

function prepare() {
    if (this.$init) return
    this.$init = true

    GWorld.ExecuteConsoleCommand("DisableAllScreenMessages")
    let pc = GWorld.GetPlayerController(0)
    pc.bShowMouseCursor = true
    pc.SetInputModeUIOnly()
}

let scenes = {
    'Cables': require('./demo-cable'),
    'AI' : require('./demo-ai'),
    'REST' : require('./demo-rest'),
    'Deep-learning' : require('./demo-deeplearning'),
    'React' : require('./build/demo-react')
}

async function main(defer,reset) {
    prepare()    

    await npm('react-umg')
    await npm('google-material-color')
    await npm('hex-rgb')

    let busy
    function ready() {
        busy = true
        defer(_ => busy = false)
    }
    ready()

    let scene = localStorage.get('demo')
    let sceneIds = _.map(scenes,(v,k) => _.extend(_.clone(k),{description:v.description}))
    if (scenes[scene] == undefined) {
        scene = sceneIds[0]
    }

    while (busy) {
        let fn = scenes[scene]
        if (typeof fn == 'function') {
            fn(defer).catch(e => console.error(e.stack))
        }
        scene = await selector(defer,sceneIds)
        localStorage.set('demo',scene)
        reset()
        ready()
    }        
}

module.exports = main