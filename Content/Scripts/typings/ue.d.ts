/// <reference path="_part_0_ue.d.ts">/>
/// <reference path="_part_1_ue.d.ts">/>
declare class LeaderboardFlushCallbackProxy extends UObject { 
	OnSuccess: UnrealEngineMulticastDelegate<(SessionName: string) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(SessionName: string) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LeaderboardFlushCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): LeaderboardFlushCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LeaderboardFlushCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LeaderboardFlushCallbackProxy;
	static CreateProxyObjectForFlush(PlayerController: PlayerController,SessionName: string): LeaderboardFlushCallbackProxy;
	static C(Other: UObject): LeaderboardFlushCallbackProxy;
}

declare class LeaderboardQueryCallbackProxy extends UObject { 
	OnSuccess: UnrealEngineMulticastDelegate<(LeaderboardValue: number) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(LeaderboardValue: number) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LeaderboardQueryCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): LeaderboardQueryCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LeaderboardQueryCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LeaderboardQueryCallbackProxy;
	static ReadLeaderboardInteger(PlayerController: PlayerController,StatName: string): LeaderboardQueryCallbackProxy;
	static C(Other: UObject): LeaderboardQueryCallbackProxy;
}

declare class LogoutCallbackProxy extends BlueprintAsyncActionBase { 
	OnSuccess: UnrealEngineMulticastDelegate<(PlayerController: PlayerController) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(PlayerController: PlayerController) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LogoutCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): LogoutCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LogoutCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LogoutCallbackProxy;
	static Logout(WorldContextObject: UObject,PlayerController: PlayerController): LogoutCallbackProxy;
	static C(Other: UObject): LogoutCallbackProxy;
}

declare class OnlineBeacon extends Actor { 
	BeaconConnectionInitialTimeout: number;
	BeaconConnectionTimeout: number;
	NetDriver: NetDriver;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): OnlineBeacon;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineBeacon;
	static C(Other: UObject): OnlineBeacon;
}

declare class OnlineBeaconHostObject extends Actor { 
	BeaconTypeName: string;
	ClientBeaconActorClass: UnrealEngineClass;
	ClientActors: OnlineBeaconClient[];
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): OnlineBeaconHostObject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineBeaconHostObject;
	static C(Other: UObject): OnlineBeaconHostObject;
}

declare type EBeaconConnectionState = string | symbol;
declare var EBeaconConnectionState = { Invalid:'Invalid',Closed:'Closed',Pending:'Pending',Open:'Open', };
declare class OnlineBeaconClient extends OnlineBeacon { 
	BeaconOwner: OnlineBeaconHostObject;
	BeaconConnection: NetConnection;
	ConnectionState: EBeaconConnectionState;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): OnlineBeaconClient;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineBeaconClient;
	ClientOnConnected(): void;
	static C(Other: UObject): OnlineBeaconClient;
}

declare class PlayerReservation { 
	UniqueId: UniqueNetIdRepl;
	ValidationStr: string;
	ElapsedTime: number;
	clone() : PlayerReservation;
	static C(Other: UObject): PlayerReservation;
}

declare class PartyReservation { 
	TeamNum: number;
	PartyLeader: UniqueNetIdRepl;
	PartyMembers: PlayerReservation[];
	clone() : PartyReservation;
	static C(Other: UObject): PartyReservation;
}

declare class PartyBeaconState extends UObject { 
	SessionName: string;
	NumConsumedReservations: number;
	MaxReservations: number;
	NumTeams: number;
	NumPlayersPerTeam: number;
	TeamAssignmentMethod: string;
	ReservedHostTeamNum: number;
	ForceTeamNum: number;
	Reservations: PartyReservation[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PartyBeaconState;
	static Find(Outer: UObject, ResourceName: string): PartyBeaconState;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PartyBeaconState;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PartyBeaconState;
	static C(Other: UObject): PartyBeaconState;
}

declare type EClientRequestType = string | symbol;
declare var EClientRequestType = { NonePending:'NonePending',ExistingSessionReservation:'ExistingSessionReservation',ReservationUpdate:'ReservationUpdate',EmptyServerReservation:'EmptyServerReservation',Reconnect:'Reconnect', };
declare type EPartyReservationResult = string | symbol;
declare var EPartyReservationResult = { NoResult:'NoResult',RequestPending:'RequestPending',GeneralError:'GeneralError',PartyLimitReached:'PartyLimitReached',IncorrectPlayerCount:'IncorrectPlayerCount',RequestTimedOut:'RequestTimedOut',ReservationDuplicate:'ReservationDuplicate',ReservationNotFound:'ReservationNotFound',ReservationAccepted:'ReservationAccepted',ReservationDenied:'ReservationDenied',ReservationDenied_Banned:'ReservationDenied_Banned',ReservationRequestCanceled:'ReservationRequestCanceled',ReservationInvalid:'ReservationInvalid',BadSessionId:'BadSessionId', };
declare class PartyBeaconClient extends OnlineBeaconClient { 
	DestSessionId: string;
	PendingReservation: PartyReservation;
	RequestType: EClientRequestType;
	bPendingReservationSent: boolean;
	bCancelReservation: boolean;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PartyBeaconClient;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PartyBeaconClient;
	ServerUpdateReservationRequest(SessionId: string,ReservationUpdate: PartyReservation): void;
	ServerReservationRequest(SessionId: string,Reservation: PartyReservation): void;
	ServerCancelReservationRequest(PartyLeader: UniqueNetIdRepl): void;
	ClientSendReservationUpdates(NumRemainingReservations: number): void;
	ClientSendReservationFull(): void;
	ClientReservationResponse(ReservationResponse: EPartyReservationResult): void;
	ClientCancelReservationResponse(ReservationResponse: EPartyReservationResult): void;
	static C(Other: UObject): PartyBeaconClient;
}

declare class TestBeaconClient extends OnlineBeaconClient { 
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TestBeaconClient;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBeaconClient;
	ServerPong(): void;
	ClientPing(): void;
	static C(Other: UObject): TestBeaconClient;
}

declare class OnlineBeaconHost extends OnlineBeacon { 
	ListenPort: number;
	ClientActors: OnlineBeaconClient[];
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): OnlineBeaconHost;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineBeaconHost;
	static C(Other: UObject): OnlineBeaconHost;
}

declare class PartyBeaconHost extends OnlineBeaconHostObject { 
	State: PartyBeaconState;
	bLogoutOnSessionTimeout: boolean;
	SessionTimeoutSecs: number;
	TravelSessionTimeoutSecs: number;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PartyBeaconHost;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PartyBeaconHost;
	static C(Other: UObject): PartyBeaconHost;
}

declare class TestBeaconHost extends OnlineBeaconHostObject { 
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TestBeaconHost;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBeaconHost;
	static C(Other: UObject): TestBeaconHost;
}

declare class OnlineEngineInterfaceImpl extends OnlineEngineInterface { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): OnlineEngineInterfaceImpl;
	static Find(Outer: UObject, ResourceName: string): OnlineEngineInterfaceImpl;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): OnlineEngineInterfaceImpl;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineEngineInterfaceImpl;
	static C(Other: UObject): OnlineEngineInterfaceImpl;
}

declare class PIELoginSettingsInternal { 
	Id: string;
	Token: string;
	Type: string;
	TokenBytes: number[];
	clone() : PIELoginSettingsInternal;
	static C(Other: UObject): PIELoginSettingsInternal;
}

declare class OnlinePIESettings extends DeveloperSettings { 
	bOnlinePIEEnabled: boolean;
	Logins: PIELoginSettingsInternal[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): OnlinePIESettings;
	static Find(Outer: UObject, ResourceName: string): OnlinePIESettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): OnlinePIESettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlinePIESettings;
	static C(Other: UObject): OnlinePIESettings;
}

declare class OnlineSessionClient extends OnlineSession { 
	bIsFromInvite: boolean;
	bHandlingDisconnect: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): OnlineSessionClient;
	static Find(Outer: UObject, ResourceName: string): OnlineSessionClient;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): OnlineSessionClient;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineSessionClient;
	static C(Other: UObject): OnlineSessionClient;
}

declare type EMPMatchOutcome = string | symbol;
declare var EMPMatchOutcome = { None:'None',Quit:'Quit',Won:'Won',Lost:'Lost',Tied:'Tied',TimeExpired:'TimeExpired',First:'First',Second:'Second',Third:'Third',Fourth:'Fourth', };
declare class QuitMatchCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): QuitMatchCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): QuitMatchCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): QuitMatchCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): QuitMatchCallbackProxy;
	static QuitMatch(WorldContextObject: UObject,PlayerController: PlayerController,MatchID: string,Outcome: EMPMatchOutcome,TurnTimeoutInSeconds: number): QuitMatchCallbackProxy;
	static C(Other: UObject): QuitMatchCallbackProxy;
}

declare class ShowLoginUICallbackProxy extends BlueprintAsyncActionBase { 
	OnSuccess: UnrealEngineMulticastDelegate<(PlayerController: PlayerController) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(PlayerController: PlayerController) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ShowLoginUICallbackProxy;
	static Find(Outer: UObject, ResourceName: string): ShowLoginUICallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ShowLoginUICallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ShowLoginUICallbackProxy;
	static ShowExternalLoginUI(WorldContextObject: UObject,InPlayerController: PlayerController): ShowLoginUICallbackProxy;
	static C(Other: UObject): ShowLoginUICallbackProxy;
}

declare class TurnBasedBlueprintLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TurnBasedBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): TurnBasedBlueprintLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TurnBasedBlueprintLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TurnBasedBlueprintLibrary;
	static RegisterTurnBasedMatchInterfaceObject(WorldContextObject: UObject,PlayerController: PlayerController,UObject: UObject): void;
	static GetPlayerDisplayName(WorldContextObject: UObject,PlayerController: PlayerController,MatchID: string,PlayerIndex: number,PlayerDisplayName?: string): {PlayerDisplayName: string};
	static GetMyPlayerIndex(WorldContextObject: UObject,PlayerController: PlayerController,MatchID: string,PlayerIndex?: number): {PlayerIndex: number};
	static GetIsMyTurn(WorldContextObject: UObject,PlayerController: PlayerController,MatchID: string,bIsMyTurn?: boolean): {bIsMyTurn: boolean};
	static C(Other: UObject): TurnBasedBlueprintLibrary;
}

declare class K2Node_InAppPurchase extends K2Node_BaseAsyncTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_InAppPurchase;
	static Find(Outer: UObject, ResourceName: string): K2Node_InAppPurchase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_InAppPurchase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_InAppPurchase;
	static C(Other: UObject): K2Node_InAppPurchase;
}

declare class K2Node_InAppPurchaseQuery extends K2Node_BaseAsyncTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_InAppPurchaseQuery;
	static Find(Outer: UObject, ResourceName: string): K2Node_InAppPurchaseQuery;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_InAppPurchaseQuery;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_InAppPurchaseQuery;
	static C(Other: UObject): K2Node_InAppPurchaseQuery;
}

declare class K2Node_InAppPurchaseRestore extends K2Node_BaseAsyncTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_InAppPurchaseRestore;
	static Find(Outer: UObject, ResourceName: string): K2Node_InAppPurchaseRestore;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_InAppPurchaseRestore;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_InAppPurchaseRestore;
	static C(Other: UObject): K2Node_InAppPurchaseRestore;
}

declare class K2Node_LatentOnlineCall extends K2Node_BaseAsyncTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_LatentOnlineCall;
	static Find(Outer: UObject, ResourceName: string): K2Node_LatentOnlineCall;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_LatentOnlineCall;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LatentOnlineCall;
	static C(Other: UObject): K2Node_LatentOnlineCall;
}

declare class K2Node_LeaderboardFlush extends K2Node_BaseAsyncTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_LeaderboardFlush;
	static Find(Outer: UObject, ResourceName: string): K2Node_LeaderboardFlush;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_LeaderboardFlush;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LeaderboardFlush;
	static C(Other: UObject): K2Node_LeaderboardFlush;
}

declare class K2Node_LeaderboardQuery extends K2Node_BaseAsyncTask { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_LeaderboardQuery;
	static Find(Outer: UObject, ResourceName: string): K2Node_LeaderboardQuery;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_LeaderboardQuery;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LeaderboardQuery;
	static C(Other: UObject): K2Node_LeaderboardQuery;
}

declare class GearVRFunctionLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GearVRFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): GearVRFunctionLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GearVRFunctionLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GearVRFunctionLibrary;
	static SetCPUAndGPULevels(CPULevel: number,GPULevel: number): void;
	static IsPowerLevelStateThrottled(): boolean;
	static IsPowerLevelStateMinimum(): boolean;
	static GetTemperatureInCelsius(): number;
	static GetBatteryLevel(): number;
	static AreHeadPhonesPluggedIn(): boolean;
	static C(Other: UObject): GearVRFunctionLibrary;
}

declare type ETrackingStatus = string | symbol;
declare var ETrackingStatus = { NotTracked:'NotTracked',InertialOnly:'InertialOnly',Tracked:'Tracked', };
declare class MotionControllerComponent extends PrimitiveComponent { 
	PlayerIndex: number;
	Hand: EControllerHand;
	bDisableLowLatencyUpdate: boolean;
	CurrentTrackingStatus: ETrackingStatus;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MotionControllerComponent;
	static Find(Outer: UObject, ResourceName: string): MotionControllerComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MotionControllerComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MotionControllerComponent;
	IsTracked(): boolean;
	static C(Other: UObject): MotionControllerComponent;
}

declare class VRNotificationsComponent extends ActorComponent { 
	HMDRecenteredDelegate: UnrealEngineMulticastDelegate<() => void>;
	HMDLostDelegate: UnrealEngineMulticastDelegate<() => void>;
	HMDReconnectedDelegate: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VRNotificationsComponent;
	static Find(Outer: UObject, ResourceName: string): VRNotificationsComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VRNotificationsComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VRNotificationsComponent;
	static C(Other: UObject): VRNotificationsComponent;
}

declare class SceneCubemapCapturer extends UObject { 
	CaptureComponents: SceneCaptureComponent2D[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SceneCubemapCapturer;
	static Find(Outer: UObject, ResourceName: string): SceneCubemapCapturer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SceneCubemapCapturer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SceneCubemapCapturer;
	static C(Other: UObject): SceneCubemapCapturer;
}

declare class SourceCodeAccessSettings extends UObject { 
	PreferredAccessor: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SourceCodeAccessSettings;
	static Find(Outer: UObject, ResourceName: string): SourceCodeAccessSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SourceCodeAccessSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SourceCodeAccessSettings;
	static C(Other: UObject): SourceCodeAccessSettings;
}

declare class MovieSceneCaptureInterface extends Interface { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MovieSceneCaptureInterface;
	static Find(Outer: UObject, ResourceName: string): MovieSceneCaptureInterface;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MovieSceneCaptureInterface;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneCaptureInterface;
	static C(Other: UObject): MovieSceneCaptureInterface;
}

declare class MovieSceneCaptureProtocolSettings extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MovieSceneCaptureProtocolSettings;
	static Find(Outer: UObject, ResourceName: string): MovieSceneCaptureProtocolSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MovieSceneCaptureProtocolSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneCaptureProtocolSettings;
	static C(Other: UObject): MovieSceneCaptureProtocolSettings;
}

declare class CaptureProtocolID { 
	Identifier: string;
	clone() : CaptureProtocolID;
	static C(Other: UObject): CaptureProtocolID;
}

declare class CaptureResolution { 
	ResX: any;
	ResY: any;
	clone() : CaptureResolution;
	static C(Other: UObject): CaptureResolution;
}

declare class MovieSceneCaptureSettings { 
	OutputDirectory: DirectoryPath;
	bCreateTemporaryCopiesOfLevels: boolean;
	GameModeOverride: UnrealEngineClass;
	OutputFormat: string;
	bOverwriteExisting: boolean;
	bUseRelativeFrameNumbers: boolean;
	ZeroPadFrameNumbers: number;
	FrameRate: number;
	Resolution: CaptureResolution;
	bEnableTextureStreaming: boolean;
	bCinematicMode: boolean;
	bAllowMovement: boolean;
	bAllowTurning: boolean;
	bShowPlayer: boolean;
	bShowHUD: boolean;
	clone() : MovieSceneCaptureSettings;
	static C(Other: UObject): MovieSceneCaptureSettings;
}

declare class MovieSceneCapture extends UObject { 
	CaptureType: CaptureProtocolID;
	ProtocolSettings: MovieSceneCaptureProtocolSettings;
	Settings: MovieSceneCaptureSettings;
	bUseSeparateProcess: boolean;
	bCloseEditorWhenCaptureStarts: boolean;
	AdditionalCommandLineArguments: string;
	InheritedCommandLineArguments: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MovieSceneCapture;
	static Find(Outer: UObject, ResourceName: string): MovieSceneCapture;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MovieSceneCapture;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneCapture;
	static C(Other: UObject): MovieSceneCapture;
}

declare class AutomatedLevelSequenceCapture extends MovieSceneCapture { 
	bUseCustomStartFrame: boolean;
	StartFrame: number;
	bUseCustomEndFrame: boolean;
	EndFrame: number;
	WarmUpFrameCount: number;
	DelayBeforeWarmUp: number;
	BurnInOptions: LevelSequenceBurnInOptions;
	bWriteEditDecisionList: boolean;
	LevelSequenceAsset: StringAssetReference;
	LevelSequenceActor: any;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AutomatedLevelSequenceCapture;
	static Find(Outer: UObject, ResourceName: string): AutomatedLevelSequenceCapture;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AutomatedLevelSequenceCapture;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AutomatedLevelSequenceCapture;
	static C(Other: UObject): AutomatedLevelSequenceCapture;
}

declare class LevelCapture extends MovieSceneCapture { 
	bAutoStartCapture: boolean;
	PrerequisiteActorId: Guid;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LevelCapture;
	static Find(Outer: UObject, ResourceName: string): LevelCapture;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LevelCapture;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelCapture;
	static C(Other: UObject): LevelCapture;
}

declare class MovieSceneCaptureEnvironment extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MovieSceneCaptureEnvironment;
	static Find(Outer: UObject, ResourceName: string): MovieSceneCaptureEnvironment;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MovieSceneCaptureEnvironment;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneCaptureEnvironment;
	static GetCaptureFrameNumber(): number;
	static GetCaptureElapsedTime(): number;
	static C(Other: UObject): MovieSceneCaptureEnvironment;
}

declare class FrameGrabberProtocolSettings extends MovieSceneCaptureProtocolSettings { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): FrameGrabberProtocolSettings;
	static Find(Outer: UObject, ResourceName: string): FrameGrabberProtocolSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FrameGrabberProtocolSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FrameGrabberProtocolSettings;
	static C(Other: UObject): FrameGrabberProtocolSettings;
}

declare class BmpImageCaptureSettings extends MovieSceneCaptureProtocolSettings { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BmpImageCaptureSettings;
	static Find(Outer: UObject, ResourceName: string): BmpImageCaptureSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BmpImageCaptureSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BmpImageCaptureSettings;
	static C(Other: UObject): BmpImageCaptureSettings;
}

declare class ImageCaptureSettings extends FrameGrabberProtocolSettings { 
	CompressionQuality: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ImageCaptureSettings;
	static Find(Outer: UObject, ResourceName: string): ImageCaptureSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ImageCaptureSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ImageCaptureSettings;
	static C(Other: UObject): ImageCaptureSettings;
}

declare class CompositionGraphCapturePasses { 
	Value: string[];
	clone() : CompositionGraphCapturePasses;
	static C(Other: UObject): CompositionGraphCapturePasses;
}

declare type EHDRCaptureGamut = string | symbol;
declare var EHDRCaptureGamut = { HCGM_Rec709:'HCGM_Rec709',HCGM_P3DCI:'HCGM_P3DCI',HCGM_Rec2020:'HCGM_Rec2020',HCGM_ACES:'HCGM_ACES',HCGM_ACEScg:'HCGM_ACEScg', };
declare class CompositionGraphCaptureSettings extends MovieSceneCaptureProtocolSettings { 
	IncludeRenderPasses: CompositionGraphCapturePasses;
	bCaptureFramesInHDR: boolean;
	HDRCompressionQuality: number;
	CaptureGamut: EHDRCaptureGamut;
	PostProcessingMaterial: StringAssetReference;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): CompositionGraphCaptureSettings;
	static Find(Outer: UObject, ResourceName: string): CompositionGraphCaptureSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): CompositionGraphCaptureSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CompositionGraphCaptureSettings;
	static C(Other: UObject): CompositionGraphCaptureSettings;
}

declare class VideoCaptureSettings extends FrameGrabberProtocolSettings { 
	bUseCompression: boolean;
	CompressionQuality: number;
	VideoCodec: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VideoCaptureSettings;
	static Find(Outer: UObject, ResourceName: string): VideoCaptureSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VideoCaptureSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VideoCaptureSettings;
	static C(Other: UObject): VideoCaptureSettings;
}

declare class ActorRecordingSettings { 
	Settings: UObject[];
	clone() : ActorRecordingSettings;
	static C(Other: UObject): ActorRecordingSettings;
}

declare class AnimationRecordingSettings { 
	bRecordInWorldSpace: boolean;
	bRemoveRootAnimation: boolean;
	bAutoSaveAsset: boolean;
	SampleRate: number;
	Length: number;
	clone() : AnimationRecordingSettings;
	static C(Other: UObject): AnimationRecordingSettings;
}

declare class ActorRecording extends UObject { 
	ActorSettings: ActorRecordingSettings;
	bSpecifyTargetAnimation: boolean;
	TargetAnimation: any;
	AnimationSettings: AnimationRecordingSettings;
	bRecordToPossessable: boolean;
	ActorToRecord: any;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ActorRecording;
	static Find(Outer: UObject, ResourceName: string): ActorRecording;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ActorRecording;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorRecording;
	static C(Other: UObject): ActorRecording;
}

declare class MovieScene3DTransformSectionRecorderSettings extends UObject { 
	bRecordTransforms: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MovieScene3DTransformSectionRecorderSettings;
	static Find(Outer: UObject, ResourceName: string): MovieScene3DTransformSectionRecorderSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MovieScene3DTransformSectionRecorderSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieScene3DTransformSectionRecorderSettings;
	static C(Other: UObject): MovieScene3DTransformSectionRecorderSettings;
}

declare class SequenceRecorderBlueprintLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SequenceRecorderBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): SequenceRecorderBlueprintLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SequenceRecorderBlueprintLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SequenceRecorderBlueprintLibrary;
	static StopRecordingSequence(): void;
	static StartRecordingSequence(ActorsToRecord: Actor[]): void;
	static IsRecordingSequence(): boolean;
	static C(Other: UObject): SequenceRecorderBlueprintLibrary;
}

declare class SequenceRecorderActorFilter { 
	ActorClassesToRecord: UnrealEngineClass[];
	clone() : SequenceRecorderActorFilter;
	static C(Other: UObject): SequenceRecorderActorFilter;
}

declare class PropertiesToRecordForClass { 
	Class: UnrealEngineClass;
	Properties: string[];
	clone() : PropertiesToRecordForClass;
	static C(Other: UObject): PropertiesToRecordForClass;
}

declare class SettingsForActorClass { 
	Class: UnrealEngineClass;
	bRecordToPossessable: boolean;
	clone() : SettingsForActorClass;
	static C(Other: UObject): SettingsForActorClass;
}

declare class SequenceRecorderSettings extends UObject { 
	bCreateLevelSequence: boolean;
	bImmersiveMode: boolean;
	SequenceLength: number;
	RecordingDelay: number;
	SequenceName: string;
	SequenceRecordingBasePath: DirectoryPath;
	AnimationSubDirectory: string;
	bRecordNearbySpawnedActors: boolean;
	NearbyActorRecordingProximity: number;
	bRecordWorldSettingsActor: boolean;
	ActorFilter: SequenceRecorderActorFilter;
	LevelSequenceActorsToTrigger: any[];
	DefaultAnimationSettings: AnimationRecordingSettings;
	bRecordSequencerSpawnedActors: boolean;
	ClassesAndPropertiesToRecord: PropertiesToRecordForClass[];
	PerActorSettings: SettingsForActorClass[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SequenceRecorderSettings;
	static Find(Outer: UObject, ResourceName: string): SequenceRecorderSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SequenceRecorderSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SequenceRecorderSettings;
	static C(Other: UObject): SequenceRecorderSettings;
}

declare class SequencerSettingsContainer extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SequencerSettingsContainer;
	static Find(Outer: UObject, ResourceName: string): SequencerSettingsContainer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SequencerSettingsContainer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SequencerSettingsContainer;
	static C(Other: UObject): SequencerSettingsContainer;
}

declare type EAutoKeyMode = string | symbol;
declare var EAutoKeyMode = { KeyAll:'KeyAll',KeyAnimated:'KeyAnimated',KeyNone:'KeyNone', };
declare type EMovieSceneKeyInterpolation = string | symbol;
declare var EMovieSceneKeyInterpolation = { Auto:'Auto',User:'User',Break:'Break',Linear:'Linear',Constant:'Constant', };
declare type ESequencerSpawnPosition = string | symbol;
declare var ESequencerSpawnPosition = { SSP_Origin:'SSP_Origin',SSP_PlaceInFrontOfCamera:'SSP_PlaceInFrontOfCamera', };
declare type ESequencerZoomPosition = string | symbol;
declare var ESequencerZoomPosition = { SZP_CurrentTime:'SZP_CurrentTime',SZP_MousePosition:'SZP_MousePosition', };
declare class SequencerSettings extends UObject { 
	AutoKeyMode: EAutoKeyMode;
	bKeyAllEnabled: boolean;
	bKeyInterpPropertiesOnly: boolean;
	KeyInterpolation: EMovieSceneKeyInterpolation;
	SpawnPosition: ESequencerSpawnPosition;
	bCreateSpawnableCameras: boolean;
	bShowFrameNumbers: boolean;
	bShowRangeSlider: boolean;
	bIsSnapEnabled: boolean;
	TimeSnapInterval: number;
	bSnapKeyTimesToInterval: boolean;
	bSnapKeyTimesToKeys: boolean;
	bSnapSectionTimesToInterval: boolean;
	bSnapSectionTimesToSections: boolean;
	bSnapPlayTimeToKeys: boolean;
	bSnapPlayTimeToInterval: boolean;
	bSnapPlayTimeToDraggedKey: boolean;
	bSnapCurveValueToInterval: boolean;
	bLabelBrowserVisible: boolean;
	bRewindOnRecord: boolean;
	ZoomPosition: ESequencerZoomPosition;
	bAutoScrollEnabled: boolean;
	bShowCurveEditorCurveToolTips: boolean;
	bLinkCurveEditorTimeRange: boolean;
	bLooping: boolean;
	bKeepCursorInPlayRange: boolean;
	bKeepPlayRangeInSectionBounds: boolean;
	ZeroPadFrames: number;
	bShowCombinedKeyframes: boolean;
	bInfiniteKeyAreas: boolean;
	bShowChannelColors: boolean;
	bShowViewportTransportControls: boolean;
	bAllowPossessionOfPIEViewports: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SequencerSettings;
	static Find(Outer: UObject, ResourceName: string): SequencerSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SequencerSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SequencerSettings;
	static C(Other: UObject): SequencerSettings;
}

declare class MovieSceneToolsPropertyTrackSettings { 
	ComponentName: string;
	PropertyName: string;
	clone() : MovieSceneToolsPropertyTrackSettings;
	static C(Other: UObject): MovieSceneToolsPropertyTrackSettings;
}

declare class MovieSceneToolsFbxSettings { 
	FbxPropertyName: string;
	PropertyPath: MovieSceneToolsPropertyTrackSettings;
	clone() : MovieSceneToolsFbxSettings;
	static C(Other: UObject): MovieSceneToolsFbxSettings;
}

declare class MovieSceneToolsProjectSettings extends UObject { 
	DefaultStartTime: number;
	DefaultDuration: number;
	ShotDirectory: string;
	ShotPrefix: string;
	FirstShotNumber: any;
	ShotIncrement: any;
	ShotNumDigits: any;
	TakeNumDigits: any;
	FirstTakeNumber: any;
	TakeSeparator: string;
	FbxSettings: MovieSceneToolsFbxSettings[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MovieSceneToolsProjectSettings;
	static Find(Outer: UObject, ResourceName: string): MovieSceneToolsProjectSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MovieSceneToolsProjectSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneToolsProjectSettings;
	static C(Other: UObject): MovieSceneToolsProjectSettings;
}

declare type EThumbnailQuality = string | symbol;
declare var EThumbnailQuality = { Draft:'Draft',Normal:'Normal',Best:'Best', };
declare class MovieSceneUserThumbnailSettings extends UObject { 
	bDrawThumbnails: boolean;
	bDrawSingleThumbnails: boolean;
	ThumbnailSize: IntPoint;
	Quality: EThumbnailQuality;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MovieSceneUserThumbnailSettings;
	static Find(Outer: UObject, ResourceName: string): MovieSceneUserThumbnailSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MovieSceneUserThumbnailSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneUserThumbnailSettings;
	static C(Other: UObject): MovieSceneUserThumbnailSettings;
}

declare type ELocalizationTargetConflictStatus = string | symbol;
declare var ELocalizationTargetConflictStatus = { Unknown:'Unknown',ConflictsPresent:'ConflictsPresent',Clear:'Clear', };
declare class GatherTextSearchDirectory { 
	Path: string;
	clone() : GatherTextSearchDirectory;
	static C(Other: UObject): GatherTextSearchDirectory;
}

declare class GatherTextExcludePath { 
	Pattern: string;
	clone() : GatherTextExcludePath;
	static C(Other: UObject): GatherTextExcludePath;
}

declare class GatherTextFileExtension { 
	Pattern: string;
	clone() : GatherTextFileExtension;
	static C(Other: UObject): GatherTextFileExtension;
}

declare class GatherTextFromTextFilesConfiguration { 
	IsEnabled: boolean;
	SearchDirectories: GatherTextSearchDirectory[];
	ExcludePathWildcards: GatherTextExcludePath[];
	FileExtensions: GatherTextFileExtension[];
	ShouldGatherFromEditorOnlyData: boolean;
	clone() : GatherTextFromTextFilesConfiguration;
	static C(Other: UObject): GatherTextFromTextFilesConfiguration;
}

declare class GatherTextIncludePath { 
	Pattern: string;
	clone() : GatherTextIncludePath;
	static C(Other: UObject): GatherTextIncludePath;
}

declare class GatherTextFromPackagesConfiguration { 
	IsEnabled: boolean;
	IncludePathWildcards: GatherTextIncludePath[];
	ExcludePathWildcards: GatherTextExcludePath[];
	FileExtensions: GatherTextFileExtension[];
	ShouldGatherFromEditorOnlyData: boolean;
	SkipGatherCache: boolean;
	clone() : GatherTextFromPackagesConfiguration;
	static C(Other: UObject): GatherTextFromPackagesConfiguration;
}

declare class MetaDataKeyName { 
	Name: string;
	clone() : MetaDataKeyName;
	static C(Other: UObject): MetaDataKeyName;
}

declare class MetaDataTextKeyPattern { 
	Pattern: string;
	clone() : MetaDataTextKeyPattern;
	static C(Other: UObject): MetaDataTextKeyPattern;
}

declare class MetaDataKeyGatherSpecification { 
	MetaDataKey: MetaDataKeyName;
	TextNamespace: string;
	TextKeyPattern: MetaDataTextKeyPattern;
	clone() : MetaDataKeyGatherSpecification;
	static C(Other: UObject): MetaDataKeyGatherSpecification;
}

declare class GatherTextFromMetaDataConfiguration { 
	IsEnabled: boolean;
	IncludePathWildcards: GatherTextIncludePath[];
	ExcludePathWildcards: GatherTextExcludePath[];
	KeySpecifications: MetaDataKeyGatherSpecification[];
	ShouldGatherFromEditorOnlyData: boolean;
	clone() : GatherTextFromMetaDataConfiguration;
	static C(Other: UObject): GatherTextFromMetaDataConfiguration;
}

declare class LocalizationExportingSettings { 
	ShouldPersistCommentsOnExport: boolean;
	ShouldAddSourceLocationsAsComments: boolean;
	clone() : LocalizationExportingSettings;
	static C(Other: UObject): LocalizationExportingSettings;
}

declare class LocalizationImportDialogueSettings { 
	RawAudioPath: DirectoryPath;
	ImportedDialogueFolder: string;
	bImportNativeAsSource: boolean;
	clone() : LocalizationImportDialogueSettings;
	static C(Other: UObject): LocalizationImportDialogueSettings;
}

declare class CultureStatistics { 
	CultureName: string;
	WordCount: any;
	clone() : CultureStatistics;
	static C(Other: UObject): CultureStatistics;
}

declare class LocalizationTargetSettings { 
	Name: string;
	Guid: Guid;
	ConflictStatus: ELocalizationTargetConflictStatus;
	TargetDependencies: Guid[];
	AdditionalManifestDependencies: FilePath[];
	RequiredModuleNames: string[];
	GatherFromTextFiles: GatherTextFromTextFilesConfiguration;
	GatherFromPackages: GatherTextFromPackagesConfiguration;
	GatherFromMetaData: GatherTextFromMetaDataConfiguration;
	ExportSettings: LocalizationExportingSettings;
	ImportDialogueSettings: LocalizationImportDialogueSettings;
	NativeCultureIndex: number;
	SupportedCulturesStatistics: CultureStatistics[];
	clone() : LocalizationTargetSettings;
	static C(Other: UObject): LocalizationTargetSettings;
}

declare class LocalizationTarget extends UObject { 
	Settings: LocalizationTargetSettings;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LocalizationTarget;
	static Find(Outer: UObject, ResourceName: string): LocalizationTarget;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LocalizationTarget;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LocalizationTarget;
	static C(Other: UObject): LocalizationTarget;
}

declare class LocalizationTargetSet extends UObject { 
	TargetObjects: LocalizationTarget[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LocalizationTargetSet;
	static Find(Outer: UObject, ResourceName: string): LocalizationTargetSet;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LocalizationTargetSet;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LocalizationTargetSet;
	static C(Other: UObject): LocalizationTargetSet;
}

declare class LocalizationSettings extends UObject { 
	EngineTargetSet: LocalizationTargetSet;
	EngineTargetsSettings: LocalizationTargetSettings[];
	GameTargetSet: LocalizationTargetSet;
	GameTargetsSettings: LocalizationTargetSettings[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LocalizationSettings;
	static Find(Outer: UObject, ResourceName: string): LocalizationSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LocalizationSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LocalizationSettings;
	static C(Other: UObject): LocalizationSettings;
}

declare class InternationalizationSettingsModel extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InternationalizationSettingsModel;
	static Find(Outer: UObject, ResourceName: string): InternationalizationSettingsModel;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InternationalizationSettingsModel;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InternationalizationSettingsModel;
	static C(Other: UObject): InternationalizationSettingsModel;
}

declare class PropertyConfigFileDisplayRow extends UObject { 
	ConfigFileName: string;
	ExternalProperty: Property;
	bIsFileWritable: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PropertyConfigFileDisplayRow;
	static Find(Outer: UObject, ResourceName: string): PropertyConfigFileDisplayRow;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PropertyConfigFileDisplayRow;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyConfigFileDisplayRow;
	static C(Other: UObject): PropertyConfigFileDisplayRow;
}

declare class ConfigHierarchyPropertyView extends UObject { 
	EditProperty: any;
	ConfigFilePropertyObjects: PropertyConfigFileDisplayRow[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ConfigHierarchyPropertyView;
	static Find(Outer: UObject, ResourceName: string): ConfigHierarchyPropertyView;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ConfigHierarchyPropertyView;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ConfigHierarchyPropertyView;
	static C(Other: UObject): ConfigHierarchyPropertyView;
}

declare class K2Node_CreateDragDropOperation extends K2Node_ConstructObjectFromClass { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_CreateDragDropOperation;
	static Find(Outer: UObject, ResourceName: string): K2Node_CreateDragDropOperation;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_CreateDragDropOperation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_CreateDragDropOperation;
	static C(Other: UObject): K2Node_CreateDragDropOperation;
}

declare class K2Node_CreateWidget extends K2Node_ConstructObjectFromClass { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_CreateWidget;
	static Find(Outer: UObject, ResourceName: string): K2Node_CreateWidget;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_CreateWidget;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_CreateWidget;
	static C(Other: UObject): K2Node_CreateWidget;
}

declare class SlateVectorArtDataFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SlateVectorArtDataFactory;
	static Find(Outer: UObject, ResourceName: string): SlateVectorArtDataFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SlateVectorArtDataFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SlateVectorArtDataFactory;
	static C(Other: UObject): SlateVectorArtDataFactory;
}

declare class EditorPropertyPathSegment { 
	Struct: Struct;
	MemberName: string;
	MemberGuid: Guid;
	IsProperty: boolean;
	clone() : EditorPropertyPathSegment;
	static C(Other: UObject): EditorPropertyPathSegment;
}

declare class EditorPropertyPath { 
	Segments: EditorPropertyPathSegment[];
	clone() : EditorPropertyPath;
	static C(Other: UObject): EditorPropertyPath;
}

declare class DelegateEditorBinding { 
	ObjectName: string;
	PropertyName: string;
	FunctionName: string;
	SourceProperty: string;
	SourcePath: EditorPropertyPath;
	MemberGuid: Guid;
	Kind: EBindingKind;
	clone() : DelegateEditorBinding;
	static C(Other: UObject): DelegateEditorBinding;
}

declare class WidgetAnimation_DEPRECATED { 
	MovieScene: MovieScene;
	AnimationBindings: WidgetAnimationBinding[];
	clone() : WidgetAnimation_DEPRECATED;
	static C(Other: UObject): WidgetAnimation_DEPRECATED;
}

declare class WidgetBlueprint extends Blueprint { 
	WidgetTree: WidgetTree;
	Bindings: DelegateEditorBinding[];
	AnimationData: WidgetAnimation_DEPRECATED[];
	Animations: WidgetAnimation[];
	PaletteCategory: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WidgetBlueprint;
	static Find(Outer: UObject, ResourceName: string): WidgetBlueprint;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): WidgetBlueprint;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WidgetBlueprint;
	static C(Other: UObject): WidgetBlueprint;
}

declare class WidgetBlueprintFactory extends Factory { 
	BlueprintType: EBlueprintType;
	ParentClass: UnrealEngineClass;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WidgetBlueprintFactory;
	static Find(Outer: UObject, ResourceName: string): WidgetBlueprintFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): WidgetBlueprintFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WidgetBlueprintFactory;
	static C(Other: UObject): WidgetBlueprintFactory;
}

declare class WidgetDesignerSettings extends UObject { 
	GridSnapEnabled: boolean;
	GridSnapSize: number;
	bLockToPanelOnDragByDefault: boolean;
	bShowOutlines: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WidgetDesignerSettings;
	static Find(Outer: UObject, ResourceName: string): WidgetDesignerSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): WidgetDesignerSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WidgetDesignerSettings;
	static C(Other: UObject): WidgetDesignerSettings;
}

declare class WidgetGraphSchema extends EdGraphSchema_K2 { 
	NAME_NeverAsPin: string;
	NAME_PinHiddenByDefault: string;
	NAME_PinShownByDefault: string;
	NAME_AlwaysAsPin: string;
	NAME_OnEvaluate: string;
	DefaultEvaluationHandlerName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WidgetGraphSchema;
	static Find(Outer: UObject, ResourceName: string): WidgetGraphSchema;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): WidgetGraphSchema;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WidgetGraphSchema;
	static C(Other: UObject): WidgetGraphSchema;
}

declare class WidgetSlotPair extends UObject { 
	WidgetName: string;
	SlotPropertyNames: string[];
	SlotPropertyValues: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WidgetSlotPair;
	static Find(Outer: UObject, ResourceName: string): WidgetSlotPair;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): WidgetSlotPair;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WidgetSlotPair;
	static C(Other: UObject): WidgetSlotPair;
}

declare class NiagaraActor extends Actor { 
	NiagaraComponent: NiagaraComponent;
	SpriteComponent: BillboardComponent;
	ArrowComponent: ArrowComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NiagaraActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraActor;
	static C(Other: UObject): NiagaraActor;
}

declare class NiagaraMeshRendererProperties extends NiagaraEffectRendererProperties { 
	ParticleMesh: StaticMesh;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NiagaraMeshRendererProperties;
	static Find(Outer: UObject, ResourceName: string): NiagaraMeshRendererProperties;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NiagaraMeshRendererProperties;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraMeshRendererProperties;
	static C(Other: UObject): NiagaraMeshRendererProperties;
}

declare class NiagaraRibbonRendererProperties extends NiagaraEffectRendererProperties { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NiagaraRibbonRendererProperties;
	static Find(Outer: UObject, ResourceName: string): NiagaraRibbonRendererProperties;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NiagaraRibbonRendererProperties;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraRibbonRendererProperties;
	static C(Other: UObject): NiagaraRibbonRendererProperties;
}

declare class NiagaraSpriteRendererProperties extends NiagaraEffectRendererProperties { 
	SubImageInfo: Vector2D;
	bBVelocityAligned: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NiagaraSpriteRendererProperties;
	static Find(Outer: UObject, ResourceName: string): NiagaraSpriteRendererProperties;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NiagaraSpriteRendererProperties;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraSpriteRendererProperties;
	static C(Other: UObject): NiagaraSpriteRendererProperties;
}

declare class NiagaraEventReceiverEmitterAction_SpawnParticles extends NiagaraEventReceiverEmitterAction { 
	NumParticles: any;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NiagaraEventReceiverEmitterAction_SpawnParticles;
	static Find(Outer: UObject, ResourceName: string): NiagaraEventReceiverEmitterAction_SpawnParticles;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NiagaraEventReceiverEmitterAction_SpawnParticles;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraEventReceiverEmitterAction_SpawnParticles;
	static C(Other: UObject): NiagaraEventReceiverEmitterAction_SpawnParticles;
}

declare class NiagaraFunctionLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NiagaraFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): NiagaraFunctionLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NiagaraFunctionLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraFunctionLibrary;
	static SpawnEffectAttached(EffectTemplate: NiagaraEffect,AttachToComponent: SceneComponent,AttachPointName: string,Location: Vector,Rotation: Rotator,LocationType: EAttachLocation,bAutoDestroy: boolean): NiagaraComponent;
	static SpawnEffectAtLocation(WorldContextObject: UObject,EffectTemplate: NiagaraEffect,Location: Vector,Rotation: Rotator,bAutoDestroy: boolean): NiagaraComponent;
	static SetUpdateScriptConstant(Component: NiagaraComponent,EmitterName: string,ConstantName: string,Value: Vector): void;
	static C(Other: UObject): NiagaraFunctionLibrary;
}

declare class NiagaraSequence extends MovieSceneSequence { 
	MovieScene: MovieScene;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): NiagaraSequence;
	static Find(Outer: UObject, ResourceName: string): NiagaraSequence;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): NiagaraSequence;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NiagaraSequence;
	static C(Other: UObject): NiagaraSequence;
}

declare class AutomationPerformaceHelper extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AutomationPerformaceHelper;
	static Find(Outer: UObject, ResourceName: string): AutomationPerformaceHelper;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AutomationPerformaceHelper;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AutomationPerformaceHelper;
	WriteLogFile(CaptureDir: string,CaptureExtension: string): void;
	TriggerGPUTraceIfRecordFallsBelowBudget(): void;
	Tick(DeltaSeconds: number): void;
	StopCPUProfiling(): void;
	StartCPUProfiling(): void;
	Sample(DeltaSeconds: number): void;
	OnBeginTests(): void;
	OnAllTestsComplete(): void;
	IsRecording(): boolean;
	IsCurrentRecordWithinRenderThreadBudget(): boolean;
	IsCurrentRecordWithinGPUBudget(): boolean;
	IsCurrentRecordWithinGameThreadBudget(): boolean;
	EndStatsFile(): void;
	EndRecordingBaseline(): void;
	EndRecording(): void;
	BeginStatsFile(RecordName: string): void;
	BeginRecordingBaseline(RecordName: string): void;
	BeginRecording(RecordName: string,InGPUBudget: number,InRenderThreadBudget: number,InGameThreadBudget: number): void;
	static C(Other: UObject): AutomationPerformaceHelper;
}

declare type EFunctionalTestResult = string | symbol;
declare var EFunctionalTestResult = { Invalid:'Invalid',Error:'Error',Running:'Running',Failed:'Failed',Succeeded:'Succeeded', };
declare class FuncTestRenderingComponent extends PrimitiveComponent { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): FuncTestRenderingComponent;
	static Find(Outer: UObject, ResourceName: string): FuncTestRenderingComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FuncTestRenderingComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FuncTestRenderingComponent;
	static C(Other: UObject): FuncTestRenderingComponent;
}

declare class FunctionalTest extends Actor { 
	SpriteComponent: BillboardComponent;
	Result: EFunctionalTestResult;
	TimesUpResult: EFunctionalTestResult;
	TimeLimit: number;
	TimesUpMessage: string;
	ObservationPoint: Actor;
	OnTestStart: UnrealEngineMulticastDelegate<() => void>;
	OnTestFinished: UnrealEngineMulticastDelegate<() => void>;
	AutoDestroyActors: Actor[];
	RandomNumbersStream: RandomStream;
	Description: string;
	RenderComp: FuncTestRenderingComponent;
	bIsEnabled: boolean;
	bIsRunning: boolean;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FunctionalTest;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FunctionalTest;
	SetTimeLimit(NewTimeLimit: number,ResultWhenTimeRunsOut: EFunctionalTestResult): void;
	RegisterAutoDestroyActor(ActorToAutoDestroy: Actor): void;
	OnWantsReRunCheck(): boolean;
	OnAdditionalTestFinishedMessageRequest(TestResult: EFunctionalTestResult): string;
	LogMessage(Message: string): void;
	GetCurrentRerunReason(): string;
	FinishTest(TestResult: EFunctionalTestResult,Message: string): void;
	DebugGatherRelevantActors(): Actor[];
	AddRerun(Reason: string): void;
	static C(Other: UObject): FunctionalTest;
}

declare class GenericTeamId { 
	TeamID: number;
	clone() : GenericTeamId;
	static C(Other: UObject): GenericTeamId;
}

declare class AITestSpawnInfo { 
	PawnClass: UnrealEngineClass;
	ControllerClass: UnrealEngineClass;
	TeamID: GenericTeamId;
	BehaviorTree: BehaviorTree;
	SpawnLocation: Actor;
	NumberToSpawn: number;
	SpawnDelay: number;
	PreSpawnDelay: number;
	clone() : AITestSpawnInfo;
	static C(Other: UObject): AITestSpawnInfo;
}

declare class AITestSpawnSet { 
	SpawnInfoContainer: AITestSpawnInfo[];
	Name: string;
	bEnabled: boolean;
	FallbackSpawnLocation: Actor;
	clone() : AITestSpawnSet;
	static C(Other: UObject): AITestSpawnSet;
}

declare class PendingDelayedSpawn extends AITestSpawnInfo { 
	clone() : PendingDelayedSpawn;
	static C(Other: UObject): PendingDelayedSpawn;
}

declare class FunctionalAITest extends FunctionalTest { 
	SpawnSets: AITestSpawnSet[];
	SpawnLocationRandomizationRange: number;
	SpawnedPawns: Pawn[];
	PendingDelayedSpawns: PendingDelayedSpawn[];
	OnAISpawned: UnrealEngineMulticastDelegate<(Controller: AIController, Pawn: Pawn) => void>;
	OnAllAISPawned: UnrealEngineMulticastDelegate<() => void>;
	bWaitForNavMesh: boolean;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FunctionalAITest;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FunctionalAITest;
	IsOneOfSpawnedPawns(Actor: Actor): boolean;
	static C(Other: UObject): FunctionalAITest;
}

declare class FunctionalTestingManager extends BlueprintFunctionLibrary { 
	TestsLeft: FunctionalTest[];
	AllTests: FunctionalTest[];
	OnSetupTests: UnrealEngineMulticastDelegate<() => void>;
	OnTestsComplete: UnrealEngineMulticastDelegate<() => void>;
	OnTestsBegin: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): FunctionalTestingManager;
	static Find(Outer: UObject, ResourceName: string): FunctionalTestingManager;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FunctionalTestingManager;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FunctionalTestingManager;
	static RunAllFunctionalTests(WorldContext: UObject,bNewLog: boolean,bRunLooped: boolean,bWaitForNavigationBuildFinish: boolean,FailedTestsReproString: string): boolean;
	static C(Other: UObject): FunctionalTestingManager;
}

declare class PhasedAutomationActorBase extends Actor { 
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PhasedAutomationActorBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PhasedAutomationActorBase;
	OnFunctionalTestingComplete(): void;
	OnFunctionalTestingBegin(): void;
	static C(Other: UObject): PhasedAutomationActorBase;
}

declare class AIGraph extends EdGraph { 
	GraphVersion: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AIGraph;
	static Find(Outer: UObject, ResourceName: string): AIGraph;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AIGraph;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AIGraph;
	static C(Other: UObject): AIGraph;
}

declare class GraphNodeClassData { 
	AssetName: string;
	GeneratedClassPackage: string;
	ClassName: string;
	Category: string;
	clone() : GraphNodeClassData;
	static C(Other: UObject): GraphNodeClassData;
}

declare class AIGraphNode extends EdGraphNode { 
	ClassData: GraphNodeClassData;
	NodeInstance: UObject;
	ParentNode: AIGraphNode;
	SubNodes: AIGraphNode[];
	CopySubNodeIndex: number;
	bIsReadOnly: boolean;
	bIsSubNode: boolean;
	ErrorMessage: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AIGraphNode;
	static Find(Outer: UObject, ResourceName: string): AIGraphNode;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AIGraphNode;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AIGraphNode;
	static C(Other: UObject): AIGraphNode;
}

declare class AIGraphSchema extends EdGraphSchema { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AIGraphSchema;
	static Find(Outer: UObject, ResourceName: string): AIGraphSchema;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AIGraphSchema;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AIGraphSchema;
	static C(Other: UObject): AIGraphSchema;
}

declare class BehaviorTreeDecoratorGraph extends EdGraph { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeDecoratorGraph;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeDecoratorGraph;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeDecoratorGraph;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeDecoratorGraph;
	static C(Other: UObject): BehaviorTreeDecoratorGraph;
}

declare class BehaviorTreeDecoratorGraphNode extends EdGraphNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeDecoratorGraphNode;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeDecoratorGraphNode;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeDecoratorGraphNode;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeDecoratorGraphNode;
	static C(Other: UObject): BehaviorTreeDecoratorGraphNode;
}

declare class BehaviorTreeEditorTypes extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeEditorTypes;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeEditorTypes;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeEditorTypes;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeEditorTypes;
	static C(Other: UObject): BehaviorTreeEditorTypes;
}

declare class BehaviorTreeDecoratorGraphNode_Decorator extends BehaviorTreeDecoratorGraphNode { 
	NodeInstance: UObject;
	ClassData: GraphNodeClassData;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeDecoratorGraphNode_Decorator;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeDecoratorGraphNode_Decorator;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeDecoratorGraphNode_Decorator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeDecoratorGraphNode_Decorator;
	static C(Other: UObject): BehaviorTreeDecoratorGraphNode_Decorator;
}

declare type EDecoratorLogicMode = string | symbol;
declare var EDecoratorLogicMode = { Sink:'Sink',And:'And',Or:'Or',Not:'Not', };
declare class BehaviorTreeDecoratorGraphNode_Logic extends BehaviorTreeDecoratorGraphNode { 
	LogicMode: EDecoratorLogicMode;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeDecoratorGraphNode_Logic;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeDecoratorGraphNode_Logic;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeDecoratorGraphNode_Logic;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeDecoratorGraphNode_Logic;
	static C(Other: UObject): BehaviorTreeDecoratorGraphNode_Logic;
}

declare class BehaviorTreeFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeFactory;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeFactory;
	static C(Other: UObject): BehaviorTreeFactory;
}

declare class BehaviorTreeGraph extends AIGraph { 
	ModCounter: number;
	bIsUsingModCounter: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraph;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraph;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraph;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraph;
	static C(Other: UObject): BehaviorTreeGraph;
}

declare class BehaviorTreeGraphNode extends AIGraphNode { 
	Decorators: BehaviorTreeGraphNode[];
	Services: BehaviorTreeGraphNode[];
	bInjectedNode: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode;
	static C(Other: UObject): BehaviorTreeGraphNode;
}

declare class BehaviorTreeGraphNode_Composite extends BehaviorTreeGraphNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_Composite;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_Composite;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode_Composite;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Composite;
	static C(Other: UObject): BehaviorTreeGraphNode_Composite;
}

declare class BehaviorTreeGraphNode_SimpleParallel extends BehaviorTreeGraphNode_Composite { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_SimpleParallel;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_SimpleParallel;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode_SimpleParallel;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_SimpleParallel;
	static C(Other: UObject): BehaviorTreeGraphNode_SimpleParallel;
}

declare class BehaviorTreeGraphNode_CompositeDecorator extends BehaviorTreeGraphNode { 
	BoundGraph: EdGraph;
	CompositeName: string;
	bShowOperations: boolean;
	bCanAbortFlow: boolean;
	ParentNodeInstance: BTCompositeNode;
	CachedDescription: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_CompositeDecorator;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_CompositeDecorator;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode_CompositeDecorator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_CompositeDecorator;
	static C(Other: UObject): BehaviorTreeGraphNode_CompositeDecorator;
}

declare class BehaviorTreeGraphNode_Decorator extends BehaviorTreeGraphNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_Decorator;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_Decorator;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode_Decorator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Decorator;
	static C(Other: UObject): BehaviorTreeGraphNode_Decorator;
}

declare class BehaviorTreeGraphNode_Root extends BehaviorTreeGraphNode { 
	BlackboardAsset: BlackboardData;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_Root;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_Root;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode_Root;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Root;
	static C(Other: UObject): BehaviorTreeGraphNode_Root;
}

declare class BehaviorTreeGraphNode_Service extends BehaviorTreeGraphNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_Service;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_Service;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode_Service;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Service;
	static C(Other: UObject): BehaviorTreeGraphNode_Service;
}

declare class BehaviorTreeGraphNode_Task extends BehaviorTreeGraphNode { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_Task;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_Task;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode_Task;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Task;
	static C(Other: UObject): BehaviorTreeGraphNode_Task;
}

declare class BehaviorTreeGraphNode_SubtreeTask extends BehaviorTreeGraphNode_Task { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BehaviorTreeGraphNode_SubtreeTask;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_SubtreeTask;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BehaviorTreeGraphNode_SubtreeTask;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_SubtreeTask;
	static C(Other: UObject): BehaviorTreeGraphNode_SubtreeTask;
}

declare class BlackboardDataFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): BlackboardDataFactory;
	static Find(Outer: UObject, ResourceName: string): BlackboardDataFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BlackboardDataFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BlackboardDataFactory;
	static C(Other: UObject): BlackboardDataFactory;
}

declare class EdGraphSchema_BehaviorTree extends AIGraphSchema { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EdGraphSchema_BehaviorTree;
	static Find(Outer: UObject, ResourceName: string): EdGraphSchema_BehaviorTree;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EdGraphSchema_BehaviorTree;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphSchema_BehaviorTree;
	static C(Other: UObject): EdGraphSchema_BehaviorTree;
}

declare class EdGraphSchema_BehaviorTreeDecorator extends EdGraphSchema { 
	PC_Boolean: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EdGraphSchema_BehaviorTreeDecorator;
	static Find(Outer: UObject, ResourceName: string): EdGraphSchema_BehaviorTreeDecorator;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EdGraphSchema_BehaviorTreeDecorator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphSchema_BehaviorTreeDecorator;
	static C(Other: UObject): EdGraphSchema_BehaviorTreeDecorator;
}

declare class K2Node_LatentGameplayTaskCall extends K2Node_BaseAsyncTask { 
	SpawnParamPins: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): K2Node_LatentGameplayTaskCall;
	static Find(Outer: UObject, ResourceName: string): K2Node_LatentGameplayTaskCall;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): K2Node_LatentGameplayTaskCall;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LatentGameplayTaskCall;
	static C(Other: UObject): K2Node_LatentGameplayTaskCall;
}

declare class GizmoHandle { 
	clone() : GizmoHandle;
	static C(Other: UObject): GizmoHandle;
}

declare class GizmoHandleGroup extends SceneComponent { 
	GizmoMaterial: MaterialInterface;
	TranslucentGizmoMaterial: MaterialInterface;
	Handles: GizmoHandle[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GizmoHandleGroup;
	static Find(Outer: UObject, ResourceName: string): GizmoHandleGroup;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GizmoHandleGroup;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GizmoHandleGroup;
	static C(Other: UObject): GizmoHandleGroup;
}

declare class ViewportInteractor extends UObject { 
	WorldInteraction: ViewportWorldInteraction;
	OtherInteractor: ViewportInteractor;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ViewportInteractor;
	static Find(Outer: UObject, ResourceName: string): ViewportInteractor;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ViewportInteractor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ViewportInteractor;
	static C(Other: UObject): ViewportInteractor;
}

declare class ViewportWorldInteraction extends UObject { 
	Interactors: ViewportInteractor[];
	TransformGizmoActor: BaseTransformGizmo;
	SnapGridActor: Actor;
	SnapGridMeshComponent: StaticMeshComponent;
	SnapGridMID: MaterialInstanceDynamic;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ViewportWorldInteraction;
	static Find(Outer: UObject, ResourceName: string): ViewportWorldInteraction;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ViewportWorldInteraction;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ViewportWorldInteraction;
	static C(Other: UObject): ViewportWorldInteraction;
}

declare class BaseTransformGizmo extends Actor { 
	SceneComponent: SceneComponent;
	GizmoMaterial: MaterialInterface;
	TranslucentGizmoMaterial: MaterialInterface;
	AllHandleGroups: GizmoHandleGroup[];
	WorldInteraction: ViewportWorldInteraction;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): BaseTransformGizmo;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BaseTransformGizmo;
	static C(Other: UObject): BaseTransformGizmo;
}

declare class AxisGizmoHandleGroup extends GizmoHandleGroup { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AxisGizmoHandleGroup;
	static Find(Outer: UObject, ResourceName: string): AxisGizmoHandleGroup;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AxisGizmoHandleGroup;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AxisGizmoHandleGroup;
	static C(Other: UObject): AxisGizmoHandleGroup;
}

declare class UniformScaleGizmoHandleGroup extends GizmoHandleGroup { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): UniformScaleGizmoHandleGroup;
	static Find(Outer: UObject, ResourceName: string): UniformScaleGizmoHandleGroup;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): UniformScaleGizmoHandleGroup;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UniformScaleGizmoHandleGroup;
	static C(Other: UObject): UniformScaleGizmoHandleGroup;
}

declare class PivotTranslationGizmoHandleGroup extends AxisGizmoHandleGroup { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PivotTranslationGizmoHandleGroup;
	static Find(Outer: UObject, ResourceName: string): PivotTranslationGizmoHandleGroup;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PivotTranslationGizmoHandleGroup;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PivotTranslationGizmoHandleGroup;
	static C(Other: UObject): PivotTranslationGizmoHandleGroup;
}

declare class PivotScaleGizmoHandleGroup extends AxisGizmoHandleGroup { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PivotScaleGizmoHandleGroup;
	static Find(Outer: UObject, ResourceName: string): PivotScaleGizmoHandleGroup;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PivotScaleGizmoHandleGroup;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PivotScaleGizmoHandleGroup;
	static C(Other: UObject): PivotScaleGizmoHandleGroup;
}

declare class PivotPlaneTranslationGizmoHandleGroup extends AxisGizmoHandleGroup { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PivotPlaneTranslationGizmoHandleGroup;
	static Find(Outer: UObject, ResourceName: string): PivotPlaneTranslationGizmoHandleGroup;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PivotPlaneTranslationGizmoHandleGroup;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PivotPlaneTranslationGizmoHandleGroup;
	static C(Other: UObject): PivotPlaneTranslationGizmoHandleGroup;
}

declare class PivotRotationGizmoHandleGroup extends AxisGizmoHandleGroup { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PivotRotationGizmoHandleGroup;
	static Find(Outer: UObject, ResourceName: string): PivotRotationGizmoHandleGroup;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PivotRotationGizmoHandleGroup;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PivotRotationGizmoHandleGroup;
	static C(Other: UObject): PivotRotationGizmoHandleGroup;
}

declare class StretchGizmoHandleGroup extends GizmoHandleGroup { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): StretchGizmoHandleGroup;
	static Find(Outer: UObject, ResourceName: string): StretchGizmoHandleGroup;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): StretchGizmoHandleGroup;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StretchGizmoHandleGroup;
	static C(Other: UObject): StretchGizmoHandleGroup;
}

declare class PivotTransformGizmo extends BaseTransformGizmo { 
	UniformScaleGizmoHandleGroup: UniformScaleGizmoHandleGroup;
	TranslationGizmoHandleGroup: PivotTranslationGizmoHandleGroup;
	ScaleGizmoHandleGroup: PivotScaleGizmoHandleGroup;
	PlaneTranslationGizmoHandleGroup: PivotPlaneTranslationGizmoHandleGroup;
	RotationGizmoHandleGroup: PivotRotationGizmoHandleGroup;
	StretchGizmoHandleGroup: StretchGizmoHandleGroup;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PivotTransformGizmo;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PivotTransformGizmo;
	static C(Other: UObject): PivotTransformGizmo;
}

declare class ViewportDragOperation extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ViewportDragOperation;
	static Find(Outer: UObject, ResourceName: string): ViewportDragOperation;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ViewportDragOperation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ViewportDragOperation;
	static C(Other: UObject): ViewportDragOperation;
}

declare class ViewportDragOperationComponent extends ActorComponent { 
	DragOperation: ViewportDragOperation;
	DragOperationSubclass: UnrealEngineClass;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ViewportDragOperationComponent;
	static Find(Outer: UObject, ResourceName: string): ViewportDragOperationComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ViewportDragOperationComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ViewportDragOperationComponent;
	static C(Other: UObject): ViewportDragOperationComponent;
}

declare class ViewportInteractableInterface extends Interface { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ViewportInteractableInterface;
	static Find(Outer: UObject, ResourceName: string): ViewportInteractableInterface;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ViewportInteractableInterface;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ViewportInteractableInterface;
	static C(Other: UObject): ViewportInteractableInterface;
}

declare class MouseCursorInteractor extends ViewportInteractor { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MouseCursorInteractor;
	static Find(Outer: UObject, ResourceName: string): MouseCursorInteractor;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MouseCursorInteractor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MouseCursorInteractor;
	static C(Other: UObject): MouseCursorInteractor;
}

declare class ViewportWorldInteractionInterface extends Interface { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ViewportWorldInteractionInterface;
	static Find(Outer: UObject, ResourceName: string): ViewportWorldInteractionInterface;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ViewportWorldInteractionInterface;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ViewportWorldInteractionInterface;
	static C(Other: UObject): ViewportWorldInteractionInterface;
}

declare class VREditorBaseActor extends Actor { 
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VREditorBaseActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorBaseActor;
	static C(Other: UObject): VREditorBaseActor;
}

declare class VREditorBaseUserWidget extends UserWidget { 
	Owner: any;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VREditorBaseUserWidget;
	static Find(Outer: UObject, ResourceName: string): VREditorBaseUserWidget;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VREditorBaseUserWidget;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorBaseUserWidget;
	static C(Other: UObject): VREditorBaseUserWidget;
}

declare type EVREditorWidgetDrawingPolicy = string | symbol;
declare var EVREditorWidgetDrawingPolicy = { Always:'Always',Hovering:'Hovering', };
declare class VREditorWidgetComponent extends WidgetComponent { 
	DrawingPolicy: EVREditorWidgetDrawingPolicy;
	bIsHovering: boolean;
	bHasEverDrawn: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VREditorWidgetComponent;
	static Find(Outer: UObject, ResourceName: string): VREditorWidgetComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VREditorWidgetComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorWidgetComponent;
	static C(Other: UObject): VREditorWidgetComponent;
}

declare class VREditorFloatingUI extends VREditorBaseActor { 
	UserWidget: VREditorBaseUserWidget;
	WidgetComponent: VREditorWidgetComponent;
	UserWidgetClass: UnrealEngineClass;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VREditorFloatingUI;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorFloatingUI;
	static C(Other: UObject): VREditorFloatingUI;
}

declare class VREditorDockableWindow extends VREditorFloatingUI { 
	WindowMeshComponent: StaticMeshComponent;
	SelectionBarMeshComponent: StaticMeshComponent;
	CloseButtonMeshComponent: StaticMeshComponent;
	SelectionBarMID: MaterialInstanceDynamic;
	SelectionBarTranslucentMID: MaterialInstanceDynamic;
	CloseButtonMID: MaterialInstanceDynamic;
	CloseButtonTranslucentMID: MaterialInstanceDynamic;
	DragOperationComponent: ViewportDragOperationComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VREditorDockableWindow;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorDockableWindow;
	static C(Other: UObject): VREditorDockableWindow;
}

declare class DockableWindowDragOperation extends ViewportDragOperation { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DockableWindowDragOperation;
	static Find(Outer: UObject, ResourceName: string): DockableWindowDragOperation;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DockableWindowDragOperation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DockableWindowDragOperation;
	static C(Other: UObject): DockableWindowDragOperation;
}

declare class FloatingText extends Actor { 
	SceneComponent: SceneComponent;
	FirstLineComponent: StaticMeshComponent;
	JointSphereComponent: StaticMeshComponent;
	SecondLineComponent: StaticMeshComponent;
	TextComponent: TextRenderComponent;
	MaskedTextMaterial: MaterialInterface;
	TranslucentTextMaterial: MaterialInterface;
	LineMaterial: MaterialInterface;
	LineMaterialMID: MaterialInstanceDynamic;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FloatingText;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FloatingText;
	static C(Other: UObject): FloatingText;
}

declare class TransformGizmoMeasurement { 
	MeasurementText: TextRenderComponent;
	clone() : TransformGizmoMeasurement;
	static C(Other: UObject): TransformGizmoMeasurement;
}

declare class VREditorTranslationGizmoHandleGroup extends GizmoHandleGroup { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VREditorTranslationGizmoHandleGroup;
	static Find(Outer: UObject, ResourceName: string): VREditorTranslationGizmoHandleGroup;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VREditorTranslationGizmoHandleGroup;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorTranslationGizmoHandleGroup;
	static C(Other: UObject): VREditorTranslationGizmoHandleGroup;
}

declare class VREditorPlaneTranslationGizmoHandleGroup extends GizmoHandleGroup { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VREditorPlaneTranslationGizmoHandleGroup;
	static Find(Outer: UObject, ResourceName: string): VREditorPlaneTranslationGizmoHandleGroup;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VREditorPlaneTranslationGizmoHandleGroup;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorPlaneTranslationGizmoHandleGroup;
	static C(Other: UObject): VREditorPlaneTranslationGizmoHandleGroup;
}

declare class VREditorRotationGizmoHandleGroup extends GizmoHandleGroup { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VREditorRotationGizmoHandleGroup;
	static Find(Outer: UObject, ResourceName: string): VREditorRotationGizmoHandleGroup;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VREditorRotationGizmoHandleGroup;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorRotationGizmoHandleGroup;
	static C(Other: UObject): VREditorRotationGizmoHandleGroup;
}

declare class TransformGizmo extends BaseTransformGizmo { 
	Measurements: TransformGizmoMeasurement;
	TranslationGizmoHandleGroup: VREditorTranslationGizmoHandleGroup;
	PlaneTranslationGizmoHandleGroup: VREditorPlaneTranslationGizmoHandleGroup;
	RotationGizmoHandleGroup: VREditorRotationGizmoHandleGroup;
	StretchGizmoHandleGroup: StretchGizmoHandleGroup;
	UniformScaleGizmoHandleGroup: UniformScaleGizmoHandleGroup;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TransformGizmo;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TransformGizmo;
	static C(Other: UObject): TransformGizmo;
}

declare class VREditorAvatarActor extends Actor { 
	HeadMeshComponent: StaticMeshComponent;
	WorldMovementGridMeshComponent: StaticMeshComponent;
	WorldMovementGridMID: MaterialInstanceDynamic;
	WorldMovementGridOpacity: number;
	bIsDrawingWorldMovementPostProcess: boolean;
	WorldMovementPostProcessMaterial: MaterialInstanceDynamic;
	ScaleProgressMeshComponent: StaticMeshComponent;
	CurrentScaleProgressMeshComponent: StaticMeshComponent;
	UserScaleIndicatorText: TextRenderComponent;
	FixedUserScaleMID: MaterialInstanceDynamic;
	TranslucentFixedUserScaleMID: MaterialInstanceDynamic;
	CurrentUserScaleMID: MaterialInstanceDynamic;
	TranslucentCurrentUserScaleMID: MaterialInstanceDynamic;
	PostProcessComponent: PostProcessComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VREditorAvatarActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorAvatarActor;
	static C(Other: UObject): VREditorAvatarActor;
}

declare class VREditorButton extends VREditorBaseActor { 
	ButtonMeshComponent: StaticMeshComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VREditorButton;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorButton;
	static C(Other: UObject): VREditorButton;
}

declare class VREditorQuickMenu extends VREditorBaseUserWidget { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VREditorQuickMenu;
	static Find(Outer: UObject, ResourceName: string): VREditorQuickMenu;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VREditorQuickMenu;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorQuickMenu;
	Refresh(): void;
	OnWorldSettingsButtonClicked(bIsChecked: boolean): boolean;
	OnWorldOutlinerButtonClicked(bIsChecked: boolean): boolean;
	OnUndoButtonClicked(): void;
	OnTutorialButtonClicked(bIsChecked: boolean): boolean;
	OnTranslationSnapSizeButtonClicked(): string;
	OnTranslationSnapButtonClicked(bIsChecked: boolean): boolean;
	OnSimulateButtonClicked(bIsChecked: boolean): boolean;
	OnScreenshotButtonClicked(): void;
	OnScaleSnapSizeButtonClicked(): string;
	OnScaleSnapButtonClicked(bIsChecked: boolean): boolean;
	OnRotationSnapSizeButtonClicked(): string;
	OnRotationSnapButtonClicked(bIsChecked: boolean): boolean;
	OnRedoButtonClicked(): void;
	OnPlayButtonClicked(): void;
	OnPasteButtonClicked(): void;
	OnModesButtonClicked(bIsChecked: boolean): boolean;
	OnLightButtonClicked(bIsChecked: boolean): boolean;
	OnGizmoModeButtonClicked(): string;
	OnGizmoCoordinateSystemButtonClicked(): string;
	OnGameModeButtonClicked(bIsChecked: boolean): boolean;
	OnExitVRButtonClicked(): void;
	OnDeleteButtonClicked(): void;
	OnCopyButtonClicked(): void;
	OnContentBrowserButtonClicked(bIsChecked: boolean): boolean;
	OnAssetEditorButtonClicked(bIsChecked: boolean): boolean;
	OnActorDetailsButtonClicked(bIsChecked: boolean): boolean;
	IsWorldSettingsVisible(): boolean;
	IsWorldOutlinerVisible(): boolean;
	IsTutorialVisible(): boolean;
	IsTranslationSnapEnabled(): boolean;
	IsSimulatingEnabled(): boolean;
	IsScaleSnapEnabled(): boolean;
	IsRotationSnapEnabled(): boolean;
	IsModesVisible(): boolean;
	IsLightVisible(): boolean;
	IsGameModeEnabled(): boolean;
	IsContentBrowserVisible(): boolean;
	IsAssetEditorVisible(): boolean;
	IsActorDetailsVisible(): boolean;
	GetTranslationSnapSizeText(): string;
	GetScaleSnapSizeText(): string;
	GetRotationSnapSizeText(): string;
	GetGizmoModeText(): string;
	GetGizmoCoordinateSystemText(): string;
	static C(Other: UObject): VREditorQuickMenu;
}

declare class VREditorRadialMenuItem extends VREditorBaseUserWidget { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VREditorRadialMenuItem;
	static Find(Outer: UObject, ResourceName: string): VREditorRadialMenuItem;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VREditorRadialMenuItem;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorRadialMenuItem;
	SetLabel(Text: string): void;
	OnPressed(): void;
	OnLeaveHover(): void;
	OnEnterHover(): void;
	GetAngle(): number;
	static C(Other: UObject): VREditorRadialMenuItem;
}

declare class VREditorRadialMenu extends VREditorBaseUserWidget { 
	TrackpadPosition: Vector2D;
	TrackpadAngle: number;
	MenuItems: VREditorRadialMenuItem[];
	CurrentItem: VREditorRadialMenuItem;
	PreviousItem: VREditorRadialMenuItem;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VREditorRadialMenu;
	static Find(Outer: UObject, ResourceName: string): VREditorRadialMenu;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VREditorRadialMenu;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorRadialMenu;
	SetButtons(InitTopItem: VREditorRadialMenuItem,InitTopRightItem: VREditorRadialMenuItem,InitRightItem: VREditorRadialMenuItem,InitBottomRightItem: VREditorRadialMenuItem,InitBottomItem: VREditorRadialMenuItem,InitLeftBottomItem: VREditorRadialMenuItem,InitLeftItem: VREditorRadialMenuItem,InitTopLeftItem: VREditorRadialMenuItem): void;
	static C(Other: UObject): VREditorRadialMenu;
}

declare class VREditorInteractor extends ViewportInteractor { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VREditorInteractor;
	static Find(Outer: UObject, ResourceName: string): VREditorInteractor;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VREditorInteractor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorInteractor;
	static C(Other: UObject): VREditorInteractor;
}

declare class VREditorMotionControllerInteractor extends VREditorInteractor { 
	MotionControllerComponent: MotionControllerComponent;
	HandMeshComponent: StaticMeshComponent;
	LaserPointerMeshComponent: StaticMeshComponent;
	LaserPointerMID: MaterialInstanceDynamic;
	TranslucentLaserPointerMID: MaterialInstanceDynamic;
	HoverMeshComponent: StaticMeshComponent;
	HoverPointLightComponent: PointLightComponent;
	HandMeshMID: MaterialInstanceDynamic;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VREditorMotionControllerInteractor;
	static Find(Outer: UObject, ResourceName: string): VREditorMotionControllerInteractor;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VREditorMotionControllerInteractor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorMotionControllerInteractor;
	static C(Other: UObject): VREditorMotionControllerInteractor;
}

declare class VREditorTeleporter extends UObject { 
	TeleportSound: SoundCue;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VREditorTeleporter;
	static Find(Outer: UObject, ResourceName: string): VREditorTeleporter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VREditorTeleporter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorTeleporter;
	static C(Other: UObject): VREditorTeleporter;
}

declare class VREditorUISystem extends UObject { 
	FloatingUIs: VREditorFloatingUI[];
	QuickMenuUI: VREditorFloatingUI;
	EditorUIPanels: VREditorFloatingUI[];
	QuickRadialMenu: VREditorFloatingUI;
	DraggingUI: VREditorDockableWindow;
	StartDragUISound: SoundCue;
	StopDragUISound: SoundCue;
	HideUISound: SoundCue;
	ShowUISound: SoundCue;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VREditorUISystem;
	static Find(Outer: UObject, ResourceName: string): VREditorUISystem;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VREditorUISystem;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorUISystem;
	static C(Other: UObject): VREditorUISystem;
}

declare class VREditorWorldInteraction extends ViewportWorldInteraction { 
	DropMaterialOrMaterialSound: SoundCue;
	FloatingUIAssetDraggedFrom: WidgetComponent;
	PlacingMaterialOrTextureAsset: UObject;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): VREditorWorldInteraction;
	static Find(Outer: UObject, ResourceName: string): VREditorWorldInteraction;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): VREditorWorldInteraction;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorWorldInteraction;
	static C(Other: UObject): VREditorWorldInteraction;
}

declare class ContentBrowserFrontEndFilterExtension extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ContentBrowserFrontEndFilterExtension;
	static Find(Outer: UObject, ResourceName: string): ContentBrowserFrontEndFilterExtension;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ContentBrowserFrontEndFilterExtension;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ContentBrowserFrontEndFilterExtension;
	static C(Other: UObject): ContentBrowserFrontEndFilterExtension;
}

declare class GameplayTagSearchFilter extends ContentBrowserFrontEndFilterExtension { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagSearchFilter;
	static Find(Outer: UObject, ResourceName: string): GameplayTagSearchFilter;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagSearchFilter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagSearchFilter;
	static C(Other: UObject): GameplayTagSearchFilter;
}

declare class GameplayTagsK2Node_LiteralGameplayTag extends K2Node { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_LiteralGameplayTag;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_LiteralGameplayTag;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagsK2Node_LiteralGameplayTag;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_LiteralGameplayTag;
	static C(Other: UObject): GameplayTagsK2Node_LiteralGameplayTag;
}

declare class GameplayTagsK2Node_MultiCompareBase extends K2Node { 
	NumberOfPins: number;
	PinNames: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareBase;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_MultiCompareBase;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareBase;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareBase;
	static C(Other: UObject): GameplayTagsK2Node_MultiCompareBase;
}

declare class GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface extends GameplayTagsK2Node_MultiCompareBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
	static C(Other: UObject): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
}

declare class GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags extends GameplayTagsK2Node_MultiCompareBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
	static C(Other: UObject): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
}

declare class GameplayTagsK2Node_MultiCompareGameplayTagContainer extends GameplayTagsK2Node_MultiCompareBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
	static C(Other: UObject): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
}

declare class GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags extends GameplayTagsK2Node_MultiCompareBase { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
	static C(Other: UObject): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
}

declare class GameplayTagsK2Node_SwitchGameplayTag extends K2Node_Switch { 
	PinTags: GameplayTag[];
	PinNames: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_SwitchGameplayTag;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_SwitchGameplayTag;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagsK2Node_SwitchGameplayTag;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_SwitchGameplayTag;
	static C(Other: UObject): GameplayTagsK2Node_SwitchGameplayTag;
}

declare class GameplayTagsK2Node_SwitchGameplayTagContainer extends K2Node_Switch { 
	PinContainers: GameplayTagContainer[];
	PinNames: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameplayTagsK2Node_SwitchGameplayTagContainer;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_SwitchGameplayTagContainer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameplayTagsK2Node_SwitchGameplayTagContainer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_SwitchGameplayTagContainer;
	static C(Other: UObject): GameplayTagsK2Node_SwitchGameplayTagContainer;
}

declare class GameLiveStreamingFunctionLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GameLiveStreamingFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): GameLiveStreamingFunctionLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GameLiveStreamingFunctionLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameLiveStreamingFunctionLibrary;
	static StopWebCam(): void;
	static StopBroadcastingGame(): void;
	static StartWebCam(DesiredWebCamWidth: number,DesiredWebCamHeight: number,bMirrorWebCamImage: boolean,bDrawSimpleWebCamVideo: boolean): void;
	static StartBroadcastingGame(LoginUserName: string,LoginPassword: string,FrameRate: number,ScreenScaling: number,bStartWebCam: boolean,DesiredWebCamWidth: number,DesiredWebCamHeight: number,bMirrorWebCamImage: boolean,bDrawSimpleWebCamVideo: boolean,bCaptureAudioFromComputer: boolean,bCaptureAudioFromMicrophone: boolean,CoverUpImage: Texture2D): void;
	static IsWebCamEnabled(): boolean;
	static IsBroadcastingGame(): boolean;
	static C(Other: UObject): GameLiveStreamingFunctionLibrary;
}

declare class BlueprintLiveStreamInfo { 
	GameName: string;
	StreamName: string;
	URL: string;
	clone() : BlueprintLiveStreamInfo;
	static C(Other: UObject): BlueprintLiveStreamInfo;
}

declare class QueryLiveStreamsCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnQueriedLiveStreams: UnrealEngineMulticastDelegate<(LiveStreams: BlueprintLiveStreamInfo[], bWasSuccessful: boolean) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): QueryLiveStreamsCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): QueryLiveStreamsCallbackProxy;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): QueryLiveStreamsCallbackProxy;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): QueryLiveStreamsCallbackProxy;
	static QueryLiveStreams(GameName: string): QueryLiveStreamsCallbackProxy;
	static C(Other: UObject): QueryLiveStreamsCallbackProxy;
}

declare class MediaTexture extends Texture { 
	AddressX: TextureAddress;
	AddressY: TextureAddress;
	ClearColor: LinearColor;
	MediaPlayer: MediaPlayer;
	VideoTrackIndex: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MediaTexture;
	static Find(Outer: UObject, ResourceName: string): MediaTexture;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MediaTexture;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaTexture;
	static C(Other: UObject): MediaTexture;
}

declare class MediaSource extends UObject { 
	DefaultPlayer: string;
	PlatformPlayers: any;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MediaSource;
	static Find(Outer: UObject, ResourceName: string): MediaSource;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MediaSource;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaSource;
	static C(Other: UObject): MediaSource;
}

declare class MediaPlaylist extends UObject { 
	Items: MediaSource[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MediaPlaylist;
	static Find(Outer: UObject, ResourceName: string): MediaPlaylist;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MediaPlaylist;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlaylist;
	RemoveAt(Index: number): void;
	Remove(MediaSource: MediaSource): void;
	Num(): number;
	Insert(MediaSource: MediaSource,Index: number): void;
	GetRandom(InOutIndex?: number): {InOutIndex: number, $: MediaSource};
	GetPrevious(InOutIndex?: number): {InOutIndex: number, $: MediaSource};
	GetNext(InOutIndex?: number): {InOutIndex: number, $: MediaSource};
	Get(Index: number): MediaSource;
	Add(MediaSource: MediaSource): void;
	static C(Other: UObject): MediaPlaylist;
}

declare class MediaSoundWave extends SoundWave { 
	AudioTrackIndex: number;
	MediaPlayer: MediaPlayer;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MediaSoundWave;
	static Find(Outer: UObject, ResourceName: string): MediaSoundWave;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MediaSoundWave;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaSoundWave;
	static C(Other: UObject): MediaSoundWave;
}

declare type EMediaPlayerTrack = string | symbol;
declare var EMediaPlayerTrack = { Audio:'Audio',Binary:'Binary',Caption:'Caption',Image:'Image',Script:'Script',Video:'Video', };
declare class MediaPlayer extends UObject { 
	OnEndReached: UnrealEngineMulticastDelegate<() => void>;
	OnMediaClosed: UnrealEngineMulticastDelegate<() => void>;
	OnMediaOpened: UnrealEngineMulticastDelegate<(OpenedUrl: string) => void>;
	OnMediaOpenFailed: UnrealEngineMulticastDelegate<(FailedUrl: string) => void>;
	OnPlaybackResumed: UnrealEngineMulticastDelegate<() => void>;
	OnPlaybackSuspended: UnrealEngineMulticastDelegate<() => void>;
	DesiredPlayerName: string;
	PlayOnOpen: boolean;
	Shuffle: boolean;
	ImageTexture: MediaTexture;
	Loop: boolean;
	Playlist: MediaPlaylist;
	PlaylistIndex: number;
	SoundWave: MediaSoundWave;
	VideoTexture: MediaTexture;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MediaPlayer;
	static Find(Outer: UObject, ResourceName: string): MediaPlayer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MediaPlayer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlayer;
	SupportsSeeking(): boolean;
	SupportsScrubbing(): boolean;
	SupportsRate(Rate: number,Unthinned: boolean): boolean;
	SetVideoTexture(NewTexture: MediaTexture): void;
	SetSoundWave(NewSoundWave: MediaSoundWave): void;
	SetRate(Rate: number): boolean;
	SetLooping(InLooping: boolean): boolean;
	SetImageTexture(NewTexture: MediaTexture): void;
	SelectTrack(TrackType: EMediaPlayerTrack,TrackIndex: number): boolean;
	Seek(InTime: Timespan): boolean;
	Rewind(): boolean;
	Reopen(): boolean;
	Previous(): boolean;
	Play(): boolean;
	Pause(): boolean;
	OpenUrl(Url: string): boolean;
	OpenSource(MediaSource: MediaSource): boolean;
	OpenPlaylistIndex(InPlaylist: MediaPlaylist,Index: number): boolean;
	OpenPlaylist(InPlaylist: MediaPlaylist): boolean;
	Next(): boolean;
	IsReady(): boolean;
	IsPreparing(): boolean;
	IsPlaying(): boolean;
	IsPaused(): boolean;
	IsLooping(): boolean;
	GetUrl(): string;
	GetTrackLanguage(TrackType: EMediaPlayerTrack,TrackIndex: number): string;
	GetTrackDisplayName(TrackType: EMediaPlayerTrack,TrackIndex: number): string;
	GetTime(): Timespan;
	GetSelectedTrack(TrackType: EMediaPlayerTrack): number;
	GetReverseRates(Unthinned: boolean): FloatRange;
	GetRate(): number;
	GetPlayerName(): string;
	GetNumTracks(TrackType: EMediaPlayerTrack): number;
	GetForwardRates(Unthinned: boolean): FloatRange;
	GetDuration(): Timespan;
	GetCaptionText(): string;
	Close(): void;
	CanPause(): boolean;
	static C(Other: UObject): MediaPlayer;
}

declare class FileMediaSource extends MediaSource { 
	FilePath: string;
	PrecacheFile: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): FileMediaSource;
	static Find(Outer: UObject, ResourceName: string): FileMediaSource;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FileMediaSource;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FileMediaSource;
	static C(Other: UObject): FileMediaSource;
}

declare class PlatformMediaSource extends MediaSource { 
	DefaultSource: MediaSource;
	MediaSources: any;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PlatformMediaSource;
	static Find(Outer: UObject, ResourceName: string): PlatformMediaSource;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PlatformMediaSource;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlatformMediaSource;
	static C(Other: UObject): PlatformMediaSource;
}

declare class StreamMediaSource extends MediaSource { 
	StreamUrl: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): StreamMediaSource;
	static Find(Outer: UObject, ResourceName: string): StreamMediaSource;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): StreamMediaSource;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StreamMediaSource;
	static C(Other: UObject): StreamMediaSource;
}

declare class WmfMediaSettings extends UObject { 
	AllowNonStandardCodecs: boolean;
	NativeAudioOut: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WmfMediaSettings;
	static Find(Outer: UObject, ResourceName: string): WmfMediaSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): WmfMediaSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WmfMediaSettings;
	static C(Other: UObject): WmfMediaSettings;
}

declare class MaterialExpressionSpriteTextureSampler extends MaterialExpressionTextureSampleParameter2D { 
	bSampleAdditionalTextures: boolean;
	AdditionalSlotIndex: number;
	SlotDisplayName: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MaterialExpressionSpriteTextureSampler;
	static Find(Outer: UObject, ResourceName: string): MaterialExpressionSpriteTextureSampler;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MaterialExpressionSpriteTextureSampler;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionSpriteTextureSampler;
	static C(Other: UObject): MaterialExpressionSpriteTextureSampler;
}

declare class PaperSpriteSocket { 
	LocalTransform: Transform;
	SocketName: string;
	clone() : PaperSpriteSocket;
	static C(Other: UObject): PaperSpriteSocket;
}

declare type ESpriteCollisionMode = string | symbol;
declare var ESpriteCollisionMode = { None:'None',Use2DPhysics:'Use2DPhysics',Use3DPhysics:'Use3DPhysics', };
declare type ESpritePivotMode = string | symbol;
declare var ESpritePivotMode = { Top_Left:'Top_Left',Top_Center:'Top_Center',Top_Right:'Top_Right',Center_Left:'Center_Left',Center_Center:'Center_Center',Center_Right:'Center_Right',Bottom_Left:'Bottom_Left',Bottom_Center:'Bottom_Center',Bottom_Right:'Bottom_Right',Custom:'Custom', };
declare type ESpriteShapeType = string | symbol;
declare var ESpriteShapeType = { Box:'Box',Circle:'Circle',Polygon:'Polygon', };
declare class SpriteGeometryShape { 
	ShapeType: ESpriteShapeType;
	Vertices: Vector2D[];
	BoxSize: Vector2D;
	BoxPosition: Vector2D;
	Rotation: number;
	bNegativeWinding: boolean;
	clone() : SpriteGeometryShape;
	static C(Other: UObject): SpriteGeometryShape;
}

declare type ESpritePolygonMode = string | symbol;
declare var ESpritePolygonMode = { SourceBoundingBox:'SourceBoundingBox',TightBoundingBox:'TightBoundingBox',ShrinkWrapped:'ShrinkWrapped',FullyCustom:'FullyCustom',Diced:'Diced', };
declare class SpriteGeometryCollection { 
	Shapes: SpriteGeometryShape[];
	GeometryType: ESpritePolygonMode;
	PixelsPerSubdivisionX: number;
	PixelsPerSubdivisionY: number;
	bAvoidVertexMerging: boolean;
	AlphaThreshold: number;
	DetailAmount: number;
	SimplifyEpsilon: number;
	clone() : SpriteGeometryCollection;
	static C(Other: UObject): SpriteGeometryCollection;
}

declare type EPaperSpriteAtlasPadding = string | symbol;
declare var EPaperSpriteAtlasPadding = { DilateBorder:'DilateBorder',PadWithZero:'PadWithZero', };
declare class PaperSpriteAtlasSlot { 
	SpriteRef: any;
	AtlasIndex: number;
	X: number;
	Y: number;
	Width: number;
	Height: number;
	clone() : PaperSpriteAtlasSlot;
	static C(Other: UObject): PaperSpriteAtlasSlot;
}

declare class PaperSpriteAtlas extends UObject { 
	AtlasDescription: string;
	MaxWidth: number;
	MaxHeight: number;
	MipCount: number;
	PaddingType: EPaperSpriteAtlasPadding;
	Padding: number;
	CompressionSettings: TextureCompressionSettings;
	Filter: TextureFilter;
	GeneratedTextures: Texture[];
	AtlasGUID: Guid;
	bRebuildAtlas: boolean;
	AtlasSlots: PaperSpriteAtlasSlot[];
	NumIncrementalBuilds: number;
	BuiltWidth: number;
	BuiltHeight: number;
	BuiltPadding: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteAtlas;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteAtlas;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteAtlas;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteAtlas;
	static C(Other: UObject): PaperSpriteAtlas;
}

declare class PaperSprite extends UObject { 
	OriginInSourceImageBeforeTrimming: Vector2D;
	SourceImageDimensionBeforeTrimming: Vector2D;
	bTrimmedInSourceImage: boolean;
	bRotatedInSourceImage: boolean;
	SourceTextureDimension: Vector2D;
	SourceUV: Vector2D;
	SourceDimension: Vector2D;
	SourceTexture: Texture2D;
	AdditionalSourceTextures: Texture[];
	BakedSourceUV: Vector2D;
	BakedSourceDimension: Vector2D;
	BakedSourceTexture: Texture2D;
	DefaultMaterial: MaterialInterface;
	AlternateMaterial: MaterialInterface;
	Sockets: PaperSpriteSocket[];
	SpriteCollisionDomain: ESpriteCollisionMode;
	PixelsPerUnrealUnit: number;
	BodySetup: BodySetup;
	PivotMode: ESpritePivotMode;
	CustomPivotPoint: Vector2D;
	bSnapPivotToPixelGrid: boolean;
	CollisionGeometry: SpriteGeometryCollection;
	CollisionThickness: number;
	RenderGeometry: SpriteGeometryCollection;
	AtlasGroup: PaperSpriteAtlas;
	AlternateMaterialSplitIndex: number;
	BakedRenderData: Vector4[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSprite;
	static Find(Outer: UObject, ResourceName: string): PaperSprite;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSprite;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSprite;
	static C(Other: UObject): PaperSprite;
}

declare class PaperFlipbookKeyFrame { 
	Sprite: PaperSprite;
	FrameRun: number;
	clone() : PaperFlipbookKeyFrame;
	static C(Other: UObject): PaperFlipbookKeyFrame;
}

declare type EFlipbookCollisionMode = string | symbol;
declare var EFlipbookCollisionMode = { NoCollision:'NoCollision',FirstFrameCollision:'FirstFrameCollision',EachFrameCollision:'EachFrameCollision', };
declare class PaperFlipbook extends UObject { 
	FramesPerSecond: number;
	KeyFrames: PaperFlipbookKeyFrame[];
	DefaultMaterial: MaterialInterface;
	CollisionSource: EFlipbookCollisionMode;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperFlipbook;
	static Find(Outer: UObject, ResourceName: string): PaperFlipbook;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperFlipbook;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbook;
	IsValidKeyFrameIndex(Index: number): boolean;
	GetTotalDuration(): number;
	GetSpriteAtTime(Time: number,bClampToEnds: boolean): PaperSprite;
	GetSpriteAtFrame(FrameIndex: number): PaperSprite;
	GetNumKeyFrames(): number;
	GetNumFrames(): number;
	GetKeyFrameIndexAtTime(Time: number,bClampToEnds: boolean): number;
	static C(Other: UObject): PaperFlipbook;
}

declare class PaperFlipbookComponent extends MeshComponent { 
	SourceFlipbook: PaperFlipbook;
	Material: MaterialInterface;
	PlayRate: number;
	bLooping: boolean;
	bReversePlayback: boolean;
	bPlaying: boolean;
	AccumulatedTime: number;
	CachedFrameIndex: number;
	SpriteColor: LinearColor;
	CachedBodySetup: BodySetup;
	OnFinishedPlaying: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperFlipbookComponent;
	static Find(Outer: UObject, ResourceName: string): PaperFlipbookComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperFlipbookComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookComponent;
	Stop(): void;
	SetSpriteColor(NewColor: LinearColor): void;
	SetPlayRate(NewRate: number): void;
	SetPlaybackPositionInFrames(NewFramePosition: number,bFireEvents: boolean): void;
	SetPlaybackPosition(NewPosition: number,bFireEvents: boolean): void;
	SetNewTime(NewTime: number): void;
	SetLooping(bNewLooping: boolean): void;
	SetFlipbook(NewFlipbook: PaperFlipbook): boolean;
	ReverseFromEnd(): void;
	Reverse(): void;
	PlayFromStart(): void;
	Play(): void;
	OnRep_SourceFlipbook(OldFlipbook: PaperFlipbook): void;
	IsReversing(): boolean;
	IsPlaying(): boolean;
	IsLooping(): boolean;
	GetSpriteMaterial(): MaterialInterface;
	GetPlayRate(): number;
	GetPlaybackPositionInFrames(): number;
	GetPlaybackPosition(): number;
	GetFlipbookLengthInFrames(): number;
	GetFlipbookLength(): number;
	GetFlipbookFramerate(): number;
	GetFlipbook(): PaperFlipbook;
	static C(Other: UObject): PaperFlipbookComponent;
}

declare class PaperCharacter extends Character { 
	Sprite: PaperFlipbookComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperCharacter;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperCharacter;
	static C(Other: UObject): PaperCharacter;
}

declare class PaperFlipbookActor extends Actor { 
	RenderComponent: PaperFlipbookComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperFlipbookActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookActor;
	static C(Other: UObject): PaperFlipbookActor;
}

declare class SpriteInstanceData { 
	Transform: Matrix;
	SourceSprite: PaperSprite;
	VertexColor: Color;
	MaterialIndex: number;
	clone() : SpriteInstanceData;
	static C(Other: UObject): SpriteInstanceData;
}

declare class PaperGroupedSpriteComponent extends MeshComponent { 
	InstanceMaterials: MaterialInterface[];
	PerInstanceSpriteData: SpriteInstanceData[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperGroupedSpriteComponent;
	static Find(Outer: UObject, ResourceName: string): PaperGroupedSpriteComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperGroupedSpriteComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperGroupedSpriteComponent;
	UpdateInstanceTransform(InstanceIndex: number,NewInstanceTransform: Transform,bWorldSpace: boolean,bMarkRenderStateDirty: boolean,bTeleport: boolean): boolean;
	UpdateInstanceColor(InstanceIndex: number,NewInstanceColor: LinearColor,bMarkRenderStateDirty: boolean): boolean;
	SortInstancesAlongAxis(WorldSpaceSortAxis: Vector): void;
	RemoveInstance(InstanceIndex: number): boolean;
	GetInstanceTransform(InstanceIndex: number,OutInstanceTransform?: Transform,bWorldSpace?: boolean): {OutInstanceTransform: Transform, $: boolean};
	GetInstanceCount(): number;
	ClearInstances(): void;
	AddInstance(Transform: Transform,Sprite: PaperSprite,bWorldSpace: boolean,Color: LinearColor): number;
	static C(Other: UObject): PaperGroupedSpriteComponent;
}

declare class PaperGroupedSpriteActor extends Actor { 
	RenderComponent: PaperGroupedSpriteComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperGroupedSpriteActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperGroupedSpriteActor;
	static C(Other: UObject): PaperGroupedSpriteActor;
}

declare class PaperRuntimeSettings extends UObject { 
	bEnableSpriteAtlasGroups: boolean;
	bEnableTerrainSplineEditing: boolean;
	bResizeSpriteDataToMatchTextures: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperRuntimeSettings;
	static Find(Outer: UObject, ResourceName: string): PaperRuntimeSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperRuntimeSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperRuntimeSettings;
	static C(Other: UObject): PaperRuntimeSettings;
}

declare class PaperSpriteComponent extends MeshComponent { 
	SourceSprite: PaperSprite;
	MaterialOverride: MaterialInterface;
	SpriteColor: LinearColor;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteComponent;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteComponent;
	SetSpriteColor(NewColor: LinearColor): void;
	SetSprite(NewSprite: PaperSprite): boolean;
	GetSprite(): PaperSprite;
	static C(Other: UObject): PaperSpriteComponent;
}

declare class PaperSpriteActor extends Actor { 
	RenderComponent: PaperSpriteComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteActor;
	static C(Other: UObject): PaperSpriteActor;
}

declare class PaperTerrainSplineComponent extends SplineComponent { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTerrainSplineComponent;
	static Find(Outer: UObject, ResourceName: string): PaperTerrainSplineComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTerrainSplineComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTerrainSplineComponent;
	static C(Other: UObject): PaperTerrainSplineComponent;
}

declare class PaperTerrainMaterialRule { 
	StartCap: PaperSprite;
	Body: PaperSprite[];
	EndCap: PaperSprite;
	MinimumAngle: number;
	MaximumAngle: number;
	bEnableCollision: boolean;
	CollisionOffset: number;
	DrawOrder: number;
	Description: string;
	clone() : PaperTerrainMaterialRule;
	static C(Other: UObject): PaperTerrainMaterialRule;
}

declare class PaperTerrainMaterial extends DataAsset { 
	Rules: PaperTerrainMaterialRule[];
	InteriorFill: PaperSprite;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTerrainMaterial;
	static Find(Outer: UObject, ResourceName: string): PaperTerrainMaterial;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTerrainMaterial;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTerrainMaterial;
	static C(Other: UObject): PaperTerrainMaterial;
}

declare class PaperTerrainComponent extends PrimitiveComponent { 
	TerrainMaterial: PaperTerrainMaterial;
	bClosedSpline: boolean;
	bFilledSpline: boolean;
	AssociatedSpline: PaperTerrainSplineComponent;
	RandomSeed: number;
	SegmentOverlapAmount: number;
	TerrainColor: LinearColor;
	ReparamStepsPerSegment: number;
	SpriteCollisionDomain: ESpriteCollisionMode;
	CollisionThickness: number;
	CachedBodySetup: BodySetup;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTerrainComponent;
	static Find(Outer: UObject, ResourceName: string): PaperTerrainComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTerrainComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTerrainComponent;
	SetTerrainColor(NewColor: LinearColor): void;
	static C(Other: UObject): PaperTerrainComponent;
}

declare class PaperTerrainActor extends Actor { 
	DummyRoot: SceneComponent;
	SplineComponent: PaperTerrainSplineComponent;
	RenderComponent: PaperTerrainComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTerrainActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTerrainActor;
	static C(Other: UObject): PaperTerrainActor;
}

declare class IntMargin { 
	Left: number;
	Top: number;
	Right: number;
	Bottom: number;
	clone() : IntMargin;
	static C(Other: UObject): IntMargin;
}

declare class PaperTileMetadata { 
	UserDataName: string;
	CollisionData: SpriteGeometryCollection;
	TerrainMembership: number;
	clone() : PaperTileMetadata;
	static C(Other: UObject): PaperTileMetadata;
}

declare class PaperTileSetTerrain { 
	TerrainName: string;
	CenterTileIndex: number;
	clone() : PaperTileSetTerrain;
	static C(Other: UObject): PaperTileSetTerrain;
}

declare class PaperTileSet extends UObject { 
	TileSize: IntPoint;
	TileSheet: Texture2D;
	BorderMargin: IntMargin;
	PerTileSpacing: IntPoint;
	DrawingOffset: IntPoint;
	BackgroundColor: LinearColor;
	WidthInTiles: number;
	HeightInTiles: number;
	AllocatedWidth: number;
	AllocatedHeight: number;
	PerTileData: PaperTileMetadata[];
	Terrains: PaperTileSetTerrain[];
	TileWidth: number;
	TileHeight: number;
	Margin: number;
	Spacing: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileSet;
	static Find(Outer: UObject, ResourceName: string): PaperTileSet;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileSet;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileSet;
	static C(Other: UObject): PaperTileSet;
}

declare class PaperTileInfo { 
	TileSet: PaperTileSet;
	PackedTileIndex: number;
	clone() : PaperTileInfo;
	static C(Other: UObject): PaperTileInfo;
	BreakTile(TileIndex?: number,TileSet?: PaperTileSet,bFlipH?: boolean,bFlipV?: boolean,bFlipD?: boolean): {TileIndex: number, TileSet: PaperTileSet, bFlipH: boolean, bFlipV: boolean, bFlipD: boolean};
	GetTileTransform(): Transform;
	GetTileUserData(): string;
	static BreakTile(Tile: PaperTileInfo,TileIndex?: number,TileSet?: PaperTileSet,bFlipH?: boolean,bFlipV?: boolean,bFlipD?: boolean): {TileIndex: number, TileSet: PaperTileSet, bFlipH: boolean, bFlipV: boolean, bFlipD: boolean};
	static GetTileTransform(Tile: PaperTileInfo): Transform;
	static GetTileUserData(Tile: PaperTileInfo): string;
	static MakeTile(TileIndex: number,TileSet: PaperTileSet,bFlipH: boolean,bFlipV: boolean,bFlipD: boolean): PaperTileInfo;
}

declare class PaperTileLayer extends UObject { 
	LayerName: string;
	LayerWidth: number;
	LayerHeight: number;
	bHiddenInEditor: boolean;
	bHiddenInGame: boolean;
	bLayerCollides: boolean;
	bOverrideCollisionThickness: boolean;
	bOverrideCollisionOffset: boolean;
	CollisionThicknessOverride: number;
	CollisionOffsetOverride: number;
	LayerColor: LinearColor;
	AllocatedWidth: number;
	AllocatedHeight: number;
	AllocatedCells: PaperTileInfo[];
	TileSet: PaperTileSet;
	AllocatedGrid: number[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileLayer;
	static Find(Outer: UObject, ResourceName: string): PaperTileLayer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileLayer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileLayer;
	static C(Other: UObject): PaperTileLayer;
}

declare type ETileMapProjectionMode = string | symbol;
declare var ETileMapProjectionMode = { Orthogonal:'Orthogonal',IsometricDiamond:'IsometricDiamond',IsometricStaggered:'IsometricStaggered',HexagonalStaggered:'HexagonalStaggered', };
declare class PaperTileMap extends UObject { 
	MapWidth: number;
	MapHeight: number;
	TileWidth: number;
	TileHeight: number;
	PixelsPerUnrealUnit: number;
	SeparationPerTileX: number;
	SeparationPerTileY: number;
	SeparationPerLayer: number;
	SelectedTileSet: any;
	Material: MaterialInterface;
	TileLayers: PaperTileLayer[];
	CollisionThickness: number;
	SpriteCollisionDomain: ESpriteCollisionMode;
	ProjectionMode: ETileMapProjectionMode;
	HexSideLength: number;
	BodySetup: BodySetup;
	AssetImportData: AssetImportData;
	SelectedLayerIndex: number;
	BackgroundColor: LinearColor;
	LayerNameIndex: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileMap;
	static Find(Outer: UObject, ResourceName: string): PaperTileMap;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileMap;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMap;
	static C(Other: UObject): PaperTileMap;
}

declare class PaperTileMapComponent extends MeshComponent { 
	MapWidth: number;
	MapHeight: number;
	TileWidth: number;
	TileHeight: number;
	DefaultLayerTileSet: PaperTileSet;
	Material: MaterialInterface;
	TileLayers: PaperTileLayer[];
	TileMapColor: LinearColor;
	UseSingleLayerIndex: number;
	bUseSingleLayer: boolean;
	TileMap: PaperTileMap;
	bShowPerTileGridWhenSelected: boolean;
	bShowPerLayerGridWhenSelected: boolean;
	bShowOutlineWhenUnselected: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileMapComponent;
	static Find(Outer: UObject, ResourceName: string): PaperTileMapComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileMapComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMapComponent;
	SetTileMapColor(NewColor: LinearColor): void;
	SetTileMap(NewTileMap: PaperTileMap): boolean;
	SetTile(X: number,Y: number,Layer: number,NewValue: PaperTileInfo): void;
	SetLayerColor(NewColor: LinearColor,Layer: number): void;
	SetLayerCollision(Layer: number,bHasCollision: boolean,bOverrideThickness: boolean,CustomThickness: number,bOverrideOffset: boolean,CustomOffset: number,bRebuildCollision: boolean): void;
	SetDefaultCollisionThickness(Thickness: number,bRebuildCollision: boolean): void;
	ResizeMap(NewWidthInTiles: number,NewHeightInTiles: number): void;
	RebuildCollision(): void;
	OwnsTileMap(): boolean;
	MakeTileMapEditable(): void;
	GetTilePolygon(TileX: number,TileY: number,Points?: Vector[],LayerIndex?: number,bWorldSpace?: boolean): {Points: Vector[]};
	GetTileMapColor(): LinearColor;
	GetTileCornerPosition(TileX: number,TileY: number,LayerIndex: number,bWorldSpace: boolean): Vector;
	GetTileCenterPosition(TileX: number,TileY: number,LayerIndex: number,bWorldSpace: boolean): Vector;
	GetTile(X: number,Y: number,Layer: number): PaperTileInfo;
	GetMapSize(MapWidth?: number,MapHeight?: number,NumLayers?: number): {MapWidth: number, MapHeight: number, NumLayers: number};
	GetLayerColor(Layer: number): LinearColor;
	CreateNewTileMap(MapWidth: number,MapHeight: number,TileWidth: number,TileHeight: number,PixelsPerUnrealUnit: number,bCreateLayer: boolean): void;
	AddNewLayer(): PaperTileLayer;
	static C(Other: UObject): PaperTileMapComponent;
}

declare class PaperTileMapActor extends Actor { 
	RenderComponent: PaperTileMapComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileMapActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMapActor;
	static C(Other: UObject): PaperTileMapActor;
}

declare class TileMapBlueprintLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TileMapBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): TileMapBlueprintLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TileMapBlueprintLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileMapBlueprintLibrary;
	static MakeTile(TileIndex: number,TileSet: PaperTileSet,bFlipH: boolean,bFlipV: boolean,bFlipD: boolean): PaperTileInfo;
	static GetTileUserData(Tile: PaperTileInfo): string;
	static GetTileTransform(Tile: PaperTileInfo): Transform;
	static BreakTile(Tile: PaperTileInfo,TileIndex?: number,TileSet?: PaperTileSet,bFlipH?: boolean,bFlipV?: boolean,bFlipD?: boolean): {TileIndex: number, TileSet: PaperTileSet, bFlipH: boolean, bFlipV: boolean, bFlipD: boolean};
	static C(Other: UObject): TileMapBlueprintLibrary;
}

declare class LightPropagationVolumeSettings { 
	bOverride_LPVIntensity: boolean;
	bOverride_LPVDirectionalOcclusionIntensity: boolean;
	bOverride_LPVDirectionalOcclusionRadius: boolean;
	bOverride_LPVDiffuseOcclusionExponent: boolean;
	bOverride_LPVSpecularOcclusionExponent: boolean;
	bOverride_LPVDiffuseOcclusionIntensity: boolean;
	bOverride_LPVSpecularOcclusionIntensity: boolean;
	bOverride_LPVSize: boolean;
	bOverride_LPVSecondaryOcclusionIntensity: boolean;
	bOverride_LPVSecondaryBounceIntensity: boolean;
	bOverride_LPVGeometryVolumeBias: boolean;
	bOverride_LPVVplInjectionBias: boolean;
	bOverride_LPVEmissiveInjectionIntensity: boolean;
	LPVIntensity: number;
	LPVVplInjectionBias: number;
	LPVSize: number;
	LPVSecondaryOcclusionIntensity: number;
	LPVSecondaryBounceIntensity: number;
	LPVGeometryVolumeBias: number;
	LPVEmissiveInjectionIntensity: number;
	LPVDirectionalOcclusionIntensity: number;
	LPVDirectionalOcclusionRadius: number;
	LPVDiffuseOcclusionExponent: number;
	LPVSpecularOcclusionExponent: number;
	LPVDiffuseOcclusionIntensity: number;
	LPVSpecularOcclusionIntensity: number;
	clone() : LightPropagationVolumeSettings;
	static C(Other: UObject): LightPropagationVolumeSettings;
}

declare class LightPropagationVolumeBlendable extends UObject { 
	Settings: LightPropagationVolumeSettings;
	BlendWeight: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LightPropagationVolumeBlendable;
	static Find(Outer: UObject, ResourceName: string): LightPropagationVolumeBlendable;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LightPropagationVolumeBlendable;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LightPropagationVolumeBlendable;
	static C(Other: UObject): LightPropagationVolumeBlendable;
}

declare class DirectoryWatcher extends UObject { 
	Added: string[];
	Modified: string[];
	Removed: string[];
	OnChanged: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): DirectoryWatcher;
	static Find(Outer: UObject, ResourceName: string): DirectoryWatcher;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): DirectoryWatcher;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DirectoryWatcher;
	Watch(Directory: string): void;
	Unwatch(): void;
	Contains(File: string): boolean;
	static C(Other: UObject): DirectoryWatcher;
}

declare class JavascriptContext extends UObject { 
	Paths: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptContext;
	static Find(Outer: UObject, ResourceName: string): JavascriptContext;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptContext;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptContext;
	WriteDTS(Target: string,bIncludingTooltip: boolean): boolean;
	WriteAliases(Target: string): boolean;
	SetContextId(Name: string): void;
	SetAsDebugContext(): void;
	RunScript(Script: string,bOutput: boolean): string;
	RunFile(Filename: string): void;
	ResetAsDebugContext(): void;
	ReadScriptFile(Filename: string): string;
	IsDebugContext(): boolean;
	GetScriptFileFullPath(Filename: string): string;
	Expose(Name: string,UObject: UObject): void;
	static C(Other: UObject): JavascriptContext;
}

declare class JavascriptAsset { 
	Name: string;
	Asset: StringAssetReference;
	clone() : JavascriptAsset;
	static C(Other: UObject): JavascriptAsset;
}

declare class JavascriptClassAsset { 
	Name: string;
	Class: UnrealEngineClass;
	clone() : JavascriptClassAsset;
	static C(Other: UObject): JavascriptClassAsset;
}

declare class JavascriptComponent extends ActorComponent { 
	ScriptSourceFile: string;
	bActiveWithinEditor: boolean;
	JavascriptContext: JavascriptContext;
	OnTick: UnrealEngineDelegate<(DeltaSeconds: number) => void>;
	OnBeginPlay: UnrealEngineDelegate<() => void>;
	OnEndPlay: UnrealEngineDelegate<() => void>;
	OnInvoke: UnrealEngineDelegate<(Name: string) => void>;
	Assets: JavascriptAsset[];
	ClassAssets: JavascriptClassAsset[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptComponent;
	static Find(Outer: UObject, ResourceName: string): JavascriptComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptComponent;
	ResolveClass(Name: string): UnrealEngineClass;
	ResolveAsset(Name: string,bTryLoad: boolean): UObject;
	Invoke(Name: string): void;
	ForceGC(): void;
	Expose(ExposedAs: string,UObject: UObject): void;
	static C(Other: UObject): JavascriptComponent;
}

declare class JavascriptDelegate extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptDelegate;
	static Find(Outer: UObject, ResourceName: string): JavascriptDelegate;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptDelegate;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptDelegate;
	Fire(): void;
	static C(Other: UObject): JavascriptDelegate;
}

declare class JavascriptGeneratedClass extends BlueprintGeneratedClass { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptGeneratedClass;
	static Find(Outer: UObject, ResourceName: string): JavascriptGeneratedClass;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptGeneratedClass;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGeneratedClass;
	static C(Other: UObject): JavascriptGeneratedClass;
}

declare class JavascriptGeneratedClass_Native extends BlueprintGeneratedClass { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptGeneratedClass_Native;
	static Find(Outer: UObject, ResourceName: string): JavascriptGeneratedClass_Native;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptGeneratedClass_Native;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGeneratedClass_Native;
	static C(Other: UObject): JavascriptGeneratedClass_Native;
}

declare class JavascriptGeneratedFunction extends UFunction { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptGeneratedFunction;
	static Find(Outer: UObject, ResourceName: string): JavascriptGeneratedFunction;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptGeneratedFunction;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGeneratedFunction;
	static C(Other: UObject): JavascriptGeneratedFunction;
}

declare class JavascriptGlobalDelegates extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptGlobalDelegates;
	static Find(Outer: UObject, ResourceName: string): JavascriptGlobalDelegates;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptGlobalDelegates;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGlobalDelegates;
	UnbindAll(): void;
	Unbind(Key: string): void;
	RedirectorFollowed(PackageName: string,Redirector: UObject): void;
	PreLoadMap(MapName: string): void;
	PreGarbageCollect(): void;
	PostLoadMap(): void;
	PostGarbageCollect(): void;
	PostDemoPlay(): void;
	PostApplyLevelOffset(Level: Level,World: World,Offset: Vector,Flag: boolean): void;
	PackageCreatedForLoad(InPackage: Package): void;
	OnWorldCleanup(World: World,bSessionEnded: boolean,bCleanupResources: boolean): void;
	OnPreWorldInitialization_Friendly(World: World): void;
	OnPreWorldFinishDestroy(World: World): void;
	OnPreObjectPropertyChanged_Friendly(InObject: UObject,Property: Property,MemberProperty: Property): void;
	OnPostWorldInitialization_Friendly(World: World): void;
	OnPostWorldCreation(World: World): void;
	OnPostDuplicate_Friendly(World: World,bDuplicateForPIE: boolean): void;
	OnObjectSaved(UObject: UObject): void;
	OnObjectPropertyChanged_Friendly(InObject: UObject,Property: Property,MemberProperty: Property,ChangeType: number): void;
	OnObjectModified(UObject: UObject): void;
	OnAssetLoaded(UObject: UObject): void;
	LevelRemovedFromWorld(Level: Level,World: World): void;
	LevelAddedToWorld(Level: Level,World: World): void;
	Bind(Key: string): void;
	static C(Other: UObject): JavascriptGlobalDelegates;
}

declare class JavascriptHeapStatistics { 
	TotalHeapSize: number;
	TotalHeapSizeExecutable: number;
	TotalPhysicalSize: number;
	TotalAvailableSize: number;
	UsedHeapSize: number;
	HeapSizeLimit: number;
	MallocedMemory: number;
	bDoesZapGarbage: boolean;
	clone() : JavascriptHeapStatistics;
	static C(Other: UObject): JavascriptHeapStatistics;
}

declare class JavascriptIsolate extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptIsolate;
	static Find(Outer: UObject, ResourceName: string): JavascriptIsolate;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptIsolate;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptIsolate;
	GetHeapStatistics(Statistics?: JavascriptHeapStatistics): {Statistics: JavascriptHeapStatistics};
	CreateContext(): JavascriptContext;
	static C(Other: UObject): JavascriptIsolate;
}

declare class JavascriptProfileNode { 
	clone() : JavascriptProfileNode;
	static C(Other: UObject): JavascriptProfileNode;
	GetBailoutReason(): string;
	GetCallUid(): number;
	GetChild(index: number): JavascriptProfileNode;
	GetChildrenCount(): number;
	GetColumnNumber(): number;
	GetDeoptInfo_Reason(index: number): string;
	GetDeoptInfo_Stack(index: number): string;
	GetDeoptInfosCount(index: number): number;
	GetFunctionName(): string;
	GetHitCount(): number;
	GetHitLineCount(): number;
	GetLineNumber(): number;
	GetNodeId(): number;
	GetScriptId(): number;
	GetScriptResourceName(): string;
	static GetBailoutReason(UNode: JavascriptProfileNode): string;
	static GetCallUid(UNode: JavascriptProfileNode): number;
	static GetChild(UNode: JavascriptProfileNode,index: number): JavascriptProfileNode;
	static GetChildrenCount(UNode: JavascriptProfileNode): number;
	static GetColumnNumber(UNode: JavascriptProfileNode): number;
	static GetDeoptInfo_Reason(UNode: JavascriptProfileNode,index: number): string;
	static GetDeoptInfo_Stack(UNode: JavascriptProfileNode,index: number): string;
	static GetDeoptInfosCount(UNode: JavascriptProfileNode,index: number): number;
	static GetFunctionName(UNode: JavascriptProfileNode): string;
	static GetHitCount(UNode: JavascriptProfileNode): number;
	static GetHitLineCount(UNode: JavascriptProfileNode): number;
	static GetLineNumber(UNode: JavascriptProfileNode): number;
	static GetNodeId(UNode: JavascriptProfileNode): number;
	static GetScriptId(UNode: JavascriptProfileNode): number;
	static GetScriptResourceName(UNode: JavascriptProfileNode): string;
}

declare class JavascriptProfile extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptProfile;
	static Find(Outer: UObject, ResourceName: string): JavascriptProfile;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptProfile;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptProfile;
	static Stop(Title: string): JavascriptProfile;
	static Start(Title: string,bRecordSamples: boolean): void;
	static SetSamplingInterval(us: number): void;
	static SetIdle(is_idle: boolean): void;
	GetTopDownRoot(): JavascriptProfileNode;
	GetSampleTimestamp(index: number): number;
	GetSamplesCount(): number;
	GetSample(index: number): JavascriptProfileNode;
	static C(Other: UObject): JavascriptProfile;
}

declare class JavascriptFunction { 
	clone() : JavascriptFunction;
	static C(Other: UObject): JavascriptFunction;
}

declare class JavascriptStreamableManager { 
	clone() : JavascriptStreamableManager;
	static C(Other: UObject): JavascriptStreamableManager;
	IsAsyncLoadComplete(Target: StringAssetReference): boolean;
	RequestAsyncLoad(TargetsToStream: StringAssetReference[],DelegateToCall: JavascriptFunction,Priority: number): void;
	SimpleAsyncLoad(Target: StringAssetReference,Priority: number): void;
	Unload(Target: StringAssetReference): void;
	static IsAsyncLoadComplete(Manager: JavascriptStreamableManager,Target: StringAssetReference): boolean;
	static RequestAsyncLoad(Manager: JavascriptStreamableManager,TargetsToStream: StringAssetReference[],DelegateToCall: JavascriptFunction,Priority: number): void;
	static SimpleAsyncLoad(Manager: JavascriptStreamableManager,Target: StringAssetReference,Priority: number): void;
	static Unload(Manager: JavascriptStreamableManager,Target: StringAssetReference): void;
	static CreateStreamableManager(): JavascriptStreamableManager;
}

declare type ELogVerbosity_JS = string | symbol;
declare var ELogVerbosity_JS = { NoLogging:'NoLogging',Fatal:'Fatal',Error:'Error',Warning:'Warning',Display:'Display',Log:'Log',Verbose:'Verbose',VeryVerbose:'VeryVerbose', };
declare class JavascriptLogCategory { 
	clone() : JavascriptLogCategory;
	static C(Other: UObject): JavascriptLogCategory;
	Log(Verbosity: ELogVerbosity_JS,Message: string,FileName: string,LineNumber: number): void;
	static Log(Category: JavascriptLogCategory,Verbosity: ELogVerbosity_JS,Message: string,FileName: string,LineNumber: number): void;
	static CreateLogCategory(CategoryName: string,InDefaultVerbosity: ELogVerbosity_JS): JavascriptLogCategory;
}

declare class JavascriptLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptLibrary;
	static WriteStringToFile(UObject: UObject,Filename: string,Data: string): boolean;
	static WriteFile(UObject: UObject,Filename: string): boolean;
	static V8_SetIdleTaskBudget(BudgetInSeconds: number): void;
	static V8_SetFlagsFromString(V8Flags: string): void;
	static UnregisterComponent(ActorComponent: ActorComponent): void;
	static Unload(Manager: JavascriptStreamableManager,Target: StringAssetReference): void;
	static TryLoadByPath(Path: string): UObject;
	static SimpleAsyncLoad(Manager: JavascriptStreamableManager,Target: StringAssetReference,Priority: number): void;
	static SetRootComponent(Actor: Actor,Component: SceneComponent): void;
	static SetObjectFlags(Obj: UObject,Flags: number): void;
	static SetMobility(SceneComponent: SceneComponent,Type: EComponentMobility): void;
	static SetMobile(SceneComponent: SceneComponent): void;
	static SetClientTravel(Engine: Engine,InWorld: World,NextURL: string,InTravelType: ETravelType): void;
	static SegmentIntersection2D(SegmentStartA: Vector,SegmentEndA: Vector,SegmentStartB: Vector,SegmentEndB: Vector,IntersectionPoint?: Vector): {IntersectionPoint: Vector, $: boolean};
	static ReregisterComponent(ActorComponent: ActorComponent): void;
	static ReregisterAllComponents(Actor: Actor): void;
	static RequestAsyncLoad(Manager: JavascriptStreamableManager,TargetsToStream: StringAssetReference[],DelegateToCall: JavascriptFunction,Priority: number): void;
	static RegisterComponent(ActorComponent: ActorComponent): void;
	static ReadStringFromFile(UObject: UObject,Filename: string): string;
	static ReadFile(UObject: UObject,Filename: string): boolean;
	static ReadDirectory(UObject: UObject,Directory: string,OutItems?: DirectoryItem[]): {OutItems: DirectoryItem[], $: boolean};
	static MarkRenderStateDirty(Component: ActorComponent): void;
	static MakeDirectory(Path: string,Tree: boolean): boolean;
	static Log(Category: JavascriptLogCategory,Verbosity: ELogVerbosity_JS,Message: string,FileName: string,LineNumber: number): void;
	static LoadPackage(InOuter: Package,PackageName: string): Package;
	IsSuppressed(Category: JavascriptLogCategory,Verbosity: ELogVerbosity_JS): boolean;
	static IsRegistered(ActorComponent: ActorComponent): boolean;
	static IsPlayInPreview(World: World): boolean;
	static IsPlayInEditor(World: World): boolean;
	static IsGameWorld(World: World): boolean;
	static IsAsyncLoadComplete(Manager: JavascriptStreamableManager,Target: StringAssetReference): boolean;
	static HasUndo(Engine: Engine): boolean;
	static HasAnyPackageFlags(Package: Package,Flags: number): boolean;
	static HasAnyFlags(UObject: UObject,Flags: number): boolean;
	static HandleSeamlessTravelPlayer(GameMode: GameMode,C?: Controller): {C: Controller};
	static GetScriptResourceName(UNode: JavascriptProfileNode): string;
	static GetScriptId(UNode: JavascriptProfileNode): number;
	static GetPlatformName(): string;
	static GetOutermost(UObject: UObject): UObject;
	static GetOuter(UObject: UObject): UObject;
	static GetObjectsWithOuter(Outer: UObject,Results?: UObject[],bIncludeNestedObjects?: boolean,ExclusionFlags?: number,ExclusionInternalFlags?: number): {Results: UObject[]};
	static GetObjectsOfClass(ClassToLookFor: UnrealEngineClass,Results?: UObject[],bIncludeDerivedClasses?: boolean,ExcludeFlags?: number,ExclusionInternalFlags?: number): {Results: UObject[]};
	static GetNodeId(UNode: JavascriptProfileNode): number;
	static GetName(UObject: UObject): string;
	static GetModel(World: World): Model;
	static GetMetaData(Field: Field,Key: string): string;
	static GetLineNumber(UNode: JavascriptProfileNode): number;
	static GetLevels(World: World): Level[];
	static GetLevel(Actor: Actor): Level;
	static GetLastRenderTime(Actor: Actor): number;
	static GetHitLineCount(UNode: JavascriptProfileNode): number;
	static GetHitCount(UNode: JavascriptProfileNode): number;
	static GetFunctionParmsSize(UFunction: UFunction): number;
	static GetFunctionName(UNode: JavascriptProfileNode): string;
	static GetFileSize(UObject: UObject,Filename: string): number;
	static GetFields(UObject: UObject,bIncludeSuper: boolean): Field[];
	static GetDynamicBinding(Outer: UnrealEngineClass,BindingObjectClass: UnrealEngineClass): DynamicBlueprintBinding;
	static GetDir(UObject: UObject,WhichDir: string): string;
	static GetDerivedClasses(ClassToLookFor: UnrealEngineClass,Results?: UnrealEngineClass[],bRecursive?: boolean): {Results: UnrealEngineClass[]};
	static GetDeoptInfosCount(UNode: JavascriptProfileNode,index: number): number;
	static GetDeoptInfo_Stack(UNode: JavascriptProfileNode,index: number): string;
	static GetDeoptInfo_Reason(UNode: JavascriptProfileNode,index: number): string;
	static GetCurrentProcessId(): number;
	static GetColumnNumber(UNode: JavascriptProfileNode): number;
	static GetClassPathName(Class: UnrealEngineClass): string;
	static GetChildrenCount(UNode: JavascriptProfileNode): number;
	static GetChild(UNode: JavascriptProfileNode,index: number): JavascriptProfileNode;
	GetCategoryName(Category: JavascriptLogCategory): string;
	static GetCallUid(UNode: JavascriptProfileNode): number;
	static GetBlueprintGeneratedClassFromPath(Path: string): UnrealEngineClass;
	static GetBlueprintGeneratedClass(Blueprint: Blueprint): UnrealEngineClass;
	static GetBailoutReason(UNode: JavascriptProfileNode): string;
	static GetArchetypePathName(UObject: UObject): string;
	static GetAllActorsOfClassAndTags(WorldContextObject: UObject,ActorClass: UnrealEngineClass,Tags_Accept: string[],Tags_Deny: string[],OutActors?: Actor[]): {OutActors: Actor[]};
	static GenerateNavigation(world: World,NavData: RecastNavMesh): void;
	static FindPackage(InOuter: UObject,PackageName: string): Package;
	static FindObjectWithOuter(Outer: UObject,ClassToLookFor: UnrealEngineClass,NameToLookFor: string): UObject;
	static FileExists(Filename: string): boolean;
	static Duplicate(UObject: UObject,Outer: UObject,Name: string): UObject;
	static DirectoryExists(InDirectory: string): boolean;
	static DeleteDirectory(Path: string,RequireExists: boolean,Tree: boolean): boolean;
	static CreateStreamableManager(): JavascriptStreamableManager;
	static CreatePackage(Outer: UObject,PackageName: string): Package;
	static CreateLogCategory(CategoryName: string,InDefaultVerbosity: ELogVerbosity_JS): JavascriptLogCategory;
	static CreateEnum(Outer: UObject,Name: string,DisplayNames: string[]): Enum;
	static AddDynamicBinding(Outer: UnrealEngineClass,BindingObject: DynamicBlueprintBinding): void;
	static Actor_GetWorld(Actor: Actor): World;
	static C(Other: UObject): JavascriptLibrary;
}

declare class JavascriptMemoryObject extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptMemoryObject;
	static Find(Outer: UObject, ResourceName: string): JavascriptMemoryObject;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptMemoryObject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMemoryObject;
	static C(Other: UObject): JavascriptMemoryObject;
}

declare class JavascriptSharedMemoryRegion extends JavascriptMemoryObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptSharedMemoryRegion;
	static Find(Outer: UObject, ResourceName: string): JavascriptSharedMemoryRegion;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptSharedMemoryRegion;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSharedMemoryRegion;
	Dispose(): void;
	static Create(Name: string,bCreate: boolean,bRead: boolean,bWrite: boolean,Size: number): JavascriptSharedMemoryRegion;
	static C(Other: UObject): JavascriptSharedMemoryRegion;
}

declare class JavascriptObject extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptObject;
	static Find(Outer: UObject, ResourceName: string): JavascriptObject;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptObject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptObject;
	static C(Other: UObject): JavascriptObject;
}

declare class JavascriptOutputDevice extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptOutputDevice;
	static Find(Outer: UObject, ResourceName: string): JavascriptOutputDevice;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptOutputDevice;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptOutputDevice;
	OnMessage(Message: string,Verbosity: ELogVerbosity_JS,Category: string): void;
	static Log(Category: string,Verbosity: ELogVerbosity_JS,Filename: string,LineNumber: number,Message: string): void;
	Kill(): void;
	static C(Other: UObject): JavascriptOutputDevice;
}

declare class JavascriptProcess extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptProcess;
	static Find(Outer: UObject, ResourceName: string): JavascriptProcess;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptProcess;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptProcess;
	WriteToPipe(Message: string,OutWritten?: string): {OutWritten: string, $: boolean};
	Wait(): void;
	Terminate(KillTree: boolean): void;
	static SetEnvironmentVar(VarName: string,VarValue: string): void;
	ReadFromPipe(): string;
	ReadArrayFromPipe(Array?: number[]): {Array: number[], $: boolean};
	static Open_PID(ProcessId: number): JavascriptProcess;
	static Open(ProcName: string): JavascriptProcess;
	static LaunchURL(URL: string,Parms: string,Error?: string): {Error: string};
	IsRunning(): boolean;
	static IsApplicationRunning_PID(ProcessId: number): boolean;
	static IsApplicationRunning(ProcName: string): boolean;
	static GetString(Key: string,bFlag: boolean): string;
	GetReturnCode(ReturnCode?: number): {ReturnCode: number, $: boolean};
	static GetEnvironmentVar(VarName: string): string;
	static GetApplicationName(ProcessId: number): string;
	static Create(URL: string,Parms: string,bLaunchDetached: boolean,bLaunchHidden: boolean,bLaunchReallyHidden: boolean,PriorityModifier: number,OptionalWorkingDirectory: string,bUsePipe: boolean): JavascriptProcess;
	Close(): void;
	static CanLaunchURL(URL: string): boolean;
	static C(Other: UObject): JavascriptProcess;
}

declare class JavascriptSemaphore extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptSemaphore;
	static Find(Outer: UObject, ResourceName: string): JavascriptSemaphore;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptSemaphore;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSemaphore;
	Unlock(): void;
	TryLock(NanosecondsToWait: number): boolean;
	Lock(): void;
	Dispose(): void;
	static Create(Name: string,bCreate: boolean,MaxLocks: number): JavascriptSemaphore;
	static C(Other: UObject): JavascriptSemaphore;
}

declare class JavascriptSettings extends UObject { 
	V8Flags: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptSettings;
	static Find(Outer: UObject, ResourceName: string): JavascriptSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSettings;
	static C(Other: UObject): JavascriptSettings;
}

declare class JavascriptAutomatedTestInstance { 
	clone() : JavascriptAutomatedTestInstance;
	static C(Other: UObject): JavascriptAutomatedTestInstance;
	AddAnalyticsItem(InAnalyticsItem: string): void;
	AddError(InError: string): void;
	AddLogItem(InLogItem: string): void;
	AddWarning(InWarning: string): void;
	ClearExecutionInfo(): void;
	Destroy(): {Test: JavascriptAutomatedTestInstance};
	SetContinue(bInContinue: boolean): void;
	static AddAnalyticsItem(Test: JavascriptAutomatedTestInstance,InAnalyticsItem: string): void;
	static AddError(Test: JavascriptAutomatedTestInstance,InError: string): void;
	static AddLogItem(Test: JavascriptAutomatedTestInstance,InLogItem: string): void;
	static AddWarning(Test: JavascriptAutomatedTestInstance,InWarning: string): void;
	static ClearExecutionInfo(Test: JavascriptAutomatedTestInstance): void;
	static Destroy(Test?: JavascriptAutomatedTestInstance): {Test: JavascriptAutomatedTestInstance};
	static SetContinue(Test: JavascriptAutomatedTestInstance,bInContinue: boolean): void;
}

declare class JavascriptAutomatedTest { 
	Name: string;
	bComplexTask: boolean;
	TestFlags: number;
	RequiredDeviceNum: number;
	TestFunctionNames: string[];
	UFunction: JavascriptFunction;
	clone() : JavascriptAutomatedTest;
	static C(Other: UObject): JavascriptAutomatedTest;
	Create(): JavascriptAutomatedTestInstance;
	static Create(Test: JavascriptAutomatedTest): JavascriptAutomatedTestInstance;
}

declare class JavascriptTestLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptTestLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptTestLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptTestLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptTestLibrary;
	static SetContinue(Test: JavascriptAutomatedTestInstance,bInContinue: boolean): void;
	static PushFrameCounter(): void;
	static PopFrameCounter(): void;
	static NewWorld(): World;
	static InitializeActorsForPlay(World: World,URL: URL): void;
	static DestroyWorld(World: World): void;
	static Destroy(Test?: JavascriptAutomatedTestInstance): {Test: JavascriptAutomatedTestInstance};
	static Create(Test: JavascriptAutomatedTest): JavascriptAutomatedTestInstance;
	static ClearExecutionInfo(Test: JavascriptAutomatedTestInstance): void;
	static BeginPlay(World: World): void;
	static AddWarning(Test: JavascriptAutomatedTestInstance,InWarning: string): void;
	static AddLogItem(Test: JavascriptAutomatedTestInstance,InLogItem: string): void;
	static AddError(Test: JavascriptAutomatedTestInstance,InError: string): void;
	static AddAnalyticsItem(Test: JavascriptAutomatedTestInstance,InAnalyticsItem: string): void;
	static C(Other: UObject): JavascriptTestLibrary;
}

declare class InGameSceneAccessor extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InGameSceneAccessor;
	static Find(Outer: UObject, ResourceName: string): InGameSceneAccessor;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InGameSceneAccessor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InGameSceneAccessor;
	Tick(DeltaTime: number): void;
	isBegunPlay(): boolean;
	Initialize(): InGameSceneAccessor;
	GetSceneWorld(): World;
	Destroy(): void;
	static C(Other: UObject): InGameSceneAccessor;
}

declare class JavascriptSlateStyle { 
	clone() : JavascriptSlateStyle;
	static C(Other: UObject): JavascriptSlateStyle;
	AddBorderBrush(PropertyName: string,InImageName: string,InMargin: Margin,InColorAndOpacity: LinearColor,InImageType: ESlateBrushImageType): void;
	AddBoxBrush(PropertyName: string,InImageName: string,InMargin: Margin,InColorAndOpacity: LinearColor,InImageType: ESlateBrushImageType): void;
	AddFontInfo(PropertyName: string,FontInfo: SlateFontInfo): void;
	AddImageBrush(PropertyName: string,InImageName: string,InImageSize: Vector2D,InTint: LinearColor,InTiling: ESlateBrushTileType,InImageType: ESlateBrushImageType): void;
	AddSound(PropertyName: string,Sound: SlateSound): void;
	Register(): void;
	RootToContentDir(RelativePath: string): string;
	RootToCoreContentDir(RelativePath: string): string;
	SetContentRoot(InContentRootDir: string): void;
	SetCoreContentRoot(InCoreContentRootDir: string): void;
	Unregister(): void;
	static AddBorderBrush(StyleSet: JavascriptSlateStyle,PropertyName: string,InImageName: string,InMargin: Margin,InColorAndOpacity: LinearColor,InImageType: ESlateBrushImageType): void;
	static AddBoxBrush(StyleSet: JavascriptSlateStyle,PropertyName: string,InImageName: string,InMargin: Margin,InColorAndOpacity: LinearColor,InImageType: ESlateBrushImageType): void;
	static AddFontInfo(StyleSet: JavascriptSlateStyle,PropertyName: string,FontInfo: SlateFontInfo): void;
	static AddImageBrush(StyleSet: JavascriptSlateStyle,PropertyName: string,InImageName: string,InImageSize: Vector2D,InTint: LinearColor,InTiling: ESlateBrushTileType,InImageType: ESlateBrushImageType): void;
	static AddSound(StyleSet: JavascriptSlateStyle,PropertyName: string,Sound: SlateSound): void;
	static Register(StyleSet: JavascriptSlateStyle): void;
	static RootToContentDir(StyleSet: JavascriptSlateStyle,RelativePath: string): string;
	static RootToCoreContentDir(StyleSet: JavascriptSlateStyle,RelativePath: string): string;
	static SetContentRoot(StyleSet: JavascriptSlateStyle,InContentRootDir: string): void;
	static SetCoreContentRoot(StyleSet: JavascriptSlateStyle,InCoreContentRootDir: string): void;
	static Unregister(StyleSet: JavascriptSlateStyle): void;
	static CreateSlateStyle(InStyleSetName: string): JavascriptSlateStyle;
}

declare class JavascriptUMGLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptUMGLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptUMGLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptUMGLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUMGLibrary;
	static Unregister(StyleSet: JavascriptSlateStyle): void;
	static TakeWidget(Widget: Widget): JavascriptSlateWidget;
	static SetCoreContentRoot(StyleSet: JavascriptSlateStyle,InCoreContentRootDir: string): void;
	static SetContentRoot(StyleSet: JavascriptSlateStyle,InContentRootDir: string): void;
	static RootToCoreContentDir(StyleSet: JavascriptSlateStyle,RelativePath: string): string;
	static RootToContentDir(StyleSet: JavascriptSlateStyle,RelativePath: string): string;
	static Register(StyleSet: JavascriptSlateStyle): void;
	static GenerateDynamicImageResource(InDynamicBrushName: string): Vector2D;
	static CreateSlateStyle(InStyleSetName: string): JavascriptSlateStyle;
	static ComputeDesiredSize(Widget: Widget,LayoutScaleMultiplier: number): Vector2D;
	static AddWindowAsNativeChild(NewWindow: JavascriptSlateWidget,RootWindow: JavascriptSlateWidget): void;
	static AddWindow(NewWindow: JavascriptSlateWidget): void;
	static AddSound(StyleSet: JavascriptSlateStyle,PropertyName: string,Sound: SlateSound): void;
	static AddImageBrush(StyleSet: JavascriptSlateStyle,PropertyName: string,InImageName: string,InImageSize: Vector2D,InTint: LinearColor,InTiling: ESlateBrushTileType,InImageType: ESlateBrushImageType): void;
	static AddFontInfo(StyleSet: JavascriptSlateStyle,PropertyName: string,FontInfo: SlateFontInfo): void;
	static AddBoxBrush(StyleSet: JavascriptSlateStyle,PropertyName: string,InImageName: string,InMargin: Margin,InColorAndOpacity: LinearColor,InImageType: ESlateBrushImageType): void;
	static AddBorderBrush(StyleSet: JavascriptSlateStyle,PropertyName: string,InImageName: string,InMargin: Margin,InColorAndOpacity: LinearColor,InImageType: ESlateBrushImageType): void;
	static C(Other: UObject): JavascriptUMGLibrary;
}

declare class JavascriptComboButton extends ContentWidget { 
	ComboButtonStyle: ComboButtonStyle;
	ButtonStyle: ButtonStyle;
	OnGetMenuContent: UnrealEngineDelegate<() => JavascriptSlateWidget>;
	OnMenuOpenChanged: UnrealEngineDelegate<(Value: boolean) => void>;
	OnComboBoxOpened: UnrealEngineDelegate<() => void>;
	bIsFocusable: boolean;
	bHasDownArrow: boolean;
	ForegroundColor: SlateColor;
	ButtonColorAndOpacity: SlateColor;
	ContentPadding: Margin;
	MenuPlacement: EMenuPlacement;
	HAlign: EHorizontalAlignment;
	VAlign: EVerticalAlignment;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptComboButton;
	static Find(Outer: UObject, ResourceName: string): JavascriptComboButton;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptComboButton;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptComboButton;
	SetIsOpen(InIsOpen: boolean,bFocusMenu: boolean): void;
	static C(Other: UObject): JavascriptComboButton;
}

declare class JavascriptGameViewport extends ContentWidget { 
	BackgroundColor: LinearColor;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptGameViewport;
	static Find(Outer: UObject, ResourceName: string): JavascriptGameViewport;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptGameViewport;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGameViewport;
	Spawn(ActorClass: UnrealEngineClass): Actor;
	SetViewRotation(Rotation: Rotator): void;
	SetViewLocation(Location: Vector): void;
	GetViewRotation(): Rotator;
	GetViewportWorld(): World;
	GetViewLocation(): Vector;
	static C(Other: UObject): JavascriptGameViewport;
}

declare type EJavasrciptUserInterfaceActionType = string | symbol;
declare var EJavasrciptUserInterfaceActionType = { Button:'Button',ToggleButton:'ToggleButton',RadioButton:'RadioButton',Check:'Check', };
declare class JavascriptUICommand { 
	Id: string;
	FriendlyName: string;
	Description: string;
	DefaultChord: InputChord;
	ActionType: EJavasrciptUserInterfaceActionType;
	clone() : JavascriptUICommand;
	static C(Other: UObject): JavascriptUICommand;
}

declare class JavascriptUICommandInfo { 
	clone() : JavascriptUICommandInfo;
	static C(Other: UObject): JavascriptUICommandInfo;
}

declare class JavascriptBindingContext { 
	clone() : JavascriptBindingContext;
	static C(Other: UObject): JavascriptBindingContext;
	Destroy(): void;
	UI_COMMAND_Function(Command: JavascriptUICommand): JavascriptUICommandInfo;
	static Destroy(Context: JavascriptBindingContext): void;
	static UI_COMMAND_Function(This: JavascriptBindingContext,Command: JavascriptUICommand): JavascriptUICommandInfo;
	static NewBindingContext(InContextName: string,InContextDesc: string,InContextParent: string,InStyleSetName: string): JavascriptBindingContext;
}

declare type EJavascriptExtensionHook = string | symbol;
declare var EJavascriptExtensionHook = { Before:'Before',After:'After',First:'First', };
declare class JavascriptUICommandList { 
	clone() : JavascriptUICommandList;
	static C(Other: UObject): JavascriptUICommandList;
	CreateMenuBarBuilder(UFunction: JavascriptFunction): void;
	CreateMenuBuilder(bInShouldCloseWindowAfterMenuSelection: boolean,UFunction: JavascriptFunction): void;
	CreateToolbarBuilder(Orientation: EOrientation,UFunction: JavascriptFunction): void;
	ProcessCommandBindings_KeyEvent(InKeyEvent: KeyEvent): boolean;
	ProcessCommandBindings_PointerEvent(InMouseEvent: UPointerEvent): boolean;
	static CreateMenuBarBuilder(CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): void;
	static CreateMenuBuilder(CommandList: JavascriptUICommandList,bInShouldCloseWindowAfterMenuSelection: boolean,UFunction: JavascriptFunction): void;
	static CreateToolbarBuilder(CommandList: JavascriptUICommandList,Orientation: EOrientation,UFunction: JavascriptFunction): void;
	static ProcessCommandBindings_KeyEvent(CommandList: JavascriptUICommandList,InKeyEvent: KeyEvent): boolean;
	static ProcessCommandBindings_PointerEvent(CommandList: JavascriptUICommandList,InMouseEvent: UPointerEvent): boolean;
	static CreateUICommandList(): JavascriptUICommandList;
}

declare class JavascriptExtensionBase { 
	clone() : JavascriptExtensionBase;
	static C(Other: UObject): JavascriptExtensionBase;
}

declare class JavascriptMenuBuilder { 
	clone() : JavascriptMenuBuilder;
	static C(Other: UObject): JavascriptMenuBuilder;
	AddPullDownMenu(InMenuLabel?: string,InToolTip?: string,InPullDownMenu?: JavascriptFunction,InExtensionHook?: string,InTutorialHighlightName?: string): {MenuBuilder: JavascriptMenuBuilder};
	AddSeparator(): {Builder: JavascriptMenuBuilder};
	AddToolBarButton(CommandInfo?: JavascriptUICommandInfo): {Builder: JavascriptMenuBuilder};
	AddWidget(Widget?: Widget,Label?: string,bNoIndent?: boolean,InTutorialHighlightName?: string,bSearchable?: boolean): {Builder: JavascriptMenuBuilder};
	BeginSection(InExtensionHook?: string): {Builder: JavascriptMenuBuilder};
	EndSection(): {Builder: JavascriptMenuBuilder};
	PopCommandList(): {Builder: JavascriptMenuBuilder};
	PushCommandList(List?: JavascriptUICommandList): {Builder: JavascriptMenuBuilder};
	static AddPullDownMenu(MenuBuilder?: JavascriptMenuBuilder,InMenuLabel?: string,InToolTip?: string,InPullDownMenu?: JavascriptFunction,InExtensionHook?: string,InTutorialHighlightName?: string): {MenuBuilder: JavascriptMenuBuilder};
	static AddSeparator(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static AddToolBarButton(Builder?: JavascriptMenuBuilder,CommandInfo?: JavascriptUICommandInfo): {Builder: JavascriptMenuBuilder};
	static AddWidget(Builder?: JavascriptMenuBuilder,Widget?: Widget,Label?: string,bNoIndent?: boolean,InTutorialHighlightName?: string,bSearchable?: boolean): {Builder: JavascriptMenuBuilder};
	static BeginSection(Builder?: JavascriptMenuBuilder,InExtensionHook?: string): {Builder: JavascriptMenuBuilder};
	static EndSection(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static PopCommandList(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static PushCommandList(Builder?: JavascriptMenuBuilder,List?: JavascriptUICommandList): {Builder: JavascriptMenuBuilder};
}

declare class JavascriptExtender { 
	clone() : JavascriptExtender;
	static C(Other: UObject): JavascriptExtender;
	AddMenubarExtension(ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	AddMenuExtension(ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	AddToolBarExtension(ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	Apply(ExtensionHook: string,HookPosition: EJavascriptExtensionHook,MenuBuilder?: JavascriptMenuBuilder): {MenuBuilder: JavascriptMenuBuilder};
	RemoveExtension(Extension: JavascriptExtensionBase): void;
	static AddMenubarExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddMenuExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddToolBarExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static Apply(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,MenuBuilder?: JavascriptMenuBuilder): {MenuBuilder: JavascriptMenuBuilder};
	static RemoveExtension(Extender: JavascriptExtender,Extension: JavascriptExtensionBase): void;
	static Combine(Extenders: JavascriptExtender[]): JavascriptExtender;
}

declare class JavascriptMenuLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptMenuLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptMenuLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptMenuLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMenuLibrary;
	static UI_COMMAND_Function(This: JavascriptBindingContext,Command: JavascriptUICommand): JavascriptUICommandInfo;
	static RemoveExtension(Extender: JavascriptExtender,Extension: JavascriptExtensionBase): void;
	static PushCommandList(Builder?: JavascriptMenuBuilder,List?: JavascriptUICommandList): {Builder: JavascriptMenuBuilder};
	static ProcessCommandBindings_PointerEvent(CommandList: JavascriptUICommandList,InMouseEvent: UPointerEvent): boolean;
	static ProcessCommandBindings_KeyEvent(CommandList: JavascriptUICommandList,InKeyEvent: KeyEvent): boolean;
	static PopCommandList(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static NewBindingContext(InContextName: string,InContextDesc: string,InContextParent: string,InStyleSetName: string): JavascriptBindingContext;
	static EndSection(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static Destroy(Context: JavascriptBindingContext): void;
	static CreateUICommandList(): JavascriptUICommandList;
	static CreateToolbarBuilder(CommandList: JavascriptUICommandList,Orientation: EOrientation,UFunction: JavascriptFunction): void;
	static CreateMenuBuilder(CommandList: JavascriptUICommandList,bInShouldCloseWindowAfterMenuSelection: boolean,UFunction: JavascriptFunction): void;
	static CreateMenuBarBuilder(CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): void;
	static Combine(Extenders: JavascriptExtender[]): JavascriptExtender;
	static BeginSection(Builder?: JavascriptMenuBuilder,InExtensionHook?: string): {Builder: JavascriptMenuBuilder};
	static Apply(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,MenuBuilder?: JavascriptMenuBuilder): {MenuBuilder: JavascriptMenuBuilder};
	static AddWidget(Builder?: JavascriptMenuBuilder,Widget?: Widget,Label?: string,bNoIndent?: boolean,InTutorialHighlightName?: string,bSearchable?: boolean): {Builder: JavascriptMenuBuilder};
	static AddToolBarExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddToolBarButton(Builder?: JavascriptMenuBuilder,CommandInfo?: JavascriptUICommandInfo): {Builder: JavascriptMenuBuilder};
	static AddSeparator(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static AddPullDownMenu(MenuBuilder?: JavascriptMenuBuilder,InMenuLabel?: string,InToolTip?: string,InPullDownMenu?: JavascriptFunction,InExtensionHook?: string,InTutorialHighlightName?: string): {MenuBuilder: JavascriptMenuBuilder};
	static AddMenuExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddMenubarExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static C(Other: UObject): JavascriptMenuLibrary;
}

declare class JavascriptMultiBox extends Widget { 
	OnHook: UnrealEngineDelegate<(Id: string, Self: JavascriptMultiBox, CurrentBuilder: JavascriptMenuBuilder) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptMultiBox;
	static Find(Outer: UObject, ResourceName: string): JavascriptMultiBox;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptMultiBox;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMultiBox;
	static Bind(Builder: JavascriptMenuBuilder): void;
	AddSubMenu(Builder?: JavascriptMenuBuilder,Id?: string,Label?: string,ToolTip?: string,bInOpenSubMenuOnClick?: boolean): {Builder: JavascriptMenuBuilder};
	AddPullDownMenu(Builder?: JavascriptMenuBuilder,Id?: string,Label?: string,ToolTip?: string): {Builder: JavascriptMenuBuilder};
	static C(Other: UObject): JavascriptMultiBox;
}

declare class JavascriptSlateTextRun { 
	clone() : JavascriptSlateTextRun;
	static C(Other: UObject): JavascriptSlateTextRun;
}

declare class JavascriptTextModel extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptTextModel;
	static Find(Outer: UObject, ResourceName: string): JavascriptTextModel;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptTextModel;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptTextModel;
	SetString(String: string): void;
	GetString(): string;
	CreateRun(MessageTextStyle: TextBlockStyle,BeginIndex: number,EndIndex: number): JavascriptSlateTextRun;
	static C(Other: UObject): JavascriptTextModel;
}

declare class JavascriptTextLayout { 
	clone() : JavascriptTextLayout;
	static C(Other: UObject): JavascriptTextLayout;
	AddLine(Model?: JavascriptTextModel,Runs?: JavascriptSlateTextRun[]): {TextLayout: JavascriptTextLayout};
	ClearLines(): {TextLayout: JavascriptTextLayout};
	GetAsText(): string;
	GetLineLength(): number;
	static AddLine(TextLayout?: JavascriptTextLayout,Model?: JavascriptTextModel,Runs?: JavascriptSlateTextRun[]): {TextLayout: JavascriptTextLayout};
	static ClearLines(TextLayout?: JavascriptTextLayout): {TextLayout: JavascriptTextLayout};
	static GetAsText(TextLayout: JavascriptTextLayout): string;
	static GetLineLength(TargetTextLayout: JavascriptTextLayout): number;
}

declare class JavascriptMultiLineEditableTextBox extends MultiLineEditableTextBox { 
	OnVScrollBarUserScrolled: UnrealEngineMulticastDelegate<(Offset: number) => void>;
	GetTextDelegate: UnrealEngineDelegate<(TextLayout: JavascriptTextLayout) => string>;
	SetTextDelegate: UnrealEngineDelegate<(InText: string, TextLayout: JavascriptTextLayout) => void>;
	bIsReadOnly: boolean;
	bAlwaysShowScrollbars: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptMultiLineEditableTextBox;
	static Find(Outer: UObject, ResourceName: string): JavascriptMultiLineEditableTextBox;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptMultiLineEditableTextBox;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMultiLineEditableTextBox;
	ScrollTo(Line: number,Offset: number): void;
	Refresh(): void;
	GoTo(Line: number,Offset: number): void;
	static C(Other: UObject): JavascriptMultiLineEditableTextBox;
}

declare class JavascriptRichTextBlockHyperlinkDecorator extends RichTextBlockDecorator { 
	HyperlinkId: string;
	OnClick: UnrealEngineMulticastDelegate<(Self: JavascriptRichTextBlockHyperlinkDecorator) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptRichTextBlockHyperlinkDecorator;
	static Find(Outer: UObject, ResourceName: string): JavascriptRichTextBlockHyperlinkDecorator;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptRichTextBlockHyperlinkDecorator;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptRichTextBlockHyperlinkDecorator;
	GetMetadata(Key: string): string;
	static C(Other: UObject): JavascriptRichTextBlockHyperlinkDecorator;
}

declare class JavascriptSearchBox extends Widget { 
	OnTextChanged: UnrealEngineMulticastDelegate<(Text: string) => void>;
	OnTextCommitted: UnrealEngineMulticastDelegate<(Text: string, CommitMethod: ETextCommit) => void>;
	Text: string;
	TextDelegate: UnrealEngineDelegate<() => string>;
	HintText: string;
	HintTextDelegate: UnrealEngineDelegate<() => string>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptSearchBox;
	static Find(Outer: UObject, ResourceName: string): JavascriptSearchBox;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptSearchBox;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSearchBox;
	SetText(InText: string): void;
	SetHintText(InHintText: string): void;
	static C(Other: UObject): JavascriptSearchBox;
}

declare class JavascriptStyleSet { 
	StyleSetName: string;
	clone() : JavascriptStyleSet;
	static C(Other: UObject): JavascriptStyleSet;
	GetBrush(StyleName: string): SlateBrush;
	GetButtonStyle(StyleName: string): ButtonStyle;
	GetCheckBoxStyle(StyleName: string): CheckBoxStyle;
	GetColor(StyleName: string): LinearColor;
	GetComboBoxStyle(StyleName: string): ComboBoxStyle;
	GetComboButtonStyle(StyleName: string): ComboButtonStyle;
	GetEditableTextBoxStyle(StyleName: string): EditableTextBoxStyle;
	GetEditableTextStyle(StyleName: string): EditableTextStyle;
	GetFloat(StyleName: string): number;
	GetFontStyle(StyleName: string): SlateFontInfo;
	GetMargin(StyleName: string): Margin;
	GetSlateColor(StyleName: string): SlateColor;
	GetSound(StyleName: string): SlateSound;
	GetTextBlockStyle(StyleName: string): TextBlockStyle;
	GetVector(StyleName: string): Vector2D;
	static GetBrush(Handle: JavascriptStyleSet,StyleName: string): SlateBrush;
	static GetButtonStyle(Handle: JavascriptStyleSet,StyleName: string): ButtonStyle;
	static GetCheckBoxStyle(Handle: JavascriptStyleSet,StyleName: string): CheckBoxStyle;
	static GetColor(Handle: JavascriptStyleSet,StyleName: string): LinearColor;
	static GetComboBoxStyle(Handle: JavascriptStyleSet,StyleName: string): ComboBoxStyle;
	static GetComboButtonStyle(Handle: JavascriptStyleSet,StyleName: string): ComboButtonStyle;
	static GetEditableTextBoxStyle(Handle: JavascriptStyleSet,StyleName: string): EditableTextBoxStyle;
	static GetEditableTextStyle(Handle: JavascriptStyleSet,StyleName: string): EditableTextStyle;
	static GetFloat(Handle: JavascriptStyleSet,StyleName: string): number;
	static GetFontStyle(Handle: JavascriptStyleSet,StyleName: string): SlateFontInfo;
	static GetMargin(Handle: JavascriptStyleSet,StyleName: string): Margin;
	static GetSlateColor(Handle: JavascriptStyleSet,StyleName: string): SlateColor;
	static GetSound(Handle: JavascriptStyleSet,StyleName: string): SlateSound;
	static GetTextBlockStyle(Handle: JavascriptStyleSet,StyleName: string): TextBlockStyle;
	static GetVector(Handle: JavascriptStyleSet,StyleName: string): Vector2D;
}

declare class JavascriptStyleSetLibrary extends BlueprintFunctionLibrary { 
	SlateColor: SlateColor;
	SlateBrush: SlateBrush;
	ButtonStyle: ButtonStyle;
	TextBlockStyle: TextBlockStyle;
	EditableTextStyle: EditableTextStyle;
	EditableTextBoxStyle: EditableTextBoxStyle;
	CheckBoxStyle: CheckBoxStyle;
	ComboBoxStyle: ComboBoxStyle;
	ComboButtonStyle: ComboButtonStyle;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptStyleSetLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptStyleSetLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptStyleSetLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptStyleSetLibrary;
	static GetVector(Handle: JavascriptStyleSet,StyleName: string): Vector2D;
	static GetTextBlockStyle(Handle: JavascriptStyleSet,StyleName: string): TextBlockStyle;
	static GetSound(Handle: JavascriptStyleSet,StyleName: string): SlateSound;
	static GetSlateColor(Handle: JavascriptStyleSet,StyleName: string): SlateColor;
	static GetMargin(Handle: JavascriptStyleSet,StyleName: string): Margin;
	static GetFontStyle(Handle: JavascriptStyleSet,StyleName: string): SlateFontInfo;
	static GetFloat(Handle: JavascriptStyleSet,StyleName: string): number;
	static GetEditableTextStyle(Handle: JavascriptStyleSet,StyleName: string): EditableTextStyle;
	static GetEditableTextBoxStyle(Handle: JavascriptStyleSet,StyleName: string): EditableTextBoxStyle;
	static GetComboButtonStyle(Handle: JavascriptStyleSet,StyleName: string): ComboButtonStyle;
	static GetComboBoxStyle(Handle: JavascriptStyleSet,StyleName: string): ComboBoxStyle;
	static GetColor(Handle: JavascriptStyleSet,StyleName: string): LinearColor;
	static GetCheckBoxStyle(Handle: JavascriptStyleSet,StyleName: string): CheckBoxStyle;
	static GetButtonStyle(Handle: JavascriptStyleSet,StyleName: string): ButtonStyle;
	static GetBrush(Handle: JavascriptStyleSet,StyleName: string): SlateBrush;
	static C(Other: UObject): JavascriptStyleSetLibrary;
}

declare class JavascriptTextBlock extends TextBlock { 
	HighlightText: string;
	HighlightTextDelegate: UnrealEngineDelegate<() => string>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptTextBlock;
	static Find(Outer: UObject, ResourceName: string): JavascriptTextBlock;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptTextBlock;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptTextBlock;
	SetHighlightText(InHighlightText: string): void;
	static C(Other: UObject): JavascriptTextBlock;
}

declare class JavascriptTileView extends TileView { 
	JavascriptContext: JavascriptContext;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptTileView;
	static Find(Outer: UObject, ResourceName: string): JavascriptTileView;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptTileView;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptTileView;
	OnSelectionChanged(UObject: UObject,Type: ESelectInfo): void;
	OnDoubleClick(UObject: UObject): void;
	OnClick(UObject: UObject): void;
	static C(Other: UObject): JavascriptTileView;
}

declare class TableColumnHeaderStyle extends SlateWidgetStyle { 
	SortPrimaryAscendingImage: SlateBrush;
	SortPrimaryDescendingImage: SlateBrush;
	SortSecondaryAscendingImage: SlateBrush;
	SortSecondaryDescendingImage: SlateBrush;
	NormalBrush: SlateBrush;
	HoveredBrush: SlateBrush;
	MenuDropdownImage: SlateBrush;
	MenuDropdownNormalBorderBrush: SlateBrush;
	MenuDropdownHoveredBorderBrush: SlateBrush;
	clone() : TableColumnHeaderStyle;
	static C(Other: UObject): TableColumnHeaderStyle;
}

declare class SplitterStyle extends SlateWidgetStyle { 
	HandleNormalBrush: SlateBrush;
	HandleHighlightBrush: SlateBrush;
	clone() : SplitterStyle;
	static C(Other: UObject): SplitterStyle;
}

declare class HeaderRowStyle extends SlateWidgetStyle { 
	ColumnStyle: TableColumnHeaderStyle;
	LastColumnStyle: TableColumnHeaderStyle;
	ColumnSplitterStyle: SplitterStyle;
	BackgroundBrush: SlateBrush;
	ForegroundColor: SlateColor;
	clone() : HeaderRowStyle;
	static C(Other: UObject): HeaderRowStyle;
}

declare class JavascriptColumn { 
	Id: string;
	Width: number;
	Widget: Widget;
	clone() : JavascriptColumn;
	static C(Other: UObject): JavascriptColumn;
}

declare class JavascriptTreeView extends TableViewBase { 
	OnGenerateRowEvent: UnrealEngineDelegate<(UObject: UObject, Id: string, Instance: JavascriptTreeView) => Widget>;
	OnExpansionChanged: UnrealEngineDelegate<(Item: UObject, bExpanded: boolean, Instance: JavascriptTreeView) => void>;
	OnContextMenuOpening: UnrealEngineDelegate<(Instance: JavascriptTreeView) => Widget>;
	OnGetChildren: UnrealEngineDelegate<(Item: UObject, Instance: JavascriptTreeView) => void>;
	JavascriptContext: JavascriptContext;
	Items: UObject[];
	HeaderRowStyle: HeaderRowStyle;
	TableRowStyle: TableRowStyle;
	ScrollBarStyle: ScrollBarStyle;
	SelectionMode: ESelectionMode;
	Children: UObject[];
	Columns: JavascriptColumn[];
	ColumnWidgets: Widget[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptTreeView;
	static Find(Outer: UObject, ResourceName: string): JavascriptTreeView;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptTreeView;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptTreeView;
	SetSingleExpandedItem(InItem: UObject): void;
	SetSelection(SoleSelectedItem: UObject): void;
	SetItemExpansion(InItem: UObject,InShouldExpandItem: boolean): void;
	RequestTreeRefresh(): void;
	OnSelectionChanged(UObject: UObject,Type: ESelectInfo): void;
	OnDoubleClick(UObject: UObject): void;
	IsItemExpanded(InItem: UObject): boolean;
	GetSelectedItems(OutItems?: UObject[]): {OutItems: UObject[]};
	static C(Other: UObject): JavascriptTreeView;
}

declare class JavascriptListView extends JavascriptTreeView { 
	ItemHeight: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptListView;
	static Find(Outer: UObject, ResourceName: string): JavascriptListView;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptListView;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptListView;
	SetSelection(SoleSelectedItem: UObject): void;
	RequestListRefresh(): void;
	OnClick(UObject: UObject): void;
	GetSelectedItems(OutItems?: UObject[]): {OutItems: UObject[]};
	static C(Other: UObject): JavascriptListView;
}

declare class JavascriptUICommands extends UObject { 
	OnExecuteAction: UnrealEngineDelegate<(Id: string) => void>;
	OnCanExecuteAction: UnrealEngineDelegate<(Id: string) => boolean>;
	OnIsActionChecked: UnrealEngineDelegate<(Id: string) => boolean>;
	OnIsActionButtonVisible: UnrealEngineDelegate<(Id: string) => boolean>;
	Commands: JavascriptUICommand[];
	ContextName: string;
	ContextDesc: string;
	ContextNameParent: string;
	StyleSetName: string;
	CommandInfos: JavascriptUICommandInfo[];
	BindingContext: JavascriptBindingContext;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptUICommands;
	static Find(Outer: UObject, ResourceName: string): JavascriptUICommands;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptUICommands;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUICommands;
	Uninitialize(): void;
	Unbind(List: JavascriptUICommandList): void;
	Refresh(): void;
	Initialize(): void;
	GetAction(Id: string): JavascriptUICommandInfo;
	Discard(): void;
	Commit(): void;
	static BroadcastCommandsChanged(): void;
	Bind(List: JavascriptUICommandList): void;
	static C(Other: UObject): JavascriptUICommands;
}

declare class JavascriptUMGBlueprintLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptUMGBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptUMGBlueprintLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptUMGBlueprintLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUMGBlueprintLibrary;
	static SlateColor_UseSubduedForeground(): SlateColor;
	static SlateColor_UseForeground(): SlateColor;
	static GetLineLength(TargetTextLayout: JavascriptTextLayout): number;
	static GetAsText(TextLayout: JavascriptTextLayout): string;
	static DrawSpaceSpline(Context?: PaintContext,InStart?: Vector2D,InStartDir?: Vector2D,InEnd?: Vector2D,InEndDir?: Vector2D,InThickness?: number,InTint?: LinearColor): {Context: PaintContext};
	static ClearLines(TextLayout?: JavascriptTextLayout): {TextLayout: JavascriptTextLayout};
	static AddLine(TextLayout?: JavascriptTextLayout,Model?: JavascriptTextModel,Runs?: JavascriptSlateTextRun[]): {TextLayout: JavascriptTextLayout};
	static C(Other: UObject): JavascriptUMGBlueprintLibrary;
}

declare class JavascriptWidget extends UserWidget { 
	JavascriptContext: JavascriptContext;
	OnInputActionEvent: UnrealEngineMulticastDelegate<(ActionName: string) => void>;
	ContentSlot: PanelSlot;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptWidget;
	static Find(Outer: UObject, ResourceName: string): JavascriptWidget;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptWidget;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWidget;
	SetRootWidget(Widget: Widget): void;
	RemoveChild(): boolean;
	OnListenForInputAction(ActionName: string,EventType: EInputEvent,bConsume: boolean): void;
	OnInputActionByName(ActionName: string): void;
	static HasValidCachedWidget(Widget: Widget): boolean;
	static CallSynchronizeProperties(WidgetOrSlot: Visual): void;
	AddChild(Content: Widget): PanelSlot;
	static C(Other: UObject): JavascriptWidget;
}

declare type EJavascriptWindowType = string | symbol;
declare var EJavascriptWindowType = { Normal:'Normal',Menu:'Menu',ToolTip:'ToolTip',Notification:'Notification',CursorDecorator:'CursorDecorator', };
declare class WindowStyle extends SlateWidgetStyle { 
	MinimizeButtonStyle: ButtonStyle;
	MaximizeButtonStyle: ButtonStyle;
	RestoreButtonStyle: ButtonStyle;
	CloseButtonStyle: ButtonStyle;
	TitleTextStyle: TextBlockStyle;
	ActiveTitleBrush: SlateBrush;
	InactiveTitleBrush: SlateBrush;
	FlashTitleBrush: SlateBrush;
	OutlineBrush: SlateBrush;
	OutlineColor: SlateColor;
	BorderBrush: SlateBrush;
	BackgroundBrush: SlateBrush;
	ChildBackgroundBrush: SlateBrush;
	clone() : WindowStyle;
	static C(Other: UObject): WindowStyle;
}

declare type EJavascriptAutoCenter = string | symbol;
declare var EJavascriptAutoCenter = { None:'None',PrimaryWorkArea:'PrimaryWorkArea',PreferredWorkArea:'PreferredWorkArea', };
declare type EJavascriptWindowTransparency = string | symbol;
declare var EJavascriptWindowTransparency = { None:'None',PerWindow:'PerWindow', };
declare type EJavascriptSizingRule = string | symbol;
declare var EJavascriptSizingRule = { FixedSize:'FixedSize',Autosized:'Autosized',UserSized:'UserSized', };
declare class JavascriptWindow extends ContentWidget { 
	Type: EJavascriptWindowType;
	Style: WindowStyle;
	Title: string;
	bDragAnywhere: boolean;
	AutoCenter: EJavascriptAutoCenter;
	ScreenPosition: Vector2D;
	ClientSize: Vector2D;
	SupportsTransparency: EJavascriptWindowTransparency;
	InitialOpacity: number;
	IsInitiallyMaximized: boolean;
	SizingRule: EJavascriptSizingRule;
	IsPopupWindow: boolean;
	FocusWhenFirstShown: boolean;
	ActivateWhenFirstShown: boolean;
	UseOSWindowBorder: boolean;
	HasCloseButton: boolean;
	SupportsMaximize: boolean;
	SupportsMinimize: boolean;
	CreateTitleBar: boolean;
	SaneWindowPlacement: boolean;
	LayoutBorder: Margin;
	UserResizeBorder: Margin;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptWindow;
	static Find(Outer: UObject, ResourceName: string): JavascriptWindow;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptWindow;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWindow;
	ShowWindow(): void;
	SetOpacity(InOpacity: number): void;
	Resize(NewSize: Vector2D): void;
	ReshapeWindow(NewPosition: Vector2D,NewSize: Vector2D): void;
	RequestDestroyWindow(): void;
	MoveWindowTo(NewPosition: Vector2D): void;
	HideWindow(): void;
	FlashWindow(): void;
	EnableWindow(bEnable: boolean): void;
	DestroyWindowImmediately(): void;
	BringToFront(): void;
	static C(Other: UObject): JavascriptWindow;
}

declare type EJavascriptHttpRequestStatus = string | symbol;
declare var EJavascriptHttpRequestStatus = { NotStarted:'NotStarted',Processing:'Processing',Failed:'Failed',Succeeded:'Succeeded', };
declare class JavascriptHttpRequest extends UObject { 
	OnComplete: UnrealEngineDelegate<(successful: boolean) => void>;
	OnProgress: UnrealEngineDelegate<(sent: number, recv: number) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptHttpRequest;
	static Find(Outer: UObject, ResourceName: string): JavascriptHttpRequest;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptHttpRequest;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptHttpRequest;
	SetVerb(Verb: string): void;
	SetURL(URL: string): void;
	SetHeader(HeaderName: string,HeaderValue: string): void;
	SetContentFromMemory(): void;
	SetContentAsString(ContentString: string): void;
	ProcessRequest(): boolean;
	GetVerb(): string;
	GetStatus(): EJavascriptHttpRequestStatus;
	GetResponseCode(): number;
	GetElapsedTime(): number;
	GetContentToMemory(): void;
	GetContentLength(): number;
	GetContentAsString(): string;
	CancelRequest(): void;
	static C(Other: UObject): JavascriptHttpRequest;
}

declare class JavascriptWebSocket extends UObject { 
	OnReceived: UnrealEngineMulticastDelegate<() => void>;
	OnConnected: UnrealEngineMulticastDelegate<() => void>;
	OnError: UnrealEngineMulticastDelegate<() => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptWebSocket;
	static Find(Outer: UObject, ResourceName: string): JavascriptWebSocket;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptWebSocket;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWebSocket;
	Tick(): void;
	SendMemory(NumBytes: number): void;
	RemoteEndPoint(): string;
	LocalEndPoint(): string;
	GetReceivedBytes(): number;
	Flush(): void;
	Dispose(): void;
	CopyBuffer(): void;
	static Connect(Endpoint: string): JavascriptWebSocket;
	static C(Other: UObject): JavascriptWebSocket;
}

declare class JavascriptWebSocketServer extends UObject { 
	OnConnected: UnrealEngineMulticastDelegate<(WebSocket: JavascriptWebSocket) => void>;
	Connections: JavascriptWebSocket[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptWebSocketServer;
	static Find(Outer: UObject, ResourceName: string): JavascriptWebSocketServer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptWebSocketServer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWebSocketServer;
	Tick(): void;
	Info(): string;
	Dispose(): void;
	static Create(Port: number): JavascriptWebSocketServer;
	static C(Other: UObject): JavascriptWebSocketServer;
}

declare class TcpMessagingSettings extends UObject { 
	EnableTransport: boolean;
	ListenEndpoint: string;
	ConnectToEndpoints: string[];
	ConnectionRetryDelay: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TcpMessagingSettings;
	static Find(Outer: UObject, ResourceName: string): TcpMessagingSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TcpMessagingSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TcpMessagingSettings;
	static C(Other: UObject): TcpMessagingSettings;
}

declare class UdpMessagingSettings extends UObject { 
	EnableTransport: boolean;
	UnicastEndpoint: string;
	MulticastEndpoint: string;
	MulticastTimeToLive: number;
	StaticEndpoints: string[];
	EnableTunnel: boolean;
	TunnelUnicastEndpoint: string;
	TunnelMulticastEndpoint: string;
	RemoteTunnelEndpoints: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): UdpMessagingSettings;
	static Find(Outer: UObject, ResourceName: string): UdpMessagingSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): UdpMessagingSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UdpMessagingSettings;
	static C(Other: UObject): UdpMessagingSettings;
}

declare class FlipbookEditorSettings extends UObject { 
	BackgroundColor: Color;
	bShowGridByDefault: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): FlipbookEditorSettings;
	static Find(Outer: UObject, ResourceName: string): FlipbookEditorSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): FlipbookEditorSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FlipbookEditorSettings;
	static C(Other: UObject): FlipbookEditorSettings;
}

declare type ESpriteExtractMode = string | symbol;
declare var ESpriteExtractMode = { Auto:'Auto',Grid:'Grid', };
declare class PaperExtractSpritesSettings extends UObject { 
	SpriteExtractMode: ESpriteExtractMode;
	OutlineColor: LinearColor;
	ViewportTextureTint: LinearColor;
	BackgroundColor: LinearColor;
	NamingTemplate: string;
	NamingStartIndex: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperExtractSpritesSettings;
	static Find(Outer: UObject, ResourceName: string): PaperExtractSpritesSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperExtractSpritesSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperExtractSpritesSettings;
	static C(Other: UObject): PaperExtractSpritesSettings;
}

declare class PaperExtractSpriteGridSettings extends UObject { 
	CellWidth: number;
	CellHeight: number;
	NumCellsX: number;
	NumCellsY: number;
	MarginX: number;
	MarginY: number;
	SpacingX: number;
	SpacingY: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperExtractSpriteGridSettings;
	static Find(Outer: UObject, ResourceName: string): PaperExtractSpriteGridSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperExtractSpriteGridSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperExtractSpriteGridSettings;
	static C(Other: UObject): PaperExtractSpriteGridSettings;
}

declare class PaperFlipbookActorFactory extends ActorFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperFlipbookActorFactory;
	static Find(Outer: UObject, ResourceName: string): PaperFlipbookActorFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperFlipbookActorFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookActorFactory;
	static C(Other: UObject): PaperFlipbookActorFactory;
}

declare class PaperFlipbookFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperFlipbookFactory;
	static Find(Outer: UObject, ResourceName: string): PaperFlipbookFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperFlipbookFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookFactory;
	static C(Other: UObject): PaperFlipbookFactory;
}

declare class PaperImporterSettings extends UObject { 
	bPickBestMaterialWhenCreatingSprites: boolean;
	bPickBestMaterialWhenCreatingTileMaps: boolean;
	bAnalysisCanUseOpaque: boolean;
	DefaultPixelsPerUnrealUnit: number;
	NormalMapTextureSuffixes: string[];
	BaseMapTextureSuffixes: string[];
	DefaultSpriteTextureGroup: TextureGroup;
	bOverrideTextureCompression: boolean;
	DefaultSpriteTextureCompression: TextureCompressionSettings;
	UnlitDefaultMaskedMaterialName: StringAssetReference;
	UnlitDefaultTranslucentMaterialName: StringAssetReference;
	UnlitDefaultOpaqueMaterialName: StringAssetReference;
	LitDefaultMaskedMaterialName: StringAssetReference;
	LitDefaultTranslucentMaterialName: StringAssetReference;
	LitDefaultOpaqueMaterialName: StringAssetReference;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperImporterSettings;
	static Find(Outer: UObject, ResourceName: string): PaperImporterSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperImporterSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperImporterSettings;
	static C(Other: UObject): PaperImporterSettings;
}

declare class PaperSpriteActorFactory extends ActorFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteActorFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteActorFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteActorFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteActorFactory;
	static C(Other: UObject): PaperSpriteActorFactory;
}

declare class PaperSpriteAtlasFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteAtlasFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteAtlasFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteAtlasFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteAtlasFactory;
	static C(Other: UObject): PaperSpriteAtlasFactory;
}

declare class PaperSpriteFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteFactory;
	static C(Other: UObject): PaperSpriteFactory;
}

declare class PaperSpriteThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteThumbnailRenderer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteThumbnailRenderer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteThumbnailRenderer;
	static C(Other: UObject): PaperSpriteThumbnailRenderer;
}

declare class PaperFlipbookThumbnailRenderer extends PaperSpriteThumbnailRenderer { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperFlipbookThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): PaperFlipbookThumbnailRenderer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperFlipbookThumbnailRenderer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookThumbnailRenderer;
	static C(Other: UObject): PaperFlipbookThumbnailRenderer;
}

declare class PaperTileMapFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileMapFactory;
	static Find(Outer: UObject, ResourceName: string): PaperTileMapFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileMapFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMapFactory;
	static C(Other: UObject): PaperTileMapFactory;
}

declare class PaperTileMapPromotionFactory extends Factory { 
	AssetToRename: PaperTileMap;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileMapPromotionFactory;
	static Find(Outer: UObject, ResourceName: string): PaperTileMapPromotionFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileMapPromotionFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMapPromotionFactory;
	static C(Other: UObject): PaperTileMapPromotionFactory;
}

declare class PaperTileSetFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileSetFactory;
	static Find(Outer: UObject, ResourceName: string): PaperTileSetFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileSetFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileSetFactory;
	static C(Other: UObject): PaperTileSetFactory;
}

declare class PaperTileSetThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTileSetThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): PaperTileSetThumbnailRenderer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTileSetThumbnailRenderer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileSetThumbnailRenderer;
	static C(Other: UObject): PaperTileSetThumbnailRenderer;
}

declare class SpriteEditorSettings extends UObject { 
	BackgroundColor: Color;
	bShowGridByDefault: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SpriteEditorSettings;
	static Find(Outer: UObject, ResourceName: string): SpriteEditorSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SpriteEditorSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpriteEditorSettings;
	static C(Other: UObject): SpriteEditorSettings;
}

declare class TerrainSplineActorFactory extends ActorFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TerrainSplineActorFactory;
	static Find(Outer: UObject, ResourceName: string): TerrainSplineActorFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TerrainSplineActorFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TerrainSplineActorFactory;
	static C(Other: UObject): TerrainSplineActorFactory;
}

declare class TileMapActorFactory extends ActorFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TileMapActorFactory;
	static Find(Outer: UObject, ResourceName: string): TileMapActorFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TileMapActorFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileMapActorFactory;
	static C(Other: UObject): TileMapActorFactory;
}

declare class TileSetImportMapping { 
	SourceName: string;
	ImportedTileSet: any;
	ImportedTexture: any;
	clone() : TileSetImportMapping;
	static C(Other: UObject): TileSetImportMapping;
}

declare class TileMapAssetImportData extends AssetImportData { 
	TileSetMap: TileSetImportMapping[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TileMapAssetImportData;
	static Find(Outer: UObject, ResourceName: string): TileMapAssetImportData;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TileMapAssetImportData;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileMapAssetImportData;
	static C(Other: UObject): TileMapAssetImportData;
}

declare class TileMapEditorSettings extends UObject { 
	DefaultBackgroundColor: Color;
	bShowGridByDefault: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TileMapEditorSettings;
	static Find(Outer: UObject, ResourceName: string): TileMapEditorSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TileMapEditorSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileMapEditorSettings;
	static C(Other: UObject): TileMapEditorSettings;
}

declare class TileSetEditorSettings extends UObject { 
	DefaultBackgroundColor: Color;
	bShowGridByDefault: boolean;
	ExtrusionAmount: number;
	bPadToPowerOf2: boolean;
	bFillWithTransparentBlack: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TileSetEditorSettings;
	static Find(Outer: UObject, ResourceName: string): TileSetEditorSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TileSetEditorSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileSetEditorSettings;
	static C(Other: UObject): TileSetEditorSettings;
}

declare class TileSheetPaddingFactory extends Factory { 
	SourceTileSet: PaperTileSet;
	ExtrusionAmount: number;
	bPadToPowerOf2: boolean;
	bFillWithTransparentBlack: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TileSheetPaddingFactory;
	static Find(Outer: UObject, ResourceName: string): TileSheetPaddingFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TileSheetPaddingFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileSheetPaddingFactory;
	static C(Other: UObject): TileSheetPaddingFactory;
}

declare class InternationalizationExportSettings extends UObject { 
	CulturesToGenerate: string[];
	CommandletClass: string;
	SourcePath: string;
	DestinationPath: string;
	PortableObjectName: string;
	ManifestName: string;
	ArchiveName: string;
	bExportLoc: boolean;
	bImportLoc: boolean;
	bUseCultureDirectory: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): InternationalizationExportSettings;
	static Find(Outer: UObject, ResourceName: string): InternationalizationExportSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): InternationalizationExportSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InternationalizationExportSettings;
	static C(Other: UObject): InternationalizationExportSettings;
}

declare class TranslationPickerSettings extends UObject { 
	bSubmitTranslationPickerChangesToLocalizationService: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TranslationPickerSettings;
	static Find(Outer: UObject, ResourceName: string): TranslationPickerSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TranslationPickerSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TranslationPickerSettings;
	static C(Other: UObject): TranslationPickerSettings;
}

declare class TranslationChange { 
	Version: string;
	DateAndTime: DateTime;
	Source: string;
	Translation: string;
	clone() : TranslationChange;
	static C(Other: UObject): TranslationChange;
}

declare class TranslationContextInfo { 
	Key: string;
	Context: string;
	Changes: TranslationChange[];
	clone() : TranslationContextInfo;
	static C(Other: UObject): TranslationContextInfo;
}

declare class TranslationUnit extends UObject { 
	Namespace: string;
	Source: string;
	Translation: string;
	Contexts: TranslationContextInfo[];
	HasBeenReviewed: boolean;
	TranslationBeforeImport: string;
	LocresPath: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TranslationUnit;
	static Find(Outer: UObject, ResourceName: string): TranslationUnit;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TranslationUnit;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TranslationUnit;
	static C(Other: UObject): TranslationUnit;
}

declare class PixelInspectorView extends UObject { 
	FinalColor: LinearColor;
	SceneColor: LinearColor;
	Luminance: number;
	HdrColor: LinearColor;
	Normal: Vector;
	PerObjectGBufferData: number;
	Metallic: number;
	Specular: number;
	Roughness: number;
	MaterialShadingModel: EMaterialShadingModel;
	SelectiveOutputMask: number;
	BaseColor: LinearColor;
	IndirectIrradiance: number;
	AmbientOcclusion: number;
	SubSurfaceColor: LinearColor;
	SubsurfaceProfile: Vector;
	Opacity: number;
	ClearCoat: number;
	ClearCoatRoughness: number;
	WorldNormal: Vector;
	BackLit: number;
	Cloth: number;
	EyeTangent: Vector;
	IrisMask: number;
	IrisDistance: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PixelInspectorView;
	static Find(Outer: UObject, ResourceName: string): PixelInspectorView;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PixelInspectorView;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PixelInspectorView;
	static C(Other: UObject): PixelInspectorView;
}

declare class PaperSpriteSheet extends UObject { 
	SpriteNames: string[];
	Sprites: any[];
	TextureName: string;
	Texture: Texture2D;
	NormalMapTextureName: string;
	NormalMapTexture: Texture2D;
	AssetImportData: AssetImportData;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteSheet;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteSheet;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteSheet;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteSheet;
	static C(Other: UObject): PaperSpriteSheet;
}

declare class PaperSpriteSheetImportFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteSheetImportFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteSheetImportFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteSheetImportFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteSheetImportFactory;
	static C(Other: UObject): PaperSpriteSheetImportFactory;
}

declare class PaperSpriteSheetReimportFactory extends PaperSpriteSheetImportFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperSpriteSheetReimportFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteSheetReimportFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperSpriteSheetReimportFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteSheetReimportFactory;
	static C(Other: UObject): PaperSpriteSheetReimportFactory;
}

declare class PaperTiledImporterFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PaperTiledImporterFactory;
	static Find(Outer: UObject, ResourceName: string): PaperTiledImporterFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PaperTiledImporterFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTiledImporterFactory;
	static C(Other: UObject): PaperTiledImporterFactory;
}

declare class LightPropagationVolumeBlendableFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): LightPropagationVolumeBlendableFactory;
	static Find(Outer: UObject, ResourceName: string): LightPropagationVolumeBlendableFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): LightPropagationVolumeBlendableFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LightPropagationVolumeBlendableFactory;
	static C(Other: UObject): LightPropagationVolumeBlendableFactory;
}

declare class MyPluginStruct { 
	TestString: string;
	clone() : MyPluginStruct;
	static C(Other: UObject): MyPluginStruct;
}

declare class MyPluginObject extends UObject { 
	MyStruct: MyPluginStruct;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): MyPluginObject;
	static Find(Outer: UObject, ResourceName: string): MyPluginObject;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): MyPluginObject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MyPluginObject;
	static C(Other: UObject): MyPluginObject;
}

declare class PluginMetadataObject extends UObject { 
	Version: number;
	VersionName: string;
	FriendlyName: string;
	Description: string;
	Category: string;
	CreatedBy: string;
	CreatedByURL: string;
	DocsURL: string;
	MarketplaceURL: string;
	SupportURL: string;
	bCanContainContent: boolean;
	bIsBetaVersion: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PluginMetadataObject;
	static Find(Outer: UObject, ResourceName: string): PluginMetadataObject;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PluginMetadataObject;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PluginMetadataObject;
	static C(Other: UObject): PluginMetadataObject;
}

declare class SpeedTreeImportFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SpeedTreeImportFactory;
	static Find(Outer: UObject, ResourceName: string): SpeedTreeImportFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SpeedTreeImportFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpeedTreeImportFactory;
	static C(Other: UObject): SpeedTreeImportFactory;
}

declare class ReimportSpeedTreeFactory extends SpeedTreeImportFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ReimportSpeedTreeFactory;
	static Find(Outer: UObject, ResourceName: string): ReimportSpeedTreeFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ReimportSpeedTreeFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ReimportSpeedTreeFactory;
	static C(Other: UObject): ReimportSpeedTreeFactory;
}

declare type ETutorialContent = string | symbol;
declare var ETutorialContent = { None:'None',Text:'Text',UDNExcerpt:'UDNExcerpt',RichText:'RichText', };
declare class TutorialContent { 
	Type: ETutorialContent;
	Content: string;
	ExcerptName: string;
	Text: string;
	clone() : TutorialContent;
	static C(Other: UObject): TutorialContent;
}

declare type ETutorialAnchorIdentifier = string | symbol;
declare var ETutorialAnchorIdentifier = { None:'None',NamedWidget:'NamedWidget',Asset:'Asset', };
declare class TutorialContentAnchor { 
	Type: ETutorialAnchorIdentifier;
	WrapperIdentifier: string;
	Asset: StringAssetReference;
	bDrawHighlight: boolean;
	TabToFocusOrOpen: string;
	FriendlyName: string;
	GUIDString: string;
	OuterName: string;
	clone() : TutorialContentAnchor;
	static C(Other: UObject): TutorialContentAnchor;
}

declare class TutorialWidgetContent { 
	Content: TutorialContent;
	WidgetAnchor: TutorialContentAnchor;
	HorizontalAlignment: EHorizontalAlignment;
	VerticalAlignment: EVerticalAlignment;
	Offset: Vector2D;
	ContentWidth: number;
	bAutoFocus: boolean;
	clone() : TutorialWidgetContent;
	static C(Other: UObject): TutorialWidgetContent;
}

declare class TutorialStage { 
	Name: string;
	Content: TutorialContent;
	WidgetContent: TutorialWidgetContent[];
	NextButtonText: string;
	BackButtonText: string;
	PlatformsToTest: string[];
	bInvertPlatformTest: boolean;
	clone() : TutorialStage;
	static C(Other: UObject): TutorialStage;
}

declare class EditorTutorial extends UObject { 
	Title: string;
	SortOrder: number;
	Icon: string;
	Texture: Texture2D;
	Category: string;
	SummaryContent: TutorialContent;
	Stages: TutorialStage[];
	PreviousTutorial: StringClassReference;
	NextTutorial: StringClassReference;
	bIsStandalone: boolean;
	AssetToUse: StringAssetReference;
	ImportPath: string;
	bHideInBrowser: boolean;
	SearchTags: string;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EditorTutorial;
	static Find(Outer: UObject, ResourceName: string): EditorTutorial;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EditorTutorial;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorial;
	static SetEngineFolderVisibilty(bNewVisibility: boolean): void;
	static OpenAsset(Asset: UObject): void;
	OnTutorialStageStarted(StageName: string): void;
	OnTutorialStageEnded(StageName: string): void;
	OnTutorialLaunched(): void;
	OnTutorialClosed(): void;
	static GoToPreviousTutorialStage(): void;
	static GoToNextTutorialStage(): void;
	static GetEngineFolderVisibilty(): boolean;
	GetActorReference(PathToActor: string): Actor;
	static BeginTutorial(TutorialToStart: EditorTutorial,bRestart: boolean): void;
	static C(Other: UObject): EditorTutorial;
}

declare class EditorTutorialFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EditorTutorialFactory;
	static Find(Outer: UObject, ResourceName: string): EditorTutorialFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EditorTutorialFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorialFactory;
	static C(Other: UObject): EditorTutorialFactory;
}

declare class EditorTutorialImportFactory extends Factory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EditorTutorialImportFactory;
	static Find(Outer: UObject, ResourceName: string): EditorTutorialImportFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EditorTutorialImportFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorialImportFactory;
	static C(Other: UObject): EditorTutorialImportFactory;
}

declare class TutorialCategory { 
	Identifier: string;
	Title: string;
	SortOrder: number;
	Description: string;
	Icon: string;
	Texture: StringAssetReference;
	clone() : TutorialCategory;
	static C(Other: UObject): TutorialCategory;
}

declare class TutorialContext { 
	Context: string;
	BrowserFilter: string;
	AttractTutorial: StringClassReference;
	LaunchTutorial: StringClassReference;
	clone() : TutorialContext;
	static C(Other: UObject): TutorialContext;
}

declare class EditorTutorialSettings extends UObject { 
	bDisableAllTutorialAlerts: boolean;
	Categories: TutorialCategory[];
	StartupTutorial: StringClassReference;
	TutorialContexts: TutorialContext[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): EditorTutorialSettings;
	static Find(Outer: UObject, ResourceName: string): EditorTutorialSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): EditorTutorialSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorialSettings;
	static C(Other: UObject): EditorTutorialSettings;
}

declare class TutorialSettings extends UObject { 
	Categories: TutorialCategory[];
	StartupTutorial: StringClassReference;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TutorialSettings;
	static Find(Outer: UObject, ResourceName: string): TutorialSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TutorialSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TutorialSettings;
	static C(Other: UObject): TutorialSettings;
}

declare class TutorialProgress { 
	Tutorial: StringClassReference;
	CurrentStage: number;
	bUserDismissed: boolean;
	clone() : TutorialProgress;
	static C(Other: UObject): TutorialProgress;
}

declare class TutorialStateSettings extends UObject { 
	TutorialsProgress: TutorialProgress[];
	bDismissedAllTutorials: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TutorialStateSettings;
	static Find(Outer: UObject, ResourceName: string): TutorialStateSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TutorialStateSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TutorialStateSettings;
	static C(Other: UObject): TutorialStateSettings;
}

declare type ESearchEngine = string | symbol;
declare var ESearchEngine = { Google:'Google',Bing:'Bing', };
declare class SuperSearchSettings extends DeveloperSettings { 
	SearchEngine: ESearchEngine;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): SuperSearchSettings;
	static Find(Outer: UObject, ResourceName: string): SuperSearchSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): SuperSearchSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SuperSearchSettings;
	static C(Other: UObject): SuperSearchSettings;
}

declare class GeometryCacheTrack extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeometryCacheTrack;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrack;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeometryCacheTrack;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrack;
	static C(Other: UObject): GeometryCacheTrack;
}

declare class GeometryCache extends UObject { 
	AssetImportData: AssetImportData;
	ThumbnailInfo: ThumbnailInfo;
	Materials: MaterialInterface[];
	Tracks: GeometryCacheTrack[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeometryCache;
	static Find(Outer: UObject, ResourceName: string): GeometryCache;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeometryCache;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCache;
	static C(Other: UObject): GeometryCache;
}

declare class GeometryCacheComponent extends MeshComponent { 
	GeometryCache: GeometryCache;
	bRunning: boolean;
	bLooping: boolean;
	StartTimeOffset: number;
	PlaybackSpeed: number;
	NumTracks: number;
	ElapsedTime: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeometryCacheComponent;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheComponent;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeometryCacheComponent;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheComponent;
	Stop(): void;
	SetPlaybackSpeed(NewPlaybackSpeed: number): void;
	SetLooping(bNewLooping: boolean): void;
	SetGeometryCache(NewGeomCache: GeometryCache): boolean;
	PlayReversedFromEnd(): void;
	PlayReversed(): void;
	PlayFromStart(): void;
	Play(): void;
	Pause(): void;
	IsPlayingReversed(): boolean;
	IsPlaying(): boolean;
	IsLooping(): boolean;
	GetPlaybackSpeed(): number;
	static C(Other: UObject): GeometryCacheComponent;
}

declare class GeometryCacheActor extends Actor { 
	GeometryCacheComponent: GeometryCacheComponent;
	constructor(InWorld: World, Location?: Vector, Rotation?: Rotator);
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeometryCacheActor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheActor;
	GetGeometryCacheComponent(): GeometryCacheComponent;
	static C(Other: UObject): GeometryCacheActor;
}

declare class GeometryCacheMeshData { 
	clone() : GeometryCacheMeshData;
	static C(Other: UObject): GeometryCacheMeshData;
}

declare class GeometryCacheTrack_FlipbookAnimation extends GeometryCacheTrack { 
	NumMeshSamples: any;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeometryCacheTrack_FlipbookAnimation;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrack_FlipbookAnimation;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeometryCacheTrack_FlipbookAnimation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrack_FlipbookAnimation;
	AddMeshSample(MeshData: GeometryCacheMeshData,SampleTime: number): void;
	static C(Other: UObject): GeometryCacheTrack_FlipbookAnimation;
}

declare class GeometryCacheTrack_TransformAnimation extends GeometryCacheTrack { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeometryCacheTrack_TransformAnimation;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrack_TransformAnimation;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeometryCacheTrack_TransformAnimation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrack_TransformAnimation;
	SetMesh(NewMeshData: GeometryCacheMeshData): void;
	static C(Other: UObject): GeometryCacheTrack_TransformAnimation;
}

declare class GeometryCacheTrack_TransformGroupAnimation extends GeometryCacheTrack { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeometryCacheTrack_TransformGroupAnimation;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrack_TransformGroupAnimation;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeometryCacheTrack_TransformGroupAnimation;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrack_TransformGroupAnimation;
	SetMesh(NewMeshData: GeometryCacheMeshData): void;
	static C(Other: UObject): GeometryCacheTrack_TransformGroupAnimation;
}

declare class AbcAssetImportData extends AssetImportData { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AbcAssetImportData;
	static Find(Outer: UObject, ResourceName: string): AbcAssetImportData;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AbcAssetImportData;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbcAssetImportData;
	static C(Other: UObject): AbcAssetImportData;
}

declare type EAlembicImportType = string | symbol;
declare var EAlembicImportType = { StaticMesh:'StaticMesh',GeometryCache:'GeometryCache',Skeletal:'Skeletal', };
declare type EAlembicSamplingType = string | symbol;
declare var EAlembicSamplingType = { PerFrame:'PerFrame',PerXFrames:'PerXFrames',PerTimeStep:'PerTimeStep', };
declare class AbcSamplingSettings { 
	SamplingType: EAlembicSamplingType;
	FrameSteps: any;
	TimeSteps: number;
	FrameStart: any;
	FrameEnd: any;
	clone() : AbcSamplingSettings;
	static C(Other: UObject): AbcSamplingSettings;
}

declare class AbcNormalGenerationSettings { 
	bForceOneSmoothingGroupPerObject: boolean;
	HardEdgeAngleThreshold: number;
	bRecomputeNormals: boolean;
	bIgnoreDegenerateTriangles: boolean;
	clone() : AbcNormalGenerationSettings;
	static C(Other: UObject): AbcNormalGenerationSettings;
}

declare type EBaseCalculationType = string | symbol;
declare var EBaseCalculationType = { PercentageBased:'PercentageBased',FixedNumber:'FixedNumber',EBaseCalculationType_MAX:'EBaseCalculationType_MAX', };
declare class AbcCompressionSettings { 
	bMergeMeshes: boolean;
	bBakeMatrixAnimation: boolean;
	BaseCalculationType: EBaseCalculationType;
	PercentageOfTotalBases: number;
	MaxNumberOfBases: number;
	MinimumNumberOfVertexInfluencePercentage: number;
	clone() : AbcCompressionSettings;
	static C(Other: UObject): AbcCompressionSettings;
}

declare class AbcMaterialSettings { 
	bCreateMaterials: boolean;
	clone() : AbcMaterialSettings;
	static C(Other: UObject): AbcMaterialSettings;
}

declare class AbcStaticMeshSettings { 
	bMergeMeshes: boolean;
	bPropagateMatrixTransformations: boolean;
	clone() : AbcStaticMeshSettings;
	static C(Other: UObject): AbcStaticMeshSettings;
}

declare class AbcImportSettings extends UObject { 
	ImportType: EAlembicImportType;
	SamplingSettings: AbcSamplingSettings;
	NormalGenerationSettings: AbcNormalGenerationSettings;
	CompressionSettings: AbcCompressionSettings;
	MaterialSettings: AbcMaterialSettings;
	StaticMeshSettings: AbcStaticMeshSettings;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AbcImportSettings;
	static Find(Outer: UObject, ResourceName: string): AbcImportSettings;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AbcImportSettings;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbcImportSettings;
	static C(Other: UObject): AbcImportSettings;
}

declare class AlembicTestCommandlet extends Commandlet { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AlembicTestCommandlet;
	static Find(Outer: UObject, ResourceName: string): AlembicTestCommandlet;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AlembicTestCommandlet;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AlembicTestCommandlet;
	static C(Other: UObject): AlembicTestCommandlet;
}

declare class AlembicImportFactory extends Factory { 
	ImportSettings: AbcImportSettings;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): AlembicImportFactory;
	static Find(Outer: UObject, ResourceName: string): AlembicImportFactory;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): AlembicImportFactory;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AlembicImportFactory;
	static C(Other: UObject): AlembicImportFactory;
}

declare class ActorFactoryGeometryCache extends ActorFactory { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ActorFactoryGeometryCache;
	static Find(Outer: UObject, ResourceName: string): ActorFactoryGeometryCache;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ActorFactoryGeometryCache;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorFactoryGeometryCache;
	static C(Other: UObject): ActorFactoryGeometryCache;
}

declare class GeometryCacheThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): GeometryCacheThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheThumbnailRenderer;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): GeometryCacheThumbnailRenderer;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheThumbnailRenderer;
	static C(Other: UObject): GeometryCacheThumbnailRenderer;
}

declare class WebSocketConnection extends NetConnection { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WebSocketConnection;
	static Find(Outer: UObject, ResourceName: string): WebSocketConnection;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): WebSocketConnection;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WebSocketConnection;
	static C(Other: UObject): WebSocketConnection;
}

declare class WebSocketNetDriver extends NetDriver { 
	WebSocketPort: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): WebSocketNetDriver;
	static Find(Outer: UObject, ResourceName: string): WebSocketNetDriver;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): WebSocketNetDriver;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WebSocketNetDriver;
	static C(Other: UObject): WebSocketNetDriver;
}

declare class JavascriptAssetData { 
	ObjectPath: string;
	PackageName: string;
	PackagePath: string;
	GroupNames: string;
	AssetName: string;
	AssetClass: string;
	ChunkIDs: number[];
	PackageFlags: number;
	clone() : JavascriptAssetData;
	static C(Other: UObject): JavascriptAssetData;
	GetAllTags(OutArray?: string[]): {OutArray: string[]};
	GetAsset(): UObject;
	GetClass(): UnrealEngineClass;
	GetPackage(): Package;
	GetTagValue(Name: string,OutValue?: string): {OutValue: string, $: boolean};
	IsAssetLoaded(): boolean;
	static GetAllTags(AssetData: JavascriptAssetData,OutArray?: string[]): {OutArray: string[]};
	static GetAsset(AssetData: JavascriptAssetData): UObject;
	static GetClass(AssetData: JavascriptAssetData): UnrealEngineClass;
	static GetPackage(AssetData: JavascriptAssetData): Package;
	static GetTagValue(AssetData: JavascriptAssetData,Name: string,OutValue?: string): {OutValue: string, $: boolean};
	static IsAssetLoaded(AssetData: JavascriptAssetData): boolean;
}

declare class JavascriptEditorGlobalDelegates extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorGlobalDelegates;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorGlobalDelegates;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEditorGlobalDelegates;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorGlobalDelegates;
	WorldChange(): void;
	UnbindAll(): void;
	Unbind(Key: string): void;
	SurfProps(): void;
	SingleStepPIE(bIsSimulating: boolean): void;
	SelectedProps(): void;
	ResumePIE(bIsSimulating: boolean): void;
	RefreshPrimitiveStatsBrowser(): void;
	RefreshLayerBrowser(): void;
	RefreshEditor(): void;
	RefreshAllBrowsers(): void;
	RedrawAllViewports(): void;
	PropertySelectionChange(): void;
	PreSaveWorld_Friendly(SaveFlags: number,World: World): void;
	PreBeginPIE(bIsSimulating: boolean): void;
	PostSaveWorld_Friendly(SaveFlags: number,World: World,bSuccess: boolean): void;
	PostLandscapeLayerUpdated(): void;
	OnShutdownPostPackagesSaved(): void;
	OnPathRemoved(Path: string): void;
	OnPathAdded(Path: string): void;
	OnObjectReimported(UObject: UObject): void;
	OnNewAssetCreated(InFactory: Factory): void;
	OnNewActorsDropped(DroppedObjects: UObject[],OutNewActors: Actor[]): void;
	OnMapOpened(Filename: string,bAsTemplate: boolean): void;
	OnLightingBuildStarted(): void;
	OnLightingBuildKept(): void;
	OnInMemoryAssetDeleted(InObject: UObject): void;
	OnInMemoryAssetCreated(InObject: UObject): void;
	OnGridSnappingChanged(bGridEnabled: boolean,GridSize: number): void;
	OnFocusViewportOnActors(Actors: Actor[]): void;
	OnFinishPickingBlueprintClass(InClass: UnrealEngineClass): void;
	OnFilesLoaded(): void;
	OnFileLoadProgressUpdated_Friendly(NumTotalAssets: number,NumAssetsProcessedByAssetRegistry: number,NumAssetsPendingDataLoad: number,bIsDiscoveringAssetFiles: boolean): void;
	OnEditorCameraMoved(ViewLocation: Vector,ViewRotation: Rotator,ViewportType: ELevelViewportType,ViewIndex: number): void;
	OnDollyPerspectiveCamera(Drag: Vector,ViewIndex: number): void;
	OnConfigureNewAssetProperties(InFactory: Factory): void;
	OnClassPackageLoadedOrUnloaded(): void;
	OnBlueprintReinstanced(): void;
	OnBlueprintPreCompile(Blueprint: Blueprint): void;
	OnBlueprintCompiled(): void;
	OnAssetsPreDelete(Assets: UObject[]): void;
	OnAssetsDeleted(Classes: UnrealEngineClass[]): void;
	OnAssetRenamed_Friendly(AssetData: JavascriptAssetData,Name: string): void;
	OnAssetRemoved_Friendly(AssetData: JavascriptAssetData): void;
	OnAssetReimport(InCreatedObject: UObject): void;
	OnAssetPreImport_Friendly(InFactory: Factory,InClass: UnrealEngineClass,InParent: UObject,Name: string,Type: string): void;
	OnAssetPostImport(InFactory: Factory,InCreatedObject: UObject): void;
	OnAssetAdded_Friendly(AssetData: JavascriptAssetData): void;
	OnApplyObjectToActor(ObjectToApply: UObject,Actor: Actor): void;
	OnAddLevelToWorld(Level: Level): void;
	OnActionAxisMappingsChanged(): void;
	NewCurrentLevel(): void;
	MapChange_Friendly(MapChangeFlags: number): void;
	LoadSelectedAssetsIfNeeded(): void;
	LayerChange(): void;
	FitTextureToSurface(World: World): void;
	EndPIE(bIsSimulating: boolean): void;
	DisplayLoadErrors(): void;
	CleanseEditor(): void;
	ChangeEditorMode(NewMode: string): void;
	Bind(Key: string): void;
	BeginPIE(bIsSimulating: boolean): void;
	ActorPropertiesChange(): void;
	static C(Other: UObject): JavascriptEditorGlobalDelegates;
}

declare class JavascriptInputEventState { 
	clone() : JavascriptInputEventState;
	static C(Other: UObject): JavascriptInputEventState;
	GetInputEvent(): EInputEvent;
	GetKey(): Key;
	IsAltButtonEvent(): boolean;
	IsAltButtonPressed(): boolean;
	IsAnyMouseButtonDown(): boolean;
	IsButtonPressed(InKey: Key): boolean;
	IsCtrlButtonEvent(): boolean;
	IsCtrlButtonPressed(): boolean;
	IsLeftMouseButtonPressed(): boolean;
	IsMiddleMouseButtonPressed(): boolean;
	IsMouseButtonEvent(): boolean;
	IsRightMouseButtonPressed(): boolean;
	IsShiftButtonEvent(): boolean;
	IsShiftButtonPressed(): boolean;
	IsSpaceBarPressed(): boolean;
	static GetInputEvent(InputEvent: JavascriptInputEventState): EInputEvent;
	static GetKey(InputEvent: JavascriptInputEventState): Key;
	static IsAltButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsAltButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsAnyMouseButtonDown(InputEvent: JavascriptInputEventState): boolean;
	static IsButtonPressed(InputEvent: JavascriptInputEventState,InKey: Key): boolean;
	static IsCtrlButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsCtrlButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsLeftMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsMiddleMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsMouseButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsRightMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsShiftButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsShiftButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsSpaceBarPressed(InputEvent: JavascriptInputEventState): boolean;
}

declare class JavascriptInputEventStateLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptInputEventStateLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptInputEventStateLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptInputEventStateLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptInputEventStateLibrary;
	static IsSpaceBarPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsShiftButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsShiftButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsRightMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsMouseButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsMiddleMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsLeftMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsCtrlButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsCtrlButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsButtonPressed(InputEvent: JavascriptInputEventState,InKey: Key): boolean;
	static IsAnyMouseButtonDown(InputEvent: JavascriptInputEventState): boolean;
	static IsAltButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsAltButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static GetKey(InputEvent: JavascriptInputEventState): Key;
	static GetInputEvent(InputEvent: JavascriptInputEventState): EInputEvent;
	static C(Other: UObject): JavascriptInputEventStateLibrary;
}

declare class JavascriptPDI { 
	clone() : JavascriptPDI;
	static C(Other: UObject): JavascriptPDI;
	DrawArc(Base: Vector,X: Vector,Y: Vector,MinAngle: number,MaxAngle: number,Radius: number,Sections: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	DrawCircle(Base: Vector,X: Vector,Y: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawConnectedArrow(ArrowToWorld: Transform,Color: LinearColor,ArrowHeight: number,ArrowWidth: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,NumSpokes: number): void;
	DrawDashedLine(Start: Vector,End: Vector,Color: LinearColor,DashSize: number,DepthPriority: ESceneDepthPriorityGroup,DepthBias: number): void;
	DrawDirectionalArrow(ArrowToWorld: Transform,InColor: LinearColor,Length: number,ArrowSize: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number): void;
	DrawOrientedWireBox(Base: Vector,X: Vector,Y: Vector,Z: Vector,Extent: Vector,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawPolygon(Verts: Vector[],InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	DrawWireBox(Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireBox2(Matrix: Transform,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireCapsule(Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireChoppedCone(Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,TopRadius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup): void;
	DrawWireCone(Verts?: Vector[],Transform?: Transform,ConeRadius?: number,ConeAngle?: number,ConeSides?: number,Color?: LinearColor,DepthPriority?: ESceneDepthPriorityGroup,Thickness?: number,DepthBias?: number,bScreenSpace?: boolean): {Verts: Vector[]};
	DrawWireCylinder(Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireDiamond(Transform: Transform,Size: number,InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	DrawWireSphere(Base: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireSphere2(Transform: Transform,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireSphereAutoSides(Base: Vector,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireSphereAutoSides2(Transform: Transform,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireSphereCappedCone(Transform: Transform,ConeRadius: number,ConeAngle: number,ConeSides: number,ArcFrequency: number,CapSegments: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	DrawWireStar(Position: Vector,Size: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	SetHitProxy(Name: string): void;
	static DrawArc(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,MinAngle: number,MaxAngle: number,Radius: number,Sections: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawCircle(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawConnectedArrow(PDI: JavascriptPDI,ArrowToWorld: Transform,Color: LinearColor,ArrowHeight: number,ArrowWidth: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,NumSpokes: number): void;
	static DrawDashedLine(PDI: JavascriptPDI,Start: Vector,End: Vector,Color: LinearColor,DashSize: number,DepthPriority: ESceneDepthPriorityGroup,DepthBias: number): void;
	static DrawDirectionalArrow(PDI: JavascriptPDI,ArrowToWorld: Transform,InColor: LinearColor,Length: number,ArrowSize: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number): void;
	static DrawOrientedWireBox(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Extent: Vector,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawPolygon(PDI: JavascriptPDI,Verts: Vector[],InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireBox(PDI: JavascriptPDI,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireBox2(PDI: JavascriptPDI,Matrix: Transform,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireCapsule(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireChoppedCone(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,TopRadius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireCone(PDI: JavascriptPDI,Verts?: Vector[],Transform?: Transform,ConeRadius?: number,ConeAngle?: number,ConeSides?: number,Color?: LinearColor,DepthPriority?: ESceneDepthPriorityGroup,Thickness?: number,DepthBias?: number,bScreenSpace?: boolean): {Verts: Vector[]};
	static DrawWireCylinder(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireDiamond(PDI: JavascriptPDI,Transform: Transform,Size: number,InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireSphere(PDI: JavascriptPDI,Base: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphere2(PDI: JavascriptPDI,Transform: Transform,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphereAutoSides(PDI: JavascriptPDI,Base: Vector,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphereAutoSides2(PDI: JavascriptPDI,Transform: Transform,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphereCappedCone(PDI: JavascriptPDI,Transform: Transform,ConeRadius: number,ConeAngle: number,ConeSides: number,ArcFrequency: number,CapSegments: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireStar(PDI: JavascriptPDI,Position: Vector,Size: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static SetHitProxy(PDI: JavascriptPDI,Name: string): void;
}

declare class JavascriptExtensibilityManager { 
	clone() : JavascriptExtensibilityManager;
	static C(Other: UObject): JavascriptExtensibilityManager;
	AddExtender(Extender: JavascriptExtender): void;
	RemoveExtender(Extender: JavascriptExtender): void;
	static AddExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static RemoveExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static GetMenuExtensibilityManager(What: string): JavascriptExtensibilityManager;
	static GetToolBarExtensibilityManager(What: string): JavascriptExtensibilityManager;
}

declare class JavascriptViewportClick { 
	clone() : JavascriptViewportClick;
	static C(Other: UObject): JavascriptViewportClick;
	GetClickPos(): IntPoint;
	GetDirection(): Vector;
	GetEvent(): EInputEvent;
	GetKey(): Key;
	GetOrigin(): Vector;
	IsAltDown(): boolean;
	IsControlDown(): boolean;
	IsShiftDown(): boolean;
	static GetClickPos(Click: JavascriptViewportClick): IntPoint;
	static GetDirection(Click: JavascriptViewportClick): Vector;
	static GetEvent(Click: JavascriptViewportClick): EInputEvent;
	static GetKey(Click: JavascriptViewportClick): Key;
	static GetOrigin(Click: JavascriptViewportClick): Vector;
	static IsAltDown(Click: JavascriptViewportClick): boolean;
	static IsControlDown(Click: JavascriptViewportClick): boolean;
	static IsShiftDown(Click: JavascriptViewportClick): boolean;
}

declare class JavascriptHitProxy { 
	clone() : JavascriptHitProxy;
	static C(Other: UObject): JavascriptHitProxy;
	GetActor(): Actor;
	GetName(): string;
	static GetActor(Proxy: JavascriptHitProxy): Actor;
	static GetName(Proxy: JavascriptHitProxy): string;
}

declare class JavascriptWorkspaceItem { 
	clone() : JavascriptWorkspaceItem;
	static C(Other: UObject): JavascriptWorkspaceItem;
	AddGroup(DisplayName: string): JavascriptWorkspaceItem;
	static AddGroup(Parent: JavascriptWorkspaceItem,DisplayName: string): JavascriptWorkspaceItem;
	static GetGroup(Name: string): JavascriptWorkspaceItem;
}

declare class JavascriptEditorLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEditorLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorLibrary;
	static UpdateModelComponents(Level: Level): void;
	static ToggleSelect(USelection: USelection,InObject: UObject): void;
	static SetIsTemporarilyHiddenInEditor(Actor: Actor,bIsHidden: boolean): void;
	static SetHitProxy(PDI: JavascriptPDI,Name: string): void;
	static SetHeightmapDataFromMemory(LandscapeInfo: LandscapeInfo,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	static SetFolderPath_Recursively(Actor: Actor,NewFolderPath: string): void;
	static SetFolderPath(Actor: Actor,NewFolderPath: string): void;
	static SetAlphamapDataFromMemory(LandscapeInfo: LandscapeInfo,LayerInfo: LandscapeLayerInfoObject,MinX: number,MinY: number,MaxX: number,MaxY: number,PaintingRestriction: ELandscapeLayerPaintingRestriction): void;
	static SetActorLabel(Actor: Actor,NewActorLabel: string,bMarkDirty: boolean): void;
	static Select(USelection: USelection,InObject: UObject): void;
	static SavePackage(Package: Package,FileName: string): boolean;
	static RequestEndPlayMapInPIE(): void;
	static RemoveLevelInstance(World: World): void;
	static RemoveExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static OpenPopupWindow(Widget: Widget,PopupDesiredSize: Vector2D,HeadingText: string): void;
	static ModifyObject(UObject: UObject,bAlwaysMarkDirty: boolean): void;
	static IsShiftDown(Click: JavascriptViewportClick): boolean;
	static IsControlDown(Click: JavascriptViewportClick): boolean;
	static IsAssetLoaded(AssetData: JavascriptAssetData): boolean;
	static IsAltDown(Click: JavascriptViewportClick): boolean;
	static IsActorLabelEditable(Actor: Actor): boolean;
	static IsActive(Transactor: Transactor): boolean;
	static InvalidateModelGeometry(World: World,InLevel: Level): void;
	static GetTransaction(Transactor: Transactor,QueueIndex: number): JavascriptTransaction;
	static GetToolBarExtensibilityManager(What: string): JavascriptExtensibilityManager;
	static GetTitle(Transaction: JavascriptTransaction): string;
	static GetTagValue(AssetData: JavascriptAssetData,Name: string,OutValue?: string): {OutValue: string, $: boolean};
	static GetSelectedObjects(USelection: USelection,Out?: UObject[]): {Out: UObject[], $: number};
	static GetRootWindow(): JavascriptSlateWidget;
	static GetQueueLength(Transactor: Transactor): number;
	static GetPrimaryObject(Transaction: JavascriptTransaction): UObject;
	static GetPackage(AssetData: JavascriptAssetData): Package;
	static GetOrigin(Click: JavascriptViewportClick): Vector;
	static GetName(Proxy: JavascriptHitProxy): string;
	static GetMenuExtensibilityManager(What: string): JavascriptExtensibilityManager;
	static GetLayerInfoByName(LandscapeInfo: LandscapeInfo,LayerName: string,Owner: LandscapeProxy): LandscapeLayerInfoObject;
	static GetLandscapeInfo(Landscape: Landscape,bSpawnNewActor: boolean): LandscapeInfo;
	static GetLandscapeExtent(LandscapeInfo: LandscapeInfo,MinX?: number,MinY?: number,MaxX?: number,MaxY?: number): {MinX: number, MinY: number, MaxX: number, MaxY: number, $: boolean};
	static GetKey(Click: JavascriptViewportClick): Key;
	static GetHeightmapDataToMemory(LandscapeInfo: LandscapeInfo,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	static GetGroup(Name: string): JavascriptWorkspaceItem;
	static GetFolderPath(Actor: Actor): string;
	static GetEvent(Click: JavascriptViewportClick): EInputEvent;
	static GetDirection(Click: JavascriptViewportClick): Vector;
	static GetDefaultBrush(World: World): Brush;
	static GetContext(Transaction: JavascriptTransaction): string;
	static GetClickPos(Click: JavascriptViewportClick): IntPoint;
	static GetClass(AssetData: JavascriptAssetData): UnrealEngineClass;
	static GetAsset(AssetData: JavascriptAssetData): UObject;
	static GetAlphamapDataToMemory(LandscapeInfo: LandscapeInfo,LayerInfo: LandscapeLayerInfoObject,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	static GetAllTags(AssetData: JavascriptAssetData,OutArray?: string[]): {OutArray: string[]};
	static GetActorLabel(Actor: Actor): string;
	static GetActor(Proxy: JavascriptHitProxy): Actor;
	static FindWorldInPackage(Package: Package): World;
	static ExportNavigation(InWorld: World,Path: string): string;
	static EditorDestroyActor(World: World,Actor: Actor,bShouldModifyLevel: boolean): boolean;
	static EditorAddModalWindow(Widget: JavascriptSlateWidget): void;
	static DrawWireStar(PDI: JavascriptPDI,Position: Vector,Size: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireSphereCappedCone(PDI: JavascriptPDI,Transform: Transform,ConeRadius: number,ConeAngle: number,ConeSides: number,ArcFrequency: number,CapSegments: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireSphereAutoSides2(PDI: JavascriptPDI,Transform: Transform,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphereAutoSides(PDI: JavascriptPDI,Base: Vector,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphere2(PDI: JavascriptPDI,Transform: Transform,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphere(PDI: JavascriptPDI,Base: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireDiamond(PDI: JavascriptPDI,Transform: Transform,Size: number,InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireCylinder(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireCone(PDI: JavascriptPDI,Verts?: Vector[],Transform?: Transform,ConeRadius?: number,ConeAngle?: number,ConeSides?: number,Color?: LinearColor,DepthPriority?: ESceneDepthPriorityGroup,Thickness?: number,DepthBias?: number,bScreenSpace?: boolean): {Verts: Vector[]};
	static DrawWireChoppedCone(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,TopRadius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireCapsule(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireBox2(PDI: JavascriptPDI,Matrix: Transform,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireBox(PDI: JavascriptPDI,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawPolygon(PDI: JavascriptPDI,Verts: Vector[],InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawOrientedWireBox(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Extent: Vector,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawDirectionalArrow(PDI: JavascriptPDI,ArrowToWorld: Transform,InColor: LinearColor,Length: number,ArrowSize: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number): void;
	static DrawDashedLine(PDI: JavascriptPDI,Start: Vector,End: Vector,Color: LinearColor,DashSize: number,DepthPriority: ESceneDepthPriorityGroup,DepthBias: number): void;
	static DrawConnectedArrow(PDI: JavascriptPDI,ArrowToWorld: Transform,Color: LinearColor,ArrowHeight: number,ArrowWidth: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,NumSpokes: number): void;
	static DrawCircle(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawArc(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,MinAngle: number,MaxAngle: number,Radius: number,Sections: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DeselectAll(USelection: USelection,InClass: UnrealEngineClass): void;
	static Deselect(USelection: USelection,InObject: UObject): void;
	static DeletePackage(Package: Package): boolean;
	static csgAdd(DefaultBrush: Brush,PolyFlags: number,BrushType: EBrushType): Brush;
	static CreatePropertyEditorToolkit(ObjectsForPropertiesMenu: UObject[]): void;
	static CreateBrushForVolumeActor(NewActor: Volume,BrushBuilder: BrushBuilder): void;
	static ClearActorLabel(Actor: Actor): void;
	static Build(Builder: BrushBuilder,InWorld: World,InBrush: Brush): boolean;
	static BroadcastHotReload(): void;
	static BroadcastAssetCreated(NewAsset: UObject): void;
	static AddGroup(Parent: JavascriptWorkspaceItem,DisplayName: string): JavascriptWorkspaceItem;
	static AddExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static C(Other: UObject): JavascriptEditorLibrary;
}

declare type EJavascriptTabRole = string | symbol;
declare var EJavascriptTabRole = { MajorTab:'MajorTab',PanelTab:'PanelTab',NomadTab:'NomadTab',DocumentTab:'DocumentTab', };
declare class JavascriptEditorTab extends UObject { 
	OnSpawnTab: UnrealEngineDelegate<(Context: UObject) => Widget>;
	OnCloseTab: UnrealEngineDelegate<(Widget: Widget) => void>;
	Group: JavascriptWorkspaceItem;
	TabId: string;
	DisplayName: string;
	bIsNomad: boolean;
	Role: EJavascriptTabRole;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorTab;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTab;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEditorTab;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTab;
	Discard(): void;
	Commit(): void;
	CloseTab(Widget: Widget): void;
	static C(Other: UObject): JavascriptEditorTab;
}

declare class JavascriptMenuExtension { 
	ExtensionHook: string;
	HookPosition: EJavascriptExtensionHook;
	clone() : JavascriptMenuExtension;
	static C(Other: UObject): JavascriptMenuExtension;
}

declare class JavascriptUIExtender extends UObject { 
	MenuExtensions: JavascriptMenuExtension[];
	ToolbarExtensions: JavascriptMenuExtension[];
	OnHook: UnrealEngineDelegate<(Hook: string) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptUIExtender;
	static Find(Outer: UObject, ResourceName: string): JavascriptUIExtender;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptUIExtender;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUIExtender;
	static GetTopCommandList(): JavascriptUICommandList;
	static EndSection(): void;
	static Bind(Commands: JavascriptUICommands): void;
	static BeginSection(Name: string,Text: string): void;
	static AddToolBarButton(Commands: JavascriptUICommands,Id: string): void;
	static AddMenuSeparator(): void;
	static AddMenuEntry(Commands: JavascriptUICommands,Id: string): void;
	static C(Other: UObject): JavascriptUIExtender;
}

declare class JavascriptAssetEditorToolkit extends UObject { 
	ToolkitFName: string;
	Layout: string;
	BaseToolkitName: string;
	ToolkitName: string;
	WorldCentricTabColorScale: LinearColor;
	WorldCentricTabPrefix: string;
	Tabs: JavascriptEditorTab[];
	Commands: JavascriptUICommands;
	MenuExtender: JavascriptUIExtender;
	ToolbarExtender: JavascriptUIExtender;
	TestArray: number[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptAssetEditorToolkit;
	static Find(Outer: UObject, ResourceName: string): JavascriptAssetEditorToolkit;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptAssetEditorToolkit;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptAssetEditorToolkit;
	Refresh(): void;
	Discard(): void;
	Commit(): void;
	static C(Other: UObject): JavascriptAssetEditorToolkit;
}

declare class JavascriptAssetTypeActions extends UObject { 
	ActionsName: string;
	Color: Color;
	SupportedClass: UnrealEngineClass;
	Editor: JavascriptAssetEditorToolkit;
	Actions: JavascriptUIExtender;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptAssetTypeActions;
	static Find(Outer: UObject, ResourceName: string): JavascriptAssetTypeActions;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptAssetTypeActions;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptAssetTypeActions;
	Refresh(): void;
	Discard(): void;
	Commit(): void;
	static C(Other: UObject): JavascriptAssetTypeActions;
}

declare class JavascriptCommandlet extends Commandlet { 
	CmdLineTokens: string[];
	CmdLineSwitches: string[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptCommandlet;
	static Find(Outer: UObject, ResourceName: string): JavascriptCommandlet;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptCommandlet;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptCommandlet;
	static C(Other: UObject): JavascriptCommandlet;
}

declare class JavascriptEdGraphNode extends EdGraphNode { 
	ClassData: GraphNodeClassData;
	NodeInstance: UObject;
	SubNodes: JavascriptEdGraphNode[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEdGraphNode;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdGraphNode;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEdGraphNode;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdGraphNode;
	static C(Other: UObject): JavascriptEdGraphNode;
}

declare class JavascriptEditorEngineLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorEngineLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorEngineLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEditorEngineLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorEngineLibrary;
	static SetMaterial(Engine: EditorEngine,InModel: Model,Material: MaterialInterface,Surfaces: number[]): void;
	static SelectNone(Engine: EditorEngine,bNoteSelectionChange: boolean,bDeselectBSPSurfs: boolean,WarnAboutManyActors: boolean): void;
	static SelectGroup(Engine: EditorEngine,InGroupActor: GroupActor,bForceSelection: boolean,bInSelected: boolean,bNotify: boolean): void;
	static SelectComponent(Engine: EditorEngine,Component: ActorComponent,bInSelected: boolean,bNotify: boolean,bSelectEvenIfHidden: boolean): void;
	static SelectActor(Engine: EditorEngine,Actor: Actor,bInSelected: boolean,bNotify: boolean,bSelectEvenIfHidden: boolean,bForceRefresh: boolean): void;
	static RedrawAllViewports(Engine: EditorEngine,bInvalidateHitProxies: boolean): void;
	static RebuildStaticNavigableGeometry(Engine: EditorEngine,Level: Level): void;
	static RebuildLevel(Engine: EditorEngine,Level: Level): void;
	static GetSurfaces(Brush: Brush,Surfaces?: number[]): {Surfaces: number[]};
	static GetSelectedSet(Engine: EditorEngine,Class: UnrealEngineClass): USelection;
	static GetSelectedObjects(Engine: EditorEngine): USelection;
	static GetSelectedComponents(Engine: EditorEngine): USelection;
	static GetPIEWorld(Engine: Engine): World;
	static GetEditorWorld(Engine: Engine): World;
	static FindBrushBuilder(Engine: EditorEngine,BrushBuilderClass: UnrealEngineClass): BrushBuilder;
	static Exec(Engine: EditorEngine,InWorld: World,Command: string,Out?: string): {Out: string, $: boolean};
	static DeleteObjectsUnchecked(ObjectsToDelete: UObject[]): number;
	static CanSelectActor(Engine: EditorEngine,Actor: Actor,bInSelected: boolean,bSelectEvenIfHidden: boolean,bWarnIfLevelLocked: boolean): boolean;
	static bspBrushCSG(Engine: EditorEngine,Actor: Brush,Model: Model,PolyFlags: number,BrushType: EBrushType,CSGOper: ECsgOper,bBuildBounds: boolean,bMergePolys: boolean,bReplaceNULLMaterialRefs: boolean,bShowProgressBar: boolean): number;
	static C(Other: UObject): JavascriptEditorEngineLibrary;
}

declare class JavascriptEditorInputProcessor extends UObject { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorInputProcessor;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorInputProcessor;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEditorInputProcessor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorInputProcessor;
	HandleMouseMoveEvent(InPointerEvent: UPointerEvent): boolean;
	HandleKeyUpEvent(InKeyEvent: KeyEvent): boolean;
	HandleKeyDownEvent(InKeyEvent: KeyEvent): boolean;
	HandleAnalogInputEvent(InKeyEvent: AnalogInputEvent): boolean;
	Activate(bEnable: boolean): void;
	static C(Other: UObject): JavascriptEditorInputProcessor;
}

declare class JavascriptEditorPopupWindow extends UObject { 
	Widget: Widget;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorPopupWindow;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorPopupWindow;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEditorPopupWindow;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorPopupWindow;
	Open(Heading: string,DesiredSize: Vector2D): boolean;
	OnDismissed(): void;
	static C(Other: UObject): JavascriptEditorPopupWindow;
}

declare class JavascriptEditorTabManager extends Widget { 
	Layout: string;
	Tabs: JavascriptEditorTab[];
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorTabManager;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTabManager;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEditorTabManager;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTabManager;
	static C(Other: UObject): JavascriptEditorTabManager;
}

declare class JavascriptEditorTick extends UObject { 
	OnTick: UnrealEngineDelegate<(DeltaSeconds: number) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorTick;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTick;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEditorTick;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTick;
	GetEngine(): EditorEngine;
	static C(Other: UObject): JavascriptEditorTick;
}

declare class JavascriptEditorToolbar extends Widget { 
	OnHook: UnrealEngineDelegate<() => JavascriptMenuBuilder>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorToolbar;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorToolbar;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEditorToolbar;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorToolbar;
	static C(Other: UObject): JavascriptEditorToolbar;
}

declare type EJavascriptWidgetMode = string | symbol;
declare var EJavascriptWidgetMode = { WM_Translate:'WM_Translate',WM_TranslateRotateZ:'WM_TranslateRotateZ',WM_2D:'WM_2D',WM_Rotate:'WM_Rotate',WM_Scale:'WM_Scale',WM_Max:'WM_Max',WM_None:'WM_None',None:'None', };
declare class JavascriptEditorViewport extends PanelWidget { 
	OnClick: UnrealEngineDelegate<(ViewportClick: JavascriptViewportClick, HitProxy: JavascriptHitProxy, Instance: JavascriptEditorViewport) => void>;
	OnTrackingStarted: UnrealEngineDelegate<(InputState: JavascriptInputEventState, bIsDraggingWidget: boolean, bNudge: boolean, Instance: JavascriptEditorViewport) => void>;
	OnTrackingStopped: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => void>;
	OnInputWidgetDelta: UnrealEngineDelegate<(Drag: Vector, Rot: Rotator, Scale: Vector, Instance: JavascriptEditorViewport) => boolean>;
	OnInputKey: UnrealEngineDelegate<(ControllerId: number, Key: Key, Event: EInputEvent, Instance: JavascriptEditorViewport) => boolean>;
	OnInputAxis: UnrealEngineDelegate<(ControllerId: number, Key: Key, Delta: number, DeltaTime: number, Instance: JavascriptEditorViewport) => boolean>;
	OnMouseEnter: UnrealEngineDelegate<(x: number, y: number, Instance: JavascriptEditorViewport) => boolean>;
	OnMouseMove: UnrealEngineDelegate<(x: number, y: number, Instance: JavascriptEditorViewport) => boolean>;
	OnMouseLeave: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => boolean>;
	OnDraw: UnrealEngineDelegate<(PDI: JavascriptPDI, Instance: JavascriptEditorViewport) => void>;
	OnDrawCanvas: UnrealEngineDelegate<(Canvas: Canvas, Instance: JavascriptEditorViewport) => void>;
	OnGetWidgetLocation: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => Vector>;
	OnGetWidgetRotation: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => Rotator>;
	OnGetWidgetMode: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => EJavascriptWidgetMode>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEditorViewport;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEditorViewport;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport;
	SetWidgetMode(WidgetMode: EJavascriptWidgetMode): void;
	SetViewRotation(ViewRotation: Rotator): void;
	SetViewportType(InViewportType: ELevelViewportType): void;
	SetViewMode(InViewModeIndex: EViewModeIndex): void;
	SetViewLocation(ViewLocation: Vector): void;
	SetViewFOV(InViewFOV: number): void;
	SetSkyBrightness(SkyBrightness: number): void;
	SetSimulatePhysics(bShouldSimulatePhysics: boolean): void;
	SetRealtime(bInRealtime: boolean,bStoreCurrentValue: boolean): void;
	SetProfileIndex(InProfileIndex: number): void;
	SetLightDirection(InLightDir: Rotator): void;
	SetLightColor(LightColor: Color): void;
	SetLightBrightness(LightBrightness: number): void;
	SetFloorOffset(InFloorOffset: number): void;
	SetEngineShowFlags(In: string): boolean;
	SetCameraSpeedSetting(SpeedSetting: number): void;
	SetBackgroundColor(BackgroundColor: LinearColor): void;
	RestoreRealtime(bAllowDisable: boolean): void;
	Redraw(): void;
	ProjectWorldToScreen(WorldPosition: Vector,OutScreenPosition?: Vector2D): {OutScreenPosition: Vector2D};
	OverridePostProcessSettings(PostProcessSettings: PostProcessSettings,Weight: number): void;
	GetWidgetMode(): EJavascriptWidgetMode;
	GetViewportWorld(): World;
	GetViewFOV(): number;
	GetSkyComponent(): StaticMeshComponent;
	GetFloorMeshComponent(): StaticMeshComponent;
	GetEngineShowFlags(): string;
	GetDefaultAssetViewerSettings(): AssetViewerSettings;
	GetCurrentProfileIndex(): number;
	GetCameraSpeedSetting(): number;
	DeprojectScreenToWorld(ScreenPosition: Vector2D,OutRayOrigin?: Vector,OutRayDirection?: Vector): {OutRayOrigin: Vector, OutRayDirection: Vector};
	static C(Other: UObject): JavascriptEditorViewport;
}

declare class JavascriptEdViewport { 
	clone() : JavascriptEdViewport;
	static C(Other: UObject): JavascriptEdViewport;
	GetHitProxy(): JavascriptHitProxy;
	static GetHitProxy(Viewport: JavascriptEdViewport): JavascriptHitProxy;
}

declare class JavascriptEditorModeTools { 
	clone() : JavascriptEditorModeTools;
	static C(Other: UObject): JavascriptEditorModeTools;
	ActivateDefaultMode(): {Tools: JavascriptEditorModeTools};
	ActivateMode(InID?: string,bToggle?: boolean): {Tools: JavascriptEditorModeTools};
	DeactivateAllModes(): {Tools: JavascriptEditorModeTools};
	DeactivateMode(InID?: string): {Tools: JavascriptEditorModeTools};
	DestroyMode(InID?: string): {Tools: JavascriptEditorModeTools};
	EndTracking(Viewport: JavascriptEdViewport): boolean;
	EnsureNotInMode(ModeID?: string,ErrorMsg?: string,bNotifyUser?: boolean): {Tools: JavascriptEditorModeTools, $: boolean};
	IsDefaultModeActive(): {Tools: JavascriptEditorModeTools, $: boolean};
	IsModeActive(InID?: string): {Tools: JavascriptEditorModeTools, $: boolean};
	IsTracking(): boolean;
	SetDefaultMode(DefaultID?: string): {Tools: JavascriptEditorModeTools};
	StartTracking(Viewport: JavascriptEdViewport): boolean;
	static ActivateDefaultMode(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static ActivateMode(Tools?: JavascriptEditorModeTools,InID?: string,bToggle?: boolean): {Tools: JavascriptEditorModeTools};
	static DeactivateAllModes(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static DeactivateMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static DestroyMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static EndTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
	static EnsureNotInMode(Tools?: JavascriptEditorModeTools,ModeID?: string,ErrorMsg?: string,bNotifyUser?: boolean): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsDefaultModeActive(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsModeActive(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsTracking(Tools: JavascriptEditorModeTools): boolean;
	static SetDefaultMode(Tools?: JavascriptEditorModeTools,DefaultID?: string): {Tools: JavascriptEditorModeTools};
	static StartTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
}

declare class JavascriptEditorMode { 
	clone() : JavascriptEditorMode;
	static C(Other: UObject): JavascriptEditorMode;
	GetCurrentWidgetAxis(): number;
	GetModeManager(): JavascriptEditorModeTools;
	SelectNone(): void;
	SetCurrentWidgetAxis(InAxis: number): void;
	static GetCurrentWidgetAxis(Mode: JavascriptEditorMode): number;
	static GetModeManager(Mode: JavascriptEditorMode): JavascriptEditorModeTools;
	static SelectNone(Mode: JavascriptEditorMode): void;
	static SetCurrentWidgetAxis(Mode: JavascriptEditorMode,InAxis: number): void;
}

declare class JavascriptEdModeLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEdModeLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdModeLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEdModeLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdModeLibrary;
	static StartTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
	static SetDefaultMode(Tools?: JavascriptEditorModeTools,DefaultID?: string): {Tools: JavascriptEditorModeTools};
	static SetCurrentWidgetAxis(Mode: JavascriptEditorMode,InAxis: number): void;
	static SelectNone(Mode: JavascriptEditorMode): void;
	static IsTracking(Tools: JavascriptEditorModeTools): boolean;
	static IsModeActive(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsDefaultModeActive(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools, $: boolean};
	static GetModeManager(Mode: JavascriptEditorMode): JavascriptEditorModeTools;
	static GetHitProxy(Viewport: JavascriptEdViewport): JavascriptHitProxy;
	static GetCurrentWidgetAxis(Mode: JavascriptEditorMode): number;
	static EnsureNotInMode(Tools?: JavascriptEditorModeTools,ModeID?: string,ErrorMsg?: string,bNotifyUser?: boolean): {Tools: JavascriptEditorModeTools, $: boolean};
	static EndTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
	static DestroyMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static DeactivateMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static DeactivateAllModes(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static ActivateMode(Tools?: JavascriptEditorModeTools,InID?: string,bToggle?: boolean): {Tools: JavascriptEditorModeTools};
	static ActivateDefaultMode(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static C(Other: UObject): JavascriptEdModeLibrary;
}

declare type EJavascriptEditAction = string | symbol;
declare var EJavascriptEditAction = { Skip:'Skip',Process:'Process',Halt:'Halt', };
declare class JavascriptSlateIcon { 
	StyleSetName: string;
	StyleName: string;
	SmallStyleName: string;
	clone() : JavascriptSlateIcon;
	static C(Other: UObject): JavascriptSlateIcon;
}

declare class JavascriptEdMode extends UObject { 
	OnGetWidgetLocation: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => Vector>;
	OnSelect: UnrealEngineDelegate<(Actor: Actor, bSelected: boolean, Instance: JavascriptEditorMode) => boolean>;
	OnDraw: UnrealEngineDelegate<(PDI: JavascriptPDI, Instance: JavascriptEditorMode) => void>;
	OnDrawHUD: UnrealEngineDelegate<(Canvas: Canvas, Instance: JavascriptEditorMode) => void>;
	IsSelectionAllowed: UnrealEngineDelegate<(Actor: Actor, bSelected: boolean, Instance: JavascriptEditorMode) => boolean>;
	OnClick: UnrealEngineDelegate<(ViewportClick: JavascriptViewportClick, HitProxy: JavascriptHitProxy, Instance: JavascriptEditorMode) => boolean>;
	OnQuery: UnrealEngineDelegate<(Request: string, Instance: JavascriptEditorMode) => boolean>;
	OnStartTracking: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnEndTracking: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnInputAxis: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, ControllerId: number, Key: Key, Delta: number, DeltaTime: number, Instance: JavascriptEditorMode) => boolean>;
	OnInputKey: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Key: Key, Event: EInputEvent, Instance: JavascriptEditorMode) => boolean>;
	OnInputDelta: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Drag: Vector, Rot: Rotator, Scale: Vector, Instance: JavascriptEditorMode) => boolean>;
	OnCapturedMouseMove: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, X: number, Y: number, Instance: JavascriptEditorMode) => boolean>;
	OnMouseEnter: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, X: number, Y: number, Instance: JavascriptEditorMode) => boolean>;
	OnMouseLeave: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnMouseMove: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, X: number, Y: number, Instance: JavascriptEditorMode) => boolean>;
	OnLostFocus: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnReceivedFocus: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnSelectionChanged: UnrealEngineDelegate<(Tools: JavascriptEditorModeTools, Item: UObject) => void>;
	OnGetContent: UnrealEngineDelegate<() => Widget>;
	OnProcess: UnrealEngineDelegate<(Request: string, Instance: JavascriptEditorMode) => boolean>;
	OnGetAction: UnrealEngineDelegate<(Request: string, Instance: JavascriptEditorMode) => EJavascriptEditAction>;
	OnActorMoved: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => void>;
	OnActorsDuplicated: UnrealEngineDelegate<(PreDuplicateSelection: Actor[], PostDuplicateSelection: Actor[], bOffsetLocations: boolean, Instance: JavascriptEditorMode) => void>;
	OnActorSelectionChanged: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => void>;
	OnActorPropChanged: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => void>;
	OnMapChanged: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => void>;
	ModeId: string;
	SlateIcon: JavascriptSlateIcon;
	ModeName: string;
	bVisible: boolean;
	PriorityOrder: number;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptEdMode;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptEdMode;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode;
	Unregister(): void;
	Register(): void;
	static C(Other: UObject): JavascriptEdMode;
}

declare class JavascriptGraphAction { 
	Name: string;
	Category: string;
	Resource: UObject;
	clone() : JavascriptGraphAction;
	static C(Other: UObject): JavascriptGraphAction;
}

declare class JavascriptGraphEditor extends Widget { 
	TitleName: string;
	Graph: EdGraph;
	GraphEditorCommands: JavascriptUICommandList;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptGraphEditor;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEditor;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptGraphEditor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEditor;
	AddActionContext(Action: JavascriptGraphAction): void;
	static C(Other: UObject): JavascriptGraphEditor;
}

declare class JavascriptGraphSchema extends EdGraphSchema { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptGraphSchema;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphSchema;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptGraphSchema;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphSchema;
	static C(Other: UObject): JavascriptGraphSchema;
}

declare class JavascriptNotification extends UObject { 
	Text: string;
	bUseImage: boolean;
	UImage: SlateBrush;
	FadeInDuration: number;
	FadeOutDuration: number;
	ExpireDuration: number;
	bUseThrobber: boolean;
	bUseSuccessFailIcons: boolean;
	bUseLargeFont: boolean;
	bFireAndForget: boolean;
	CheckBoxState: ECheckBoxState;
	CheckBoxStateChanged: UnrealEngineDelegate<(State: ECheckBoxState) => void>;
	CheckBoxText: string;
	Hyperlink: UnrealEngineDelegate<() => void>;
	HyperlinkText: string;
	bAllowThrottleWhenFrameRateIsLow: boolean;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptNotification;
	static Find(Outer: UObject, ResourceName: string): JavascriptNotification;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptNotification;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptNotification;
	Success(): void;
	Reset(): void;
	Pending(): void;
	Fire(): void;
	Fail(): void;
	Fadeout(): void;
	static C(Other: UObject): JavascriptNotification;
}

declare class JavascriptDetailWidgetDecl { 
	clone() : JavascriptDetailWidgetDecl;
	static C(Other: UObject): JavascriptDetailWidgetDecl;
	SetContent(Widget: JavascriptSlateWidget): void;
	SetHAlign(InAlignment: EHorizontalAlignment): void;
	SetMaxDesiredWidth(MaxWidth: number): void;
	SetMinDesiredWidth(MinWidth: number): void;
	SetVAlign(InAlignment: EVerticalAlignment): void;
	static SetContent(Decl: JavascriptDetailWidgetDecl,Widget: JavascriptSlateWidget): void;
	static SetHAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EHorizontalAlignment): void;
	static SetMaxDesiredWidth(Decl: JavascriptDetailWidgetDecl,MaxWidth: number): void;
	static SetMinDesiredWidth(Decl: JavascriptDetailWidgetDecl,MinWidth: number): void;
	static SetVAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EVerticalAlignment): void;
}

declare class JavascriptDetailWidgetRow { 
	clone() : JavascriptDetailWidgetRow;
	static C(Other: UObject): JavascriptDetailWidgetRow;
	NameContent(): JavascriptDetailWidgetDecl;
	SetFilterString(InFilterString: string): void;
	ValueContent(): JavascriptDetailWidgetDecl;
	WholeRowContent(): JavascriptDetailWidgetDecl;
	static NameContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static SetFilterString(Row: JavascriptDetailWidgetRow,InFilterString: string): void;
	static ValueContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static WholeRowContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
}

declare type EPropertyAccessResult = string | symbol;
declare var EPropertyAccessResult = { MultipleValues:'MultipleValues',Fail:'Fail',Success:'Success', };
declare class JavascriptPropertyHandle { 
	clone() : JavascriptPropertyHandle;
	static C(Other: UObject): JavascriptPropertyHandle;
	CreatePropertyNameWidget(NameOverride: string,ToolTipOverride: string,bDisplayResetToDefault: boolean,bHideText: boolean,bHideThumbnail: boolean): JavascriptSlateWidget;
	CreatePropertyValueWidget(bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	GetChildHandle(Name: string): JavascriptPropertyHandle;
	GetMetaData(Key: string): string;
	GetProperty(): Property;
	GetValueAsFormattedString(OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	SetOnPropertyValueChanged(UFunction: JavascriptFunction): void;
	SetValueFromFormattedString(InValue: string): EPropertyAccessResult;
	static CreatePropertyNameWidget(Handle: JavascriptPropertyHandle,NameOverride: string,ToolTipOverride: string,bDisplayResetToDefault: boolean,bHideText: boolean,bHideThumbnail: boolean): JavascriptSlateWidget;
	static CreatePropertyValueWidget(Handle: JavascriptPropertyHandle,bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	static GetChildHandle(Parent: JavascriptPropertyHandle,Name: string): JavascriptPropertyHandle;
	static GetMetaData(Handle: JavascriptPropertyHandle,Key: string): string;
	static GetProperty(Handle: JavascriptPropertyHandle): Property;
	static GetValueAsFormattedString(Handle: JavascriptPropertyHandle,OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	static SetOnPropertyValueChanged(Handle: JavascriptPropertyHandle,UFunction: JavascriptFunction): void;
	static SetValueFromFormattedString(Handle: JavascriptPropertyHandle,InValue: string): EPropertyAccessResult;
}

declare class JavascriptDetailPropertyRow { 
	clone() : JavascriptDetailPropertyRow;
	static C(Other: UObject): JavascriptDetailPropertyRow;
	CustomWidget(bShowChildren: boolean): JavascriptDetailWidgetRow;
	static CustomWidget(Row: JavascriptDetailPropertyRow,bShowChildren: boolean): JavascriptDetailWidgetRow;
}

declare class JavascriptDetailChildrenBuilder { 
	clone() : JavascriptDetailChildrenBuilder;
	static C(Other: UObject): JavascriptDetailChildrenBuilder;
	AddChildContent(SearchString: string): JavascriptDetailWidgetRow;
	AddChildProperty(PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
	GenerateStructValueWidget(StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
	static AddChildContent(ChildBuilder: JavascriptDetailChildrenBuilder,SearchString: string): JavascriptDetailWidgetRow;
	static AddChildProperty(ChildBuilder: JavascriptDetailChildrenBuilder,PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
	static GenerateStructValueWidget(ChildBuilder: JavascriptDetailChildrenBuilder,StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
}

declare class JavascriptPropertyCustomizationLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptPropertyCustomizationLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyCustomizationLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptPropertyCustomizationLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyCustomizationLibrary;
	static WholeRowContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static ValueContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static SetValueFromFormattedString(Handle: JavascriptPropertyHandle,InValue: string): EPropertyAccessResult;
	static SetVAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EVerticalAlignment): void;
	static SetOnPropertyValueChanged(Handle: JavascriptPropertyHandle,UFunction: JavascriptFunction): void;
	static SetMinDesiredWidth(Decl: JavascriptDetailWidgetDecl,MinWidth: number): void;
	static SetMaxDesiredWidth(Decl: JavascriptDetailWidgetDecl,MaxWidth: number): void;
	static SetHAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EHorizontalAlignment): void;
	static SetFilterString(Row: JavascriptDetailWidgetRow,InFilterString: string): void;
	static SetContent(Decl: JavascriptDetailWidgetDecl,Widget: JavascriptSlateWidget): void;
	static NameContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static GetValueAsFormattedString(Handle: JavascriptPropertyHandle,OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	static GetProperty(Handle: JavascriptPropertyHandle): Property;
	static GetMetaData(Handle: JavascriptPropertyHandle,Key: string): string;
	static GetChildHandle(Parent: JavascriptPropertyHandle,Name: string): JavascriptPropertyHandle;
	static GenerateStructValueWidget(ChildBuilder: JavascriptDetailChildrenBuilder,StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
	static CustomWidget(Row: JavascriptDetailPropertyRow,bShowChildren: boolean): JavascriptDetailWidgetRow;
	static CreatePropertyValueWidget(Handle: JavascriptPropertyHandle,bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	static CreatePropertyNameWidget(Handle: JavascriptPropertyHandle,NameOverride: string,ToolTipOverride: string,bDisplayResetToDefault: boolean,bHideText: boolean,bHideThumbnail: boolean): JavascriptSlateWidget;
	static AddChildProperty(ChildBuilder: JavascriptDetailChildrenBuilder,PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
	static AddChildContent(ChildBuilder: JavascriptDetailChildrenBuilder,SearchString: string): JavascriptDetailWidgetRow;
	static C(Other: UObject): JavascriptPropertyCustomizationLibrary;
}

declare class JavascriptPropertyTypeCustomizationUtils { 
	clone() : JavascriptPropertyTypeCustomizationUtils;
	static C(Other: UObject): JavascriptPropertyTypeCustomizationUtils;
}

declare class JavascriptPropertyCustomization extends UObject { 
	PropertyTypeName: string;
	OnDestroy: UnrealEngineDelegate<(Id: number) => void>;
	OnCustomizeHeader: UnrealEngineDelegate<(Handle: JavascriptPropertyHandle, HeaderRow: JavascriptDetailWidgetRow, Utils: JavascriptPropertyTypeCustomizationUtils, Id: number) => void>;
	OnCustomizeChildren: UnrealEngineDelegate<(Handle: JavascriptPropertyHandle, ChildBuilder: JavascriptDetailChildrenBuilder, Utils: JavascriptPropertyTypeCustomizationUtils, Id: number) => void>;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptPropertyCustomization;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyCustomization;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptPropertyCustomization;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyCustomization;
	Unregister(): void;
	Register(): void;
	static C(Other: UObject): JavascriptPropertyCustomization;
}

declare class JavascriptRawMeshLibrary extends BlueprintFunctionLibrary { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): JavascriptRawMeshLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptRawMeshLibrary;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): JavascriptRawMeshLibrary;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptRawMeshLibrary;
	static SetSectionInfo(StaticMesh: StaticMesh,LODIndex: number,SectionIndex: number,Info: MeshSectionInfo): void;
	static SaveRawMesh(StaticMesh: StaticMesh,SourceModelIndex: number,InMesh?: JavascriptRawMesh): {InMesh: JavascriptRawMesh};
	static MarkPackageDirty(InObject: UObject): boolean;
	static LoadRawMesh(StaticMesh: StaticMesh,SourceModelIndex: number,OutMesh?: JavascriptRawMesh): {OutMesh: JavascriptRawMesh};
	static IsValidOrFixable(RawMesh: JavascriptRawMesh): boolean;
	static IsValid(RawMesh: JavascriptRawMesh): boolean;
	static GetWedgePosition(RawMesh: JavascriptRawMesh,WedgeIndex: number): Vector;
	static GetSectionInfo(StaticMesh: StaticMesh,LODIndex: number,SectionIndex: number): MeshSectionInfo;
	static Empty(RawMesh?: JavascriptRawMesh): {RawMesh: JavascriptRawMesh};
	static CompactMaterialIndices(RawMesh?: JavascriptRawMesh): {RawMesh: JavascriptRawMesh};
	static Build(StaticMesh: StaticMesh): void;
	static C(Other: UObject): JavascriptRawMeshLibrary;
}

declare type EPropertyEditorNameAreaSettings = string | symbol;
declare var EPropertyEditorNameAreaSettings = { HideNameArea:'HideNameArea',ObjectsUseNameArea:'ObjectsUseNameArea',ActorsUseNameArea:'ActorsUseNameArea',ComponentsAndActorsUseNameArea:'ComponentsAndActorsUseNameArea', };
declare class PropertyEditor extends Widget { 
	OnChange: UnrealEngineMulticastDelegate<(ParameterName: string) => void>;
	bUpdateFromSelection: boolean;
	bLockable: boolean;
	bAllowSearch: boolean;
	bHideSelectionTip: boolean;
	NameAreaSettings: EPropertyEditorNameAreaSettings;
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): PropertyEditor;
	static Find(Outer: UObject, ResourceName: string): PropertyEditor;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): PropertyEditor;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyEditor;
	SetObjects(Objects: UObject[],bForceRefresh: boolean,bOverrideLock: boolean): void;
	SetObject(UObject: UObject,bForceRefresh: boolean): void;
	static C(Other: UObject): PropertyEditor;
}

declare class TRASHCLASS_DmgTypeBP_Environmental_0 { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TRASHCLASS_DmgTypeBP_Environmental_0;
	static Find(Outer: UObject, ResourceName: string): TRASHCLASS_DmgTypeBP_Environmental_0;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TRASHCLASS_DmgTypeBP_Environmental_0;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TRASHCLASS_DmgTypeBP_Environmental_0;
	static C(Other: UObject): TRASHCLASS_DmgTypeBP_Environmental_0;
}

declare class ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1 { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1;
	static Find(Outer: UObject, ResourceName: string): ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1;
	static C(Other: UObject): ORPHANED_DATA_ONLY_DmgTypeBP_Environmental_C_1;
}

declare class TRASHCLASS_LevelEditorAttract_2 { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): TRASHCLASS_LevelEditorAttract_2;
	static Find(Outer: UObject, ResourceName: string): TRASHCLASS_LevelEditorAttract_2;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): TRASHCLASS_LevelEditorAttract_2;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TRASHCLASS_LevelEditorAttract_2;
	static C(Other: UObject): TRASHCLASS_LevelEditorAttract_2;
}

declare class ORPHANED_DATA_ONLY_LevelEditorAttract_C_3 { 
	constructor();
	constructor(Outer: UObject);
	static Load(ResourceName: string): ORPHANED_DATA_ONLY_LevelEditorAttract_C_3;
	static Find(Outer: UObject, ResourceName: string): ORPHANED_DATA_ONLY_LevelEditorAttract_C_3;
	static StaticClass: any;
	static GetClassObject(): UClass;
	static GetDefaultObject(): ORPHANED_DATA_ONLY_LevelEditorAttract_C_3;
	static GetDefaultSubobjectByName(Name: string): UObject;
	static SetDefaultSubobjectClass(Name: string): void;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ORPHANED_DATA_ONLY_LevelEditorAttract_C_3;
	static C(Other: UObject): ORPHANED_DATA_ONLY_LevelEditorAttract_C_3;
}

declare var Context : JavascriptContext;

declare var Root : JavascriptEditorTick;

