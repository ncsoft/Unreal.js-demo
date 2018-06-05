/// <reference path="_part_0_ue.d.ts">/>
/// <reference path="_part_1_ue.d.ts">/>
declare class AnimationModifier extends UObject { 
	RevisionGuid: Guid;
	AppliedGuid: Guid;
	StoredNativeRevision: number;
	static Load(ResourceName: string): AnimationModifier;
	static Find(Outer: UObject, ResourceName: string): AnimationModifier;
	static GetDefaultObject(): AnimationModifier;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimationModifier;
	OnRevert(AnimationSequence: AnimSequence): void;
	OnApply(AnimationSequence: AnimSequence): void;
	static C(Other: UObject | any): AnimationModifier;
}

declare class AnimationModifiersAssetUserData extends AssetUserData { 
	AnimationModifierInstances: AnimationModifier[];
	static Load(ResourceName: string): AnimationModifiersAssetUserData;
	static Find(Outer: UObject, ResourceName: string): AnimationModifiersAssetUserData;
	static GetDefaultObject(): AnimationModifiersAssetUserData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimationModifiersAssetUserData;
	static C(Other: UObject | any): AnimationModifiersAssetUserData;
}

declare class NamedInterface { 
	InterfaceName: string;
	InterfaceObject: UObject;
	clone() : NamedInterface;
	static C(Other: UObject | any): NamedInterface;
}

declare class NamedInterfaceDef { 
	InterfaceName: string;
	InterfaceClassName: string;
	clone() : NamedInterfaceDef;
	static C(Other: UObject | any): NamedInterfaceDef;
}

declare class NamedInterfaces extends UObject { 
	NamedInterfaces: NamedInterface[];
	NamedInterfaceDefs: NamedInterfaceDef[];
	static Load(ResourceName: string): NamedInterfaces;
	static Find(Outer: UObject, ResourceName: string): NamedInterfaces;
	static GetDefaultObject(): NamedInterfaces;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NamedInterfaces;
	static C(Other: UObject | any): NamedInterfaces;
}

declare class TurnBasedMatchInterface extends Interface { 
	static Load(ResourceName: string): TurnBasedMatchInterface;
	static Find(Outer: UObject, ResourceName: string): TurnBasedMatchInterface;
	static GetDefaultObject(): TurnBasedMatchInterface;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TurnBasedMatchInterface;
	OnMatchReceivedTurn(Match: string,bDidBecomeActive: boolean): void;
	OnMatchEnded(Match: string): void;
	static C(Other: UObject | any): TurnBasedMatchInterface;
}

declare class AchievementBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): AchievementBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): AchievementBlueprintLibrary;
	static GetDefaultObject(): AchievementBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AchievementBlueprintLibrary;
	static GetCachedAchievementProgress(WorldContextObject: UObject,PlayerController: PlayerController,AchievementID: string,bFoundID?: boolean,Progress?: number): {bFoundID: boolean, Progress: number};
	static GetCachedAchievementDescription(WorldContextObject: UObject,PlayerController: PlayerController,AchievementID: string,bFoundID?: boolean,Title?: string,LockedDescription?: string,UnlockedDescription?: string,bHidden?: boolean): {bFoundID: boolean, Title: string, LockedDescription: string, UnlockedDescription: string, bHidden: boolean};
	static C(Other: UObject | any): AchievementBlueprintLibrary;
}

declare class AchievementQueryCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): AchievementQueryCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): AchievementQueryCallbackProxy;
	static GetDefaultObject(): AchievementQueryCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AchievementQueryCallbackProxy;
	static CacheAchievements(WorldContextObject: UObject,PlayerController: PlayerController): AchievementQueryCallbackProxy;
	static CacheAchievementDescriptions(WorldContextObject: UObject,PlayerController: PlayerController): AchievementQueryCallbackProxy;
	static C(Other: UObject | any): AchievementQueryCallbackProxy;
}

declare class AchievementWriteCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<(WrittenAchievementName: string, WrittenProgress: number, WrittenUserTag: number) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(WrittenAchievementName: string, WrittenProgress: number, WrittenUserTag: number) => void>;
	static Load(ResourceName: string): AchievementWriteCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): AchievementWriteCallbackProxy;
	static GetDefaultObject(): AchievementWriteCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AchievementWriteCallbackProxy;
	static WriteAchievementProgress(WorldContextObject: UObject,PlayerController: PlayerController,AchievementName: string,Progress: number,UserTag: number): AchievementWriteCallbackProxy;
	static C(Other: UObject | any): AchievementWriteCallbackProxy;
}

declare class ConnectionCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<(ErrorCode: number) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(ErrorCode: number) => void>;
	static Load(ResourceName: string): ConnectionCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): ConnectionCallbackProxy;
	static GetDefaultObject(): ConnectionCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ConnectionCallbackProxy;
	static ConnectToService(WorldContextObject: UObject,PlayerController: PlayerController): ConnectionCallbackProxy;
	static C(Other: UObject | any): ConnectionCallbackProxy;
}

declare class CreateSessionCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): CreateSessionCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): CreateSessionCallbackProxy;
	static GetDefaultObject(): CreateSessionCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CreateSessionCallbackProxy;
	static CreateSession(WorldContextObject: UObject,PlayerController: PlayerController,PublicConnections: number,bUseLAN: boolean): CreateSessionCallbackProxy;
	static C(Other: UObject | any): CreateSessionCallbackProxy;
}

declare class DestroySessionCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): DestroySessionCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): DestroySessionCallbackProxy;
	static GetDefaultObject(): DestroySessionCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DestroySessionCallbackProxy;
	static DestroySession(WorldContextObject: UObject,PlayerController: PlayerController): DestroySessionCallbackProxy;
	static C(Other: UObject | any): DestroySessionCallbackProxy;
}

declare class EndMatchCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): EndMatchCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): EndMatchCallbackProxy;
	static GetDefaultObject(): EndMatchCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EndMatchCallbackProxy;
	static C(Other: UObject | any): EndMatchCallbackProxy;
}

declare class EndTurnCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): EndTurnCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): EndTurnCallbackProxy;
	static GetDefaultObject(): EndTurnCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EndTurnCallbackProxy;
	static C(Other: UObject | any): EndTurnCallbackProxy;
}

declare class BlueprintSessionResult { 
	clone() : BlueprintSessionResult;
	static C(Other: UObject | any): BlueprintSessionResult;
}

declare class FindSessionsCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<(Results: BlueprintSessionResult[]) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(Results: BlueprintSessionResult[]) => void>;
	static Load(ResourceName: string): FindSessionsCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): FindSessionsCallbackProxy;
	static GetDefaultObject(): FindSessionsCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FindSessionsCallbackProxy;
	static GetServerName(Result: BlueprintSessionResult): string;
	static GetPingInMs(Result: BlueprintSessionResult): number;
	static GetMaxPlayers(Result: BlueprintSessionResult): number;
	static GetCurrentPlayers(Result: BlueprintSessionResult): number;
	static FindSessions(WorldContextObject: UObject,PlayerController: PlayerController,MaxResults: number,bUseLAN: boolean): FindSessionsCallbackProxy;
	static C(Other: UObject | any): FindSessionsCallbackProxy;
}

declare class FindTurnBasedMatchCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<(MatchID: string) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(MatchID: string) => void>;
	static Load(ResourceName: string): FindTurnBasedMatchCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): FindTurnBasedMatchCallbackProxy;
	static GetDefaultObject(): FindTurnBasedMatchCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FindTurnBasedMatchCallbackProxy;
	static C(Other: UObject | any): FindTurnBasedMatchCallbackProxy;
}

declare type EInAppPurchaseState = 'Unknown' | 'Success' | 'Failed' | 'Cancelled' | 'Invalid' | 'NotAllowed' | 'Restored' | 'AlreadyOwned' | 'EInAppPurchaseState_MAX';
declare var EInAppPurchaseState : { Unknown:'Unknown',Success:'Success',Failed:'Failed',Cancelled:'Cancelled',Invalid:'Invalid',NotAllowed:'NotAllowed',Restored:'Restored',AlreadyOwned:'AlreadyOwned',EInAppPurchaseState_MAX:'EInAppPurchaseState_MAX', };
declare class InAppPurchaseProductInfo { 
	Identifier: string;
	TransactionIdentifier: string;
	DisplayName: string;
	DisplayDescription: string;
	DisplayPrice: string;
	RawPrice: number;
	CurrencyCode: string;
	CurrencySymbol: string;
	DecimalSeparator: string;
	GroupingSeparator: string;
	ReceiptData: string;
	clone() : InAppPurchaseProductInfo;
	static C(Other: UObject | any): InAppPurchaseProductInfo;
}

declare class InAppPurchaseProductRequest { 
	ProductIdentifier: string;
	bIsConsumable: boolean;
	clone() : InAppPurchaseProductRequest;
	static C(Other: UObject | any): InAppPurchaseProductRequest;
}

declare class InAppPurchaseCallbackProxy extends UObject { 
	OnSuccess: UnrealEngineMulticastDelegate<(CompletionStatus: EInAppPurchaseState, InAppPurchaseInformation: InAppPurchaseProductInfo) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(CompletionStatus: EInAppPurchaseState, InAppPurchaseInformation: InAppPurchaseProductInfo) => void>;
	static Load(ResourceName: string): InAppPurchaseCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): InAppPurchaseCallbackProxy;
	static GetDefaultObject(): InAppPurchaseCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InAppPurchaseCallbackProxy;
	static CreateProxyObjectForInAppPurchase(PlayerController: PlayerController,ProductRequest: InAppPurchaseProductRequest): InAppPurchaseCallbackProxy;
	static C(Other: UObject | any): InAppPurchaseCallbackProxy;
}

declare class InAppPurchaseQueryCallbackProxy extends UObject { 
	OnSuccess: UnrealEngineMulticastDelegate<(InAppPurchaseInformation: InAppPurchaseProductInfo[]) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(InAppPurchaseInformation: InAppPurchaseProductInfo[]) => void>;
	static Load(ResourceName: string): InAppPurchaseQueryCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): InAppPurchaseQueryCallbackProxy;
	static GetDefaultObject(): InAppPurchaseQueryCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InAppPurchaseQueryCallbackProxy;
	static CreateProxyObjectForInAppPurchaseQuery(PlayerController: PlayerController,ProductIdentifiers: string[]): InAppPurchaseQueryCallbackProxy;
	static C(Other: UObject | any): InAppPurchaseQueryCallbackProxy;
}

declare class InAppPurchaseRestoreInfo { 
	Identifier: string;
	ReceiptData: string;
	TransactionIdentifier: string;
	clone() : InAppPurchaseRestoreInfo;
	static C(Other: UObject | any): InAppPurchaseRestoreInfo;
}

declare class InAppPurchaseRestoreCallbackProxy extends UObject { 
	OnSuccess: UnrealEngineMulticastDelegate<(CompletionStatus: EInAppPurchaseState, InAppRestorePurchaseInformation: InAppPurchaseRestoreInfo[]) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(CompletionStatus: EInAppPurchaseState, InAppRestorePurchaseInformation: InAppPurchaseRestoreInfo[]) => void>;
	static Load(ResourceName: string): InAppPurchaseRestoreCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): InAppPurchaseRestoreCallbackProxy;
	static GetDefaultObject(): InAppPurchaseRestoreCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InAppPurchaseRestoreCallbackProxy;
	static CreateProxyObjectForInAppPurchaseRestore(ConsumableProductFlags: InAppPurchaseProductRequest[],PlayerController: PlayerController): InAppPurchaseRestoreCallbackProxy;
	static C(Other: UObject | any): InAppPurchaseRestoreCallbackProxy;
}

declare class IpConnection extends NetConnection { 
	static Load(ResourceName: string): IpConnection;
	static Find(Outer: UObject, ResourceName: string): IpConnection;
	static GetDefaultObject(): IpConnection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): IpConnection;
	static C(Other: UObject | any): IpConnection;
}

declare class IpNetDriver extends NetDriver { 
	LogPortUnreach: boolean;
	AllowPlayerPortUnreach: boolean;
	MaxPortCountToTry: any;
	ServerDesiredSocketReceiveBufferBytes: any;
	ServerDesiredSocketSendBufferBytes: any;
	ClientDesiredSocketReceiveBufferBytes: any;
	ClientDesiredSocketSendBufferBytes: any;
	static Load(ResourceName: string): IpNetDriver;
	static Find(Outer: UObject, ResourceName: string): IpNetDriver;
	static GetDefaultObject(): IpNetDriver;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): IpNetDriver;
	static C(Other: UObject | any): IpNetDriver;
}

declare class JoinSessionCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): JoinSessionCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): JoinSessionCallbackProxy;
	static GetDefaultObject(): JoinSessionCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JoinSessionCallbackProxy;
	static JoinSession(WorldContextObject: UObject,PlayerController: PlayerController,SearchResult: BlueprintSessionResult): JoinSessionCallbackProxy;
	static C(Other: UObject | any): JoinSessionCallbackProxy;
}

declare class LeaderboardBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): LeaderboardBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): LeaderboardBlueprintLibrary;
	static GetDefaultObject(): LeaderboardBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LeaderboardBlueprintLibrary;
	static WriteLeaderboardInteger(PlayerController: PlayerController,StatName: string,StatValue: number): boolean;
	static C(Other: UObject | any): LeaderboardBlueprintLibrary;
}

declare class LeaderboardFlushCallbackProxy extends UObject { 
	OnSuccess: UnrealEngineMulticastDelegate<(SessionName: string) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(SessionName: string) => void>;
	static Load(ResourceName: string): LeaderboardFlushCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): LeaderboardFlushCallbackProxy;
	static GetDefaultObject(): LeaderboardFlushCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LeaderboardFlushCallbackProxy;
	static CreateProxyObjectForFlush(PlayerController: PlayerController,SessionName: string): LeaderboardFlushCallbackProxy;
	static C(Other: UObject | any): LeaderboardFlushCallbackProxy;
}

declare class LeaderboardQueryCallbackProxy extends UObject { 
	OnSuccess: UnrealEngineMulticastDelegate<(LeaderboardValue: number) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(LeaderboardValue: number) => void>;
	static Load(ResourceName: string): LeaderboardQueryCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): LeaderboardQueryCallbackProxy;
	static GetDefaultObject(): LeaderboardQueryCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LeaderboardQueryCallbackProxy;
	static CreateProxyObjectForIntQuery(PlayerController: PlayerController,StatName: string): LeaderboardQueryCallbackProxy;
	static C(Other: UObject | any): LeaderboardQueryCallbackProxy;
}

declare class LogoutCallbackProxy extends BlueprintAsyncActionBase { 
	OnSuccess: UnrealEngineMulticastDelegate<(PlayerController: PlayerController) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(PlayerController: PlayerController) => void>;
	static Load(ResourceName: string): LogoutCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): LogoutCallbackProxy;
	static GetDefaultObject(): LogoutCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LogoutCallbackProxy;
	static Logout(WorldContextObject: UObject,PlayerController: PlayerController): LogoutCallbackProxy;
	static C(Other: UObject | any): LogoutCallbackProxy;
}

declare class OnlineBeacon extends Actor { 
	BeaconConnectionInitialTimeout: number;
	BeaconConnectionTimeout: number;
	NetDriver: NetDriver;
	static GetDefaultObject(): OnlineBeacon;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineBeacon;
	static C(Other: UObject | any): OnlineBeacon;
}

declare class OnlineBeaconHostObject extends Actor { 
	BeaconTypeName: string;
	ClientBeaconActorClass: UnrealEngineClass;
	ClientActors: OnlineBeaconClient[];
	static GetDefaultObject(): OnlineBeaconHostObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineBeaconHostObject;
	static C(Other: UObject | any): OnlineBeaconHostObject;
}

declare type EBeaconConnectionState = 'Invalid' | 'Closed' | 'Pending' | 'Open' | 'EBeaconConnectionState_MAX';
declare var EBeaconConnectionState : { Invalid:'Invalid',Closed:'Closed',Pending:'Pending',Open:'Open',EBeaconConnectionState_MAX:'EBeaconConnectionState_MAX', };
declare class OnlineBeaconClient extends OnlineBeacon { 
	BeaconOwner: OnlineBeaconHostObject;
	BeaconConnection: NetConnection;
	ConnectionState: EBeaconConnectionState;
	static GetDefaultObject(): OnlineBeaconClient;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineBeaconClient;
	ClientOnConnected(): void;
	static C(Other: UObject | any): OnlineBeaconClient;
}

declare class OnlineBeaconHost extends OnlineBeacon { 
	ListenPort: number;
	ClientActors: OnlineBeaconClient[];
	static GetDefaultObject(): OnlineBeaconHost;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineBeaconHost;
	static C(Other: UObject | any): OnlineBeaconHost;
}

declare class OnlineEngineInterfaceImpl extends OnlineEngineInterface { 
	VoiceSubsystemNameOverride: string;
	static Load(ResourceName: string): OnlineEngineInterfaceImpl;
	static Find(Outer: UObject, ResourceName: string): OnlineEngineInterfaceImpl;
	static GetDefaultObject(): OnlineEngineInterfaceImpl;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineEngineInterfaceImpl;
	static C(Other: UObject | any): OnlineEngineInterfaceImpl;
}

declare class PIELoginSettingsInternal { 
	ID: string;
	Token: string;
	Type: string;
	TokenBytes: number[];
	clone() : PIELoginSettingsInternal;
	static C(Other: UObject | any): PIELoginSettingsInternal;
}

declare class OnlinePIESettings extends DeveloperSettings { 
	bOnlinePIEEnabled: boolean;
	Logins: PIELoginSettingsInternal[];
	static Load(ResourceName: string): OnlinePIESettings;
	static Find(Outer: UObject, ResourceName: string): OnlinePIESettings;
	static GetDefaultObject(): OnlinePIESettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlinePIESettings;
	static C(Other: UObject | any): OnlinePIESettings;
}

declare class OnlineSessionClient extends OnlineSession { 
	bIsFromInvite: boolean;
	bHandlingDisconnect: boolean;
	static Load(ResourceName: string): OnlineSessionClient;
	static Find(Outer: UObject, ResourceName: string): OnlineSessionClient;
	static GetDefaultObject(): OnlineSessionClient;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnlineSessionClient;
	static C(Other: UObject | any): OnlineSessionClient;
}

declare class PlayerReservation { 
	UniqueId: UniqueNetIdRepl;
	ValidationStr: string;
	ElapsedTime: number;
	clone() : PlayerReservation;
	static C(Other: UObject | any): PlayerReservation;
}

declare class PartyReservation { 
	TeamNum: number;
	PartyLeader: UniqueNetIdRepl;
	PartyMembers: PlayerReservation[];
	clone() : PartyReservation;
	static C(Other: UObject | any): PartyReservation;
}

declare type EClientRequestType = 'NonePending' | 'ExistingSessionReservation' | 'ReservationUpdate' | 'EmptyServerReservation' | 'Reconnect' | 'Abandon' | 'EClientRequestType_MAX';
declare var EClientRequestType : { NonePending:'NonePending',ExistingSessionReservation:'ExistingSessionReservation',ReservationUpdate:'ReservationUpdate',EmptyServerReservation:'EmptyServerReservation',Reconnect:'Reconnect',Abandon:'Abandon',EClientRequestType_MAX:'EClientRequestType_MAX', };
declare type EPartyReservationResult = 'NoResult' | 'RequestPending' | 'GeneralError' | 'PartyLimitReached' | 'IncorrectPlayerCount' | 'RequestTimedOut' | 'ReservationDuplicate' | 'ReservationNotFound' | 'ReservationAccepted' | 'ReservationDenied' | 'ReservationDenied_Banned' | 'ReservationRequestCanceled' | 'ReservationInvalid' | 'BadSessionId' | 'ReservationDenied_ContainsExistingPlayers' | 'EPartyReservationResult_MAX';
declare var EPartyReservationResult : { NoResult:'NoResult',RequestPending:'RequestPending',GeneralError:'GeneralError',PartyLimitReached:'PartyLimitReached',IncorrectPlayerCount:'IncorrectPlayerCount',RequestTimedOut:'RequestTimedOut',ReservationDuplicate:'ReservationDuplicate',ReservationNotFound:'ReservationNotFound',ReservationAccepted:'ReservationAccepted',ReservationDenied:'ReservationDenied',ReservationDenied_Banned:'ReservationDenied_Banned',ReservationRequestCanceled:'ReservationRequestCanceled',ReservationInvalid:'ReservationInvalid',BadSessionId:'BadSessionId',ReservationDenied_ContainsExistingPlayers:'ReservationDenied_ContainsExistingPlayers',EPartyReservationResult_MAX:'EPartyReservationResult_MAX', };
declare class PartyBeaconClient extends OnlineBeaconClient { 
	DestSessionId: string;
	PendingReservation: PartyReservation;
	RequestType: EClientRequestType;
	bPendingReservationSent: boolean;
	bCancelReservation: boolean;
	static GetDefaultObject(): PartyBeaconClient;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PartyBeaconClient;
	ServerUpdateReservationRequest(SessionId: string,ReservationUpdate: PartyReservation): void;
	ServerReservationRequest(SessionId: string,Reservation: PartyReservation): void;
	ServerCancelReservationRequest(PartyLeader: UniqueNetIdRepl): void;
	ClientSendReservationUpdates(NumRemainingReservations: number): void;
	ClientSendReservationFull(): void;
	ClientReservationResponse(ReservationResponse: EPartyReservationResult): void;
	ClientCancelReservationResponse(ReservationResponse: EPartyReservationResult): void;
	static C(Other: UObject | any): PartyBeaconClient;
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
	static Load(ResourceName: string): PartyBeaconState;
	static Find(Outer: UObject, ResourceName: string): PartyBeaconState;
	static GetDefaultObject(): PartyBeaconState;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PartyBeaconState;
	static C(Other: UObject | any): PartyBeaconState;
}

declare class PartyBeaconHost extends OnlineBeaconHostObject { 
	State: PartyBeaconState;
	bLogoutOnSessionTimeout: boolean;
	SessionTimeoutSecs: number;
	TravelSessionTimeoutSecs: number;
	static GetDefaultObject(): PartyBeaconHost;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PartyBeaconHost;
	static C(Other: UObject | any): PartyBeaconHost;
}

declare type EMPMatchOutcome = 'None' | 'Quit' | 'Won' | 'Lost' | 'Tied' | 'TimeExpired' | 'First' | 'Second' | 'Third' | 'Fourth' | 'EMPMatchOutcome_MAX';
declare var EMPMatchOutcome : { None:'None',Quit:'Quit',Won:'Won',Lost:'Lost',Tied:'Tied',TimeExpired:'TimeExpired',First:'First',Second:'Second',Third:'Third',Fourth:'Fourth',EMPMatchOutcome_MAX:'EMPMatchOutcome_MAX', };
declare class QuitMatchCallbackProxy extends OnlineBlueprintCallProxyBase { 
	OnSuccess: UnrealEngineMulticastDelegate<() => void>;
	OnFailure: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): QuitMatchCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): QuitMatchCallbackProxy;
	static GetDefaultObject(): QuitMatchCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): QuitMatchCallbackProxy;
	static QuitMatch(WorldContextObject: UObject,PlayerController: PlayerController,MatchID: string,Outcome: EMPMatchOutcome,TurnTimeoutInSeconds: number): QuitMatchCallbackProxy;
	static C(Other: UObject | any): QuitMatchCallbackProxy;
}

declare class ShowLoginUICallbackProxy extends BlueprintAsyncActionBase { 
	OnSuccess: UnrealEngineMulticastDelegate<(PlayerController: PlayerController) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(PlayerController: PlayerController) => void>;
	static Load(ResourceName: string): ShowLoginUICallbackProxy;
	static Find(Outer: UObject, ResourceName: string): ShowLoginUICallbackProxy;
	static GetDefaultObject(): ShowLoginUICallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ShowLoginUICallbackProxy;
	static ShowExternalLoginUI(WorldContextObject: UObject,InPlayerController: PlayerController): ShowLoginUICallbackProxy;
	static C(Other: UObject | any): ShowLoginUICallbackProxy;
}

declare class TestBeaconClient extends OnlineBeaconClient { 
	static GetDefaultObject(): TestBeaconClient;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBeaconClient;
	ServerPong(): void;
	ClientPing(): void;
	static C(Other: UObject | any): TestBeaconClient;
}

declare class TestBeaconHost extends OnlineBeaconHostObject { 
	static GetDefaultObject(): TestBeaconHost;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBeaconHost;
	static C(Other: UObject | any): TestBeaconHost;
}

declare class TurnBasedBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): TurnBasedBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): TurnBasedBlueprintLibrary;
	static GetDefaultObject(): TurnBasedBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TurnBasedBlueprintLibrary;
	static RegisterTurnBasedMatchInterfaceObject(WorldContextObject: UObject,PlayerController: PlayerController,UObject: UObject): void;
	static GetPlayerDisplayName(WorldContextObject: UObject,PlayerController: PlayerController,MatchID: string,PlayerIndex: number,PlayerDisplayName?: string): {PlayerDisplayName: string};
	static GetMyPlayerIndex(WorldContextObject: UObject,PlayerController: PlayerController,MatchID: string,PlayerIndex?: number): {PlayerIndex: number};
	static GetIsMyTurn(WorldContextObject: UObject,PlayerController: PlayerController,MatchID: string,bIsMyTurn?: boolean): {bIsMyTurn: boolean};
	static C(Other: UObject | any): TurnBasedBlueprintLibrary;
}

declare class VoipListenerSynthComponent extends SynthComponent { 
	static Load(ResourceName: string): VoipListenerSynthComponent;
	static Find(Outer: UObject, ResourceName: string): VoipListenerSynthComponent;
	static GetDefaultObject(): VoipListenerSynthComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VoipListenerSynthComponent;
	IsIdling(): boolean;
	static C(Other: UObject | any): VoipListenerSynthComponent;
}

declare class K2Node_InAppPurchase extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_InAppPurchase;
	static Find(Outer: UObject, ResourceName: string): K2Node_InAppPurchase;
	static GetDefaultObject(): K2Node_InAppPurchase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_InAppPurchase;
	static C(Other: UObject | any): K2Node_InAppPurchase;
}

declare class K2Node_InAppPurchaseQuery extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_InAppPurchaseQuery;
	static Find(Outer: UObject, ResourceName: string): K2Node_InAppPurchaseQuery;
	static GetDefaultObject(): K2Node_InAppPurchaseQuery;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_InAppPurchaseQuery;
	static C(Other: UObject | any): K2Node_InAppPurchaseQuery;
}

declare class K2Node_InAppPurchaseRestore extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_InAppPurchaseRestore;
	static Find(Outer: UObject, ResourceName: string): K2Node_InAppPurchaseRestore;
	static GetDefaultObject(): K2Node_InAppPurchaseRestore;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_InAppPurchaseRestore;
	static C(Other: UObject | any): K2Node_InAppPurchaseRestore;
}

declare class K2Node_LatentOnlineCall extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_LatentOnlineCall;
	static Find(Outer: UObject, ResourceName: string): K2Node_LatentOnlineCall;
	static GetDefaultObject(): K2Node_LatentOnlineCall;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LatentOnlineCall;
	static C(Other: UObject | any): K2Node_LatentOnlineCall;
}

declare class K2Node_LeaderboardFlush extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_LeaderboardFlush;
	static Find(Outer: UObject, ResourceName: string): K2Node_LeaderboardFlush;
	static GetDefaultObject(): K2Node_LeaderboardFlush;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LeaderboardFlush;
	static C(Other: UObject | any): K2Node_LeaderboardFlush;
}

declare class K2Node_LeaderboardQuery extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_LeaderboardQuery;
	static Find(Outer: UObject, ResourceName: string): K2Node_LeaderboardQuery;
	static GetDefaultObject(): K2Node_LeaderboardQuery;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LeaderboardQuery;
	static C(Other: UObject | any): K2Node_LeaderboardQuery;
}

declare type EARSessionType = 'None' | 'Orientation' | 'World' | 'Face' | 'EARSessionType_MAX';
declare var EARSessionType : { None:'None',Orientation:'Orientation',World:'World',Face:'Face',EARSessionType_MAX:'EARSessionType_MAX', };
declare type EARPlaneDetectionMode = 'None' | 'HorizontalPlaneDetection' | 'EARPlaneDetectionMode_MAX';
declare var EARPlaneDetectionMode : { None:'None',HorizontalPlaneDetection:'HorizontalPlaneDetection',EARPlaneDetectionMode_MAX:'EARPlaneDetectionMode_MAX', };
declare type EARLightEstimationMode = 'None' | 'AmbientLightEstimate' | 'DirectionalLightEstimate' | 'EARLightEstimationMode_MAX';
declare var EARLightEstimationMode : { None:'None',AmbientLightEstimate:'AmbientLightEstimate',DirectionalLightEstimate:'DirectionalLightEstimate',EARLightEstimationMode_MAX:'EARLightEstimationMode_MAX', };
declare type EARFrameSyncMode = 'SyncTickWithCameraImage' | 'SyncTickWithoutCameraImage' | 'EARFrameSyncMode_MAX';
declare var EARFrameSyncMode : { SyncTickWithCameraImage:'SyncTickWithCameraImage',SyncTickWithoutCameraImage:'SyncTickWithoutCameraImage',EARFrameSyncMode_MAX:'EARFrameSyncMode_MAX', };
declare class ARSessionConfig extends DataAsset { 
	SessionType: EARSessionType;
	PlaneDetectionMode: EARPlaneDetectionMode;
	LightEstimationMode: EARLightEstimationMode;
	FrameSyncMode: EARFrameSyncMode;
	bEnableAutomaticCameraOverlay: boolean;
	bEnableAutomaticCameraTracking: boolean;
	static Load(ResourceName: string): ARSessionConfig;
	static Find(Outer: UObject, ResourceName: string): ARSessionConfig;
	static GetDefaultObject(): ARSessionConfig;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ARSessionConfig;
	static C(Other: UObject | any): ARSessionConfig;
	StartARSession(): void;
	static StartARSession(SessionConfig: ARSessionConfig): void;
}

declare type EARTrackingQuality = 'NotTracking' | 'OrientationOnly' | 'OrientationAndPosition' | 'EARTrackingQuality_MAX';
declare var EARTrackingQuality : { NotTracking:'NotTracking',OrientationOnly:'OrientationOnly',OrientationAndPosition:'OrientationAndPosition',EARTrackingQuality_MAX:'EARTrackingQuality_MAX', };
declare class ARLightEstimate extends UObject { 
	static Load(ResourceName: string): ARLightEstimate;
	static Find(Outer: UObject, ResourceName: string): ARLightEstimate;
	static GetDefaultObject(): ARLightEstimate;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ARLightEstimate;
	static C(Other: UObject | any): ARLightEstimate;
}

declare type EARSessionStatus = 'NotStarted' | 'Running' | 'NotSupported' | 'FatalError' | 'PermissionNotGranted' | 'UnsupportedConfiguration' | 'Other' | 'EARSessionStatus_MAX';
declare var EARSessionStatus : { NotStarted:'NotStarted',Running:'Running',NotSupported:'NotSupported',FatalError:'FatalError',PermissionNotGranted:'PermissionNotGranted',UnsupportedConfiguration:'UnsupportedConfiguration',Other:'Other',EARSessionStatus_MAX:'EARSessionStatus_MAX', };
declare class ARSessionStatus { 
	AdditionalInfo: string;
	Status: EARSessionStatus;
	clone() : ARSessionStatus;
	static C(Other: UObject | any): ARSessionStatus;
	static GetARSessionStatus(): ARSessionStatus;
}

declare class ARBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): ARBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): ARBlueprintLibrary;
	static GetDefaultObject(): ARBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ARBlueprintLibrary;
	static UnpinComponent(ComponentToUnpin: SceneComponent): void;
	static StopARSession(): void;
	static StartARSession(SessionConfig: ARSessionConfig): void;
	static SetAlignmentTransform(InAlignmentTransform: Transform): void;
	static RemovePin(PinToRemove: ARPin): void;
	static PinComponentToTraceResult(ComponentToPin: SceneComponent,TraceResult: ARTraceResult,DebugName: string): ARPin;
	static PinComponent(ComponentToPin: SceneComponent,PinToWorldTransform: Transform,TrackedGeometry: ARTrackedGeometry,DebugName: string): ARPin;
	static PauseARSession(): void;
	static LineTraceTrackedObjects(ScreenCoord: Vector2D,bTestFeaturePoints: boolean,bTestGroundPlane: boolean,bTestPlaneExtents: boolean,bTestPlaneBoundaryPolygon: boolean): ARTraceResult[];
	static IsSessionTypeSupported(SessionType: EARSessionType): boolean;
	static GetTrackingQuality(): EARTrackingQuality;
	static GetSessionConfig(): ARSessionConfig;
	static GetCurrentLightEstimate(): ARLightEstimate;
	static GetARSessionStatus(): ARSessionStatus;
	static GetAllPins(): ARPin[];
	static GetAllGeometries(): ARTrackedGeometry[];
	static DebugDrawTrackedGeometry(TrackedGeometry: ARTrackedGeometry,WorldContextObject: UObject,Color: LinearColor,OutlineThickness: number,PersistForSeconds: number): void;
	static DebugDrawPin(ARPin: ARPin,WorldContextObject: UObject,Color: LinearColor,Scale: number,PersistForSeconds: number): void;
	static C(Other: UObject | any): ARBlueprintLibrary;
}

declare class ARTraceResultLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): ARTraceResultLibrary;
	static Find(Outer: UObject, ResourceName: string): ARTraceResultLibrary;
	static GetDefaultObject(): ARTraceResultLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ARTraceResultLibrary;
	static GetTrackedGeometry(TraceResult: ARTraceResult): ARTrackedGeometry;
	static GetTraceChannel(TraceResult: ARTraceResult): EARLineTraceChannels;
	static GetLocalToWorldTransform(TraceResult: ARTraceResult): Transform;
	static GetLocalToTrackingTransform(TraceResult: ARTraceResult): Transform;
	static GetDistanceFromCamera(TraceResult: ARTraceResult): number;
	static C(Other: UObject | any): ARTraceResultLibrary;
}

declare class ARBasicLightEstimate extends ARLightEstimate { 
	AmbientIntensityLumens: number;
	AmbientColorTemperatureKelvin: number;
	static Load(ResourceName: string): ARBasicLightEstimate;
	static Find(Outer: UObject, ResourceName: string): ARBasicLightEstimate;
	static GetDefaultObject(): ARBasicLightEstimate;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ARBasicLightEstimate;
	GetAmbientIntensityLumens(): number;
	GetAmbientColorTemperatureKelvin(): number;
	GetAmbientColor(): LinearColor;
	static C(Other: UObject | any): ARBasicLightEstimate;
}

declare class ARTraceResultDummy extends UObject { 
	static Load(ResourceName: string): ARTraceResultDummy;
	static Find(Outer: UObject, ResourceName: string): ARTraceResultDummy;
	static GetDefaultObject(): ARTraceResultDummy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ARTraceResultDummy;
	static C(Other: UObject | any): ARTraceResultDummy;
}

declare class ARPlaneGeometry extends ARTrackedGeometry { 
	Center: Vector;
	Extent: Vector;
	BoundaryPolygon: Vector[];
	SubsumedBy: ARPlaneGeometry;
	static Load(ResourceName: string): ARPlaneGeometry;
	static Find(Outer: UObject, ResourceName: string): ARPlaneGeometry;
	static GetDefaultObject(): ARPlaneGeometry;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ARPlaneGeometry;
	GetSubsumedBy(): ARPlaneGeometry;
	GetExtent(): Vector;
	GetCenter(): Vector;
	GetBoundaryPolygonInLocalSpace(): Vector[];
	static C(Other: UObject | any): ARPlaneGeometry;
}

declare class ARTrackedPoint extends ARTrackedGeometry { 
	static Load(ResourceName: string): ARTrackedPoint;
	static Find(Outer: UObject, ResourceName: string): ARTrackedPoint;
	static GetDefaultObject(): ARTrackedPoint;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ARTrackedPoint;
	static C(Other: UObject | any): ARTrackedPoint;
}

declare type EARFaceBlendShape = 'EyeBlinkLeft' | 'EyeLookDownLeft' | 'EyeLookInLeft' | 'EyeLookOutLeft' | 'EyeLookUpLeft' | 'EyeSquintLeft' | 'EyeWideLeft' | 'EyeBlinkRight' | 'EyeLookDownRight' | 'EyeLookInRight' | 'EyeLookOutRight' | 'EyeLookUpRight' | 'EyeSquintRight' | 'EyeWideRight' | 'JawForward' | 'JawLeft' | 'JawRight' | 'JawOpen' | 'MouthClose' | 'MouthFunnel' | 'MouthPucker' | 'MouthLeft' | 'MouthRight' | 'MouthSmileLeft' | 'MouthSmileRight' | 'MouthFrownLeft' | 'MouthFrownRight' | 'MouthDimpleLeft' | 'MouthDimpleRight' | 'MouthStretchLeft' | 'MouthStretchRight' | 'MouthRollLower' | 'MouthRollUpper' | 'MouthShrugLower' | 'MouthShrugUpper' | 'MouthPressLeft' | 'MouthPressRight' | 'MouthLowerDownLeft' | 'MouthLowerDownRight' | 'MouthUpperUpLeft' | 'MouthUpperUpRight' | 'BrowDownLeft' | 'BrowDownRight' | 'BrowInnerUp' | 'BrowOuterUpLeft' | 'BrowOuterUpRight' | 'CheekPuff' | 'CheekSquintLeft' | 'CheekSquintRight' | 'NoseSneerLeft' | 'NoseSneerRight' | 'MAX';
declare var EARFaceBlendShape : { EyeBlinkLeft:'EyeBlinkLeft',EyeLookDownLeft:'EyeLookDownLeft',EyeLookInLeft:'EyeLookInLeft',EyeLookOutLeft:'EyeLookOutLeft',EyeLookUpLeft:'EyeLookUpLeft',EyeSquintLeft:'EyeSquintLeft',EyeWideLeft:'EyeWideLeft',EyeBlinkRight:'EyeBlinkRight',EyeLookDownRight:'EyeLookDownRight',EyeLookInRight:'EyeLookInRight',EyeLookOutRight:'EyeLookOutRight',EyeLookUpRight:'EyeLookUpRight',EyeSquintRight:'EyeSquintRight',EyeWideRight:'EyeWideRight',JawForward:'JawForward',JawLeft:'JawLeft',JawRight:'JawRight',JawOpen:'JawOpen',MouthClose:'MouthClose',MouthFunnel:'MouthFunnel',MouthPucker:'MouthPucker',MouthLeft:'MouthLeft',MouthRight:'MouthRight',MouthSmileLeft:'MouthSmileLeft',MouthSmileRight:'MouthSmileRight',MouthFrownLeft:'MouthFrownLeft',MouthFrownRight:'MouthFrownRight',MouthDimpleLeft:'MouthDimpleLeft',MouthDimpleRight:'MouthDimpleRight',MouthStretchLeft:'MouthStretchLeft',MouthStretchRight:'MouthStretchRight',MouthRollLower:'MouthRollLower',MouthRollUpper:'MouthRollUpper',MouthShrugLower:'MouthShrugLower',MouthShrugUpper:'MouthShrugUpper',MouthPressLeft:'MouthPressLeft',MouthPressRight:'MouthPressRight',MouthLowerDownLeft:'MouthLowerDownLeft',MouthLowerDownRight:'MouthLowerDownRight',MouthUpperUpLeft:'MouthUpperUpLeft',MouthUpperUpRight:'MouthUpperUpRight',BrowDownLeft:'BrowDownLeft',BrowDownRight:'BrowDownRight',BrowInnerUp:'BrowInnerUp',BrowOuterUpLeft:'BrowOuterUpLeft',BrowOuterUpRight:'BrowOuterUpRight',CheekPuff:'CheekPuff',CheekSquintLeft:'CheekSquintLeft',CheekSquintRight:'CheekSquintRight',NoseSneerLeft:'NoseSneerLeft',NoseSneerRight:'NoseSneerRight',MAX:'MAX', };
declare class ARFaceGeometry extends ARTrackedGeometry { 
	BlendShapes: any;
	static Load(ResourceName: string): ARFaceGeometry;
	static Find(Outer: UObject, ResourceName: string): ARFaceGeometry;
	static GetDefaultObject(): ARFaceGeometry;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ARFaceGeometry;
	GetBlendShapeValue(BlendShape: EARFaceBlendShape): number;
	GetBlendShapes(): any;
	static C(Other: UObject | any): ARFaceGeometry;
}

declare class ARTypesDummyClass extends UObject { 
	static Load(ResourceName: string): ARTypesDummyClass;
	static Find(Outer: UObject, ResourceName: string): ARTypesDummyClass;
	static GetDefaultObject(): ARTypesDummyClass;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ARTypesDummyClass;
	static C(Other: UObject | any): ARTypesDummyClass;
}

declare class KismetProceduralMeshLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): KismetProceduralMeshLibrary;
	static Find(Outer: UObject, ResourceName: string): KismetProceduralMeshLibrary;
	static GetDefaultObject(): KismetProceduralMeshLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): KismetProceduralMeshLibrary;
	static SliceProceduralMesh(InProcMesh: ProceduralMeshComponent,PlanePosition: Vector,PlaneNormal: Vector,bCreateOtherHalf: boolean,OutOtherHalfProcMesh?: ProceduralMeshComponent,CapOption?: EProcMeshSliceCapOption,CapMaterial?: MaterialInterface): {OutOtherHalfProcMesh: ProceduralMeshComponent};
	static GetSectionFromStaticMesh(InMesh: StaticMesh,LODIndex: number,SectionIndex: number,Vertices?: Vector[],Triangles?: number[],Normals?: Vector[],UVs?: Vector2D[],Tangents?: ProcMeshTangent[]): {Vertices: Vector[], Triangles: number[], Normals: Vector[], UVs: Vector2D[], Tangents: ProcMeshTangent[]};
	static GetSectionFromProceduralMesh(InProcMesh: ProceduralMeshComponent,SectionIndex: number,Vertices?: Vector[],Triangles?: number[],Normals?: Vector[],UVs?: Vector2D[],Tangents?: ProcMeshTangent[]): {Vertices: Vector[], Triangles: number[], Normals: Vector[], UVs: Vector2D[], Tangents: ProcMeshTangent[]};
	static GenerateBoxMesh(BoxRadius: Vector,Vertices?: Vector[],Triangles?: number[],Normals?: Vector[],UVs?: Vector2D[],Tangents?: ProcMeshTangent[]): {Vertices: Vector[], Triangles: number[], Normals: Vector[], UVs: Vector2D[], Tangents: ProcMeshTangent[]};
	static CreateGridMeshTriangles(NumX: number,NumY: number,bWinding: boolean,Triangles?: number[]): {Triangles: number[]};
	static CopyProceduralMeshFromStaticMeshComponent(StaticMeshComponent: StaticMeshComponent,LODIndex: number,ProcMeshComponent: ProceduralMeshComponent,bCreateCollision: boolean): void;
	static ConvertQuadToTriangles(Triangles?: number[],Vert0?: number,Vert1?: number,Vert2?: number,Vert3?: number): {Triangles: number[]};
	static CalculateTangentsForMesh(Vertices: Vector[],Triangles: number[],UVs: Vector2D[],Normals?: Vector[],Tangents?: ProcMeshTangent[]): {Normals: Vector[], Tangents: ProcMeshTangent[]};
	static C(Other: UObject | any): KismetProceduralMeshLibrary;
}

declare class LiveLinkSourceFactory extends UObject { 
	static Load(ResourceName: string): LiveLinkSourceFactory;
	static Find(Outer: UObject, ResourceName: string): LiveLinkSourceFactory;
	static GetDefaultObject(): LiveLinkSourceFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LiveLinkSourceFactory;
	static C(Other: UObject | any): LiveLinkSourceFactory;
}

declare class LiveLinkInterpolationSettings { 
	bUseInterpolation: boolean;
	InterpolationOffset: number;
	clone() : LiveLinkInterpolationSettings;
	static C(Other: UObject | any): LiveLinkInterpolationSettings;
}

declare class LiveLinkSourceSettings extends UObject { 
	InterpolationSettings: LiveLinkInterpolationSettings;
	static Load(ResourceName: string): LiveLinkSourceSettings;
	static Find(Outer: UObject, ResourceName: string): LiveLinkSourceSettings;
	static GetDefaultObject(): LiveLinkSourceSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LiveLinkSourceSettings;
	static C(Other: UObject | any): LiveLinkSourceSettings;
}

declare class AppleARKitBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): AppleARKitBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): AppleARKitBlueprintLibrary;
	static GetDefaultObject(): AppleARKitBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AppleARKitBlueprintLibrary;
	static HitTestAtScreenPosition_TrackingSpace(WorldContextObject: UObject,ScreenPosition: Vector2D,Types: EAppleARKitHitTestResultType,OutResults?: AppleARKitHitTestResult[]): {OutResults: AppleARKitHitTestResult[], $: boolean};
	static GetCurrentFrame(WorldContextObject: UObject,OutCurrentFrame?: AppleARKitFrame): {OutCurrentFrame: AppleARKitFrame, $: boolean};
	static C(Other: UObject | any): AppleARKitBlueprintLibrary;
}

declare type EARFaceComponentTransformMixing = 'ComponentOnly' | 'ComponentLocationTrackedRotation' | 'ComponentWithTracked' | 'TrackingOnly' | 'EARFaceComponentTransformMixing_MAX';
declare var EARFaceComponentTransformMixing : { ComponentOnly:'ComponentOnly',ComponentLocationTrackedRotation:'ComponentLocationTrackedRotation',ComponentWithTracked:'ComponentWithTracked',TrackingOnly:'TrackingOnly',EARFaceComponentTransformMixing_MAX:'EARFaceComponentTransformMixing_MAX', };
declare class AppleARKitFaceMeshComponent extends ProceduralMeshComponent { 
	bWantsCollision: boolean;
	bAutoBindToLocalFaceMesh: boolean;
	TransformSetting: EARFaceComponentTransformMixing;
	bFlipTrackedRotation: boolean;
	FaceMaterial: MaterialInterface;
	LiveLinkSubjectName: string;
	static Load(ResourceName: string): AppleARKitFaceMeshComponent;
	static Find(Outer: UObject, ResourceName: string): AppleARKitFaceMeshComponent;
	static GetDefaultObject(): AppleARKitFaceMeshComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AppleARKitFaceMeshComponent;
	UpdateMeshFromBlendShapes(): void;
	UpdateMesh(Vertices: Vector[]): void;
	SetBlendShapes(InBlendShapes: any): void;
	SetBlendShapeAmount(BlendShape: EARFaceBlendShape,Amount: number): void;
	SetAutoBind(bAutoBind: boolean): void;
	PublishViaLiveLink(SubjectName: string): void;
	GetTransform(): Transform;
	GetLastUpdateTimestamp(): number;
	GetLastUpdateFrameNumber(): number;
	GetFaceBlendShapeAmount(BlendShape: EARFaceBlendShape): number;
	CreateMesh(Vertices: Vector[],Triangles: number[],UV0: Vector2D[]): void;
	static C(Other: UObject | any): AppleARKitFaceMeshComponent;
}

declare class AppleARKitPlaneAnchor extends AppleARKitAnchor { 
	static Load(ResourceName: string): AppleARKitPlaneAnchor;
	static Find(Outer: UObject, ResourceName: string): AppleARKitPlaneAnchor;
	static GetDefaultObject(): AppleARKitPlaneAnchor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AppleARKitPlaneAnchor;
	GetTransformToCenter(): Transform;
	GetExtent(): Vector;
	GetCenter(): Vector;
	static C(Other: UObject | any): AppleARKitPlaneAnchor;
}

declare type EARFaceTrackingDirection = 'FaceRelative' | 'FaceMirrored' | 'EARFaceTrackingDirection_MAX';
declare var EARFaceTrackingDirection : { FaceRelative:'FaceRelative',FaceMirrored:'FaceMirrored',EARFaceTrackingDirection_MAX:'EARFaceTrackingDirection_MAX', };
declare class AppleARKitSettings extends UObject { 
	bEnableLiveLinkForFaceTracking: boolean;
	LiveLinkPublishingPort: number;
	DefaultFaceTrackingLiveLinkSubjectName: string;
	DefaultFaceTrackingDirection: EARFaceTrackingDirection;
	static Load(ResourceName: string): AppleARKitSettings;
	static Find(Outer: UObject, ResourceName: string): AppleARKitSettings;
	static GetDefaultObject(): AppleARKitSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AppleARKitSettings;
	static C(Other: UObject | any): AppleARKitSettings;
}

declare class ARKitCameraOverlayMaterialLoader extends UObject { 
	DefaultCameraOverlayMaterial: MaterialInterface;
	static Load(ResourceName: string): ARKitCameraOverlayMaterialLoader;
	static Find(Outer: UObject, ResourceName: string): ARKitCameraOverlayMaterialLoader;
	static GetDefaultObject(): ARKitCameraOverlayMaterialLoader;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ARKitCameraOverlayMaterialLoader;
	static C(Other: UObject | any): ARKitCameraOverlayMaterialLoader;
}

declare type EARKitTextureType = 'TextureY' | 'TextureCbCr' | 'EARKitTextureType_MAX';
declare var EARKitTextureType : { TextureY:'TextureY',TextureCbCr:'TextureCbCr',EARKitTextureType_MAX:'EARKitTextureType_MAX', };
declare class MaterialExpressionARKitPassthroughCamera extends MaterialExpression { 
	Coordinates: ExpressionInput;
	ConstCoordinate: any;
	TextureType: EARKitTextureType;
	static Load(ResourceName: string): MaterialExpressionARKitPassthroughCamera;
	static Find(Outer: UObject, ResourceName: string): MaterialExpressionARKitPassthroughCamera;
	static GetDefaultObject(): MaterialExpressionARKitPassthroughCamera;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionARKitPassthroughCamera;
	static C(Other: UObject | any): MaterialExpressionARKitPassthroughCamera;
}

declare class DeprecatedGearVRControllerComponent extends SceneComponent { 
	ControllerMesh: StaticMesh;
	static Load(ResourceName: string): DeprecatedGearVRControllerComponent;
	static Find(Outer: UObject, ResourceName: string): DeprecatedGearVRControllerComponent;
	static GetDefaultObject(): DeprecatedGearVRControllerComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DeprecatedGearVRControllerComponent;
	GetMotionController(): MotionControllerComponent;
	GetControllerMesh(): StaticMeshComponent;
	static C(Other: UObject | any): DeprecatedGearVRControllerComponent;
}

declare class BoundaryTestResult { 
	IsTriggering: boolean;
	DeviceType: ETrackedDeviceType;
	ClosestDistance: number;
	ClosestPoint: Vector;
	ClosestPointNormal: Vector;
	clone() : BoundaryTestResult;
	static C(Other: UObject | any): BoundaryTestResult;
}

declare class OculusBoundaryComponent extends ActorComponent { 
	OnOuterBoundaryTriggered: UnrealEngineMulticastDelegate<(OuterBoundsInteractionList: BoundaryTestResult[]) => void>;
	OnOuterBoundaryReturned: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): OculusBoundaryComponent;
	static Find(Outer: UObject, ResourceName: string): OculusBoundaryComponent;
	static GetDefaultObject(): OculusBoundaryComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OculusBoundaryComponent;
	SetOuterBoundaryColor(InBoundaryColor: Color): boolean;
	ResetOuterBoundaryColor(): boolean;
	RequestOuterBoundaryVisible(BoundaryVisible: boolean): boolean;
	IsOuterBoundaryTriggered(): boolean;
	IsOuterBoundaryDisplayed(): boolean;
	GetTriggeredPlayAreaInfo(DeviceType: ETrackedDeviceType): BoundaryTestResult;
	GetTriggeredOuterBoundaryInfo(): BoundaryTestResult[];
	GetPlayAreaPoints(): Vector[];
	GetPlayAreaDimensions(): Vector;
	GetOuterBoundaryPoints(): Vector[];
	GetOuterBoundaryDimensions(): Vector;
	CheckIfPointWithinPlayArea(Point: Vector): BoundaryTestResult;
	CheckIfPointWithinOuterBounds(Point: Vector): BoundaryTestResult;
	static C(Other: UObject | any): OculusBoundaryComponent;
}

declare type ETiledMultiResLevel = 'ETiledMultiResLevel_Off' | 'ETiledMultiResLevel_LMSLow' | 'ETiledMultiResLevel_LMSMedium' | 'ETiledMultiResLevel_LMSHigh' | 'ETiledMultiResLevel_MAX';
declare var ETiledMultiResLevel : { ETiledMultiResLevel_Off:'ETiledMultiResLevel_Off',ETiledMultiResLevel_LMSLow:'ETiledMultiResLevel_LMSLow',ETiledMultiResLevel_LMSMedium:'ETiledMultiResLevel_LMSMedium',ETiledMultiResLevel_LMSHigh:'ETiledMultiResLevel_LMSHigh',ETiledMultiResLevel_MAX:'ETiledMultiResLevel_MAX', };
declare class HmdUserProfileField { 
	FieldName: string;
	FieldValue: string;
	clone() : HmdUserProfileField;
	static C(Other: UObject | any): HmdUserProfileField;
}

declare class HmdUserProfile { 
	Name: string;
	Gender: string;
	PlayerHeight: number;
	EyeHeight: number;
	IPD: number;
	NeckToEyeDistance: Vector2D;
	ExtraFields: HmdUserProfileField[];
	clone() : HmdUserProfile;
	static C(Other: UObject | any): HmdUserProfile;
	GetUserProfile(): {Profile: HmdUserProfile, $: boolean};
	static GetUserProfile(Profile?: HmdUserProfile): {Profile: HmdUserProfile, $: boolean};
}

declare type EGearVRControllerHandedness_DEPRECATED = 'RightHanded_DEPRECATED' | 'LeftHanded_DEPRECATED' | 'Unknown_DEPRECATED' | 'EGearVRControllerHandedness_MAX';
declare var EGearVRControllerHandedness_DEPRECATED : { RightHanded_DEPRECATED:'RightHanded_DEPRECATED',LeftHanded_DEPRECATED:'LeftHanded_DEPRECATED',Unknown_DEPRECATED:'Unknown_DEPRECATED',EGearVRControllerHandedness_MAX:'EGearVRControllerHandedness_MAX', };
declare class OculusFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): OculusFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): OculusFunctionLibrary;
	static GetDefaultObject(): OculusFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OculusFunctionLibrary;
	static ShowLoadingSplashScreen(): void;
	static ShowLoadingIcon(Texture: Texture2D): void;
	static SetTiledMultiresLevel(Level: ETiledMultiResLevel): void;
	static SetPositionScale3D(PosScale3D: Vector): void;
	static SetLoadingSplashParams(TexturePath: string,DistanceInMeters: Vector,SizeInMeters: Vector2D,RotationAxis: Vector,RotationDeltaInDeg: number): void;
	static SetDisplayFrequency(RequestedFrequency: number): void;
	static SetCPUAndGPULevels(CPULevel: number,GPULevel: number): void;
	static SetBaseRotationAndPositionOffset(BaseRot: Rotator,PosOffset: Vector,Options: EOrientPositionSelector): void;
	static SetBaseRotationAndBaseOffsetInMeters(Rotation: Rotator,BaseOffsetInMeters: Vector,Options: EOrientPositionSelector): void;
	static IsPowerLevelStateThrottled(): boolean;
	static IsPowerLevelStateMinimum(): boolean;
	static IsLoadingIconEnabled(): boolean;
	static IsDeviceTracked(DeviceType: ETrackedDeviceType): boolean;
	static IsControllerActive(): boolean;
	static IsAutoLoadingSplashScreenEnabled(): boolean;
	static HideLoadingSplashScreen(bClear: boolean): void;
	static HideLoadingIcon(): void;
	static HasSystemOverlayPresent(): boolean;
	static HasInputFocus(): boolean;
	static GetUserProfile(Profile?: HmdUserProfile): {Profile: HmdUserProfile, $: boolean};
	static GetTiledMultiresLevel(): ETiledMultiResLevel;
	static GetTemperatureInCelsius(): number;
	static GetRawSensorData(AngularAcceleration?: Vector,LinearAcceleration?: Vector,AngularVelocity?: Vector,LinearVelocity?: Vector,TimeInSeconds?: number,DeviceType?: ETrackedDeviceType): {AngularAcceleration: Vector, LinearAcceleration: Vector, AngularVelocity: Vector, LinearVelocity: Vector, TimeInSeconds: number};
	static GetPose(DeviceRotation?: Rotator,DevicePosition?: Vector,NeckPosition?: Vector,bUseOrienationForPlayerCamera?: boolean,bUsePositionForPlayerCamera?: boolean,PositionScale?: Vector): {DeviceRotation: Rotator, DevicePosition: Vector, NeckPosition: Vector};
	static GetLoadingSplashParams(TexturePath?: string,DistanceInMeters?: Vector,SizeInMeters?: Vector2D,RotationAxis?: Vector,RotationDeltaInDeg?: number): {TexturePath: string, DistanceInMeters: Vector, SizeInMeters: Vector2D, RotationAxis: Vector, RotationDeltaInDeg: number};
	static GetGPUUtilization(IsGPUAvailable?: boolean,GPUUtilization?: number): {IsGPUAvailable: boolean, GPUUtilization: number};
	static GetGearVRControllerHandedness(): EGearVRControllerHandedness_DEPRECATED;
	static GetDeviceName(): string;
	static GetCurrentDisplayFrequency(): number;
	static GetBatteryLevel(): number;
	static GetBaseRotationAndPositionOffset(OutRot?: Rotator,OutPosOffset?: Vector): {OutRot: Rotator, OutPosOffset: Vector};
	static GetBaseRotationAndBaseOffsetInMeters(OutRotation?: Rotator,OutBaseOffsetInMeters?: Vector): {OutRotation: Rotator, OutBaseOffsetInMeters: Vector};
	static GetAvailableDisplayFrequencies(): number[];
	static EnableAutoLoadingSplashScreen(bAutoShowEnabled: boolean): void;
	static EnableArmModel(bArmModelEnable: boolean): void;
	static ClearLoadingSplashScreens(): void;
	static AreHeadPhonesPluggedIn(): boolean;
	static AddLoadingSplashScreen(Texture: Texture2D,TranslationInMeters: Vector,Rotation: Rotator,SizeInMeters: Vector2D,DeltaRotation: Rotator,bClearBeforeAdd: boolean): void;
	static C(Other: UObject | any): OculusFunctionLibrary;
}

declare class OculusSplashDesc { 
	TexturePath: SoftObjectPath;
	TransformInMeters: Transform;
	QuadSizeInMeters: Vector2D;
	DeltaRotation: Quat;
	TextureOffset: Vector2D;
	TextureScale: Vector2D;
	bNoAlphaChannel: boolean;
	clone() : OculusSplashDesc;
	static C(Other: UObject | any): OculusSplashDesc;
}

declare class OculusHMDRuntimeSettings extends UObject { 
	bAutoEnabled: boolean;
	SplashDescs: OculusSplashDesc[];
	static Load(ResourceName: string): OculusHMDRuntimeSettings;
	static Find(Outer: UObject, ResourceName: string): OculusHMDRuntimeSettings;
	static GetDefaultObject(): OculusHMDRuntimeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OculusHMDRuntimeSettings;
	static C(Other: UObject | any): OculusHMDRuntimeSettings;
}

declare class OculusSceneCaptureCubemap extends UObject { 
	CaptureComponents: SceneCaptureComponent2D[];
	static Load(ResourceName: string): OculusSceneCaptureCubemap;
	static Find(Outer: UObject, ResourceName: string): OculusSceneCaptureCubemap;
	static GetDefaultObject(): OculusSceneCaptureCubemap;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OculusSceneCaptureCubemap;
	static C(Other: UObject | any): OculusSceneCaptureCubemap;
}

declare class SteamVRChaperoneComponent extends ActorComponent { 
	OnLeaveBounds: UnrealEngineMulticastDelegate<() => void>;
	OnReturnToBounds: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): SteamVRChaperoneComponent;
	static Find(Outer: UObject, ResourceName: string): SteamVRChaperoneComponent;
	static GetDefaultObject(): SteamVRChaperoneComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SteamVRChaperoneComponent;
	GetBounds(): Vector[];
	static C(Other: UObject | any): SteamVRChaperoneComponent;
}

declare type ESteamVRTrackedDeviceType = 'Controller' | 'TrackingReference' | 'Other' | 'Invalid' | 'ESteamVRTrackedDeviceType_MAX';
declare var ESteamVRTrackedDeviceType : { Controller:'Controller',TrackingReference:'TrackingReference',Other:'Other',Invalid:'Invalid',ESteamVRTrackedDeviceType_MAX:'ESteamVRTrackedDeviceType_MAX', };
declare class SteamVRFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): SteamVRFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): SteamVRFunctionLibrary;
	static GetDefaultObject(): SteamVRFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SteamVRFunctionLibrary;
	static GetValidTrackedDeviceIds(DeviceType: ESteamVRTrackedDeviceType,OutTrackedDeviceIds?: number[]): {OutTrackedDeviceIds: number[]};
	static GetTrackedDevicePositionAndOrientation(DeviceID: number,OutPosition?: Vector,OutOrientation?: Rotator): {OutPosition: Vector, OutOrientation: Rotator, $: boolean};
	static GetHandPositionAndOrientation(ControllerIndex: number,Hand: EControllerHand,OutPosition?: Vector,OutOrientation?: Rotator): {OutPosition: Vector, OutOrientation: Rotator, $: boolean};
	static C(Other: UObject | any): SteamVRFunctionLibrary;
}

declare type ECompilerVersion = 'Default' | 'VisualStudio2015' | 'VisualStudio2017' | 'ECompilerVersion_MAX';
declare var ECompilerVersion : { Default:'Default',VisualStudio2015:'VisualStudio2015',VisualStudio2017:'VisualStudio2017',ECompilerVersion_MAX:'ECompilerVersion_MAX', };
declare type EMinimumSupportedOS = 'MSOS_Vista' | 'MSOS_MAX';
declare var EMinimumSupportedOS : { MSOS_Vista:'MSOS_Vista',MSOS_MAX:'MSOS_MAX', };
declare class WindowsTargetSettings extends UObject { 
	Compiler: ECompilerVersion;
	TargetedRHIs: string[];
	MinimumOSVersion: EMinimumSupportedOS;
	AudioDevice: string;
	AudioSampleRate: number;
	AudioCallbackBufferFrameSize: number;
	AudioNumBuffersToEnqueue: number;
	AudioMaxChannels: number;
	AudioNumSourceWorkers: number;
	SpatializationPlugin: string;
	ReverbPlugin: string;
	OcclusionPlugin: string;
	static Load(ResourceName: string): WindowsTargetSettings;
	static Find(Outer: UObject, ResourceName: string): WindowsTargetSettings;
	static GetDefaultObject(): WindowsTargetSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WindowsTargetSettings;
	static C(Other: UObject | any): WindowsTargetSettings;
}

declare class PropertyEntry { 
	Property: EMaterialProperty;
	bUseCustomSize: boolean;
	CustomSize: IntPoint;
	bUseConstantValue: boolean;
	ConstantValue: number;
	clone() : PropertyEntry;
	static C(Other: UObject | any): PropertyEntry;
}

declare class MaterialOptions extends UObject { 
	Properties: PropertyEntry[];
	TextureSize: IntPoint;
	LODIndices: number[];
	bUseMeshData: boolean;
	bUseSpecificUVIndex: boolean;
	TextureCoordinateIndex: number;
	static Load(ResourceName: string): MaterialOptions;
	static Find(Outer: UObject, ResourceName: string): MaterialOptions;
	static GetDefaultObject(): MaterialOptions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialOptions;
	static C(Other: UObject | any): MaterialOptions;
}

declare class AssetBakeOptions extends UObject { 
	static Load(ResourceName: string): AssetBakeOptions;
	static Find(Outer: UObject, ResourceName: string): AssetBakeOptions;
	static GetDefaultObject(): AssetBakeOptions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AssetBakeOptions;
	static C(Other: UObject | any): AssetBakeOptions;
}

declare type EMaterialBakeMethod = 'IndividualMaterial' | 'AtlasMaterial' | 'BinnedMaterial' | 'EMaterialBakeMethod_MAX';
declare var EMaterialBakeMethod : { IndividualMaterial:'IndividualMaterial',AtlasMaterial:'AtlasMaterial',BinnedMaterial:'BinnedMaterial',EMaterialBakeMethod_MAX:'EMaterialBakeMethod_MAX', };
declare class MaterialMergeOptions extends UObject { 
	Method: EMaterialBakeMethod;
	BlendMode: EBlendMode;
	static Load(ResourceName: string): MaterialMergeOptions;
	static Find(Outer: UObject, ResourceName: string): MaterialMergeOptions;
	static GetDefaultObject(): MaterialMergeOptions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialMergeOptions;
	static C(Other: UObject | any): MaterialMergeOptions;
}

declare class SourceCodeAccessSettings extends UObject { 
	PreferredAccessor: string;
	static Load(ResourceName: string): SourceCodeAccessSettings;
	static Find(Outer: UObject, ResourceName: string): SourceCodeAccessSettings;
	static GetDefaultObject(): SourceCodeAccessSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SourceCodeAccessSettings;
	static C(Other: UObject | any): SourceCodeAccessSettings;
}

declare class MRMeshComponent extends PrimitiveComponent { 
	Material: MaterialInterface;
	MeshReconstructor: MeshReconstructorBase;
	bEnableCollision: boolean;
	BodySetups: BodySetup[];
	static Load(ResourceName: string): MRMeshComponent;
	static Find(Outer: UObject, ResourceName: string): MRMeshComponent;
	static GetDefaultObject(): MRMeshComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MRMeshComponent;
	GetReconstructor(): MeshReconstructorBase;
	ConnectReconstructor(Reconstructor: MeshReconstructorBase): void;
	static C(Other: UObject | any): MRMeshComponent;
}

declare class MRMeshConfiguration { 
	clone() : MRMeshConfiguration;
	static C(Other: UObject | any): MRMeshConfiguration;
}

declare class MeshReconstructorBase extends UObject { 
	static Load(ResourceName: string): MeshReconstructorBase;
	static Find(Outer: UObject, ResourceName: string): MeshReconstructorBase;
	static GetDefaultObject(): MeshReconstructorBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshReconstructorBase;
	StopReconstruction(): void;
	StartReconstruction(): void;
	PauseReconstruction(): void;
	IsReconstructionStarted(): boolean;
	IsReconstructionPaused(): boolean;
	DisconnectMRMesh(): void;
	ConnectMRMesh(Mesh: MRMeshComponent): MRMeshConfiguration;
	static C(Other: UObject | any): MeshReconstructorBase;
}

declare class AssetToolsImpl extends UObject { 
	static Load(ResourceName: string): AssetToolsImpl;
	static Find(Outer: UObject, ResourceName: string): AssetToolsImpl;
	static GetDefaultObject(): AssetToolsImpl;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AssetToolsImpl;
	static C(Other: UObject | any): AssetToolsImpl;
}

declare class AssetRenameData { 
	Asset: any;
	NewPackagePath: string;
	NewName: string;
	OldObjectPath: SoftObjectPath;
	NewObjectPath: SoftObjectPath;
	bOnlyFixSoftReferences: boolean;
	clone() : AssetRenameData;
	static C(Other: UObject | any): AssetRenameData;
}

declare class AssetTools extends Interface { 
	static Load(ResourceName: string): AssetTools;
	static Find(Outer: UObject, ResourceName: string): AssetTools;
	static GetDefaultObject(): AssetTools;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AssetTools;
	RenameAssetsWithDialog(AssetsAndNames: AssetRenameData[],bAutoCheckout: boolean): void;
	RenameAssets(AssetsAndNames: AssetRenameData[]): boolean;
	ImportAssetsWithDialog(DestinationPath: string): UObject[];
	ImportAssetsAutomated(ImportData: AutomatedAssetImportData): UObject[];
	FindSoftReferencesToObject(TargetObject: SoftObjectPath,ReferencingObjects?: UObject[]): {ReferencingObjects: UObject[]};
	ExportAssetsWithDialog(AssetsToExport: string[],bPromptForIndividualFilenames: boolean): void;
	ExportAssets(AssetsToExport: string[],ExportPath: string): void;
	DuplicateAssetWithDialog(AssetName: string,PackagePath: string,OriginalObject: UObject): UObject;
	DuplicateAsset(AssetName: string,PackagePath: string,OriginalObject: UObject): UObject;
	CreateUniqueAssetName(InBasePackageName: string,InSuffix: string,OutPackageName?: string,OutAssetName?: string): {OutPackageName: string, OutAssetName: string};
	CreateAssetWithDialog(AssetName: string,PackagePath: string,AssetClass: UnrealEngineClass,Factory: Factory,CallingContext: string): UObject;
	CreateAsset(AssetName: string,PackagePath: string,AssetClass: UnrealEngineClass,Factory: Factory,CallingContext: string): UObject;
	static C(Other: UObject | any): AssetTools;
}

declare class AssetToolsHelpers extends UObject { 
	static Load(ResourceName: string): AssetToolsHelpers;
	static Find(Outer: UObject, ResourceName: string): AssetToolsHelpers;
	static GetDefaultObject(): AssetToolsHelpers;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AssetToolsHelpers;
	static C(Other: UObject | any): AssetToolsHelpers;
}

declare class AutomationBlueprintFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): AutomationBlueprintFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): AutomationBlueprintFunctionLibrary;
	static GetDefaultObject(): AutomationBlueprintFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AutomationBlueprintFunctionLibrary;
	static TakeAutomationScreenshotOfUI(WorldContextObject: UObject,LatentInfo: LatentActionInfo,Name: string,Options: AutomationScreenshotOptions): void;
	static TakeAutomationScreenshotAtCamera(WorldContextObject: UObject,LatentInfo: LatentActionInfo,Camera: CameraActor,NameOverride: string,Options: AutomationScreenshotOptions): void;
	static TakeAutomationScreenshot(WorldContextObject: UObject,LatentInfo: LatentActionInfo,Name: string,Options: AutomationScreenshotOptions): void;
	static GetStatIncMax(StatName: string): number;
	static GetStatIncAverage(StatName: string): number;
	static GetStatExcMax(StatName: string): number;
	static GetStatExcAverage(StatName: string): number;
	static GetStatCallCount(StatName: string): number;
	static GetDefaultScreenshotOptionsForRendering(Tolerance: EComparisonTolerance,Delay: number): AutomationScreenshotOptions;
	static GetDefaultScreenshotOptionsForGameplay(Tolerance: EComparisonTolerance,Delay: number): AutomationScreenshotOptions;
	static EnableStatGroup(WorldContextObject: UObject,GroupName: string): void;
	static DisableStatGroup(WorldContextObject: UObject,GroupName: string): void;
	static AreAutomatedTestsRunning(): boolean;
	static C(Other: UObject | any): AutomationBlueprintFunctionLibrary;
}

declare class FuncTestRenderingComponent extends PrimitiveComponent { 
	static Load(ResourceName: string): FuncTestRenderingComponent;
	static Find(Outer: UObject, ResourceName: string): FuncTestRenderingComponent;
	static GetDefaultObject(): FuncTestRenderingComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FuncTestRenderingComponent;
	static C(Other: UObject | any): FuncTestRenderingComponent;
}

declare type EFunctionalTestResult = 'Default' | 'Invalid' | 'Error' | 'Running' | 'Failed' | 'Succeeded' | 'EFunctionalTestResult_MAX';
declare var EFunctionalTestResult : { Default:'Default',Invalid:'Invalid',Error:'Error',Running:'Running',Failed:'Failed',Succeeded:'Succeeded',EFunctionalTestResult_MAX:'EFunctionalTestResult_MAX', };
declare type EComparisonMethod = 'Equal_To' | 'Not_Equal_To' | 'Greater_Than_Or_Equal_To' | 'Less_Than_Or_Equal_To' | 'Greater_Than' | 'Less_Than' | 'EComparisonMethod_MAX';
declare var EComparisonMethod : { Equal_To:'Equal_To',Not_Equal_To:'Not_Equal_To',Greater_Than_Or_Equal_To:'Greater_Than_Or_Equal_To',Less_Than_Or_Equal_To:'Less_Than_Or_Equal_To',Greater_Than:'Greater_Than',Less_Than:'Less_Than',EComparisonMethod_MAX:'EComparisonMethod_MAX', };
declare class FunctionalTest extends Actor { 
	SpriteComponent: BillboardComponent;
	bIsEnabled: boolean;
	bWarningsAsErrors: boolean;
	Author: string;
	Description: string;
	ObservationPoint: Actor;
	RandomNumbersStream: RandomStream;
	Result: EFunctionalTestResult;
	PreparationTimeLimit: number;
	TimeLimit: number;
	TimesUpMessage: string;
	TimesUpResult: EFunctionalTestResult;
	OnTestPrepare: UnrealEngineMulticastDelegate<() => void>;
	OnTestStart: UnrealEngineMulticastDelegate<() => void>;
	OnTestFinished: UnrealEngineMulticastDelegate<() => void>;
	AutoDestroyActors: Actor[];
	RenderComp: FuncTestRenderingComponent;
	TestName: TextRenderComponent;
	bIsRunning: boolean;
	static GetDefaultObject(): FunctionalTest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FunctionalTest;
	SetTimeLimit(NewTimeLimit: number,ResultWhenTimeRunsOut: EFunctionalTestResult): void;
	RegisterAutoDestroyActor(ActorToAutoDestroy: Actor): void;
	ReceiveStartTest(): void;
	ReceivePrepareTest(): void;
	OnWantsReRunCheck(): boolean;
	OnAdditionalTestFinishedMessageRequest(TestResult: EFunctionalTestResult): string;
	LogMessage(Message: string): void;
	IsRunning(): boolean;
	IsReady(): boolean;
	IsEnabled(): boolean;
	GetCurrentRerunReason(): string;
	FinishTest(TestResult: EFunctionalTestResult,Message: string): void;
	DebugGatherRelevantActors(): Actor[];
	AssertValue_Int(Actual: number,ShouldBe: EComparisonMethod,Expected: number,What: string,ContextObject: UObject): boolean;
	AssertValue_Float(Actual: number,ShouldBe: EComparisonMethod,Expected: number,What: string,ContextObject: UObject): boolean;
	AssertValue_DateTime(Actual: DateTime,ShouldBe: EComparisonMethod,Expected: DateTime,What: string,ContextObject: UObject): boolean;
	AssertTrue(Condition: boolean,Message: string,ContextObject: UObject): boolean;
	AssertNotEqual_Vector(Actual: Vector,NotExpected: Vector,What: string,ContextObject: UObject): boolean;
	AssertNotEqual_Transform(Actual: Transform,NotExpected: Transform,What: string,ContextObject: UObject): boolean;
	AssertNotEqual_String(Actual: string,NotExpected: string,What: string,ContextObject: UObject): boolean;
	AssertNotEqual_Rotator(Actual: Rotator,NotExpected: Rotator,What: string,ContextObject: UObject): boolean;
	AssertIsValid(UObject: UObject,Message: string,ContextObject: UObject): boolean;
	AssertFalse(Condition: boolean,Message: string,ContextObject: UObject): boolean;
	AssertEqual_Vector(Actual: Vector,Expected: Vector,What: string,Tolerance: number,ContextObject: UObject): boolean;
	AssertEqual_Transform(Actual: Transform,Expected: Transform,What: string,Tolerance: number,ContextObject: UObject): boolean;
	AssertEqual_TraceQueryResults(Actual: TraceQueryTestResults,Expected: TraceQueryTestResults,What: string,ContextObject: UObject): boolean;
	AssertEqual_String(Actual: string,Expected: string,What: string,ContextObject: UObject): boolean;
	AssertEqual_Rotator(Actual: Rotator,Expected: Rotator,What: string,Tolerance: number,ContextObject: UObject): boolean;
	AssertEqual_Name(Actual: string,Expected: string,What: string,ContextObject: UObject): boolean;
	AssertEqual_Int(Actual: number,Expected: number,What: string,ContextObject: UObject): boolean;
	AssertEqual_Float(Actual: number,Expected: number,What: string,Tolerance: number,ContextObject: UObject): boolean;
	AssertEqual_Bool(Actual: boolean,Expected: boolean,What: string,ContextObject: UObject): boolean;
	AddWarning(Message: string): void;
	AddRerun(Reason: string): void;
	AddError(Message: string): void;
	static C(Other: UObject | any): FunctionalTest;
}

declare class GenericTeamId { 
	TeamID: number;
	clone() : GenericTeamId;
	static C(Other: UObject | any): GenericTeamId;
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
	static C(Other: UObject | any): AITestSpawnInfo;
}

declare class AITestSpawnSet { 
	SpawnInfoContainer: AITestSpawnInfo[];
	Name: string;
	bEnabled: boolean;
	FallbackSpawnLocation: Actor;
	clone() : AITestSpawnSet;
	static C(Other: UObject | any): AITestSpawnSet;
}

declare class PendingDelayedSpawn extends AITestSpawnInfo { 
	clone() : PendingDelayedSpawn;
	static C(Other: UObject | any): PendingDelayedSpawn;
}

declare class FunctionalAITest extends FunctionalTest { 
	SpawnSets: AITestSpawnSet[];
	SpawnLocationRandomizationRange: number;
	SpawnedPawns: Pawn[];
	PendingDelayedSpawns: PendingDelayedSpawn[];
	OnAISpawned: UnrealEngineMulticastDelegate<(Controller: AIController, Pawn: Pawn) => void>;
	OnAllAISPawned: UnrealEngineMulticastDelegate<() => void>;
	NavMeshDebugOrigin: Vector;
	NavMeshDebugExtent: Vector;
	bWaitForNavMesh: boolean;
	bDebugNavMeshOnTimeout: boolean;
	static GetDefaultObject(): FunctionalAITest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FunctionalAITest;
	IsOneOfSpawnedPawns(Actor: Actor): boolean;
	static C(Other: UObject | any): FunctionalAITest;
}

declare class AutomationPerformaceHelper extends UObject { 
	static Load(ResourceName: string): AutomationPerformaceHelper;
	static Find(Outer: UObject, ResourceName: string): AutomationPerformaceHelper;
	static GetDefaultObject(): AutomationPerformaceHelper;
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
	static C(Other: UObject | any): AutomationPerformaceHelper;
}

declare class FunctionalTestGameMode extends GameModeBase { 
	static GetDefaultObject(): FunctionalTestGameMode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FunctionalTestGameMode;
	static C(Other: UObject | any): FunctionalTestGameMode;
}

declare class FunctionalTestingManager extends BlueprintFunctionLibrary { 
	TestsLeft: FunctionalTest[];
	AllTests: FunctionalTest[];
	OnSetupTests: UnrealEngineMulticastDelegate<() => void>;
	OnTestsComplete: UnrealEngineMulticastDelegate<() => void>;
	OnTestsBegin: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): FunctionalTestingManager;
	static Find(Outer: UObject, ResourceName: string): FunctionalTestingManager;
	static GetDefaultObject(): FunctionalTestingManager;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FunctionalTestingManager;
	static RunAllFunctionalTests(WorldContextObject: UObject,bNewLog: boolean,bRunLooped: boolean,FailedTestsReproString: string): boolean;
	static C(Other: UObject | any): FunctionalTestingManager;
}

declare class PhasedAutomationActorBase extends Actor { 
	static GetDefaultObject(): PhasedAutomationActorBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PhasedAutomationActorBase;
	OnFunctionalTestingComplete(): void;
	OnFunctionalTestingBegin(): void;
	static C(Other: UObject | any): PhasedAutomationActorBase;
}

declare class FunctionalTestLevelScript extends LevelScriptActor { 
	static GetDefaultObject(): FunctionalTestLevelScript;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FunctionalTestLevelScript;
	static C(Other: UObject | any): FunctionalTestLevelScript;
}

declare class FunctionalTestUtilityLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): FunctionalTestUtilityLibrary;
	static Find(Outer: UObject, ResourceName: string): FunctionalTestUtilityLibrary;
	static GetDefaultObject(): FunctionalTestUtilityLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FunctionalTestUtilityLibrary;
	static TraceChannelTestUtil(WorldContextObject: UObject,BatchOptions: TraceChannelTestBatchOptions,Start: Vector,End: Vector,SphereCapsuleRadius: number,CapsuleHalfHeight: number,BoxHalfSize: Vector,Orientation: Rotator,TraceChannel: ETraceTypeQuery,ObjectTypes: EObjectTypeQuery[],ProfileName: string,bTraceComplex: boolean,ActorsToIgnore: Actor[],bIgnoreSelf: boolean,DrawDebugType: EDrawDebugTrace,TraceColor: LinearColor,TraceHitColor: LinearColor,DrawTime: number): TraceQueryTestResults;
	static C(Other: UObject | any): FunctionalTestUtilityLibrary;
}

declare class ScreenshotFunctionalTestBase extends FunctionalTest { 
	ScreenshotCamera: CameraComponent;
	ScreenshotOptions: AutomationScreenshotOptions;
	static GetDefaultObject(): ScreenshotFunctionalTestBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ScreenshotFunctionalTestBase;
	static C(Other: UObject | any): ScreenshotFunctionalTestBase;
}

declare type EWidgetTestAppearLocation = 'Viewport' | 'PlayerScreen' | 'EWidgetTestAppearLocation_MAX';
declare var EWidgetTestAppearLocation : { Viewport:'Viewport',PlayerScreen:'PlayerScreen',EWidgetTestAppearLocation_MAX:'EWidgetTestAppearLocation_MAX', };
declare class FunctionalUIScreenshotTest extends ScreenshotFunctionalTestBase { 
	WidgetClass: UnrealEngineClass;
	SpawnedWidget: UserWidget;
	WidgetLocation: EWidgetTestAppearLocation;
	ScreenshotRT: TextureRenderTarget2D;
	static GetDefaultObject(): FunctionalUIScreenshotTest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FunctionalUIScreenshotTest;
	static C(Other: UObject | any): FunctionalUIScreenshotTest;
}

declare class GroundTruthData extends UObject { 
	bResetGroundTruth: boolean;
	ObjectData: UObject;
	static Load(ResourceName: string): GroundTruthData;
	static Find(Outer: UObject, ResourceName: string): GroundTruthData;
	static GetDefaultObject(): GroundTruthData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GroundTruthData;
	SaveObject(GroundTruth: UObject): void;
	LoadObject(): UObject;
	CanModify(): boolean;
	static C(Other: UObject | any): GroundTruthData;
}

declare class ScreenshotFunctionalTest extends ScreenshotFunctionalTestBase { 
	bCameraCutOnScreenshotPrep: boolean;
	static GetDefaultObject(): ScreenshotFunctionalTest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ScreenshotFunctionalTest;
	static C(Other: UObject | any): ScreenshotFunctionalTest;
}

declare class TestPhaseComponent extends SceneComponent { 
	static Load(ResourceName: string): TestPhaseComponent;
	static Find(Outer: UObject, ResourceName: string): TestPhaseComponent;
	static GetDefaultObject(): TestPhaseComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestPhaseComponent;
	static C(Other: UObject | any): TestPhaseComponent;
}

declare class AIGraph extends EdGraph { 
	GraphVersion: number;
	static Load(ResourceName: string): AIGraph;
	static Find(Outer: UObject, ResourceName: string): AIGraph;
	static GetDefaultObject(): AIGraph;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AIGraph;
	static C(Other: UObject | any): AIGraph;
}

declare class GraphNodeClassData { 
	AssetName: string;
	GeneratedClassPackage: string;
	ClassName: string;
	Category: string;
	clone() : GraphNodeClassData;
	static C(Other: UObject | any): GraphNodeClassData;
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
	static Load(ResourceName: string): AIGraphNode;
	static Find(Outer: UObject, ResourceName: string): AIGraphNode;
	static GetDefaultObject(): AIGraphNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AIGraphNode;
	static C(Other: UObject | any): AIGraphNode;
}

declare class AIGraphSchema extends EdGraphSchema { 
	static Load(ResourceName: string): AIGraphSchema;
	static Find(Outer: UObject, ResourceName: string): AIGraphSchema;
	static GetDefaultObject(): AIGraphSchema;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AIGraphSchema;
	static C(Other: UObject | any): AIGraphSchema;
}

declare class K2Node_AIMoveTo extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_AIMoveTo;
	static Find(Outer: UObject, ResourceName: string): K2Node_AIMoveTo;
	static GetDefaultObject(): K2Node_AIMoveTo;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_AIMoveTo;
	static C(Other: UObject | any): K2Node_AIMoveTo;
}

declare class BehaviorTreeDecoratorGraph extends EdGraph { 
	static Load(ResourceName: string): BehaviorTreeDecoratorGraph;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeDecoratorGraph;
	static GetDefaultObject(): BehaviorTreeDecoratorGraph;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeDecoratorGraph;
	static C(Other: UObject | any): BehaviorTreeDecoratorGraph;
}

declare class BehaviorTreeDecoratorGraphNode extends EdGraphNode { 
	static Load(ResourceName: string): BehaviorTreeDecoratorGraphNode;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeDecoratorGraphNode;
	static GetDefaultObject(): BehaviorTreeDecoratorGraphNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeDecoratorGraphNode;
	static C(Other: UObject | any): BehaviorTreeDecoratorGraphNode;
}

declare class BehaviorTreeDecoratorGraphNode_Decorator extends BehaviorTreeDecoratorGraphNode { 
	NodeInstance: UObject;
	ClassData: GraphNodeClassData;
	static Load(ResourceName: string): BehaviorTreeDecoratorGraphNode_Decorator;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeDecoratorGraphNode_Decorator;
	static GetDefaultObject(): BehaviorTreeDecoratorGraphNode_Decorator;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeDecoratorGraphNode_Decorator;
	static C(Other: UObject | any): BehaviorTreeDecoratorGraphNode_Decorator;
}

declare type EDecoratorLogicMode = 'Sink' | 'And' | 'Or' | 'Not' | 'EDecoratorLogicMode_MAX';
declare var EDecoratorLogicMode : { Sink:'Sink',And:'And',Or:'Or',Not:'Not',EDecoratorLogicMode_MAX:'EDecoratorLogicMode_MAX', };
declare class BehaviorTreeDecoratorGraphNode_Logic extends BehaviorTreeDecoratorGraphNode { 
	LogicMode: EDecoratorLogicMode;
	static Load(ResourceName: string): BehaviorTreeDecoratorGraphNode_Logic;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeDecoratorGraphNode_Logic;
	static GetDefaultObject(): BehaviorTreeDecoratorGraphNode_Logic;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeDecoratorGraphNode_Logic;
	static C(Other: UObject | any): BehaviorTreeDecoratorGraphNode_Logic;
}

declare class BehaviorTreeEditorTypes extends UObject { 
	static Load(ResourceName: string): BehaviorTreeEditorTypes;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeEditorTypes;
	static GetDefaultObject(): BehaviorTreeEditorTypes;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeEditorTypes;
	static C(Other: UObject | any): BehaviorTreeEditorTypes;
}

declare class BehaviorTreeFactory extends Factory { 
	static Load(ResourceName: string): BehaviorTreeFactory;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeFactory;
	static GetDefaultObject(): BehaviorTreeFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeFactory;
	static C(Other: UObject | any): BehaviorTreeFactory;
}

declare class BehaviorTreeGraph extends AIGraph { 
	ModCounter: number;
	bIsUsingModCounter: boolean;
	static Load(ResourceName: string): BehaviorTreeGraph;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraph;
	static GetDefaultObject(): BehaviorTreeGraph;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraph;
	static C(Other: UObject | any): BehaviorTreeGraph;
}

declare class BehaviorTreeGraphNode extends AIGraphNode { 
	Decorators: BehaviorTreeGraphNode[];
	Services: BehaviorTreeGraphNode[];
	bInjectedNode: boolean;
	static Load(ResourceName: string): BehaviorTreeGraphNode;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode;
	static GetDefaultObject(): BehaviorTreeGraphNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode;
	static C(Other: UObject | any): BehaviorTreeGraphNode;
}

declare class BehaviorTreeGraphNode_Composite extends BehaviorTreeGraphNode { 
	static Load(ResourceName: string): BehaviorTreeGraphNode_Composite;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_Composite;
	static GetDefaultObject(): BehaviorTreeGraphNode_Composite;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Composite;
	static C(Other: UObject | any): BehaviorTreeGraphNode_Composite;
}

declare class BehaviorTreeGraphNode_CompositeDecorator extends BehaviorTreeGraphNode { 
	BoundGraph: EdGraph;
	CompositeName: string;
	bShowOperations: boolean;
	bCanAbortFlow: boolean;
	ParentNodeInstance: BTCompositeNode;
	CachedDescription: string;
	static Load(ResourceName: string): BehaviorTreeGraphNode_CompositeDecorator;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_CompositeDecorator;
	static GetDefaultObject(): BehaviorTreeGraphNode_CompositeDecorator;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_CompositeDecorator;
	static C(Other: UObject | any): BehaviorTreeGraphNode_CompositeDecorator;
}

declare class BehaviorTreeGraphNode_Decorator extends BehaviorTreeGraphNode { 
	static Load(ResourceName: string): BehaviorTreeGraphNode_Decorator;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_Decorator;
	static GetDefaultObject(): BehaviorTreeGraphNode_Decorator;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Decorator;
	static C(Other: UObject | any): BehaviorTreeGraphNode_Decorator;
}

declare class BehaviorTreeGraphNode_Root extends BehaviorTreeGraphNode { 
	BlackboardAsset: BlackboardData;
	static Load(ResourceName: string): BehaviorTreeGraphNode_Root;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_Root;
	static GetDefaultObject(): BehaviorTreeGraphNode_Root;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Root;
	static C(Other: UObject | any): BehaviorTreeGraphNode_Root;
}

declare class BehaviorTreeGraphNode_Service extends BehaviorTreeGraphNode { 
	static Load(ResourceName: string): BehaviorTreeGraphNode_Service;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_Service;
	static GetDefaultObject(): BehaviorTreeGraphNode_Service;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Service;
	static C(Other: UObject | any): BehaviorTreeGraphNode_Service;
}

declare class BehaviorTreeGraphNode_SimpleParallel extends BehaviorTreeGraphNode_Composite { 
	static Load(ResourceName: string): BehaviorTreeGraphNode_SimpleParallel;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_SimpleParallel;
	static GetDefaultObject(): BehaviorTreeGraphNode_SimpleParallel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_SimpleParallel;
	static C(Other: UObject | any): BehaviorTreeGraphNode_SimpleParallel;
}

declare class BehaviorTreeGraphNode_Task extends BehaviorTreeGraphNode { 
	static Load(ResourceName: string): BehaviorTreeGraphNode_Task;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_Task;
	static GetDefaultObject(): BehaviorTreeGraphNode_Task;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_Task;
	static C(Other: UObject | any): BehaviorTreeGraphNode_Task;
}

declare class BehaviorTreeGraphNode_SubtreeTask extends BehaviorTreeGraphNode_Task { 
	static Load(ResourceName: string): BehaviorTreeGraphNode_SubtreeTask;
	static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_SubtreeTask;
	static GetDefaultObject(): BehaviorTreeGraphNode_SubtreeTask;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BehaviorTreeGraphNode_SubtreeTask;
	static C(Other: UObject | any): BehaviorTreeGraphNode_SubtreeTask;
}

declare class BlackboardDataFactory extends Factory { 
	static Load(ResourceName: string): BlackboardDataFactory;
	static Find(Outer: UObject, ResourceName: string): BlackboardDataFactory;
	static GetDefaultObject(): BlackboardDataFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BlackboardDataFactory;
	static C(Other: UObject | any): BlackboardDataFactory;
}

declare class EdGraphSchema_BehaviorTree extends AIGraphSchema { 
	static Load(ResourceName: string): EdGraphSchema_BehaviorTree;
	static Find(Outer: UObject, ResourceName: string): EdGraphSchema_BehaviorTree;
	static GetDefaultObject(): EdGraphSchema_BehaviorTree;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphSchema_BehaviorTree;
	static C(Other: UObject | any): EdGraphSchema_BehaviorTree;
}

declare class EdGraphSchema_BehaviorTreeDecorator extends EdGraphSchema { 
	PC_Boolean: string;
	static Load(ResourceName: string): EdGraphSchema_BehaviorTreeDecorator;
	static Find(Outer: UObject, ResourceName: string): EdGraphSchema_BehaviorTreeDecorator;
	static GetDefaultObject(): EdGraphSchema_BehaviorTreeDecorator;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphSchema_BehaviorTreeDecorator;
	static C(Other: UObject | any): EdGraphSchema_BehaviorTreeDecorator;
}

declare class K2Node_LatentGameplayTaskCall extends K2Node_BaseAsyncTask { 
	SpawnParamPins: string[];
	static Load(ResourceName: string): K2Node_LatentGameplayTaskCall;
	static Find(Outer: UObject, ResourceName: string): K2Node_LatentGameplayTaskCall;
	static GetDefaultObject(): K2Node_LatentGameplayTaskCall;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LatentGameplayTaskCall;
	static C(Other: UObject | any): K2Node_LatentGameplayTaskCall;
}

declare class VREditorAssetContainer extends DataAsset { 
	DockableWindowCloseSound: SoundBase;
	DockableWindowOpenSound: SoundBase;
	DockableWindowDropSound: SoundBase;
	DockableWindowDragSound: SoundBase;
	DropFromContentBrowserSound: SoundBase;
	RadialMenuOpenSound: SoundBase;
	RadialMenuCloseSound: SoundBase;
	TeleportSound: SoundBase;
	ButtonPressSound: SoundCue;
	AutoScaleSound: SoundBase;
	GenericHMDMesh: StaticMesh;
	PlaneMesh: StaticMesh;
	CylinderMesh: StaticMesh;
	LaserPointerStartMesh: StaticMesh;
	LaserPointerMesh: StaticMesh;
	LaserPointerEndMesh: StaticMesh;
	LaserPointerHoverMesh: StaticMesh;
	VivePreControllerMesh: StaticMesh;
	OculusControllerMesh: StaticMesh;
	GenericControllerMesh: StaticMesh;
	TeleportRootMesh: StaticMesh;
	WindowMesh: StaticMesh;
	WindowSelectionBarMesh: StaticMesh;
	WindowCloseButtonMesh: StaticMesh;
	RadialMenuMainMesh: StaticMesh;
	RadialMenuPointerMesh: StaticMesh;
	PointerCursorMesh: StaticMesh;
	GridMaterial: MaterialInterface;
	LaserPointerMaterial: MaterialInterface;
	LaserPointerTranslucentMaterial: MaterialInterface;
	WorldMovementPostProcessMaterial: Material;
	TextMaterial: MaterialInterface;
	VivePreControllerMaterial: MaterialInterface;
	OculusControllerMaterial: MaterialInterface;
	TeleportMaterial: MaterialInterface;
	WindowMaterial: MaterialInterface;
	WindowTranslucentMaterial: MaterialInterface;
	TextFont: Font;
	static Load(ResourceName: string): VREditorAssetContainer;
	static Find(Outer: UObject, ResourceName: string): VREditorAssetContainer;
	static GetDefaultObject(): VREditorAssetContainer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorAssetContainer;
	static C(Other: UObject | any): VREditorAssetContainer;
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
	VRMode: VREditorMode;
	static GetDefaultObject(): VREditorAvatarActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorAvatarActor;
	static C(Other: UObject | any): VREditorAvatarActor;
}

declare class VREditorBaseActor extends Actor { 
	VRMode: VREditorMode;
	static GetDefaultObject(): VREditorBaseActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorBaseActor;
	static C(Other: UObject | any): VREditorBaseActor;
}

declare class VREditorBaseUserWidget extends UserWidget { 
	Owner: any;
	static Load(ResourceName: string): VREditorBaseUserWidget;
	static Find(Outer: UObject, ResourceName: string): VREditorBaseUserWidget;
	static GetDefaultObject(): VREditorBaseUserWidget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorBaseUserWidget;
	static C(Other: UObject | any): VREditorBaseUserWidget;
}

declare type EVREditorWidgetDrawingPolicy = 'Always' | 'Hovering' | 'EVREditorWidgetDrawingPolicy_MAX';
declare var EVREditorWidgetDrawingPolicy : { Always:'Always',Hovering:'Hovering',EVREditorWidgetDrawingPolicy_MAX:'EVREditorWidgetDrawingPolicy_MAX', };
declare class VREditorWidgetComponent extends WidgetComponent { 
	DrawingPolicy: EVREditorWidgetDrawingPolicy;
	bIsHovering: boolean;
	bHasEverDrawn: boolean;
	static Load(ResourceName: string): VREditorWidgetComponent;
	static Find(Outer: UObject, ResourceName: string): VREditorWidgetComponent;
	static GetDefaultObject(): VREditorWidgetComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorWidgetComponent;
	static C(Other: UObject | any): VREditorWidgetComponent;
}

declare class VREditorFloatingUI extends VREditorBaseActor { 
	UserWidget: VREditorBaseUserWidget;
	WidgetComponent: VREditorWidgetComponent;
	WindowMeshComponent: StaticMeshComponent;
	UserWidgetClass: UnrealEngineClass;
	static GetDefaultObject(): VREditorFloatingUI;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorFloatingUI;
	static C(Other: UObject | any): VREditorFloatingUI;
}

declare class VREditorRadialFloatingUI extends VREditorBaseActor { 
	WidgetComponents: VREditorWidgetComponent[];
	WindowMeshComponent: StaticMeshComponent;
	ArrowMeshComponent: StaticMeshComponent;
	CentralWidgetComponent: VREditorWidgetComponent;
	static GetDefaultObject(): VREditorRadialFloatingUI;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorRadialFloatingUI;
	static C(Other: UObject | any): VREditorRadialFloatingUI;
}

declare class VREditorDockableWindow extends VREditorFloatingUI { 
	SelectionBarMeshComponent: StaticMeshComponent;
	CloseButtonMeshComponent: StaticMeshComponent;
	SelectionBarMID: MaterialInstanceDynamic;
	SelectionBarTranslucentMID: MaterialInstanceDynamic;
	CloseButtonMID: MaterialInstanceDynamic;
	CloseButtonTranslucentMID: MaterialInstanceDynamic;
	DragOperationComponent: ViewportDragOperationComponent;
	static GetDefaultObject(): VREditorDockableWindow;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorDockableWindow;
	static C(Other: UObject | any): VREditorDockableWindow;
}

declare class VREditorInteractor extends ViewportInteractor { 
	VRMode: VREditorMode;
	static Load(ResourceName: string): VREditorInteractor;
	static Find(Outer: UObject, ResourceName: string): VREditorInteractor;
	static GetDefaultObject(): VREditorInteractor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorInteractor;
	static C(Other: UObject | any): VREditorInteractor;
}

declare class VREditorMotionControllerInteractor extends VREditorInteractor { 
	MotionControllerComponent: MotionControllerComponent;
	HandMeshComponent: StaticMeshComponent;
	LaserSplineComponent: SplineComponent;
	LaserSplineMeshComponents: SplineMeshComponent[];
	LaserPointerMID: MaterialInstanceDynamic;
	TranslucentLaserPointerMID: MaterialInstanceDynamic;
	HoverMeshComponent: StaticMeshComponent;
	HoverPointLightComponent: PointLightComponent;
	HandMeshMID: MaterialInstanceDynamic;
	static Load(ResourceName: string): VREditorMotionControllerInteractor;
	static Find(Outer: UObject, ResourceName: string): VREditorMotionControllerInteractor;
	static GetDefaultObject(): VREditorMotionControllerInteractor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorMotionControllerInteractor;
	static C(Other: UObject | any): VREditorMotionControllerInteractor;
}

declare class VRButton { 
	ButtonWidget: VREditorWidgetComponent;
	clone() : VRButton;
	static C(Other: UObject | any): VRButton;
}

declare class VRRadialMenuHandler extends UObject { 
	static Load(ResourceName: string): VRRadialMenuHandler;
	static Find(Outer: UObject, ResourceName: string): VRRadialMenuHandler;
	static GetDefaultObject(): VRRadialMenuHandler;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VRRadialMenuHandler;
	static C(Other: UObject | any): VRRadialMenuHandler;
}

declare class VREditorUISystem extends UObject { 
	VRMode: VREditorMode;
	FloatingUIs: any;
	InfoDisplayPanel: VREditorFloatingUI;
	QuickRadialMenu: VREditorRadialFloatingUI;
	DraggingUI: VREditorDockableWindow;
	ColorPickerUI: VREditorDockableWindow;
	LaserInteractor: VREditorMotionControllerInteractor;
	UIInteractor: VREditorMotionControllerInteractor;
	VRButtons: VRButton[];
	RadialMenuHandler: VRRadialMenuHandler;
	static Load(ResourceName: string): VREditorUISystem;
	static Find(Outer: UObject, ResourceName: string): VREditorUISystem;
	static GetDefaultObject(): VREditorUISystem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorUISystem;
	static C(Other: UObject | any): VREditorUISystem;
}

declare class VREditorTeleporter extends Actor { 
	VRMode: VREditorMode;
	TeleportDirectionMeshComponent: StaticMeshComponent;
	HMDMeshComponent: StaticMeshComponent;
	LeftMotionControllerMeshComponent: StaticMeshComponent;
	RightMotionControllerMeshComponent: StaticMeshComponent;
	TeleportMID: MaterialInstanceDynamic;
	InteractorTryingTeleport: ViewportInteractor;
	static GetDefaultObject(): VREditorTeleporter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorTeleporter;
	static C(Other: UObject | any): VREditorTeleporter;
}

declare class VREditorPlacement extends UObject { 
	VRMode: VREditorMode;
	ViewportWorldInteraction: ViewportWorldInteraction;
	FloatingUIAssetDraggedFrom: WidgetComponent;
	PlacingMaterialOrTextureAsset: UObject;
	static Load(ResourceName: string): VREditorPlacement;
	static Find(Outer: UObject, ResourceName: string): VREditorPlacement;
	static GetDefaultObject(): VREditorPlacement;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorPlacement;
	static C(Other: UObject | any): VREditorPlacement;
}

declare class VREditorMode extends EditorWorldExtension { 
	AvatarActor: VREditorAvatarActor;
	UISystem: VREditorUISystem;
	TeleportActor: VREditorTeleporter;
	AutoScalerSystem: VREditorAutoScaler;
	WorldInteraction: ViewportWorldInteraction;
	PlacementSystem: VREditorPlacement;
	LeftHandInteractor: VREditorMotionControllerInteractor;
	RightHandInteractor: VREditorMotionControllerInteractor;
	AssetContainer: VREditorAssetContainer;
	static Load(ResourceName: string): VREditorMode;
	static Find(Outer: UObject, ResourceName: string): VREditorMode;
	static GetDefaultObject(): VREditorMode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorMode;
	static C(Other: UObject | any): VREditorMode;
}

declare class VREditorAutoScaler extends UObject { 
	VRMode: VREditorMode;
	static Load(ResourceName: string): VREditorAutoScaler;
	static Find(Outer: UObject, ResourceName: string): VREditorAutoScaler;
	static GetDefaultObject(): VREditorAutoScaler;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VREditorAutoScaler;
	static C(Other: UObject | any): VREditorAutoScaler;
}

declare class DockableWindowDragOperation extends ViewportDragOperation { 
	static Load(ResourceName: string): DockableWindowDragOperation;
	static Find(Outer: UObject, ResourceName: string): DockableWindowDragOperation;
	static GetDefaultObject(): DockableWindowDragOperation;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DockableWindowDragOperation;
	static C(Other: UObject | any): DockableWindowDragOperation;
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
	static GetDefaultObject(): FloatingText;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FloatingText;
	static C(Other: UObject | any): FloatingText;
}

declare type EInteractorHand = 'Right' | 'Left' | 'EInteractorHand_MAX';
declare var EInteractorHand : { Right:'Right',Left:'Left',EInteractorHand_MAX:'EInteractorHand_MAX', };
declare class VRModeSettings extends UObject { 
	bEnableAutoVREditMode: boolean;
	InteractorHand: EInteractorHand;
	bShowWorldMovementGrid: boolean;
	bShowWorldMovementPostProcess: boolean;
	bShowWorldScaleProgressBar: boolean;
	UIBrightness: number;
	GizmoScale: number;
	DoubleClickTime: number;
	TriggerPressedThreshold_Vive: number;
	TriggerPressedThreshold_Rift: number;
	static Load(ResourceName: string): VRModeSettings;
	static Find(Outer: UObject, ResourceName: string): VRModeSettings;
	static GetDefaultObject(): VRModeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VRModeSettings;
	static C(Other: UObject | any): VRModeSettings;
}

declare class Overlays extends UObject { 
	static Load(ResourceName: string): Overlays;
	static Find(Outer: UObject, ResourceName: string): Overlays;
	static GetDefaultObject(): Overlays;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Overlays;
	static C(Other: UObject | any): Overlays;
}

declare class OverlayItem { 
	StartTime: Timespan;
	EndTime: Timespan;
	text: string;
	Position: Vector2D;
	clone() : OverlayItem;
	static C(Other: UObject | any): OverlayItem;
}

declare class BasicOverlays extends Overlays { 
	Overlays: OverlayItem[];
	AssetImportData: AssetImportData;
	static Load(ResourceName: string): BasicOverlays;
	static Find(Outer: UObject, ResourceName: string): BasicOverlays;
	static GetDefaultObject(): BasicOverlays;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BasicOverlays;
	static C(Other: UObject | any): BasicOverlays;
}

declare class LocalizedOverlays extends Overlays { 
	DefaultOverlays: BasicOverlays;
	LocaleToOverlaysMap: any;
	AssetImportData: AssetImportData;
	static Load(ResourceName: string): LocalizedOverlays;
	static Find(Outer: UObject, ResourceName: string): LocalizedOverlays;
	static GetDefaultObject(): LocalizedOverlays;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LocalizedOverlays;
	static C(Other: UObject | any): LocalizedOverlays;
}

declare class BasicOverlaysFactory extends Factory { 
	static Load(ResourceName: string): BasicOverlaysFactory;
	static Find(Outer: UObject, ResourceName: string): BasicOverlaysFactory;
	static GetDefaultObject(): BasicOverlaysFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BasicOverlaysFactory;
	static C(Other: UObject | any): BasicOverlaysFactory;
}

declare class BasicOverlaysFactoryNew extends Factory { 
	static Load(ResourceName: string): BasicOverlaysFactoryNew;
	static Find(Outer: UObject, ResourceName: string): BasicOverlaysFactoryNew;
	static GetDefaultObject(): BasicOverlaysFactoryNew;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BasicOverlaysFactoryNew;
	static C(Other: UObject | any): BasicOverlaysFactoryNew;
}

declare class LocalizedOverlaysFactoryNew extends Factory { 
	static Load(ResourceName: string): LocalizedOverlaysFactoryNew;
	static Find(Outer: UObject, ResourceName: string): LocalizedOverlaysFactoryNew;
	static GetDefaultObject(): LocalizedOverlaysFactoryNew;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LocalizedOverlaysFactoryNew;
	static C(Other: UObject | any): LocalizedOverlaysFactoryNew;
}

declare class ReimportBasicOverlaysFactory extends BasicOverlaysFactory { 
	static Load(ResourceName: string): ReimportBasicOverlaysFactory;
	static Find(Outer: UObject, ResourceName: string): ReimportBasicOverlaysFactory;
	static GetDefaultObject(): ReimportBasicOverlaysFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ReimportBasicOverlaysFactory;
	static C(Other: UObject | any): ReimportBasicOverlaysFactory;
}

declare class MediaSource extends UObject { 
	static Load(ResourceName: string): MediaSource;
	static Find(Outer: UObject, ResourceName: string): MediaSource;
	static GetDefaultObject(): MediaSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaSource;
	Validate(): boolean;
	GetUrl(): string;
	static C(Other: UObject | any): MediaSource;
}

declare class BaseMediaSource extends MediaSource { 
	PlatformPlayerNames: any;
	PlayerName: string;
	static Load(ResourceName: string): BaseMediaSource;
	static Find(Outer: UObject, ResourceName: string): BaseMediaSource;
	static GetDefaultObject(): BaseMediaSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BaseMediaSource;
	static C(Other: UObject | any): BaseMediaSource;
}

declare class FileMediaSource extends BaseMediaSource { 
	FilePath: string;
	PrecacheFile: boolean;
	static Load(ResourceName: string): FileMediaSource;
	static Find(Outer: UObject, ResourceName: string): FileMediaSource;
	static GetDefaultObject(): FileMediaSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FileMediaSource;
	SetFilePath(Path: string): void;
	static C(Other: UObject | any): FileMediaSource;
}

declare class MediaCaptureDevice { 
	DisplayName: string;
	URL: string;
	clone() : MediaCaptureDevice;
	static C(Other: UObject | any): MediaCaptureDevice;
}

declare class MediaBlueprintFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MediaBlueprintFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): MediaBlueprintFunctionLibrary;
	static GetDefaultObject(): MediaBlueprintFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaBlueprintFunctionLibrary;
	static EnumerateWebcamCaptureDevices(OutDevices?: MediaCaptureDevice[],Filter?: number): {OutDevices: MediaCaptureDevice[]};
	static EnumerateVideoCaptureDevices(OutDevices?: MediaCaptureDevice[],Filter?: number): {OutDevices: MediaCaptureDevice[]};
	static EnumerateAudioCaptureDevices(OutDevices?: MediaCaptureDevice[],Filter?: number): {OutDevices: MediaCaptureDevice[]};
	static C(Other: UObject | any): MediaBlueprintFunctionLibrary;
}

declare class MediaPlaylist extends UObject { 
	Items: MediaSource[];
	static Load(ResourceName: string): MediaPlaylist;
	static Find(Outer: UObject, ResourceName: string): MediaPlaylist;
	static GetDefaultObject(): MediaPlaylist;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlaylist;
	Replace(index: number,Replacement: MediaSource): boolean;
	RemoveAt(index: number): boolean;
	Remove(MediaSource: MediaSource): boolean;
	Num(): number;
	Insert(MediaSource: MediaSource,index: number): void;
	GetRandom(OutIndex?: number): {OutIndex: number, $: MediaSource};
	GetPrevious(InOutIndex?: number): {InOutIndex: number, $: MediaSource};
	GetNext(InOutIndex?: number): {InOutIndex: number, $: MediaSource};
	Get(index: number): MediaSource;
	AddUrl(URL: string): boolean;
	AddFile(FilePath: string): boolean;
	Add(MediaSource: MediaSource): boolean;
	static C(Other: UObject | any): MediaPlaylist;
}

declare type EMediaPlayerTrack = 'Audio' | 'Caption' | 'Metadata' | 'Script' | 'Subtitle' | 'Text' | 'Video' | 'EMediaPlayerTrack_MAX';
declare var EMediaPlayerTrack : { Audio:'Audio',Caption:'Caption',Metadata:'Metadata',Script:'Script',Subtitle:'Subtitle',Text:'Text',Video:'Video',EMediaPlayerTrack_MAX:'EMediaPlayerTrack_MAX', };
declare class MediaPlayer extends UObject { 
	OnEndReached: UnrealEngineMulticastDelegate<() => void>;
	OnMediaClosed: UnrealEngineMulticastDelegate<() => void>;
	OnMediaOpened: UnrealEngineMulticastDelegate<(OpenedUrl: string) => void>;
	OnMediaOpenFailed: UnrealEngineMulticastDelegate<(FailedUrl: string) => void>;
	OnPlaybackResumed: UnrealEngineMulticastDelegate<() => void>;
	OnPlaybackSuspended: UnrealEngineMulticastDelegate<() => void>;
	OnSeekCompleted: UnrealEngineMulticastDelegate<() => void>;
	OnTracksChanged: UnrealEngineMulticastDelegate<() => void>;
	CacheAhead: Timespan;
	CacheBehind: Timespan;
	CacheBehindGame: Timespan;
	NativeAudioOut: boolean;
	PlayOnOpen: boolean;
	Shuffle: boolean;
	loop: boolean;
	Playlist: MediaPlaylist;
	PlaylistIndex: number;
	HorizontalFieldOfView: number;
	VerticalFieldOfView: number;
	ViewRotation: Rotator;
	PlayerGuid: Guid;
	static Load(ResourceName: string): MediaPlayer;
	static Find(Outer: UObject, ResourceName: string): MediaPlayer;
	static GetDefaultObject(): MediaPlayer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlayer;
	SupportsSeeking(): boolean;
	SupportsScrubbing(): boolean;
	SupportsRate(Rate: number,Unthinned: boolean): boolean;
	SetViewRotation(Rotation: Rotator,Absolute: boolean): boolean;
	SetViewField(Horizontal: number,Vertical: number,Absolute: boolean): boolean;
	SetVideoTrackFrameRate(TrackIndex: number,FormatIndex: number,FrameRate: number): boolean;
	SetTrackFormat(TrackType: EMediaPlayerTrack,TrackIndex: number,FormatIndex: number): boolean;
	SetRate(Rate: number): boolean;
	SetLooping(Looping: boolean): boolean;
	SetDesiredPlayerName(PlayerName: string): void;
	SelectTrack(TrackType: EMediaPlayerTrack,TrackIndex: number): boolean;
	Seek(Time: Timespan): boolean;
	Rewind(): boolean;
	Reopen(): boolean;
	Previous(): boolean;
	Play(): boolean;
	Pause(): boolean;
	OpenUrl(URL: string): boolean;
	OpenSource(MediaSource: MediaSource): boolean;
	OpenPlaylistIndex(InPlaylist: MediaPlaylist,index: number): boolean;
	OpenPlaylist(InPlaylist: MediaPlaylist): boolean;
	OpenFile(FilePath: string): boolean;
	Next(): boolean;
	IsReady(): boolean;
	IsPreparing(): boolean;
	IsPlaying(): boolean;
	IsPaused(): boolean;
	IsLooping(): boolean;
	IsConnecting(): boolean;
	IsBuffering(): boolean;
	HasError(): boolean;
	GetViewRotation(): Rotator;
	GetVideoTrackType(TrackIndex: number,FormatIndex: number): string;
	GetVideoTrackFrameRates(TrackIndex: number,FormatIndex: number): FloatRange;
	GetVideoTrackFrameRate(TrackIndex: number,FormatIndex: number): number;
	GetVideoTrackDimensions(TrackIndex: number,FormatIndex: number): IntPoint;
	GetVideoTrackAspectRatio(TrackIndex: number,FormatIndex: number): number;
	GetVerticalFieldOfView(): number;
	GetUrl(): string;
	GetTrackLanguage(TrackType: EMediaPlayerTrack,TrackIndex: number): string;
	GetTrackFormat(TrackType: EMediaPlayerTrack,TrackIndex: number): number;
	GetTrackDisplayName(TrackType: EMediaPlayerTrack,TrackIndex: number): string;
	GetTime(): Timespan;
	GetSupportedRates(OutRates?: FloatRange[],Unthinned?: boolean): {OutRates: FloatRange[]};
	GetSelectedTrack(TrackType: EMediaPlayerTrack): number;
	GetRate(): number;
	GetPlaylistIndex(): number;
	GetPlaylist(): MediaPlaylist;
	GetPlayerName(): string;
	GetNumTracks(TrackType: EMediaPlayerTrack): number;
	GetNumTrackFormats(TrackType: EMediaPlayerTrack,TrackIndex: number): number;
	GetMediaName(): string;
	GetHorizontalFieldOfView(): number;
	GetDuration(): Timespan;
	GetDesiredPlayerName(): string;
	GetAudioTrackType(TrackIndex: number,FormatIndex: number): string;
	GetAudioTrackSampleRate(TrackIndex: number,FormatIndex: number): number;
	GetAudioTrackChannels(TrackIndex: number,FormatIndex: number): number;
	Close(): void;
	CanPlayUrl(URL: string): boolean;
	CanPlaySource(MediaSource: MediaSource): boolean;
	CanPause(): boolean;
	static C(Other: UObject | any): MediaPlayer;
}

declare type EMediaSoundChannels = 'Mono' | 'Stereo' | 'Surround' | 'EMediaSoundChannels_MAX';
declare var EMediaSoundChannels : { Mono:'Mono',Stereo:'Stereo',Surround:'Surround',EMediaSoundChannels_MAX:'EMediaSoundChannels_MAX', };
declare class MediaSoundComponent extends SynthComponent { 
	Channels: EMediaSoundChannels;
	MediaPlayer: MediaPlayer;
	static Load(ResourceName: string): MediaSoundComponent;
	static Find(Outer: UObject, ResourceName: string): MediaSoundComponent;
	static GetDefaultObject(): MediaSoundComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaSoundComponent;
	SetMediaPlayer(NewMediaPlayer: MediaPlayer): void;
	GetMediaPlayer(): MediaPlayer;
	BP_GetAttenuationSettingsToApply(OutAttenuationSettings?: SoundAttenuationSettings): {OutAttenuationSettings: SoundAttenuationSettings, $: boolean};
	static C(Other: UObject | any): MediaSoundComponent;
}

declare class MediaTexture extends Texture { 
	AddressX: TextureAddress;
	AddressY: TextureAddress;
	AutoClear: boolean;
	ClearColor: LinearColor;
	MediaPlayer: MediaPlayer;
	static Load(ResourceName: string): MediaTexture;
	static Find(Outer: UObject, ResourceName: string): MediaTexture;
	static GetDefaultObject(): MediaTexture;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaTexture;
	SetMediaPlayer(NewMediaPlayer: MediaPlayer): void;
	GetWidth(): number;
	GetMediaPlayer(): MediaPlayer;
	GetHeight(): number;
	GetAspectRatio(): number;
	static C(Other: UObject | any): MediaTexture;
}

declare class PlatformMediaSource extends MediaSource { 
	PlatformMediaSources: any;
	MediaSource: MediaSource;
	static Load(ResourceName: string): PlatformMediaSource;
	static Find(Outer: UObject, ResourceName: string): PlatformMediaSource;
	static GetDefaultObject(): PlatformMediaSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlatformMediaSource;
	static C(Other: UObject | any): PlatformMediaSource;
}

declare class StreamMediaSource extends BaseMediaSource { 
	StreamUrl: string;
	static Load(ResourceName: string): StreamMediaSource;
	static Find(Outer: UObject, ResourceName: string): StreamMediaSource;
	static GetDefaultObject(): StreamMediaSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StreamMediaSource;
	static C(Other: UObject | any): StreamMediaSource;
}

declare class WmfMediaSettings extends UObject { 
	AllowNonStandardCodecs: boolean;
	LowLatency: boolean;
	NativeAudioOut: boolean;
	static Load(ResourceName: string): WmfMediaSettings;
	static Find(Outer: UObject, ResourceName: string): WmfMediaSettings;
	static GetDefaultObject(): WmfMediaSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WmfMediaSettings;
	static C(Other: UObject | any): WmfMediaSettings;
}

declare class MaterialExpressionSpriteTextureSampler extends MaterialExpressionTextureSampleParameter2D { 
	bSampleAdditionalTextures: boolean;
	AdditionalSlotIndex: number;
	SlotDisplayName: string;
	static Load(ResourceName: string): MaterialExpressionSpriteTextureSampler;
	static Find(Outer: UObject, ResourceName: string): MaterialExpressionSpriteTextureSampler;
	static GetDefaultObject(): MaterialExpressionSpriteTextureSampler;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MaterialExpressionSpriteTextureSampler;
	static C(Other: UObject | any): MaterialExpressionSpriteTextureSampler;
}

declare class PaperSpriteSocket { 
	LocalTransform: Transform;
	SocketName: string;
	clone() : PaperSpriteSocket;
	static C(Other: UObject | any): PaperSpriteSocket;
}

declare type ESpriteCollisionMode = 'None' | 'Use2DPhysics' | 'Use3DPhysics' | 'ESpriteCollisionMode_MAX';
declare var ESpriteCollisionMode : { None:'None',Use2DPhysics:'Use2DPhysics',Use3DPhysics:'Use3DPhysics',ESpriteCollisionMode_MAX:'ESpriteCollisionMode_MAX', };
declare type ESpritePivotMode = 'Top_Left' | 'Top_Center' | 'Top_Right' | 'Center_Left' | 'Center_Center' | 'Center_Right' | 'Bottom_Left' | 'Bottom_Center' | 'Bottom_Right' | 'Custom' | 'ESpritePivotMode_MAX';
declare var ESpritePivotMode : { Top_Left:'Top_Left',Top_Center:'Top_Center',Top_Right:'Top_Right',Center_Left:'Center_Left',Center_Center:'Center_Center',Center_Right:'Center_Right',Bottom_Left:'Bottom_Left',Bottom_Center:'Bottom_Center',Bottom_Right:'Bottom_Right',Custom:'Custom',ESpritePivotMode_MAX:'ESpritePivotMode_MAX', };
declare type ESpriteShapeType = 'Box' | 'Circle' | 'Polygon' | 'ESpriteShapeType_MAX';
declare var ESpriteShapeType : { Box:'Box',Circle:'Circle',Polygon:'Polygon',ESpriteShapeType_MAX:'ESpriteShapeType_MAX', };
declare class SpriteGeometryShape { 
	ShapeType: ESpriteShapeType;
	Vertices: Vector2D[];
	BoxSize: Vector2D;
	BoxPosition: Vector2D;
	Rotation: number;
	bNegativeWinding: boolean;
	clone() : SpriteGeometryShape;
	static C(Other: UObject | any): SpriteGeometryShape;
}

declare type ESpritePolygonMode = 'SourceBoundingBox' | 'TightBoundingBox' | 'ShrinkWrapped' | 'FullyCustom' | 'Diced' | 'ESpritePolygonMode_MAX';
declare var ESpritePolygonMode : { SourceBoundingBox:'SourceBoundingBox',TightBoundingBox:'TightBoundingBox',ShrinkWrapped:'ShrinkWrapped',FullyCustom:'FullyCustom',Diced:'Diced',ESpritePolygonMode_MAX:'ESpritePolygonMode_MAX', };
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
	static C(Other: UObject | any): SpriteGeometryCollection;
}

declare type EPaperSpriteAtlasPadding = 'DilateBorder' | 'PadWithZero' | 'EPaperSpriteAtlasPadding_MAX';
declare var EPaperSpriteAtlasPadding : { DilateBorder:'DilateBorder',PadWithZero:'PadWithZero',EPaperSpriteAtlasPadding_MAX:'EPaperSpriteAtlasPadding_MAX', };
declare class PaperSpriteAtlasSlot { 
	SpriteRef: any;
	AtlasIndex: number;
	X: number;
	Y: number;
	Width: number;
	Height: number;
	clone() : PaperSpriteAtlasSlot;
	static C(Other: UObject | any): PaperSpriteAtlasSlot;
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
	static Load(ResourceName: string): PaperSpriteAtlas;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteAtlas;
	static GetDefaultObject(): PaperSpriteAtlas;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteAtlas;
	static C(Other: UObject | any): PaperSpriteAtlas;
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
	static Load(ResourceName: string): PaperSprite;
	static Find(Outer: UObject, ResourceName: string): PaperSprite;
	static GetDefaultObject(): PaperSprite;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSprite;
	static C(Other: UObject | any): PaperSprite;
	MakeBrushFromSprite(Width: number,Height: number): SlateBrush;
	static MakeBrushFromSprite(Sprite: PaperSprite,Width: number,Height: number): SlateBrush;
}

declare class PaperFlipbookKeyFrame { 
	Sprite: PaperSprite;
	FrameRun: number;
	clone() : PaperFlipbookKeyFrame;
	static C(Other: UObject | any): PaperFlipbookKeyFrame;
}

declare type EFlipbookCollisionMode = 'NoCollision' | 'FirstFrameCollision' | 'EachFrameCollision' | 'EFlipbookCollisionMode_MAX';
declare var EFlipbookCollisionMode : { NoCollision:'NoCollision',FirstFrameCollision:'FirstFrameCollision',EachFrameCollision:'EachFrameCollision',EFlipbookCollisionMode_MAX:'EFlipbookCollisionMode_MAX', };
declare class PaperFlipbook extends UObject { 
	FramesPerSecond: number;
	KeyFrames: PaperFlipbookKeyFrame[];
	DefaultMaterial: MaterialInterface;
	CollisionSource: EFlipbookCollisionMode;
	static Load(ResourceName: string): PaperFlipbook;
	static Find(Outer: UObject, ResourceName: string): PaperFlipbook;
	static GetDefaultObject(): PaperFlipbook;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbook;
	IsValidKeyFrameIndex(index: number): boolean;
	GetTotalDuration(): number;
	GetSpriteAtTime(Time: number,bClampToEnds: boolean): PaperSprite;
	GetSpriteAtFrame(FrameIndex: number): PaperSprite;
	GetNumKeyFrames(): number;
	GetNumFrames(): number;
	GetKeyFrameIndexAtTime(Time: number,bClampToEnds: boolean): number;
	static C(Other: UObject | any): PaperFlipbook;
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
	static Load(ResourceName: string): PaperFlipbookComponent;
	static Find(Outer: UObject, ResourceName: string): PaperFlipbookComponent;
	static GetDefaultObject(): PaperFlipbookComponent;
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
	GetPlayRate(): number;
	GetPlaybackPositionInFrames(): number;
	GetPlaybackPosition(): number;
	GetFlipbookLengthInFrames(): number;
	GetFlipbookLength(): number;
	GetFlipbookFramerate(): number;
	GetFlipbook(): PaperFlipbook;
	static C(Other: UObject | any): PaperFlipbookComponent;
}

declare class PaperCharacter extends Character { 
	Sprite: PaperFlipbookComponent;
	static GetDefaultObject(): PaperCharacter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperCharacter;
	static C(Other: UObject | any): PaperCharacter;
}

declare class PaperFlipbookActor extends Actor { 
	RenderComponent: PaperFlipbookComponent;
	static GetDefaultObject(): PaperFlipbookActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookActor;
	static C(Other: UObject | any): PaperFlipbookActor;
}

declare class SpriteInstanceData { 
	Transform: Matrix;
	SourceSprite: PaperSprite;
	VertexColor: Color;
	MaterialIndex: number;
	clone() : SpriteInstanceData;
	static C(Other: UObject | any): SpriteInstanceData;
}

declare class PaperGroupedSpriteComponent extends MeshComponent { 
	InstanceMaterials: MaterialInterface[];
	PerInstanceSpriteData: SpriteInstanceData[];
	static Load(ResourceName: string): PaperGroupedSpriteComponent;
	static Find(Outer: UObject, ResourceName: string): PaperGroupedSpriteComponent;
	static GetDefaultObject(): PaperGroupedSpriteComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperGroupedSpriteComponent;
	UpdateInstanceTransform(InstanceIndex: number,NewInstanceTransform: Transform,bWorldSpace: boolean,bMarkRenderStateDirty: boolean,bTeleport: boolean): boolean;
	UpdateInstanceColor(InstanceIndex: number,NewInstanceColor: LinearColor,bMarkRenderStateDirty: boolean): boolean;
	SortInstancesAlongAxis(WorldSpaceSortAxis: Vector): void;
	RemoveInstance(InstanceIndex: number): boolean;
	GetInstanceTransform(InstanceIndex: number,OutInstanceTransform?: Transform,bWorldSpace?: boolean): {OutInstanceTransform: Transform, $: boolean};
	GetInstanceCount(): number;
	ClearInstances(): void;
	AddInstance(Transform: Transform,Sprite: PaperSprite,bWorldSpace: boolean,Color: LinearColor): number;
	static C(Other: UObject | any): PaperGroupedSpriteComponent;
}

declare class PaperGroupedSpriteActor extends Actor { 
	RenderComponent: PaperGroupedSpriteComponent;
	static GetDefaultObject(): PaperGroupedSpriteActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperGroupedSpriteActor;
	static C(Other: UObject | any): PaperGroupedSpriteActor;
}

declare class PaperRuntimeSettings extends UObject { 
	bEnableSpriteAtlasGroups: boolean;
	bEnableTerrainSplineEditing: boolean;
	bResizeSpriteDataToMatchTextures: boolean;
	static Load(ResourceName: string): PaperRuntimeSettings;
	static Find(Outer: UObject, ResourceName: string): PaperRuntimeSettings;
	static GetDefaultObject(): PaperRuntimeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperRuntimeSettings;
	static C(Other: UObject | any): PaperRuntimeSettings;
}

declare class PaperSpriteComponent extends MeshComponent { 
	SourceSprite: PaperSprite;
	MaterialOverride: MaterialInterface;
	SpriteColor: LinearColor;
	static Load(ResourceName: string): PaperSpriteComponent;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteComponent;
	static GetDefaultObject(): PaperSpriteComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteComponent;
	SetSpriteColor(NewColor: LinearColor): void;
	SetSprite(NewSprite: PaperSprite): boolean;
	GetSprite(): PaperSprite;
	static C(Other: UObject | any): PaperSpriteComponent;
}

declare class PaperSpriteActor extends Actor { 
	RenderComponent: PaperSpriteComponent;
	static GetDefaultObject(): PaperSpriteActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteActor;
	static C(Other: UObject | any): PaperSpriteActor;
}

declare class PaperSpriteBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): PaperSpriteBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteBlueprintLibrary;
	static GetDefaultObject(): PaperSpriteBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteBlueprintLibrary;
	static MakeBrushFromSprite(Sprite: PaperSprite,Width: number,Height: number): SlateBrush;
	static C(Other: UObject | any): PaperSpriteBlueprintLibrary;
}

declare class PaperTerrainSplineComponent extends SplineComponent { 
	static Load(ResourceName: string): PaperTerrainSplineComponent;
	static Find(Outer: UObject, ResourceName: string): PaperTerrainSplineComponent;
	static GetDefaultObject(): PaperTerrainSplineComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTerrainSplineComponent;
	static C(Other: UObject | any): PaperTerrainSplineComponent;
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
	static C(Other: UObject | any): PaperTerrainMaterialRule;
}

declare class PaperTerrainMaterial extends DataAsset { 
	Rules: PaperTerrainMaterialRule[];
	InteriorFill: PaperSprite;
	static Load(ResourceName: string): PaperTerrainMaterial;
	static Find(Outer: UObject, ResourceName: string): PaperTerrainMaterial;
	static GetDefaultObject(): PaperTerrainMaterial;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTerrainMaterial;
	static C(Other: UObject | any): PaperTerrainMaterial;
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
	static Load(ResourceName: string): PaperTerrainComponent;
	static Find(Outer: UObject, ResourceName: string): PaperTerrainComponent;
	static GetDefaultObject(): PaperTerrainComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTerrainComponent;
	SetTerrainColor(NewColor: LinearColor): void;
	static C(Other: UObject | any): PaperTerrainComponent;
}

declare class PaperTerrainActor extends Actor { 
	DummyRoot: SceneComponent;
	SplineComponent: PaperTerrainSplineComponent;
	RenderComponent: PaperTerrainComponent;
	static GetDefaultObject(): PaperTerrainActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTerrainActor;
	static C(Other: UObject | any): PaperTerrainActor;
}

declare class IntMargin { 
	Left: number;
	Top: number;
	Right: number;
	Bottom: number;
	clone() : IntMargin;
	static C(Other: UObject | any): IntMargin;
}

declare class PaperTileMetadata { 
	UserDataName: string;
	CollisionData: SpriteGeometryCollection;
	TerrainMembership: number;
	clone() : PaperTileMetadata;
	static C(Other: UObject | any): PaperTileMetadata;
}

declare class PaperTileSetTerrain { 
	TerrainName: string;
	CenterTileIndex: number;
	clone() : PaperTileSetTerrain;
	static C(Other: UObject | any): PaperTileSetTerrain;
}

declare class PaperTileSet extends UObject { 
	TileSize: IntPoint;
	TileSheet: Texture2D;
	AdditionalSourceTextures: Texture[];
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
	static Load(ResourceName: string): PaperTileSet;
	static Find(Outer: UObject, ResourceName: string): PaperTileSet;
	static GetDefaultObject(): PaperTileSet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileSet;
	static C(Other: UObject | any): PaperTileSet;
}

declare class PaperTileInfo { 
	TileSet: PaperTileSet;
	PackedTileIndex: number;
	clone() : PaperTileInfo;
	static C(Other: UObject | any): PaperTileInfo;
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
	static Load(ResourceName: string): PaperTileLayer;
	static Find(Outer: UObject, ResourceName: string): PaperTileLayer;
	static GetDefaultObject(): PaperTileLayer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileLayer;
	static C(Other: UObject | any): PaperTileLayer;
}

declare type ETileMapProjectionMode = 'Orthogonal' | 'IsometricDiamond' | 'IsometricStaggered' | 'HexagonalStaggered' | 'ETileMapProjectionMode_MAX';
declare var ETileMapProjectionMode : { Orthogonal:'Orthogonal',IsometricDiamond:'IsometricDiamond',IsometricStaggered:'IsometricStaggered',HexagonalStaggered:'HexagonalStaggered',ETileMapProjectionMode_MAX:'ETileMapProjectionMode_MAX', };
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
	static Load(ResourceName: string): PaperTileMap;
	static Find(Outer: UObject, ResourceName: string): PaperTileMap;
	static GetDefaultObject(): PaperTileMap;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMap;
	static C(Other: UObject | any): PaperTileMap;
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
	static Load(ResourceName: string): PaperTileMapComponent;
	static Find(Outer: UObject, ResourceName: string): PaperTileMapComponent;
	static GetDefaultObject(): PaperTileMapComponent;
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
	static C(Other: UObject | any): PaperTileMapComponent;
}

declare class PaperTileMapActor extends Actor { 
	RenderComponent: PaperTileMapComponent;
	static GetDefaultObject(): PaperTileMapActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMapActor;
	static C(Other: UObject | any): PaperTileMapActor;
}

declare class TileMapBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): TileMapBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): TileMapBlueprintLibrary;
	static GetDefaultObject(): TileMapBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileMapBlueprintLibrary;
	static MakeTile(TileIndex: number,TileSet: PaperTileSet,bFlipH: boolean,bFlipV: boolean,bFlipD: boolean): PaperTileInfo;
	static GetTileUserData(Tile: PaperTileInfo): string;
	static GetTileTransform(Tile: PaperTileInfo): Transform;
	static BreakTile(Tile: PaperTileInfo,TileIndex?: number,TileSet?: PaperTileSet,bFlipH?: boolean,bFlipV?: boolean,bFlipD?: boolean): {TileIndex: number, TileSet: PaperTileSet, bFlipH: boolean, bFlipV: boolean, bFlipD: boolean};
	static C(Other: UObject | any): TileMapBlueprintLibrary;
}

declare class LiveLinkSubjectName { 
	Name: string;
	clone() : LiveLinkSubjectName;
	static C(Other: UObject | any): LiveLinkSubjectName;
}

declare class LiveLinkDrivenComponent extends ActorComponent { 
	SubjectName: LiveLinkSubjectName;
	ActorTransformBone: string;
	bModifyActorTransform: boolean;
	bSetRelativeLocation: boolean;
	static Load(ResourceName: string): LiveLinkDrivenComponent;
	static Find(Outer: UObject, ResourceName: string): LiveLinkDrivenComponent;
	static GetDefaultObject(): LiveLinkDrivenComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LiveLinkDrivenComponent;
	static C(Other: UObject | any): LiveLinkDrivenComponent;
}

declare class LiveLinkInstance extends AnimInstance { 
	static Load(ResourceName: string): LiveLinkInstance;
	static Find(Outer: UObject, ResourceName: string): LiveLinkInstance;
	static GetDefaultObject(): LiveLinkInstance;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LiveLinkInstance;
	static C(Other: UObject | any): LiveLinkInstance;
}

declare class LiveLinkRetargetAsset extends UObject { 
	static Load(ResourceName: string): LiveLinkRetargetAsset;
	static Find(Outer: UObject, ResourceName: string): LiveLinkRetargetAsset;
	static GetDefaultObject(): LiveLinkRetargetAsset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LiveLinkRetargetAsset;
	static C(Other: UObject | any): LiveLinkRetargetAsset;
}

declare class LiveLinkRemapAsset extends LiveLinkRetargetAsset { 
	static Load(ResourceName: string): LiveLinkRemapAsset;
	static Find(Outer: UObject, ResourceName: string): LiveLinkRemapAsset;
	static GetDefaultObject(): LiveLinkRemapAsset;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LiveLinkRemapAsset;
	RemapCurveElements(CurveItems?: any): {CurveItems: any};
	GetRemappedCurveName(CurveName: string): string;
	GetRemappedBoneName(BoneName: string): string;
	static C(Other: UObject | any): LiveLinkRemapAsset;
}

declare type EPinnedCommandListType = 'Command' | 'CustomWidget' | 'EPinnedCommandListType_MAX';
declare var EPinnedCommandListType : { Command:'Command',CustomWidget:'CustomWidget',EPinnedCommandListType_MAX:'EPinnedCommandListType_MAX', };
declare class PinnedCommandListCommand { 
	Name: string;
	Binding: string;
	Type: EPinnedCommandListType;
	clone() : PinnedCommandListCommand;
	static C(Other: UObject | any): PinnedCommandListCommand;
}

declare class PinnedCommandListContext { 
	Name: string;
	Commands: PinnedCommandListCommand[];
	clone() : PinnedCommandListContext;
	static C(Other: UObject | any): PinnedCommandListContext;
}

declare class PinnedCommandListSettings extends UObject { 
	Contexts: PinnedCommandListContext[];
	static Load(ResourceName: string): PinnedCommandListSettings;
	static Find(Outer: UObject, ResourceName: string): PinnedCommandListSettings;
	static GetDefaultObject(): PinnedCommandListSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PinnedCommandListSettings;
	static C(Other: UObject | any): PinnedCommandListSettings;
}

declare class PersonaPreviewSceneController extends UObject { 
	static Load(ResourceName: string): PersonaPreviewSceneController;
	static Find(Outer: UObject, ResourceName: string): PersonaPreviewSceneController;
	static GetDefaultObject(): PersonaPreviewSceneController;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PersonaPreviewSceneController;
	static C(Other: UObject | any): PersonaPreviewSceneController;
}

declare class PersonaPreviewSceneAnimationController extends PersonaPreviewSceneController { 
	Animation: any;
	static Load(ResourceName: string): PersonaPreviewSceneAnimationController;
	static Find(Outer: UObject, ResourceName: string): PersonaPreviewSceneAnimationController;
	static GetDefaultObject(): PersonaPreviewSceneAnimationController;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PersonaPreviewSceneAnimationController;
	static C(Other: UObject | any): PersonaPreviewSceneAnimationController;
}

declare class PersonaPreviewSceneDefaultController extends PersonaPreviewSceneController { 
	static Load(ResourceName: string): PersonaPreviewSceneDefaultController;
	static Find(Outer: UObject, ResourceName: string): PersonaPreviewSceneDefaultController;
	static GetDefaultObject(): PersonaPreviewSceneDefaultController;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PersonaPreviewSceneDefaultController;
	static C(Other: UObject | any): PersonaPreviewSceneDefaultController;
}

declare class PersonaPreviewSceneDescription extends UObject { 
	PreviewController: UnrealEngineClass;
	PreviewControllerInstance: PersonaPreviewSceneController;
	PreviewControllerInstances: PersonaPreviewSceneController[];
	PreviewMesh: any;
	AdditionalMeshes: any;
	DefaultAdditionalMeshes: PreviewMeshCollection;
	static Load(ResourceName: string): PersonaPreviewSceneDescription;
	static Find(Outer: UObject, ResourceName: string): PersonaPreviewSceneDescription;
	static GetDefaultObject(): PersonaPreviewSceneDescription;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PersonaPreviewSceneDescription;
	static C(Other: UObject | any): PersonaPreviewSceneDescription;
}

declare class PersonaPreviewSceneRefPoseController extends PersonaPreviewSceneController { 
	bResetBoneTransforms: boolean;
	static Load(ResourceName: string): PersonaPreviewSceneRefPoseController;
	static Find(Outer: UObject, ResourceName: string): PersonaPreviewSceneRefPoseController;
	static GetDefaultObject(): PersonaPreviewSceneRefPoseController;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PersonaPreviewSceneRefPoseController;
	static C(Other: UObject | any): PersonaPreviewSceneRefPoseController;
}

declare class AnimNode_LiveLinkPose extends AnimNode_Base { 
	SubjectName: string;
	RetargetAsset: UnrealEngineClass;
	CurrentRetargetAsset: LiveLinkRetargetAsset;
	clone() : AnimNode_LiveLinkPose;
	static C(Other: UObject | any): AnimNode_LiveLinkPose;
}

declare class AnimGraphNode_LiveLinkPose extends AnimGraphNode_Base { 
	UNode: AnimNode_LiveLinkPose;
	static Load(ResourceName: string): AnimGraphNode_LiveLinkPose;
	static Find(Outer: UObject, ResourceName: string): AnimGraphNode_LiveLinkPose;
	static GetDefaultObject(): AnimGraphNode_LiveLinkPose;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimGraphNode_LiveLinkPose;
	static C(Other: UObject | any): AnimGraphNode_LiveLinkPose;
}

declare class LiveLinkMessageBusSourceFactory extends LiveLinkSourceFactory { 
	static Load(ResourceName: string): LiveLinkMessageBusSourceFactory;
	static Find(Outer: UObject, ResourceName: string): LiveLinkMessageBusSourceFactory;
	static GetDefaultObject(): LiveLinkMessageBusSourceFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LiveLinkMessageBusSourceFactory;
	static C(Other: UObject | any): LiveLinkMessageBusSourceFactory;
}

declare class LiveLinkPreviewController extends PersonaPreviewSceneController { 
	SubjectName: string;
	bEnableCameraSync: boolean;
	RetargetAsset: UnrealEngineClass;
	static Load(ResourceName: string): LiveLinkPreviewController;
	static Find(Outer: UObject, ResourceName: string): LiveLinkPreviewController;
	static GetDefaultObject(): LiveLinkPreviewController;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LiveLinkPreviewController;
	static C(Other: UObject | any): LiveLinkPreviewController;
}

declare class LiveLinkVirtualSubject { 
	Subjects: string[];
	Source: Guid;
	clone() : LiveLinkVirtualSubject;
	static C(Other: UObject | any): LiveLinkVirtualSubject;
}

declare class LiveLinkVirtualSubjectDetails extends UObject { 
	VirtualSubjectProxy: LiveLinkVirtualSubject;
	static Load(ResourceName: string): LiveLinkVirtualSubjectDetails;
	static Find(Outer: UObject, ResourceName: string): LiveLinkVirtualSubjectDetails;
	static GetDefaultObject(): LiveLinkVirtualSubjectDetails;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LiveLinkVirtualSubjectDetails;
	static C(Other: UObject | any): LiveLinkVirtualSubjectDetails;
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
	LPVFadeRange: number;
	LPVDirectionalOcclusionFadeRange: number;
	clone() : LightPropagationVolumeSettings;
	static C(Other: UObject | any): LightPropagationVolumeSettings;
}

declare class LightPropagationVolumeBlendable extends UObject { 
	Settings: LightPropagationVolumeSettings;
	BlendWeight: number;
	static Load(ResourceName: string): LightPropagationVolumeBlendable;
	static Find(Outer: UObject, ResourceName: string): LightPropagationVolumeBlendable;
	static GetDefaultObject(): LightPropagationVolumeBlendable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LightPropagationVolumeBlendable;
	static C(Other: UObject | any): LightPropagationVolumeBlendable;
}

declare class EdGraph_ReferenceViewer extends EdGraph { 
	static Load(ResourceName: string): EdGraph_ReferenceViewer;
	static Find(Outer: UObject, ResourceName: string): EdGraph_ReferenceViewer;
	static GetDefaultObject(): EdGraph_ReferenceViewer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraph_ReferenceViewer;
	static C(Other: UObject | any): EdGraph_ReferenceViewer;
}

declare class EdGraphNode_Reference extends EdGraphNode { 
	static Load(ResourceName: string): EdGraphNode_Reference;
	static Find(Outer: UObject, ResourceName: string): EdGraphNode_Reference;
	static GetDefaultObject(): EdGraphNode_Reference;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdGraphNode_Reference;
	static C(Other: UObject | any): EdGraphNode_Reference;
}

declare class ReferenceViewerSchema extends EdGraphSchema { 
	static Load(ResourceName: string): ReferenceViewerSchema;
	static Find(Outer: UObject, ResourceName: string): ReferenceViewerSchema;
	static GetDefaultObject(): ReferenceViewerSchema;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ReferenceViewerSchema;
	static C(Other: UObject | any): ReferenceViewerSchema;
}

declare class ContentBrowserFrontEndFilterExtension extends UObject { 
	static Load(ResourceName: string): ContentBrowserFrontEndFilterExtension;
	static Find(Outer: UObject, ResourceName: string): ContentBrowserFrontEndFilterExtension;
	static GetDefaultObject(): ContentBrowserFrontEndFilterExtension;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ContentBrowserFrontEndFilterExtension;
	static C(Other: UObject | any): ContentBrowserFrontEndFilterExtension;
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
	static Load(ResourceName: string): InternationalizationExportSettings;
	static Find(Outer: UObject, ResourceName: string): InternationalizationExportSettings;
	static GetDefaultObject(): InternationalizationExportSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InternationalizationExportSettings;
	static C(Other: UObject | any): InternationalizationExportSettings;
}

declare class TranslationPickerSettings extends UObject { 
	bSubmitTranslationPickerChangesToLocalizationService: boolean;
	static Load(ResourceName: string): TranslationPickerSettings;
	static Find(Outer: UObject, ResourceName: string): TranslationPickerSettings;
	static GetDefaultObject(): TranslationPickerSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TranslationPickerSettings;
	static C(Other: UObject | any): TranslationPickerSettings;
}

declare class TranslationChange { 
	Version: string;
	DateAndTime: DateTime;
	Source: string;
	Translation: string;
	clone() : TranslationChange;
	static C(Other: UObject | any): TranslationChange;
}

declare class TranslationContextInfo { 
	Key: string;
	Context: string;
	Changes: TranslationChange[];
	clone() : TranslationContextInfo;
	static C(Other: UObject | any): TranslationContextInfo;
}

declare class TranslationUnit extends UObject { 
	Namespace: string;
	Key: string;
	Source: string;
	Translation: string;
	Contexts: TranslationContextInfo[];
	HasBeenReviewed: boolean;
	TranslationBeforeImport: string;
	LocresPath: string;
	static Load(ResourceName: string): TranslationUnit;
	static Find(Outer: UObject, ResourceName: string): TranslationUnit;
	static GetDefaultObject(): TranslationUnit;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TranslationUnit;
	static C(Other: UObject | any): TranslationUnit;
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
	SubsurfaceColor: LinearColor;
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
	static Load(ResourceName: string): PixelInspectorView;
	static Find(Outer: UObject, ResourceName: string): PixelInspectorView;
	static GetDefaultObject(): PixelInspectorView;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PixelInspectorView;
	static C(Other: UObject | any): PixelInspectorView;
}

declare class DataValidationCommandlet extends Commandlet { 
	static Load(ResourceName: string): DataValidationCommandlet;
	static Find(Outer: UObject, ResourceName: string): DataValidationCommandlet;
	static GetDefaultObject(): DataValidationCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DataValidationCommandlet;
	static C(Other: UObject | any): DataValidationCommandlet;
}

declare class DataValidationManager extends UObject { 
	ExcludedDirectories: DirectoryPath[];
	DataValidationManagerClassName: SoftClassPath;
	static Load(ResourceName: string): DataValidationManager;
	static Find(Outer: UObject, ResourceName: string): DataValidationManager;
	static GetDefaultObject(): DataValidationManager;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DataValidationManager;
	static C(Other: UObject | any): DataValidationManager;
}

declare class AudioCurveSourceComponent extends AudioComponent { 
	CurveSourceBindingName: string;
	CurveSyncOffset: number;
	static Load(ResourceName: string): AudioCurveSourceComponent;
	static Find(Outer: UObject, ResourceName: string): AudioCurveSourceComponent;
	static GetDefaultObject(): AudioCurveSourceComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioCurveSourceComponent;
	static C(Other: UObject | any): AudioCurveSourceComponent;
}

declare class FacialAnimationBulkImporterSettings extends UObject { 
	SourceImportPath: DirectoryPath;
	TargetImportPath: DirectoryPath;
	CurveNodeName: string;
	static Load(ResourceName: string): FacialAnimationBulkImporterSettings;
	static Find(Outer: UObject, ResourceName: string): FacialAnimationBulkImporterSettings;
	static GetDefaultObject(): FacialAnimationBulkImporterSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FacialAnimationBulkImporterSettings;
	static C(Other: UObject | any): FacialAnimationBulkImporterSettings;
}

declare class GameplayTagSearchFilter extends ContentBrowserFrontEndFilterExtension { 
	static Load(ResourceName: string): GameplayTagSearchFilter;
	static Find(Outer: UObject, ResourceName: string): GameplayTagSearchFilter;
	static GetDefaultObject(): GameplayTagSearchFilter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagSearchFilter;
	static C(Other: UObject | any): GameplayTagSearchFilter;
}

declare class GameplayTagsK2Node_LiteralGameplayTag extends K2Node { 
	static Load(ResourceName: string): GameplayTagsK2Node_LiteralGameplayTag;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_LiteralGameplayTag;
	static GetDefaultObject(): GameplayTagsK2Node_LiteralGameplayTag;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_LiteralGameplayTag;
	static C(Other: UObject | any): GameplayTagsK2Node_LiteralGameplayTag;
}

declare class GameplayTagsK2Node_MultiCompareBase extends K2Node { 
	NumberOfPins: number;
	PinNames: string[];
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareBase;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_MultiCompareBase;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareBase;
	static C(Other: UObject | any): GameplayTagsK2Node_MultiCompareBase;
}

declare class GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface extends GameplayTagsK2Node_MultiCompareBase { 
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
	static C(Other: UObject | any): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
}

declare class GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags extends GameplayTagsK2Node_MultiCompareBase { 
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
	static C(Other: UObject | any): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
}

declare class GameplayTagsK2Node_MultiCompareGameplayTagContainer extends GameplayTagsK2Node_MultiCompareBase { 
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
	static C(Other: UObject | any): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
}

declare class GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags extends GameplayTagsK2Node_MultiCompareBase { 
	static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
	static GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
	static C(Other: UObject | any): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
}

declare class GameplayTagsK2Node_SwitchGameplayTag extends K2Node_Switch { 
	PinTags: GameplayTag[];
	PinNames: string[];
	static Load(ResourceName: string): GameplayTagsK2Node_SwitchGameplayTag;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_SwitchGameplayTag;
	static GetDefaultObject(): GameplayTagsK2Node_SwitchGameplayTag;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_SwitchGameplayTag;
	static C(Other: UObject | any): GameplayTagsK2Node_SwitchGameplayTag;
}

declare class GameplayTagsK2Node_SwitchGameplayTagContainer extends K2Node_Switch { 
	PinContainers: GameplayTagContainer[];
	PinNames: string[];
	static Load(ResourceName: string): GameplayTagsK2Node_SwitchGameplayTagContainer;
	static Find(Outer: UObject, ResourceName: string): GameplayTagsK2Node_SwitchGameplayTagContainer;
	static GetDefaultObject(): GameplayTagsK2Node_SwitchGameplayTagContainer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagsK2Node_SwitchGameplayTagContainer;
	static C(Other: UObject | any): GameplayTagsK2Node_SwitchGameplayTagContainer;
}

declare class TcpMessagingSettings extends UObject { 
	EnableTransport: boolean;
	ListenEndpoint: string;
	ConnectToEndpoints: string[];
	ConnectionRetryDelay: number;
	static Load(ResourceName: string): TcpMessagingSettings;
	static Find(Outer: UObject, ResourceName: string): TcpMessagingSettings;
	static GetDefaultObject(): TcpMessagingSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TcpMessagingSettings;
	static C(Other: UObject | any): TcpMessagingSettings;
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
	static Load(ResourceName: string): UdpMessagingSettings;
	static Find(Outer: UObject, ResourceName: string): UdpMessagingSettings;
	static GetDefaultObject(): UdpMessagingSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UdpMessagingSettings;
	static C(Other: UObject | any): UdpMessagingSettings;
}

declare type EActorSequenceObjectReferenceType = 'ContextActor' | 'ExternalActor' | 'Component' | 'EActorSequenceObjectReferenceType_MAX';
declare var EActorSequenceObjectReferenceType : { ContextActor:'ContextActor',ExternalActor:'ExternalActor',Component:'Component',EActorSequenceObjectReferenceType_MAX:'EActorSequenceObjectReferenceType_MAX', };
declare class ActorSequenceObjectReference { 
	Type: EActorSequenceObjectReferenceType;
	ActorId: Guid;
	PathToComponent: string;
	clone() : ActorSequenceObjectReference;
	static C(Other: UObject | any): ActorSequenceObjectReference;
}

declare class ActorSequenceObjectReferences { 
	Array: ActorSequenceObjectReference[];
	clone() : ActorSequenceObjectReferences;
	static C(Other: UObject | any): ActorSequenceObjectReferences;
}

declare class ActorSequenceObjectReferenceMap { 
	BindingIds: Guid[];
	References: ActorSequenceObjectReferences[];
	clone() : ActorSequenceObjectReferenceMap;
	static C(Other: UObject | any): ActorSequenceObjectReferenceMap;
}

declare class ActorSequence extends MovieSceneSequence { 
	MovieScene: MovieScene;
	ObjectReferences: ActorSequenceObjectReferenceMap;
	bHasBeenInitialized: boolean;
	static Load(ResourceName: string): ActorSequence;
	static Find(Outer: UObject, ResourceName: string): ActorSequence;
	static GetDefaultObject(): ActorSequence;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorSequence;
	static C(Other: UObject | any): ActorSequence;
}

declare class ActorSequencePlayer extends MovieSceneSequencePlayer { 
	static Load(ResourceName: string): ActorSequencePlayer;
	static Find(Outer: UObject, ResourceName: string): ActorSequencePlayer;
	static GetDefaultObject(): ActorSequencePlayer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorSequencePlayer;
	static C(Other: UObject | any): ActorSequencePlayer;
}

declare class ActorSequenceComponent extends ActorComponent { 
	PlaybackSettings: MovieSceneSequencePlaybackSettings;
	Sequence: ActorSequence;
	SequencePlayer: ActorSequencePlayer;
	bAutoPlay: boolean;
	static Load(ResourceName: string): ActorSequenceComponent;
	static Find(Outer: UObject, ResourceName: string): ActorSequenceComponent;
	static GetDefaultObject(): ActorSequenceComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorSequenceComponent;
	static C(Other: UObject | any): ActorSequenceComponent;
}

declare type ESimulationSpace = 'ComponentSpace' | 'WorldSpace' | 'RootBoneSpace' | 'ESimulationSpace_MAX';
declare var ESimulationSpace : { ComponentSpace:'ComponentSpace',WorldSpace:'WorldSpace',RootBoneSpace:'RootBoneSpace',ESimulationSpace_MAX:'ESimulationSpace_MAX', };
declare class AnimNode_RigidBody extends AnimNode_SkeletalControlBase { 
	OverridePhysicsAsset: PhysicsAsset;
	OverrideWorldGravity: Vector;
	ExternalForce: Vector;
	OverlapChannel: ECollisionChannel;
	bEnableWorldGeometry: boolean;
	SimulationSpace: ESimulationSpace;
	bOverrideWorldGravity: boolean;
	CachedBoundsScale: number;
	bTransferBoneVelocities: boolean;
	bFreezeIncomingPoseOnStart: boolean;
	bComponentSpaceSimulation: boolean;
	clone() : AnimNode_RigidBody;
	static C(Other: UObject | any): AnimNode_RigidBody;
}

declare class AnimGraphNode_RigidBody extends AnimGraphNode_SkeletalControlBase { 
	UNode: AnimNode_RigidBody;
	static Load(ResourceName: string): AnimGraphNode_RigidBody;
	static Find(Outer: UObject, ResourceName: string): AnimGraphNode_RigidBody;
	static GetDefaultObject(): AnimGraphNode_RigidBody;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimGraphNode_RigidBody;
	static C(Other: UObject | any): AnimGraphNode_RigidBody;
}

declare type ELocationAccuracy = 'LA_ThreeKilometers' | 'LA_OneKilometer' | 'LA_HundredMeters' | 'LA_TenMeters' | 'LA_Best' | 'LA_Navigation' | 'LA_MAX';
declare var ELocationAccuracy : { LA_ThreeKilometers:'LA_ThreeKilometers',LA_OneKilometer:'LA_OneKilometer',LA_HundredMeters:'LA_HundredMeters',LA_TenMeters:'LA_TenMeters',LA_Best:'LA_Best',LA_Navigation:'LA_Navigation',LA_MAX:'LA_MAX', };
declare class LocationServicesData { 
	Timestamp: number;
	Longitude: number;
	Latitude: number;
	HorizontalAccuracy: number;
	VerticalAccuracy: number;
	Altitude: number;
	clone() : LocationServicesData;
	static C(Other: UObject | any): LocationServicesData;
	static GetLastKnownLocation(): LocationServicesData;
}

declare class LocationServicesImpl extends UObject { 
	OnLocationChanged: UnrealEngineMulticastDelegate<(LocationData: LocationServicesData) => void>;
	static Load(ResourceName: string): LocationServicesImpl;
	static Find(Outer: UObject, ResourceName: string): LocationServicesImpl;
	static GetDefaultObject(): LocationServicesImpl;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LocationServicesImpl;
	static C(Other: UObject | any): LocationServicesImpl;
}

declare class LocationServices extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): LocationServices;
	static Find(Outer: UObject, ResourceName: string): LocationServices;
	static GetDefaultObject(): LocationServices;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LocationServices;
	static StopLocationServices(): boolean;
	static StartLocationServices(): boolean;
	static IsLocationAccuracyAvailable(Accuracy: ELocationAccuracy): boolean;
	static InitLocationServices(Accuracy: ELocationAccuracy,UpdateFrequency: number,MinDistanceFilter: number): boolean;
	static GetLocationServicesImpl(): LocationServicesImpl;
	static GetLastKnownLocation(): LocationServicesData;
	static AreLocationServicesEnabled(): boolean;
	static C(Other: UObject | any): LocationServices;
}

declare class TireConfigMaterialFriction { 
	PhysicalMaterial: PhysicalMaterial;
	FrictionScale: number;
	clone() : TireConfigMaterialFriction;
	static C(Other: UObject | any): TireConfigMaterialFriction;
}

declare class TireConfig extends DataAsset { 
	FrictionScale: number;
	TireFrictionScales: TireConfigMaterialFriction[];
	static Load(ResourceName: string): TireConfig;
	static Find(Outer: UObject, ResourceName: string): TireConfig;
	static GetDefaultObject(): TireConfig;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TireConfig;
	static C(Other: UObject | any): TireConfig;
}

declare type EWheelSweepType = 'SimpleAndComplex' | 'Simple' | 'Complex' | 'EWheelSweepType_MAX';
declare var EWheelSweepType : { SimpleAndComplex:'SimpleAndComplex',Simple:'Simple',Complex:'Complex',EWheelSweepType_MAX:'EWheelSweepType_MAX', };
declare class VehicleWheel extends UObject { 
	CollisionMesh: StaticMesh;
	bDontCreateShape: boolean;
	bAutoAdjustCollisionSize: boolean;
	Offset: Vector;
	ShapeRadius: number;
	ShapeWidth: number;
	Mass: number;
	DampingRate: number;
	SteerAngle: number;
	bAffectedByHandbrake: boolean;
	TireType: TireType;
	TireConfig: TireConfig;
	LatStiffMaxLoad: number;
	LatStiffValue: number;
	LongStiffValue: number;
	SuspensionForceOffset: number;
	SuspensionMaxRaise: number;
	SuspensionMaxDrop: number;
	SuspensionNaturalFrequency: number;
	SuspensionDampingRatio: number;
	SweepType: EWheelSweepType;
	MaxBrakeTorque: number;
	MaxHandBrakeTorque: number;
	VehicleSim: WheeledVehicleMovementComponent;
	WheelIndex: number;
	DebugLongSlip: number;
	DebugLatSlip: number;
	DebugNormalizedTireLoad: number;
	DebugWheelTorque: number;
	DebugLongForce: number;
	DebugLatForce: number;
	Location: Vector;
	OldLocation: Vector;
	Velocity: Vector;
	static Load(ResourceName: string): VehicleWheel;
	static Find(Outer: UObject, ResourceName: string): VehicleWheel;
	static GetDefaultObject(): VehicleWheel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VehicleWheel;
	IsInAir(): boolean;
	GetSuspensionOffset(): number;
	GetSteerAngle(): number;
	GetRotationAngle(): number;
	static C(Other: UObject | any): VehicleWheel;
}

declare class WheelSetup { 
	WheelClass: UnrealEngineClass;
	BoneName: string;
	AdditionalOffset: Vector;
	bDisableSteering: boolean;
	clone() : WheelSetup;
	static C(Other: UObject | any): WheelSetup;
}

declare class ReplicatedVehicleState { 
	SteeringInput: number;
	ThrottleInput: number;
	BrakeInput: number;
	HandbrakeInput: number;
	CurrentGear: number;
	clone() : ReplicatedVehicleState;
	static C(Other: UObject | any): ReplicatedVehicleState;
}

declare class VehicleInputRate { 
	RiseRate: number;
	FallRate: number;
	clone() : VehicleInputRate;
	static C(Other: UObject | any): VehicleInputRate;
}

declare class WheeledVehicleMovementComponent extends PawnMovementComponent { 
	bDeprecatedSpringOffsetMode: boolean;
	WheelSetups: WheelSetup[];
	Mass: number;
	DragCoefficient: number;
	ChassisWidth: number;
	ChassisHeight: number;
	bReverseAsBrake: boolean;
	DragArea: number;
	EstimatedMaxEngineSpeed: number;
	MaxEngineRPM: number;
	DebugDragMagnitude: number;
	InertiaTensorScale: Vector;
	MinNormalizedTireLoad: number;
	MinNormalizedTireLoadFiltered: number;
	MaxNormalizedTireLoad: number;
	MaxNormalizedTireLoadFiltered: number;
	ThresholdLongitudinalSpeed: number;
	LowForwardSpeedSubStepCount: number;
	HighForwardSpeedSubStepCount: number;
	Wheels: VehicleWheel[];
	bUseRVOAvoidance: boolean;
	RVOAvoidanceRadius: number;
	RVOAvoidanceHeight: number;
	AvoidanceConsiderationRadius: number;
	RVOSteeringStep: number;
	RVOThrottleStep: number;
	AvoidanceUID: number;
	AvoidanceGroup: NavAvoidanceMask;
	GroupsToAvoid: NavAvoidanceMask;
	GroupsToIgnore: NavAvoidanceMask;
	AvoidanceWeight: number;
	PendingLaunchVelocity: Vector;
	ReplicatedState: ReplicatedVehicleState;
	RawSteeringInput: number;
	RawThrottleInput: number;
	RawBrakeInput: number;
	bRawHandbrakeInput: boolean;
	bRawGearUpInput: boolean;
	bRawGearDownInput: boolean;
	SteeringInput: number;
	ThrottleInput: number;
	BrakeInput: number;
	HandbrakeInput: number;
	IdleBrakeInput: number;
	StopThreshold: number;
	WrongDirectionThreshold: number;
	ThrottleInputRate: VehicleInputRate;
	BrakeInputRate: VehicleInputRate;
	HandbrakeInputRate: VehicleInputRate;
	SteeringInputRate: VehicleInputRate;
	bWasAvoidanceUpdated: boolean;
	OverrideController: Controller;
	static Load(ResourceName: string): WheeledVehicleMovementComponent;
	static Find(Outer: UObject, ResourceName: string): WheeledVehicleMovementComponent;
	static GetDefaultObject(): WheeledVehicleMovementComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WheeledVehicleMovementComponent;
	SetUseAutoGears(bUseAuto: boolean): void;
	SetThrottleInput(Throttle: number): void;
	SetTargetGear(GearNum: number,bImmediate: boolean): void;
	SetSteeringInput(Steering: number): void;
	SetHandbrakeInput(bNewHandbrake: boolean): void;
	SetGroupsToIgnoreMask(GroupMask: NavAvoidanceMask): void;
	SetGroupsToIgnore(GroupFlags: number): void;
	SetGroupsToAvoidMask(GroupMask: NavAvoidanceMask): void;
	SetGroupsToAvoid(GroupFlags: number): void;
	SetGearUp(bNewGearUp: boolean): void;
	SetGearDown(bNewGearDown: boolean): void;
	SetBrakeInput(Brake: number): void;
	SetAvoidanceGroupMask(GroupMask: NavAvoidanceMask): void;
	SetAvoidanceGroup(GroupFlags: number): void;
	SetAvoidanceEnabled(bEnable: boolean): void;
	ServerUpdateState(InSteeringInput: number,InThrottleInput: number,InBrakeInput: number,InHandbrakeInput: number,CurrentGear: number): void;
	GetUseAutoGears(): boolean;
	GetTargetGear(): number;
	GetForwardSpeed(): number;
	GetEngineRotationSpeed(): number;
	GetEngineMaxRotationSpeed(): number;
	GetCurrentGear(): number;
	static C(Other: UObject | any): WheeledVehicleMovementComponent;
}

declare class SimpleWheeledVehicleMovementComponent extends WheeledVehicleMovementComponent { 
	static Load(ResourceName: string): SimpleWheeledVehicleMovementComponent;
	static Find(Outer: UObject, ResourceName: string): SimpleWheeledVehicleMovementComponent;
	static GetDefaultObject(): SimpleWheeledVehicleMovementComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SimpleWheeledVehicleMovementComponent;
	SetSteerAngle(SteerAngle: number,WheelIndex: number): void;
	SetDriveTorque(DriveTorque: number,WheelIndex: number): void;
	SetBrakeTorque(BrakeTorque: number,WheelIndex: number): void;
	static C(Other: UObject | any): SimpleWheeledVehicleMovementComponent;
}

declare class WheeledVehicle extends Pawn { 
	Mesh: SkeletalMeshComponent;
	VehicleMovement: WheeledVehicleMovementComponent;
	static GetDefaultObject(): WheeledVehicle;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WheeledVehicle;
	static C(Other: UObject | any): WheeledVehicle;
}

declare class VehicleAnimInstance extends AnimInstance { 
	WheeledVehicleMovementComponent: WheeledVehicleMovementComponent;
	static Load(ResourceName: string): VehicleAnimInstance;
	static Find(Outer: UObject, ResourceName: string): VehicleAnimInstance;
	static GetDefaultObject(): VehicleAnimInstance;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VehicleAnimInstance;
	GetVehicle(): WheeledVehicle;
	static C(Other: UObject | any): VehicleAnimInstance;
}

declare class VehicleEngineData { 
	TorqueCurve: RuntimeFloatCurve;
	MaxRPM: number;
	MOI: number;
	DampingRateFullThrottle: number;
	DampingRateZeroThrottleClutchEngaged: number;
	DampingRateZeroThrottleClutchDisengaged: number;
	clone() : VehicleEngineData;
	static C(Other: UObject | any): VehicleEngineData;
}

declare type EVehicleDifferential4W = 'LimitedSlip_4W' | 'LimitedSlip_FrontDrive' | 'LimitedSlip_RearDrive' | 'Open_4W' | 'Open_FrontDrive' | 'Open_RearDrive' | 'EVehicleDifferential4W_MAX';
declare var EVehicleDifferential4W : { LimitedSlip_4W:'LimitedSlip_4W',LimitedSlip_FrontDrive:'LimitedSlip_FrontDrive',LimitedSlip_RearDrive:'LimitedSlip_RearDrive',Open_4W:'Open_4W',Open_FrontDrive:'Open_FrontDrive',Open_RearDrive:'Open_RearDrive',EVehicleDifferential4W_MAX:'EVehicleDifferential4W_MAX', };
declare class VehicleDifferential4WData { 
	DifferentialType: EVehicleDifferential4W;
	FrontRearSplit: number;
	FrontLeftRightSplit: number;
	RearLeftRightSplit: number;
	CentreBias: number;
	FrontBias: number;
	RearBias: number;
	clone() : VehicleDifferential4WData;
	static C(Other: UObject | any): VehicleDifferential4WData;
}

declare class VehicleGearData { 
	Ratio: number;
	DownRatio: number;
	UpRatio: number;
	clone() : VehicleGearData;
	static C(Other: UObject | any): VehicleGearData;
}

declare class VehicleTransmissionData { 
	bUseGearAutoBox: boolean;
	GearSwitchTime: number;
	GearAutoBoxLatency: number;
	FinalRatio: number;
	ForwardGears: VehicleGearData[];
	ReverseGearRatio: number;
	NeutralGearUpRatio: number;
	ClutchStrength: number;
	clone() : VehicleTransmissionData;
	static C(Other: UObject | any): VehicleTransmissionData;
}

declare class WheeledVehicleMovementComponent4W extends WheeledVehicleMovementComponent { 
	EngineSetup: VehicleEngineData;
	DifferentialSetup: VehicleDifferential4WData;
	TransmissionSetup: VehicleTransmissionData;
	SteeringCurve: RuntimeFloatCurve;
	AckermannAccuracy: number;
	static Load(ResourceName: string): WheeledVehicleMovementComponent4W;
	static Find(Outer: UObject, ResourceName: string): WheeledVehicleMovementComponent4W;
	static GetDefaultObject(): WheeledVehicleMovementComponent4W;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WheeledVehicleMovementComponent4W;
	static C(Other: UObject | any): WheeledVehicleMovementComponent4W;
}

declare class AnimNode_WheelHandler extends AnimNode_SkeletalControlBase { 
	clone() : AnimNode_WheelHandler;
	static C(Other: UObject | any): AnimNode_WheelHandler;
}

declare class AnimGraphNode_WheelHandler extends AnimGraphNode_SkeletalControlBase { 
	UNode: AnimNode_WheelHandler;
	static Load(ResourceName: string): AnimGraphNode_WheelHandler;
	static Find(Outer: UObject, ResourceName: string): AnimGraphNode_WheelHandler;
	static GetDefaultObject(): AnimGraphNode_WheelHandler;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimGraphNode_WheelHandler;
	static C(Other: UObject | any): AnimGraphNode_WheelHandler;
}

declare class DirectoryWatcher extends UObject { 
	Added: string[];
	Modified: string[];
	Removed: string[];
	OnChanged: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): DirectoryWatcher;
	static Find(Outer: UObject, ResourceName: string): DirectoryWatcher;
	static GetDefaultObject(): DirectoryWatcher;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DirectoryWatcher;
	Watch(Directory: string): void;
	Unwatch(): void;
	Contains(File: string): boolean;
	static C(Other: UObject | any): DirectoryWatcher;
}

declare class JavascriptContext extends UObject { 
	Paths: string[];
	static Load(ResourceName: string): JavascriptContext;
	static Find(Outer: UObject, ResourceName: string): JavascriptContext;
	static GetDefaultObject(): JavascriptContext;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptContext;
	WriteDTS(Target: string,bIncludingTooltip: boolean): boolean;
	WriteAliases(Target: string): boolean;
	SetContextId(Name: string): void;
	SetAsDebugContext(InPort: number): void;
	RunScript(Script: string,bOutput: boolean): string;
	RunFile(Filename: string): void;
	ResetAsDebugContext(): void;
	RequestV8GarbageCollection(): void;
	ReadScriptFile(Filename: string): string;
	IsDebugContext(): boolean;
	GetScriptFileFullPath(Filename: string): string;
	FindPathFile(TargetRootPath: string,TargetFileName: string,OutFiles?: string[]): {OutFiles: string[]};
	Expose(Name: string,UObject: UObject): void;
	DestroyInspector(): void;
	CreateInspector(Port: number): void;
	static C(Other: UObject | any): JavascriptContext;
}

declare class JavascriptAsset { 
	Name: string;
	Asset: SoftObjectPath;
	clone() : JavascriptAsset;
	static C(Other: UObject | any): JavascriptAsset;
}

declare class JavascriptClassAsset { 
	Name: string;
	Class: UnrealEngineClass;
	clone() : JavascriptClassAsset;
	static C(Other: UObject | any): JavascriptClassAsset;
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
	static Load(ResourceName: string): JavascriptComponent;
	static Find(Outer: UObject, ResourceName: string): JavascriptComponent;
	static GetDefaultObject(): JavascriptComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptComponent;
	ResolveClass(Name: string): UnrealEngineClass;
	ResolveAsset(Name: string,bTryLoad: boolean): UObject;
	Invoke(Name: string): void;
	ForceGC(): void;
	Expose(ExposedAs: string,UObject: UObject): void;
	static C(Other: UObject | any): JavascriptComponent;
}

declare class JavascriptDelegate extends UObject { 
	static Load(ResourceName: string): JavascriptDelegate;
	static Find(Outer: UObject, ResourceName: string): JavascriptDelegate;
	static GetDefaultObject(): JavascriptDelegate;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptDelegate;
	Fire(): void;
	static C(Other: UObject | any): JavascriptDelegate;
}

declare class JavascriptGeneratedClass extends BlueprintGeneratedClass { 
	static Load(ResourceName: string): JavascriptGeneratedClass;
	static Find(Outer: UObject, ResourceName: string): JavascriptGeneratedClass;
	static GetDefaultObject(): JavascriptGeneratedClass;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGeneratedClass;
	static C(Other: UObject | any): JavascriptGeneratedClass;
}

declare class JavascriptGeneratedClass_Native extends BlueprintGeneratedClass { 
	static Load(ResourceName: string): JavascriptGeneratedClass_Native;
	static Find(Outer: UObject, ResourceName: string): JavascriptGeneratedClass_Native;
	static GetDefaultObject(): JavascriptGeneratedClass_Native;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGeneratedClass_Native;
	static C(Other: UObject | any): JavascriptGeneratedClass_Native;
}

declare class JavascriptGeneratedFunction extends UFunction { 
	static Load(ResourceName: string): JavascriptGeneratedFunction;
	static Find(Outer: UObject, ResourceName: string): JavascriptGeneratedFunction;
	static GetDefaultObject(): JavascriptGeneratedFunction;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGeneratedFunction;
	static C(Other: UObject | any): JavascriptGeneratedFunction;
}

declare class JavascriptGlobalDelegates extends UObject { 
	static Load(ResourceName: string): JavascriptGlobalDelegates;
	static Find(Outer: UObject, ResourceName: string): JavascriptGlobalDelegates;
	static GetDefaultObject(): JavascriptGlobalDelegates;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGlobalDelegates;
	UnbindAll(): void;
	Unbind(Key: string): void;
	RedirectorFollowed(PackageName: string,Redirector: UObject): void;
	PreLoadMap(MapName: string): void;
	PreGarbageCollectDelegate(): void;
	PostLoadMapWithWorld(World: World): void;
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
	static C(Other: UObject | any): JavascriptGlobalDelegates;
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
	static C(Other: UObject | any): JavascriptHeapStatistics;
}

declare class JavascriptIsolate extends UObject { 
	static Load(ResourceName: string): JavascriptIsolate;
	static Find(Outer: UObject, ResourceName: string): JavascriptIsolate;
	static GetDefaultObject(): JavascriptIsolate;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptIsolate;
	Init(bIsEditor: boolean): void;
	GetHeapStatistics(Statistics?: JavascriptHeapStatistics): {Statistics: JavascriptHeapStatistics};
	CreateContext(): JavascriptContext;
	static C(Other: UObject | any): JavascriptIsolate;
}

declare class JavascriptStubStruct { 
	clone() : JavascriptStubStruct;
	static C(Other: UObject | any): JavascriptStubStruct;
}

declare class JavascriptFunction { 
	clone() : JavascriptFunction;
	static C(Other: UObject | any): JavascriptFunction;
	CallJS(CustomStruct: JavascriptStubStruct): void;
	static CallJS(UFunction: JavascriptFunction,CustomStruct: JavascriptStubStruct): void;
}

declare class JavascriptStreamableManager { 
	clone() : JavascriptStreamableManager;
	static C(Other: UObject | any): JavascriptStreamableManager;
	IsAsyncLoadComplete(Target: SoftObjectPath): boolean;
	RequestAsyncLoad(TargetsToStream: SoftObjectPath[],DelegateToCall: JavascriptFunction,Priority: number): void;
	SimpleAsyncLoad(Target: SoftObjectPath,Priority: number): void;
	Unload(Target: SoftObjectPath): void;
	static IsAsyncLoadComplete(Manager: JavascriptStreamableManager,Target: SoftObjectPath): boolean;
	static RequestAsyncLoad(Manager: JavascriptStreamableManager,TargetsToStream: SoftObjectPath[],DelegateToCall: JavascriptFunction,Priority: number): void;
	static SimpleAsyncLoad(Manager: JavascriptStreamableManager,Target: SoftObjectPath,Priority: number): void;
	static Unload(Manager: JavascriptStreamableManager,Target: SoftObjectPath): void;
	static CreateStreamableManager(): JavascriptStreamableManager;
}

declare class JavascriptInternetAddr { 
	clone() : JavascriptInternetAddr;
	static C(Other: UObject | any): JavascriptInternetAddr;
	SetIp(ResolvedAddress?: string,bValid?: boolean): {Addr: JavascriptInternetAddr, bValid: boolean};
	SetPort(Port?: number): {Addr: JavascriptInternetAddr};
	static SetIp(Addr?: JavascriptInternetAddr,ResolvedAddress?: string,bValid?: boolean): {Addr: JavascriptInternetAddr, bValid: boolean};
	static SetPort(Addr?: JavascriptInternetAddr,Port?: number): {Addr: JavascriptInternetAddr};
	static CreateInternetAddr(): JavascriptInternetAddr;
}

declare class JavascriptSocket { 
	clone() : JavascriptSocket;
	static C(Other: UObject | any): JavascriptSocket;
	SendMemoryTo(ToAddr?: JavascriptInternetAddr,NumBytes?: number,BytesSent?: number): {Socket: JavascriptSocket, BytesSent: number, $: boolean};
	static SendMemoryTo(Socket?: JavascriptSocket,ToAddr?: JavascriptInternetAddr,NumBytes?: number,BytesSent?: number): {Socket: JavascriptSocket, BytesSent: number, $: boolean};
	static CreateSocket(SocketType: string,Description: string,bForceUDP: boolean): JavascriptSocket;
}

declare type EJavascriptStatDataType = 'Invalid' | 'ST_None' | 'ST_int64' | 'ST_double' | 'ST_FName' | 'ST_Ptr' | 'EJavascriptStatDataType_MAX';
declare var EJavascriptStatDataType : { Invalid:'Invalid',ST_None:'ST_None',ST_int64:'ST_int64',ST_double:'ST_double',ST_FName:'ST_FName',ST_Ptr:'ST_Ptr',EJavascriptStatDataType_MAX:'EJavascriptStatDataType_MAX', };
declare type EJavascriptStatOperation = 'Invalid' | 'SetLongName' | 'AdvanceFrameEventGameThread' | 'AdvanceFrameEventRenderThread' | 'CycleScopeStart' | 'CycleScopeEnd' | 'SpecialMessageMarker' | 'Set' | 'Clear' | 'Add' | 'Subtract' | 'ChildrenStart' | 'ChildrenEnd' | 'Leaf' | 'MaxVal' | 'Memory' | 'EJavascriptStatOperation_MAX';
declare var EJavascriptStatOperation : { Invalid:'Invalid',SetLongName:'SetLongName',AdvanceFrameEventGameThread:'AdvanceFrameEventGameThread',AdvanceFrameEventRenderThread:'AdvanceFrameEventRenderThread',CycleScopeStart:'CycleScopeStart',CycleScopeEnd:'CycleScopeEnd',SpecialMessageMarker:'SpecialMessageMarker',Set:'Set',Clear:'Clear',Add:'Add',Subtract:'Subtract',ChildrenStart:'ChildrenStart',ChildrenEnd:'ChildrenEnd',Leaf:'Leaf',MaxVal:'MaxVal',Memory:'Memory',EJavascriptStatOperation_MAX:'EJavascriptStatOperation_MAX', };
declare class JavascriptStat { 
	clone() : JavascriptStat;
	static C(Other: UObject | any): JavascriptStat;
	AddMessage(InStatOperation: EJavascriptStatOperation): void;
	AddMessage_float(InStatOperation: EJavascriptStatOperation,Value: number,bIsCycle: boolean): void;
	AddMessage_int(InStatOperation: EJavascriptStatOperation,Value: number,bIsCycle: boolean): void;
	static AddMessage(Stat: JavascriptStat,InStatOperation: EJavascriptStatOperation): void;
	static AddMessage_float(Stat: JavascriptStat,InStatOperation: EJavascriptStatOperation,Value: number,bIsCycle: boolean): void;
	static AddMessage_int(Stat: JavascriptStat,InStatOperation: EJavascriptStatOperation,Value: number,bIsCycle: boolean): void;
	static NewStat(InStatName: string,InStatDesc: string,InGroupName: string,InGroupCategory: string,InGroupDesc: string,bDefaultEnable: boolean,bShouldClearEveryFrame: boolean,InStatType: EJavascriptStatDataType,bCycleStat: boolean): JavascriptStat;
}

declare type ELogVerbosity_JS = 'NoLogging' | 'Fatal' | 'Error' | 'Warning' | 'Display' | 'Log' | 'Verbose' | 'VeryVerbose' | 'ELogVerbosity_MAX';
declare var ELogVerbosity_JS : { NoLogging:'NoLogging',Fatal:'Fatal',Error:'Error',Warning:'Warning',Display:'Display',Log:'Log',Verbose:'Verbose',VeryVerbose:'VeryVerbose',ELogVerbosity_MAX:'ELogVerbosity_MAX', };
declare class JavascriptLogCategory { 
	clone() : JavascriptLogCategory;
	static C(Other: UObject | any): JavascriptLogCategory;
	GetCategoryName(): string;
	IsSuppressed(Verbosity: ELogVerbosity_JS): boolean;
	Log(Verbosity: ELogVerbosity_JS,Message: string,Filename: string,LineNumber: number): void;
	static GetCategoryName(Category: JavascriptLogCategory): string;
	static IsSuppressed(Category: JavascriptLogCategory,Verbosity: ELogVerbosity_JS): boolean;
	static Log(Category: JavascriptLogCategory,Verbosity: ELogVerbosity_JS,Message: string,Filename: string,LineNumber: number): void;
	static CreateLogCategory(CategoryName: string,InDefaultVerbosity: ELogVerbosity_JS): JavascriptLogCategory;
}

declare class JavscriptProperty { 
	Type: string;
	Name: string;
	clone() : JavscriptProperty;
	static C(Other: UObject | any): JavscriptProperty;
}

declare class JavascriptProfileNode { 
	clone() : JavascriptProfileNode;
	static C(Other: UObject | any): JavascriptProfileNode;
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

declare class JavascriptLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptLibrary;
	static GetDefaultObject(): JavascriptLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptLibrary;
	static WriteStringToFile(UObject: UObject,Filename: string,Data: string,EncodingOptions: EJavascriptEncodingOptions): boolean;
	static WriteFile(UObject: UObject,Filename: string): boolean;
	static V8_SetIdleTaskBudget(BudgetInSeconds: number): void;
	static V8_SetFlagsFromString(V8Flags: string): void;
	static UnregisterComponent(ActorComponent: ActorComponent): void;
	static Unload(Manager: JavascriptStreamableManager,Target: SoftObjectPath): void;
	static TryLoadByPath(Path: string): UObject;
	static SimpleAsyncLoad(Manager: JavascriptStreamableManager,Target: SoftObjectPath,Priority: number): void;
	static SetRootComponent(Actor: Actor,Component: SceneComponent): void;
	static SetPort(Addr?: JavascriptInternetAddr,Port?: number): {Addr: JavascriptInternetAddr};
	static SetObjectFlags(Obj: UObject,Flags: number): void;
	static SetMobility(SceneComponent: SceneComponent,Type: EComponentMobility): void;
	static SetMobile(SceneComponent: SceneComponent): void;
	static SetIp(Addr?: JavascriptInternetAddr,ResolvedAddress?: string,bValid?: boolean): {Addr: JavascriptInternetAddr, bValid: boolean};
	static SetClientTravel(Engine: Engine,InWorld: World,NextURL: string,InTravelType: ETravelType): void;
	static SetActorFlags(Actor: Actor,Flags: number): void;
	static SendMemoryTo(Socket?: JavascriptSocket,ToAddr?: JavascriptInternetAddr,NumBytes?: number,BytesSent?: number): {Socket: JavascriptSocket, BytesSent: number, $: boolean};
	static SegmentIntersection2D(SegmentStartA: Vector,SegmentEndA: Vector,SegmentStartB: Vector,SegmentEndB: Vector,IntersectionPoint?: Vector): {IntersectionPoint: Vector, $: boolean};
	static ResolveIp(HostName: string,OutIp?: string): {OutIp: string, $: boolean};
	static ReregisterComponent(ActorComponent: ActorComponent): void;
	static ReregisterAllComponents(Actor: Actor): void;
	static RequestAsyncLoad(Manager: JavascriptStreamableManager,TargetsToStream: SoftObjectPath[],DelegateToCall: JavascriptFunction,Priority: number): void;
	static RegisterComponent(ActorComponent: ActorComponent): void;
	static ReadStringFromFile(UObject: UObject,Filename: string): string;
	static ReadFile(UObject: UObject,Filename: string): boolean;
	static ReadDirectory(UObject: UObject,Directory: string,OutItems?: DirectoryItem[]): {OutItems: DirectoryItem[], $: boolean};
	static NewStat(InStatName: string,InStatDesc: string,InGroupName: string,InGroupCategory: string,InGroupDesc: string,bDefaultEnable: boolean,bShouldClearEveryFrame: boolean,InStatType: EJavascriptStatDataType,bCycleStat: boolean): JavascriptStat;
	static MarkRenderStateDirty(Component: ActorComponent): void;
	static MakeDirectory(Path: string,Tree: boolean): boolean;
	static Log(Category: JavascriptLogCategory,Verbosity: ELogVerbosity_JS,Message: string,Filename: string,LineNumber: number): void;
	static LoadPackage(InOuter: Package,PackageName: string): Package;
	static IsSuppressed(Category: JavascriptLogCategory,Verbosity: ELogVerbosity_JS): boolean;
	static IsRegistered(ActorComponent: ActorComponent): boolean;
	static IsPlayInPreview(World: World): boolean;
	static IsPlayInEditor(World: World): boolean;
	static IsPendingKill(InActor: Actor): boolean;
	static IsGeneratedByBlueprint(InClass: UnrealEngineClass): boolean;
	static IsGameWorld(World: World): boolean;
	static IsAsyncLoadComplete(Manager: JavascriptStreamableManager,Target: SoftObjectPath): boolean;
	static HasUndo(Engine: Engine): boolean;
	static HasAnyPackageFlags(Package: Package,Flags: number): boolean;
	static HasAnyFlags(UObject: UObject,Flags: number): boolean;
	static HandleSeamlessTravelPlayer(GameMode: GameModeBase,C?: Controller): {C: Controller};
	static GetSuperClasses(InClass: UnrealEngineClass): UnrealEngineClass[];
	static GetStructProperties(StructName: string,bIncludeSuper: boolean): JavscriptProperty[];
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
	static GetCategoryName(Category: JavascriptLogCategory): string;
	static GetCallUid(UNode: JavascriptProfileNode): number;
	static GetBlueprintGeneratedClassFromPath(Path: string): UnrealEngineClass;
	static GetBlueprintGeneratedClass(Blueprint: Blueprint): UnrealEngineClass;
	static GetBailoutReason(UNode: JavascriptProfileNode): string;
	static GetArchetypePathName(UObject: UObject): string;
	static GetAllActorsOfClassAndTags(WorldContextObject: UObject,ActorClass: UnrealEngineClass,Tags_Accept: string[],Tags_Deny: string[],OutActors?: Actor[]): {OutActors: Actor[]};
	static GenerateNavigation(World: World,NavData: RecastNavMesh): void;
	static FindPackage(InOuter: UObject,PackageName: string): Package;
	static FindObjectWithOuter(Outer: UObject,ClassToLookFor: UnrealEngineClass,NameToLookFor: string): UObject;
	static FileExists(Filename: string): boolean;
	static Duplicate(UObject: UObject,Outer: UObject,Name: string): UObject;
	static DirectoryExists(InDirectory: string): boolean;
	static DeleteFile(Filename: string,ReadOnly: boolean): boolean;
	static DeleteDirectory(Path: string,RequireExists: boolean,Tree: boolean): boolean;
	static CreateStreamableManager(): JavascriptStreamableManager;
	static CreateSocket(SocketType: string,Description: string,bForceUDP: boolean): JavascriptSocket;
	static CreatePackage(Outer: UObject,PackageName: string): Package;
	static CreateLogCategory(CategoryName: string,InDefaultVerbosity: ELogVerbosity_JS): JavascriptLogCategory;
	static CreateInternetAddr(): JavascriptInternetAddr;
	static CreateEnum(Outer: UObject,Name: string,DisplayNames: string[]): Enum;
	static ClipboardPaste(): string;
	static ClipboardCopy(string: string): void;
	static CallJS(UFunction: JavascriptFunction,CustomStruct: JavascriptStubStruct): void;
	static AddMessage_int(Stat: JavascriptStat,InStatOperation: EJavascriptStatOperation,Value: number,bIsCycle: boolean): void;
	static AddMessage_float(Stat: JavascriptStat,InStatOperation: EJavascriptStatOperation,Value: number,bIsCycle: boolean): void;
	static AddMessage(Stat: JavascriptStat,InStatOperation: EJavascriptStatOperation): void;
	static AddDynamicBinding(Outer: UnrealEngineClass,BindingObject: DynamicBlueprintBinding): void;
	static Actor_GetWorld(Actor: Actor): World;
	static C(Other: UObject | any): JavascriptLibrary;
}

declare class JavascriptMemoryObject extends UObject { 
	static Load(ResourceName: string): JavascriptMemoryObject;
	static Find(Outer: UObject, ResourceName: string): JavascriptMemoryObject;
	static GetDefaultObject(): JavascriptMemoryObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMemoryObject;
	static C(Other: UObject | any): JavascriptMemoryObject;
}

declare class JavascriptRef { 
	clone() : JavascriptRef;
	static C(Other: UObject | any): JavascriptRef;
}

declare class JavascriptObject extends UObject { 
	Ref: JavascriptRef;
	Func: JavascriptFunction;
	static Load(ResourceName: string): JavascriptObject;
	static Find(Outer: UObject, ResourceName: string): JavascriptObject;
	static GetDefaultObject(): JavascriptObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptObject;
	static C(Other: UObject | any): JavascriptObject;
}

declare class JavascriptOutputDevice extends UObject { 
	static Load(ResourceName: string): JavascriptOutputDevice;
	static Find(Outer: UObject, ResourceName: string): JavascriptOutputDevice;
	static GetDefaultObject(): JavascriptOutputDevice;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptOutputDevice;
	OnMessage(Message: string,Verbosity: ELogVerbosity_JS,Category: string): void;
	static Log(Category: string,Verbosity: ELogVerbosity_JS,Filename: string,LineNumber: number,Message: string): void;
	Kill(): void;
	static C(Other: UObject | any): JavascriptOutputDevice;
}

declare class JavascriptProcess extends UObject { 
	static Load(ResourceName: string): JavascriptProcess;
	static Find(Outer: UObject, ResourceName: string): JavascriptProcess;
	static GetDefaultObject(): JavascriptProcess;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptProcess;
	WriteToPipe(Message: string,OutWritten?: string): {OutWritten: string, $: boolean};
	Wait(): void;
	Terminate(KillTree: boolean): void;
	static Sleep(Seconds: number): void;
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
	static C(Other: UObject | any): JavascriptProcess;
}

declare class JavascriptProfile extends UObject { 
	static Load(ResourceName: string): JavascriptProfile;
	static Find(Outer: UObject, ResourceName: string): JavascriptProfile;
	static GetDefaultObject(): JavascriptProfile;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptProfile;
	static Stop(Title: string): JavascriptProfile;
	static Start(Title: string,bRecordSamples: boolean): void;
	static SetSamplingInterval(us: number): void;
	static SetIdle(is_idle: boolean): void;
	GetTopDownRoot(): JavascriptProfileNode;
	GetSampleTimestamp(index: number): number;
	GetSamplesCount(): number;
	GetSample(index: number): JavascriptProfileNode;
	static C(Other: UObject | any): JavascriptProfile;
}

declare class JavascriptSemaphore extends UObject { 
	static Load(ResourceName: string): JavascriptSemaphore;
	static Find(Outer: UObject, ResourceName: string): JavascriptSemaphore;
	static GetDefaultObject(): JavascriptSemaphore;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSemaphore;
	Unlock(): void;
	TryLock(NanosecondsToWait: number): boolean;
	Lock(): void;
	Dispose(): void;
	static Create(Name: string,bCreate: boolean,MaxLocks: number): JavascriptSemaphore;
	static C(Other: UObject | any): JavascriptSemaphore;
}

declare class JavascriptSettings extends UObject { 
	V8Flags: string;
	static Load(ResourceName: string): JavascriptSettings;
	static Find(Outer: UObject, ResourceName: string): JavascriptSettings;
	static GetDefaultObject(): JavascriptSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSettings;
	static C(Other: UObject | any): JavascriptSettings;
}

declare class JavascriptSharedMemoryRegion extends JavascriptMemoryObject { 
	static Load(ResourceName: string): JavascriptSharedMemoryRegion;
	static Find(Outer: UObject, ResourceName: string): JavascriptSharedMemoryRegion;
	static GetDefaultObject(): JavascriptSharedMemoryRegion;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSharedMemoryRegion;
	Dispose(): void;
	static Create(Name: string,bCreate: boolean,bRead: boolean,bWrite: boolean,Size: number): JavascriptSharedMemoryRegion;
	static C(Other: UObject | any): JavascriptSharedMemoryRegion;
}

declare class JavascriptAutomatedTestInstance { 
	clone() : JavascriptAutomatedTestInstance;
	static C(Other: UObject | any): JavascriptAutomatedTestInstance;
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
	static C(Other: UObject | any): JavascriptAutomatedTest;
	Create(): JavascriptAutomatedTestInstance;
	static Create(Test: JavascriptAutomatedTest): JavascriptAutomatedTestInstance;
}

declare class JavascriptTestLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptTestLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptTestLibrary;
	static GetDefaultObject(): JavascriptTestLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptTestLibrary;
	static SetContinue(Test: JavascriptAutomatedTestInstance,bInContinue: boolean): void;
	static PushFrameCounter(): void;
	static PopFrameCounter(): void;
	static NewWorld(): World;
	static InitializeActorsForPlay(World: World,URL: URL): void;
	static DestroyWorld(World: World): void;
	static DestroyUObject(UObject: UObject): void;
	static Destroy(Test?: JavascriptAutomatedTestInstance): {Test: JavascriptAutomatedTestInstance};
	static Create(Test: JavascriptAutomatedTest): JavascriptAutomatedTestInstance;
	static ClearExecutionInfo(Test: JavascriptAutomatedTestInstance): void;
	static BeginPlay(World: World): void;
	static AddWarning(Test: JavascriptAutomatedTestInstance,InWarning: string): void;
	static AddLogItem(Test: JavascriptAutomatedTestInstance,InLogItem: string): void;
	static AddError(Test: JavascriptAutomatedTestInstance,InError: string): void;
	static AddAnalyticsItem(Test: JavascriptAutomatedTestInstance,InAnalyticsItem: string): void;
	static C(Other: UObject | any): JavascriptTestLibrary;
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
	static Load(ResourceName: string): JavascriptComboButton;
	static Find(Outer: UObject, ResourceName: string): JavascriptComboButton;
	static GetDefaultObject(): JavascriptComboButton;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptComboButton;
	SetIsOpen(InIsOpen: boolean,bFocusMenu: boolean): void;
	static C(Other: UObject | any): JavascriptComboButton;
}

declare class JavascriptSlateIcon { 
	StyleSetName: string;
	StyleName: string;
	SmallStyleName: string;
	clone() : JavascriptSlateIcon;
	static C(Other: UObject | any): JavascriptSlateIcon;
}

declare class JavascriptComboButtonContext extends UObject { 
	OnGetLabel: UnrealEngineDelegate<() => string>;
	OnGetTooltip: UnrealEngineDelegate<() => string>;
	OnGetIcon: UnrealEngineDelegate<() => JavascriptSlateIcon>;
	OnGetWidget: UnrealEngineDelegate<() => JavascriptSlateWidget>;
	OnCanExecute: UnrealEngineDelegate<() => boolean>;
	static Load(ResourceName: string): JavascriptComboButtonContext;
	static Find(Outer: UObject, ResourceName: string): JavascriptComboButtonContext;
	static GetDefaultObject(): JavascriptComboButtonContext;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptComboButtonContext;
	static C(Other: UObject | any): JavascriptComboButtonContext;
}

declare class JavascriptGameViewport extends ContentWidget { 
	BackgroundColor: LinearColor;
	static Load(ResourceName: string): JavascriptGameViewport;
	static Find(Outer: UObject, ResourceName: string): JavascriptGameViewport;
	static GetDefaultObject(): JavascriptGameViewport;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGameViewport;
	Spawn(ActorClass: UnrealEngineClass): Actor;
	SetViewRotation(Rotation: Rotator): void;
	SetViewLocation(Location: Vector): void;
	GetViewRotation(): Rotator;
	GetViewportWorld(): World;
	GetViewLocation(): Vector;
	static C(Other: UObject | any): JavascriptGameViewport;
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
	static C(Other: UObject | any): TableColumnHeaderStyle;
}

declare class SplitterStyle extends SlateWidgetStyle { 
	HandleNormalBrush: SlateBrush;
	HandleHighlightBrush: SlateBrush;
	clone() : SplitterStyle;
	static C(Other: UObject | any): SplitterStyle;
}

declare class HeaderRowStyle extends SlateWidgetStyle { 
	ColumnStyle: TableColumnHeaderStyle;
	LastColumnStyle: TableColumnHeaderStyle;
	ColumnSplitterStyle: SplitterStyle;
	BackgroundBrush: SlateBrush;
	ForegroundColor: SlateColor;
	clone() : HeaderRowStyle;
	static C(Other: UObject | any): HeaderRowStyle;
}

declare class JavascriptColumn { 
	ID: string;
	Width: number;
	Widget: Widget;
	clone() : JavascriptColumn;
	static C(Other: UObject | any): JavascriptColumn;
}

declare class JavascriptTreeView extends TableViewBase { 
	OnGenerateRowEvent: UnrealEngineDelegate<(UObject: UObject, ID: string, Instance: JavascriptTreeView) => Widget>;
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
	static Load(ResourceName: string): JavascriptTreeView;
	static Find(Outer: UObject, ResourceName: string): JavascriptTreeView;
	static GetDefaultObject(): JavascriptTreeView;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptTreeView;
	SetSingleExpandedItem(InItem: UObject): void;
	SetSelection(SoleSelectedItem: UObject): void;
	SetItemExpansion(InItem: UObject,InShouldExpandItem: boolean): void;
	RequestTreeRefresh(): void;
	OnSelectionChanged(UObject: UObject,Type: ESelectInfo): void;
	OnDoubleClick(UObject: UObject): void;
	IsItemExpanded(InItem: UObject): boolean;
	GetSelectedItems(OutItems?: UObject[]): {OutItems: UObject[]};
	static C(Other: UObject | any): JavascriptTreeView;
}

declare class JavascriptListView extends JavascriptTreeView { 
	ItemHeight: number;
	static Load(ResourceName: string): JavascriptListView;
	static Find(Outer: UObject, ResourceName: string): JavascriptListView;
	static GetDefaultObject(): JavascriptListView;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptListView;
	SetSelection(SoleSelectedItem: UObject): void;
	RequestListRefresh(): void;
	OnClick(UObject: UObject): void;
	GetSelectedItems(OutItems?: UObject[]): {OutItems: UObject[]};
	static C(Other: UObject | any): JavascriptListView;
}

declare class JavascriptMenuContext extends UObject { 
	Description: string;
	Tooltip: string;
	Icon: JavascriptSlateIcon;
	OnCanExecute: UnrealEngineDelegate<() => boolean>;
	OnExecute: UnrealEngineDelegate<() => void>;
	static Load(ResourceName: string): JavascriptMenuContext;
	static Find(Outer: UObject, ResourceName: string): JavascriptMenuContext;
	static GetDefaultObject(): JavascriptMenuContext;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMenuContext;
	static C(Other: UObject | any): JavascriptMenuContext;
}

declare type EJavasrciptUserInterfaceActionType = 'None' | 'Button' | 'ToggleButton' | 'RadioButton' | 'Check' | 'CollapsedButton' | 'EJavasrciptUserInterfaceActionType_MAX';
declare var EJavasrciptUserInterfaceActionType : { None:'None',Button:'Button',ToggleButton:'ToggleButton',RadioButton:'RadioButton',Check:'Check',CollapsedButton:'CollapsedButton',EJavasrciptUserInterfaceActionType_MAX:'EJavasrciptUserInterfaceActionType_MAX', };
declare class JavascriptUICommandInfo { 
	clone() : JavascriptUICommandInfo;
	static C(Other: UObject | any): JavascriptUICommandInfo;
	static GenericCommand(What: string): JavascriptUICommandInfo;
}

declare class JavascriptUICommand { 
	ID: string;
	FriendlyName: string;
	Description: string;
	DefaultChord: InputChord;
	ActionType: EJavasrciptUserInterfaceActionType;
	CommandInfo: JavascriptUICommandInfo;
	clone() : JavascriptUICommand;
	static C(Other: UObject | any): JavascriptUICommand;
}

declare class JavascriptBindingContext { 
	clone() : JavascriptBindingContext;
	static C(Other: UObject | any): JavascriptBindingContext;
	Destroy(): void;
	UI_COMMAND_Function(Command: JavascriptUICommand): JavascriptUICommandInfo;
	static Destroy(Context: JavascriptBindingContext): void;
	static UI_COMMAND_Function(This: JavascriptBindingContext,Command: JavascriptUICommand): JavascriptUICommandInfo;
	static NewBindingContext(InContextName: string,InContextDesc: string,InContextParent: string,InStyleSetName: string): JavascriptBindingContext;
}

declare type EJavascriptExtensionHook = 'Before' | 'After' | 'First' | 'EJavascriptExtensionHook_MAX';
declare var EJavascriptExtensionHook : { Before:'Before',After:'After',First:'First',EJavascriptExtensionHook_MAX:'EJavascriptExtensionHook_MAX', };
declare class JavascriptUICommandList { 
	clone() : JavascriptUICommandList;
	static C(Other: UObject | any): JavascriptUICommandList;
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
	static GetLevelEditorActions(): JavascriptUICommandList;
	static CreateUICommandList(): JavascriptUICommandList;
}

declare class JavascriptExtensionBase { 
	clone() : JavascriptExtensionBase;
	static C(Other: UObject | any): JavascriptExtensionBase;
}

declare class JavascriptMenuBuilder { 
	clone() : JavascriptMenuBuilder;
	static C(Other: UObject | any): JavascriptMenuBuilder;
	AddComboButton(UObject?: JavascriptComboButtonContext): {Builder: JavascriptMenuBuilder};
	AddMenuEntry(UObject?: JavascriptMenuContext): {Builder: JavascriptMenuBuilder};
	AddPullDownMenu(InMenuLabel?: string,InToolTip?: string,InPullDownMenu?: JavascriptFunction,InExtensionHook?: string,InTutorialHighlightName?: string): {MenuBuilder: JavascriptMenuBuilder};
	AddSeparator(): {Builder: JavascriptMenuBuilder};
	AddToolBarButton(CommandInfo?: JavascriptUICommandInfo): {Builder: JavascriptMenuBuilder};
	AddWidget(Widget?: Widget,Label?: string,bNoIndent?: boolean,InTutorialHighlightName?: string,bSearchable?: boolean): {Builder: JavascriptMenuBuilder};
	BeginSection(InExtensionHook?: string): {Builder: JavascriptMenuBuilder};
	EndSection(): {Builder: JavascriptMenuBuilder};
	PopCommandList(): {Builder: JavascriptMenuBuilder};
	PushCommandList(List?: JavascriptUICommandList): {Builder: JavascriptMenuBuilder};
	static AddComboButton(Builder?: JavascriptMenuBuilder,UObject?: JavascriptComboButtonContext): {Builder: JavascriptMenuBuilder};
	static AddMenuEntry(Builder?: JavascriptMenuBuilder,UObject?: JavascriptMenuContext): {Builder: JavascriptMenuBuilder};
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
	static C(Other: UObject | any): JavascriptExtender;
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
	static Load(ResourceName: string): JavascriptMenuLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptMenuLibrary;
	static GetDefaultObject(): JavascriptMenuLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMenuLibrary;
	static UI_COMMAND_Function(This: JavascriptBindingContext,Command: JavascriptUICommand): JavascriptUICommandInfo;
	static RemoveExtension(Extender: JavascriptExtender,Extension: JavascriptExtensionBase): void;
	static PushCommandList(Builder?: JavascriptMenuBuilder,List?: JavascriptUICommandList): {Builder: JavascriptMenuBuilder};
	static ProcessCommandBindings_PointerEvent(CommandList: JavascriptUICommandList,InMouseEvent: UPointerEvent): boolean;
	static ProcessCommandBindings_KeyEvent(CommandList: JavascriptUICommandList,InKeyEvent: KeyEvent): boolean;
	static PopCommandList(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static NewBindingContext(InContextName: string,InContextDesc: string,InContextParent: string,InStyleSetName: string): JavascriptBindingContext;
	static GenericCommand(What: string): JavascriptUICommandInfo;
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
	static AddMenuEntry(Builder?: JavascriptMenuBuilder,UObject?: JavascriptMenuContext): {Builder: JavascriptMenuBuilder};
	static AddMenubarExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddComboButton(Builder?: JavascriptMenuBuilder,UObject?: JavascriptComboButtonContext): {Builder: JavascriptMenuBuilder};
	static C(Other: UObject | any): JavascriptMenuLibrary;
}

declare class JavascriptMultiBox extends Widget { 
	OnHook: UnrealEngineDelegate<(ID: string, Self: JavascriptMultiBox, CurrentBuilder: JavascriptMenuBuilder) => void>;
	static Load(ResourceName: string): JavascriptMultiBox;
	static Find(Outer: UObject, ResourceName: string): JavascriptMultiBox;
	static GetDefaultObject(): JavascriptMultiBox;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMultiBox;
	static Bind(Builder: JavascriptMenuBuilder): void;
	AddSubMenu(Builder?: JavascriptMenuBuilder,ID?: string,Label?: string,Tooltip?: string,bInOpenSubMenuOnClick?: boolean): {Builder: JavascriptMenuBuilder};
	AddPullDownMenu(Builder?: JavascriptMenuBuilder,ID?: string,Label?: string,Tooltip?: string): {Builder: JavascriptMenuBuilder};
	static C(Other: UObject | any): JavascriptMultiBox;
}

declare class JavascriptSlateTextRun { 
	clone() : JavascriptSlateTextRun;
	static C(Other: UObject | any): JavascriptSlateTextRun;
}

declare class JavascriptTextModel extends UObject { 
	static Load(ResourceName: string): JavascriptTextModel;
	static Find(Outer: UObject, ResourceName: string): JavascriptTextModel;
	static GetDefaultObject(): JavascriptTextModel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptTextModel;
	SetString(string: string): void;
	GetString(): string;
	CreateRun(MessageTextStyle: TextBlockStyle,BeginIndex: number,EndIndex: number): JavascriptSlateTextRun;
	static C(Other: UObject | any): JavascriptTextModel;
}

declare class JavascriptTextLayout { 
	clone() : JavascriptTextLayout;
	static C(Other: UObject | any): JavascriptTextLayout;
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
	bAlwaysShowScrollbars: boolean;
	static Load(ResourceName: string): JavascriptMultiLineEditableTextBox;
	static Find(Outer: UObject, ResourceName: string): JavascriptMultiLineEditableTextBox;
	static GetDefaultObject(): JavascriptMultiLineEditableTextBox;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMultiLineEditableTextBox;
	ScrollTo(Line: number,Offset: number): void;
	Refresh(): void;
	GoTo(Line: number,Offset: number): void;
	static C(Other: UObject | any): JavascriptMultiLineEditableTextBox;
}

declare class JavascriptRichTextBlockHyperlinkDecorator extends RichTextBlockDecorator { 
	HyperlinkId: string;
	OnClick: UnrealEngineMulticastDelegate<(Self: JavascriptRichTextBlockHyperlinkDecorator) => void>;
	static Load(ResourceName: string): JavascriptRichTextBlockHyperlinkDecorator;
	static Find(Outer: UObject, ResourceName: string): JavascriptRichTextBlockHyperlinkDecorator;
	static GetDefaultObject(): JavascriptRichTextBlockHyperlinkDecorator;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptRichTextBlockHyperlinkDecorator;
	GetMetadata(Key: string): string;
	static C(Other: UObject | any): JavascriptRichTextBlockHyperlinkDecorator;
}

declare class JavascriptSearchBox extends Widget { 
	OnTextChanged: UnrealEngineMulticastDelegate<(text: string) => void>;
	OnTextCommitted: UnrealEngineMulticastDelegate<(text: string, CommitMethod: ETextCommit) => void>;
	text: string;
	TextDelegate: UnrealEngineDelegate<() => string>;
	HintText: string;
	HintTextDelegate: UnrealEngineDelegate<() => string>;
	static Load(ResourceName: string): JavascriptSearchBox;
	static Find(Outer: UObject, ResourceName: string): JavascriptSearchBox;
	static GetDefaultObject(): JavascriptSearchBox;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSearchBox;
	SetText(InText: string): void;
	SetHintText(InHintText: string): void;
	static C(Other: UObject | any): JavascriptSearchBox;
}

declare class JavascriptStyleSet { 
	StyleSetName: string;
	clone() : JavascriptStyleSet;
	static C(Other: UObject | any): JavascriptStyleSet;
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
	static Load(ResourceName: string): JavascriptStyleSetLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptStyleSetLibrary;
	static GetDefaultObject(): JavascriptStyleSetLibrary;
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
	static C(Other: UObject | any): JavascriptStyleSetLibrary;
}

declare class JavascriptTextBlock extends TextBlock { 
	HighlightText: string;
	HighlightTextDelegate: UnrealEngineDelegate<() => string>;
	static Load(ResourceName: string): JavascriptTextBlock;
	static Find(Outer: UObject, ResourceName: string): JavascriptTextBlock;
	static GetDefaultObject(): JavascriptTextBlock;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptTextBlock;
	SetHighlightText(InHighlightText: string): void;
	static C(Other: UObject | any): JavascriptTextBlock;
}

declare class JavascriptTileView extends TileView { 
	JavascriptContext: JavascriptContext;
	static Load(ResourceName: string): JavascriptTileView;
	static Find(Outer: UObject, ResourceName: string): JavascriptTileView;
	static GetDefaultObject(): JavascriptTileView;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptTileView;
	OnSelectionChanged(UObject: UObject,Type: ESelectInfo): void;
	OnDoubleClick(UObject: UObject): void;
	OnClick(UObject: UObject): void;
	static C(Other: UObject | any): JavascriptTileView;
}

declare class JavascriptUICommands extends UObject { 
	OnExecuteAction: UnrealEngineDelegate<(ID: string) => void>;
	OnCanExecuteAction: UnrealEngineDelegate<(ID: string) => boolean>;
	OnIsActionChecked: UnrealEngineDelegate<(ID: string) => boolean>;
	OnIsActionButtonVisible: UnrealEngineDelegate<(ID: string) => boolean>;
	Commands: JavascriptUICommand[];
	ContextName: string;
	ContextDesc: string;
	ContextNameParent: string;
	StyleSetName: string;
	CommandInfos: JavascriptUICommandInfo[];
	BindingContext: JavascriptBindingContext;
	static Load(ResourceName: string): JavascriptUICommands;
	static Find(Outer: UObject, ResourceName: string): JavascriptUICommands;
	static GetDefaultObject(): JavascriptUICommands;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUICommands;
	Uninitialize(): void;
	Unbind(List: JavascriptUICommandList): void;
	Refresh(): void;
	Initialize(): void;
	GetAction(ID: string): JavascriptUICommandInfo;
	Discard(): void;
	Commit(): void;
	static BroadcastCommandsChanged(InContextName: string): void;
	Bind(List: JavascriptUICommandList): void;
	static C(Other: UObject | any): JavascriptUICommands;
}

declare class JavascriptUMGBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptUMGBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptUMGBlueprintLibrary;
	static GetDefaultObject(): JavascriptUMGBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUMGBlueprintLibrary;
	static SlateColor_UseSubduedForeground(): SlateColor;
	static SlateColor_UseForeground(): SlateColor;
	static GetLineLength(TargetTextLayout: JavascriptTextLayout): number;
	static GetAsText(TextLayout: JavascriptTextLayout): string;
	static DrawSpaceSpline(Context?: PaintContext,InStart?: Vector2D,InStartDir?: Vector2D,InEnd?: Vector2D,InEndDir?: Vector2D,InThickness?: number,InTint?: LinearColor): {Context: PaintContext};
	static ClearLines(TextLayout?: JavascriptTextLayout): {TextLayout: JavascriptTextLayout};
	static AddLine(TextLayout?: JavascriptTextLayout,Model?: JavascriptTextModel,Runs?: JavascriptSlateTextRun[]): {TextLayout: JavascriptTextLayout};
	static C(Other: UObject | any): JavascriptUMGBlueprintLibrary;
}

declare class JavascriptSlateStyle { 
	clone() : JavascriptSlateStyle;
	static C(Other: UObject | any): JavascriptSlateStyle;
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
	static Load(ResourceName: string): JavascriptUMGLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptUMGLibrary;
	static GetDefaultObject(): JavascriptUMGLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUMGLibrary;
	static Unregister(StyleSet: JavascriptSlateStyle): void;
	static TakeWidget(Widget: Widget): JavascriptSlateWidget;
	static SetCoreContentRoot(StyleSet: JavascriptSlateStyle,InCoreContentRootDir: string): void;
	static SetContentRoot(StyleSet: JavascriptSlateStyle,InContentRootDir: string): void;
	static SetContent(TargetWidget: NativeWidgetHost,SlateWidget: JavascriptSlateWidget): Widget;
	static RootToCoreContentDir(StyleSet: JavascriptSlateStyle,RelativePath: string): string;
	static RootToContentDir(StyleSet: JavascriptSlateStyle,RelativePath: string): string;
	static Register(StyleSet: JavascriptSlateStyle): void;
	static GenerateDynamicImageResource(InDynamicBrushName: string): Vector2D;
	static CreateSlateStyle(InStyleSetName: string): JavascriptSlateStyle;
	static AddWindowAsNativeChild(NewWindow: JavascriptSlateWidget,RootWindow: JavascriptSlateWidget): void;
	static AddWindow(NewWindow: JavascriptSlateWidget,bShowImmediately: boolean): void;
	static AddSound(StyleSet: JavascriptSlateStyle,PropertyName: string,Sound: SlateSound): void;
	static AddImageBrush(StyleSet: JavascriptSlateStyle,PropertyName: string,InImageName: string,InImageSize: Vector2D,InTint: LinearColor,InTiling: ESlateBrushTileType,InImageType: ESlateBrushImageType): void;
	static AddFontInfo(StyleSet: JavascriptSlateStyle,PropertyName: string,FontInfo: SlateFontInfo): void;
	static AddBoxBrush(StyleSet: JavascriptSlateStyle,PropertyName: string,InImageName: string,InMargin: Margin,InColorAndOpacity: LinearColor,InImageType: ESlateBrushImageType): void;
	static AddBorderBrush(StyleSet: JavascriptSlateStyle,PropertyName: string,InImageName: string,InMargin: Margin,InColorAndOpacity: LinearColor,InImageType: ESlateBrushImageType): void;
	static C(Other: UObject | any): JavascriptUMGLibrary;
}

declare class JavascriptWidget extends UserWidget { 
	JavascriptContext: JavascriptContext;
	OnInputActionEvent: UnrealEngineMulticastDelegate<(ActionName: string) => void>;
	OnReleaseActionEvent: UnrealEngineMulticastDelegate<(ActionName: string) => void>;
	OnInputAxisEvent: UnrealEngineMulticastDelegate<(Axis: number, AxisName: string) => void>;
	OnDestroy: UnrealEngineMulticastDelegate<(bReleaseChildren: boolean) => void>;
	ContentSlot: PanelSlot;
	static Load(ResourceName: string): JavascriptWidget;
	static Find(Outer: UObject, ResourceName: string): JavascriptWidget;
	static GetDefaultObject(): JavascriptWidget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWidget;
	SetRootWidget(Widget: Widget): void;
	RemoveChild(): boolean;
	OnReleaseInputActionByName(ActionName: string): void;
	OnListenForInputAxis(AxisName: string,EventType: EInputEvent,bConsume: boolean): void;
	OnListenForInputAction(ActionName: string,EventType: EInputEvent,bConsume: boolean): void;
	OnInputAxisByName(Axis: number,ActionName: string): void;
	OnInputActionByName(ActionName: string): void;
	static HasValidCachedWidget(Widget: Widget): boolean;
	static CallSynchronizeProperties(WidgetOrSlot: Visual): void;
	AddChild(Content: Widget): PanelSlot;
	static C(Other: UObject | any): JavascriptWidget;
}

declare type EJavascriptWindowType = 'Normal' | 'Menu' | 'ToolTip' | 'Notification' | 'CursorDecorator' | 'EJavascriptWindowType_MAX';
declare var EJavascriptWindowType : { Normal:'Normal',Menu:'Menu',ToolTip:'ToolTip',Notification:'Notification',CursorDecorator:'CursorDecorator',EJavascriptWindowType_MAX:'EJavascriptWindowType_MAX', };
declare class WindowStyle extends SlateWidgetStyle { 
	MinimizeButtonStyle: ButtonStyle;
	MaximizeButtonStyle: ButtonStyle;
	RestoreButtonStyle: ButtonStyle;
	CloseButtonStyle: ButtonStyle;
	TitleTextStyle: TextBlockStyle;
	ActiveTitleBrush: SlateBrush;
	InactiveTitleBrush: SlateBrush;
	FlashTitleBrush: SlateBrush;
	BackgroundColor: SlateColor;
	OutlineBrush: SlateBrush;
	OutlineColor: SlateColor;
	BorderBrush: SlateBrush;
	BackgroundBrush: SlateBrush;
	ChildBackgroundBrush: SlateBrush;
	clone() : WindowStyle;
	static C(Other: UObject | any): WindowStyle;
}

declare type EJavascriptAutoCenter = 'None' | 'PrimaryWorkArea' | 'PreferredWorkArea' | 'EJavascriptAutoCenter_MAX';
declare var EJavascriptAutoCenter : { None:'None',PrimaryWorkArea:'PrimaryWorkArea',PreferredWorkArea:'PreferredWorkArea',EJavascriptAutoCenter_MAX:'EJavascriptAutoCenter_MAX', };
declare type EJavascriptWindowTransparency = 'None' | 'PerWindow' | 'EJavascriptWindowTransparency_MAX';
declare var EJavascriptWindowTransparency : { None:'None',PerWindow:'PerWindow',EJavascriptWindowTransparency_MAX:'EJavascriptWindowTransparency_MAX', };
declare type EJavascriptSizingRule = 'FixedSize' | 'Autosized' | 'UserSized' | 'EJavascriptSizingRule_MAX';
declare var EJavascriptSizingRule : { FixedSize:'FixedSize',Autosized:'Autosized',UserSized:'UserSized',EJavascriptSizingRule_MAX:'EJavascriptSizingRule_MAX', };
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
	static Load(ResourceName: string): JavascriptWindow;
	static Find(Outer: UObject, ResourceName: string): JavascriptWindow;
	static GetDefaultObject(): JavascriptWindow;
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
	static C(Other: UObject | any): JavascriptWindow;
}

declare type EJavascriptHttpRequestStatus = 'NotStarted' | 'Processing' | 'Failed' | 'Succeeded' | 'EJavascriptHttpRequestStatus_MAX';
declare var EJavascriptHttpRequestStatus : { NotStarted:'NotStarted',Processing:'Processing',Failed:'Failed',Succeeded:'Succeeded',EJavascriptHttpRequestStatus_MAX:'EJavascriptHttpRequestStatus_MAX', };
declare class JavascriptHttpRequest extends UObject { 
	OnComplete: UnrealEngineDelegate<(successful: boolean) => void>;
	OnProgress: UnrealEngineDelegate<(sent: number, recv: number) => void>;
	static Load(ResourceName: string): JavascriptHttpRequest;
	static Find(Outer: UObject, ResourceName: string): JavascriptHttpRequest;
	static GetDefaultObject(): JavascriptHttpRequest;
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
	static C(Other: UObject | any): JavascriptHttpRequest;
}

declare class JavascriptWebSocket extends UObject { 
	OnReceived: UnrealEngineMulticastDelegate<() => void>;
	OnConnected: UnrealEngineMulticastDelegate<() => void>;
	OnError: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): JavascriptWebSocket;
	static Find(Outer: UObject, ResourceName: string): JavascriptWebSocket;
	static GetDefaultObject(): JavascriptWebSocket;
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
	static C(Other: UObject | any): JavascriptWebSocket;
}

declare class JavascriptWebSocketServer extends UObject { 
	OnConnected: UnrealEngineMulticastDelegate<(WebSocket: JavascriptWebSocket) => void>;
	Connections: JavascriptWebSocket[];
	static Load(ResourceName: string): JavascriptWebSocketServer;
	static Find(Outer: UObject, ResourceName: string): JavascriptWebSocketServer;
	static GetDefaultObject(): JavascriptWebSocketServer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWebSocketServer;
	Tick(): void;
	Info(): string;
	Dispose(): void;
	static Create(Port: number): JavascriptWebSocketServer;
	static C(Other: UObject | any): JavascriptWebSocketServer;
}

declare class DemoGameModeBase extends GameModeBase { 
	static GetDefaultObject(): DemoGameModeBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DemoGameModeBase;
	static C(Other: UObject | any): DemoGameModeBase;
}

declare type EMeshPaintColorViewMode = 'Normal' | 'RGB' | 'Alpha' | 'Red' | 'Green' | 'Blue' | 'EMeshPaintColorViewMode_MAX';
declare var EMeshPaintColorViewMode : { Normal:'Normal',RGB:'RGB',Alpha:'Alpha',Red:'Red',Green:'Green',Blue:'Blue',EMeshPaintColorViewMode_MAX:'EMeshPaintColorViewMode_MAX', };
declare class PaintBrushSettings extends UObject { 
	BrushRadius: number;
	BrushStrength: number;
	BrushFalloffAmount: number;
	bEnableFlow: boolean;
	bOnlyFrontFacingTriangles: boolean;
	ColorViewMode: EMeshPaintColorViewMode;
	static Load(ResourceName: string): PaintBrushSettings;
	static Find(Outer: UObject, ResourceName: string): PaintBrushSettings;
	static GetDefaultObject(): PaintBrushSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaintBrushSettings;
	static C(Other: UObject | any): PaintBrushSettings;
}

declare class MeshPaintSettings extends UObject { 
	VertexPreviewSize: number;
	static Load(ResourceName: string): MeshPaintSettings;
	static Find(Outer: UObject, ResourceName: string): MeshPaintSettings;
	static GetDefaultObject(): MeshPaintSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshPaintSettings;
	static C(Other: UObject | any): MeshPaintSettings;
}

declare class VertexColorImportOptions extends UObject { 
	UVIndex: number;
	LODIndex: number;
	bRed: boolean;
	bBlue: boolean;
	bGreen: boolean;
	bAlpha: boolean;
	bImportToInstance: boolean;
	bCanImportToInstance: boolean;
	static Load(ResourceName: string): VertexColorImportOptions;
	static Find(Outer: UObject, ResourceName: string): VertexColorImportOptions;
	static GetDefaultObject(): VertexColorImportOptions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VertexColorImportOptions;
	static C(Other: UObject | any): VertexColorImportOptions;
}

declare class FlipbookEditorSettings extends UObject { 
	BackgroundColor: Color;
	bShowGridByDefault: boolean;
	static Load(ResourceName: string): FlipbookEditorSettings;
	static Find(Outer: UObject, ResourceName: string): FlipbookEditorSettings;
	static GetDefaultObject(): FlipbookEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FlipbookEditorSettings;
	static C(Other: UObject | any): FlipbookEditorSettings;
}

declare type ESpriteExtractMode = 'Auto' | 'Grid' | 'ESpriteExtractMode_MAX';
declare var ESpriteExtractMode : { Auto:'Auto',Grid:'Grid',ESpriteExtractMode_MAX:'ESpriteExtractMode_MAX', };
declare class PaperExtractSpritesSettings extends UObject { 
	SpriteExtractMode: ESpriteExtractMode;
	OutlineColor: LinearColor;
	ViewportTextureTint: LinearColor;
	BackgroundColor: LinearColor;
	NamingTemplate: string;
	NamingStartIndex: number;
	static Load(ResourceName: string): PaperExtractSpritesSettings;
	static Find(Outer: UObject, ResourceName: string): PaperExtractSpritesSettings;
	static GetDefaultObject(): PaperExtractSpritesSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperExtractSpritesSettings;
	static C(Other: UObject | any): PaperExtractSpritesSettings;
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
	static Load(ResourceName: string): PaperExtractSpriteGridSettings;
	static Find(Outer: UObject, ResourceName: string): PaperExtractSpriteGridSettings;
	static GetDefaultObject(): PaperExtractSpriteGridSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperExtractSpriteGridSettings;
	static C(Other: UObject | any): PaperExtractSpriteGridSettings;
}

declare class PaperFlipbookActorFactory extends ActorFactory { 
	static Load(ResourceName: string): PaperFlipbookActorFactory;
	static Find(Outer: UObject, ResourceName: string): PaperFlipbookActorFactory;
	static GetDefaultObject(): PaperFlipbookActorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookActorFactory;
	static C(Other: UObject | any): PaperFlipbookActorFactory;
}

declare class PaperFlipbookFactory extends Factory { 
	static Load(ResourceName: string): PaperFlipbookFactory;
	static Find(Outer: UObject, ResourceName: string): PaperFlipbookFactory;
	static GetDefaultObject(): PaperFlipbookFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookFactory;
	static C(Other: UObject | any): PaperFlipbookFactory;
}

declare class PaperSpriteThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	static Load(ResourceName: string): PaperSpriteThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteThumbnailRenderer;
	static GetDefaultObject(): PaperSpriteThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteThumbnailRenderer;
	static C(Other: UObject | any): PaperSpriteThumbnailRenderer;
}

declare class PaperFlipbookThumbnailRenderer extends PaperSpriteThumbnailRenderer { 
	static Load(ResourceName: string): PaperFlipbookThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): PaperFlipbookThumbnailRenderer;
	static GetDefaultObject(): PaperFlipbookThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookThumbnailRenderer;
	static C(Other: UObject | any): PaperFlipbookThumbnailRenderer;
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
	UnlitDefaultMaskedMaterialName: SoftObjectPath;
	UnlitDefaultTranslucentMaterialName: SoftObjectPath;
	UnlitDefaultOpaqueMaterialName: SoftObjectPath;
	LitDefaultMaskedMaterialName: SoftObjectPath;
	LitDefaultTranslucentMaterialName: SoftObjectPath;
	LitDefaultOpaqueMaterialName: SoftObjectPath;
	static Load(ResourceName: string): PaperImporterSettings;
	static Find(Outer: UObject, ResourceName: string): PaperImporterSettings;
	static GetDefaultObject(): PaperImporterSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperImporterSettings;
	static C(Other: UObject | any): PaperImporterSettings;
}

declare class PaperSpriteActorFactory extends ActorFactory { 
	static Load(ResourceName: string): PaperSpriteActorFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteActorFactory;
	static GetDefaultObject(): PaperSpriteActorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteActorFactory;
	static C(Other: UObject | any): PaperSpriteActorFactory;
}

declare class PaperSpriteAtlasFactory extends Factory { 
	static Load(ResourceName: string): PaperSpriteAtlasFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteAtlasFactory;
	static GetDefaultObject(): PaperSpriteAtlasFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteAtlasFactory;
	static C(Other: UObject | any): PaperSpriteAtlasFactory;
}

declare class PaperSpriteFactory extends Factory { 
	static Load(ResourceName: string): PaperSpriteFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteFactory;
	static GetDefaultObject(): PaperSpriteFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteFactory;
	static C(Other: UObject | any): PaperSpriteFactory;
}

declare class PaperTileMapFactory extends Factory { 
	static Load(ResourceName: string): PaperTileMapFactory;
	static Find(Outer: UObject, ResourceName: string): PaperTileMapFactory;
	static GetDefaultObject(): PaperTileMapFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMapFactory;
	static C(Other: UObject | any): PaperTileMapFactory;
}

declare class PaperTileMapPromotionFactory extends Factory { 
	AssetToRename: PaperTileMap;
	static Load(ResourceName: string): PaperTileMapPromotionFactory;
	static Find(Outer: UObject, ResourceName: string): PaperTileMapPromotionFactory;
	static GetDefaultObject(): PaperTileMapPromotionFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMapPromotionFactory;
	static C(Other: UObject | any): PaperTileMapPromotionFactory;
}

declare class PaperTileSetFactory extends Factory { 
	static Load(ResourceName: string): PaperTileSetFactory;
	static Find(Outer: UObject, ResourceName: string): PaperTileSetFactory;
	static GetDefaultObject(): PaperTileSetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileSetFactory;
	static C(Other: UObject | any): PaperTileSetFactory;
}

declare class PaperTileSetThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	static Load(ResourceName: string): PaperTileSetThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): PaperTileSetThumbnailRenderer;
	static GetDefaultObject(): PaperTileSetThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileSetThumbnailRenderer;
	static C(Other: UObject | any): PaperTileSetThumbnailRenderer;
}

declare class SpriteEditorSettings extends UObject { 
	BackgroundColor: Color;
	bShowGridByDefault: boolean;
	static Load(ResourceName: string): SpriteEditorSettings;
	static Find(Outer: UObject, ResourceName: string): SpriteEditorSettings;
	static GetDefaultObject(): SpriteEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpriteEditorSettings;
	static C(Other: UObject | any): SpriteEditorSettings;
}

declare class TerrainSplineActorFactory extends ActorFactory { 
	static Load(ResourceName: string): TerrainSplineActorFactory;
	static Find(Outer: UObject, ResourceName: string): TerrainSplineActorFactory;
	static GetDefaultObject(): TerrainSplineActorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TerrainSplineActorFactory;
	static C(Other: UObject | any): TerrainSplineActorFactory;
}

declare class TileMapActorFactory extends ActorFactory { 
	static Load(ResourceName: string): TileMapActorFactory;
	static Find(Outer: UObject, ResourceName: string): TileMapActorFactory;
	static GetDefaultObject(): TileMapActorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileMapActorFactory;
	static C(Other: UObject | any): TileMapActorFactory;
}

declare class TileSetImportMapping { 
	SourceName: string;
	ImportedTileSet: any;
	ImportedTexture: any;
	clone() : TileSetImportMapping;
	static C(Other: UObject | any): TileSetImportMapping;
}

declare class TileMapAssetImportData extends AssetImportData { 
	TileSetMap: TileSetImportMapping[];
	static Load(ResourceName: string): TileMapAssetImportData;
	static Find(Outer: UObject, ResourceName: string): TileMapAssetImportData;
	static GetDefaultObject(): TileMapAssetImportData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileMapAssetImportData;
	static C(Other: UObject | any): TileMapAssetImportData;
}

declare class TileMapEditorSettings extends UObject { 
	DefaultBackgroundColor: Color;
	bShowGridByDefault: boolean;
	static Load(ResourceName: string): TileMapEditorSettings;
	static Find(Outer: UObject, ResourceName: string): TileMapEditorSettings;
	static GetDefaultObject(): TileMapEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileMapEditorSettings;
	static C(Other: UObject | any): TileMapEditorSettings;
}

declare class TileSetEditorSettings extends UObject { 
	DefaultBackgroundColor: Color;
	bShowGridByDefault: boolean;
	ExtrusionAmount: number;
	bPadToPowerOf2: boolean;
	bFillWithTransparentBlack: boolean;
	static Load(ResourceName: string): TileSetEditorSettings;
	static Find(Outer: UObject, ResourceName: string): TileSetEditorSettings;
	static GetDefaultObject(): TileSetEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileSetEditorSettings;
	static C(Other: UObject | any): TileSetEditorSettings;
}

declare class TileSheetPaddingFactory extends Factory { 
	SourceTileSet: PaperTileSet;
	ExtrusionAmount: number;
	bPadToPowerOf2: boolean;
	bFillWithTransparentBlack: boolean;
	static Load(ResourceName: string): TileSheetPaddingFactory;
	static Find(Outer: UObject, ResourceName: string): TileSheetPaddingFactory;
	static GetDefaultObject(): TileSheetPaddingFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileSheetPaddingFactory;
	static C(Other: UObject | any): TileSheetPaddingFactory;
}

declare class PaperSpriteSheet extends UObject { 
	SpriteNames: string[];
	Sprites: any[];
	TextureName: string;
	Texture: Texture2D;
	NormalMapTextureName: string;
	NormalMapTexture: Texture2D;
	AssetImportData: AssetImportData;
	static Load(ResourceName: string): PaperSpriteSheet;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteSheet;
	static GetDefaultObject(): PaperSpriteSheet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteSheet;
	static C(Other: UObject | any): PaperSpriteSheet;
}

declare class PaperSpriteSheetImportFactory extends Factory { 
	static Load(ResourceName: string): PaperSpriteSheetImportFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteSheetImportFactory;
	static GetDefaultObject(): PaperSpriteSheetImportFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteSheetImportFactory;
	static C(Other: UObject | any): PaperSpriteSheetImportFactory;
}

declare class PaperSpriteSheetReimportFactory extends PaperSpriteSheetImportFactory { 
	static Load(ResourceName: string): PaperSpriteSheetReimportFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteSheetReimportFactory;
	static GetDefaultObject(): PaperSpriteSheetReimportFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteSheetReimportFactory;
	static C(Other: UObject | any): PaperSpriteSheetReimportFactory;
}

declare class PaperTiledImporterFactory extends Factory { 
	static Load(ResourceName: string): PaperTiledImporterFactory;
	static Find(Outer: UObject, ResourceName: string): PaperTiledImporterFactory;
	static GetDefaultObject(): PaperTiledImporterFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTiledImporterFactory;
	static C(Other: UObject | any): PaperTiledImporterFactory;
}

declare class LightPropagationVolumeBlendableFactory extends Factory { 
	static Load(ResourceName: string): LightPropagationVolumeBlendableFactory;
	static Find(Outer: UObject, ResourceName: string): LightPropagationVolumeBlendableFactory;
	static GetDefaultObject(): LightPropagationVolumeBlendableFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LightPropagationVolumeBlendableFactory;
	static C(Other: UObject | any): LightPropagationVolumeBlendableFactory;
}

declare class MyPluginStruct { 
	TestString: string;
	clone() : MyPluginStruct;
	static C(Other: UObject | any): MyPluginStruct;
}

declare class MyPluginObject extends UObject { 
	MyStruct: MyPluginStruct;
	static Load(ResourceName: string): MyPluginObject;
	static Find(Outer: UObject, ResourceName: string): MyPluginObject;
	static GetDefaultObject(): MyPluginObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MyPluginObject;
	static C(Other: UObject | any): MyPluginObject;
}

declare class CryptoKeysCommandlet extends Commandlet { 
	static Load(ResourceName: string): CryptoKeysCommandlet;
	static Find(Outer: UObject, ResourceName: string): CryptoKeysCommandlet;
	static GetDefaultObject(): CryptoKeysCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CryptoKeysCommandlet;
	static C(Other: UObject | any): CryptoKeysCommandlet;
}

declare class CryptoKeysSettings extends UObject { 
	EncryptionKey: string;
	bEncryptPakIniFiles: boolean;
	bEncryptPakIndex: boolean;
	bEncryptUAssetFiles: boolean;
	bEncryptAllAssetFiles: boolean;
	SigningPublicExponent: string;
	SigningModulus: string;
	SigningPrivateExponent: string;
	bEnablePakSigning: boolean;
	static Load(ResourceName: string): CryptoKeysSettings;
	static Find(Outer: UObject, ResourceName: string): CryptoKeysSettings;
	static GetDefaultObject(): CryptoKeysSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CryptoKeysSettings;
	static C(Other: UObject | any): CryptoKeysSettings;
}

declare class NewPluginDescriptorData extends UObject { 
	CreatedBy: string;
	CreatedByURL: string;
	Description: string;
	bIsBetaVersion: boolean;
	static Load(ResourceName: string): NewPluginDescriptorData;
	static Find(Outer: UObject, ResourceName: string): NewPluginDescriptorData;
	static GetDefaultObject(): NewPluginDescriptorData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NewPluginDescriptorData;
	static C(Other: UObject | any): NewPluginDescriptorData;
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
	static Load(ResourceName: string): PluginMetadataObject;
	static Find(Outer: UObject, ResourceName: string): PluginMetadataObject;
	static GetDefaultObject(): PluginMetadataObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PluginMetadataObject;
	static C(Other: UObject | any): PluginMetadataObject;
}

declare class SpeedTreeImportFactory extends Factory { 
	static Load(ResourceName: string): SpeedTreeImportFactory;
	static Find(Outer: UObject, ResourceName: string): SpeedTreeImportFactory;
	static GetDefaultObject(): SpeedTreeImportFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpeedTreeImportFactory;
	static C(Other: UObject | any): SpeedTreeImportFactory;
}

declare class ReimportSpeedTreeFactory extends SpeedTreeImportFactory { 
	static Load(ResourceName: string): ReimportSpeedTreeFactory;
	static Find(Outer: UObject, ResourceName: string): ReimportSpeedTreeFactory;
	static GetDefaultObject(): ReimportSpeedTreeFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ReimportSpeedTreeFactory;
	static C(Other: UObject | any): ReimportSpeedTreeFactory;
}

declare type EImportGeometryType = 'IGT_3D' | 'IGT_Billboards' | 'IGT_Both' | 'IGT_MAX';
declare var EImportGeometryType : { IGT_3D:'IGT_3D',IGT_Billboards:'IGT_Billboards',IGT_Both:'IGT_Both',IGT_MAX:'IGT_MAX', };
declare type EImportLODType = 'ILT_PaintedFoliage' | 'ILT_IndividualActors' | 'ILT_MAX';
declare var EImportLODType : { ILT_PaintedFoliage:'ILT_PaintedFoliage',ILT_IndividualActors:'ILT_IndividualActors',ILT_MAX:'ILT_MAX', };
declare class SpeedTreeImportData extends AssetImportData { 
	TreeScale: number;
	ImportGeometryType: EImportGeometryType;
	LODType: EImportLODType;
	IncludeCollision: boolean;
	MakeMaterialsCheck: boolean;
	IncludeNormalMapCheck: boolean;
	IncludeDetailMapCheck: boolean;
	IncludeSpecularMapCheck: boolean;
	IncludeBranchSeamSmoothing: boolean;
	IncludeSpeedTreeAO: boolean;
	IncludeColorAdjustment: boolean;
	IncludeSubsurface: boolean;
	IncludeVertexProcessingCheck: boolean;
	IncludeWindCheck: boolean;
	IncludeSmoothLODCheck: boolean;
	static Load(ResourceName: string): SpeedTreeImportData;
	static Find(Outer: UObject, ResourceName: string): SpeedTreeImportData;
	static GetDefaultObject(): SpeedTreeImportData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpeedTreeImportData;
	static C(Other: UObject | any): SpeedTreeImportData;
}

declare type EDatasmithAreaLightActorShape = 'Rectangle' | 'Disc' | 'Sphere' | 'Cylinder' | 'EDatasmithAreaLightActorShape_MAX';
declare var EDatasmithAreaLightActorShape : { Rectangle:'Rectangle',Disc:'Disc',Sphere:'Sphere',Cylinder:'Cylinder',EDatasmithAreaLightActorShape_MAX:'EDatasmithAreaLightActorShape_MAX', };
declare class DatasmithAreaLightActor extends Actor { 
	LightShape: EDatasmithAreaLightActorShape;
	Dimensions: Vector2D;
	Color: LinearColor;
	Intensity: number;
	static GetDefaultObject(): DatasmithAreaLightActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DatasmithAreaLightActor;
	static C(Other: UObject | any): DatasmithAreaLightActor;
}

declare class GeometryCacheTrack extends UObject { 
	static Load(ResourceName: string): GeometryCacheTrack;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrack;
	static GetDefaultObject(): GeometryCacheTrack;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrack;
	static C(Other: UObject | any): GeometryCacheTrack;
}

declare class GeometryCache extends UObject { 
	AssetImportData: AssetImportData;
	ThumbnailInfo: ThumbnailInfo;
	Materials: MaterialInterface[];
	Tracks: GeometryCacheTrack[];
	static Load(ResourceName: string): GeometryCache;
	static Find(Outer: UObject, ResourceName: string): GeometryCache;
	static GetDefaultObject(): GeometryCache;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCache;
	static C(Other: UObject | any): GeometryCache;
}

declare class GeometryCacheComponent extends MeshComponent { 
	GeometryCache: GeometryCache;
	bRunning: boolean;
	bLooping: boolean;
	StartTimeOffset: number;
	PlaybackSpeed: number;
	NumTracks: number;
	ElapsedTime: number;
	static Load(ResourceName: string): GeometryCacheComponent;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheComponent;
	static GetDefaultObject(): GeometryCacheComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheComponent;
	Stop(): void;
	SetStartTimeOffset(NewStartTimeOffset: number): void;
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
	GetStartTimeOffset(): number;
	GetPlaybackSpeed(): number;
	static C(Other: UObject | any): GeometryCacheComponent;
}

declare class GeometryCacheActor extends Actor { 
	GeometryCacheComponent: GeometryCacheComponent;
	static GetDefaultObject(): GeometryCacheActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheActor;
	GetGeometryCacheComponent(): GeometryCacheComponent;
	static C(Other: UObject | any): GeometryCacheActor;
}

declare class GeometryCacheMeshData { 
	clone() : GeometryCacheMeshData;
	static C(Other: UObject | any): GeometryCacheMeshData;
}

declare class GeometryCacheTrack_FlipbookAnimation extends GeometryCacheTrack { 
	NumMeshSamples: any;
	static Load(ResourceName: string): GeometryCacheTrack_FlipbookAnimation;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrack_FlipbookAnimation;
	static GetDefaultObject(): GeometryCacheTrack_FlipbookAnimation;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrack_FlipbookAnimation;
	AddMeshSample(MeshData: GeometryCacheMeshData,SampleTime: number): void;
	static C(Other: UObject | any): GeometryCacheTrack_FlipbookAnimation;
}

declare class GeometryCacheTrack_TransformAnimation extends GeometryCacheTrack { 
	static Load(ResourceName: string): GeometryCacheTrack_TransformAnimation;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrack_TransformAnimation;
	static GetDefaultObject(): GeometryCacheTrack_TransformAnimation;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrack_TransformAnimation;
	SetMesh(NewMeshData: GeometryCacheMeshData): void;
	static C(Other: UObject | any): GeometryCacheTrack_TransformAnimation;
}

declare class GeometryCacheTrack_TransformGroupAnimation extends GeometryCacheTrack { 
	static Load(ResourceName: string): GeometryCacheTrack_TransformGroupAnimation;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrack_TransformGroupAnimation;
	static GetDefaultObject(): GeometryCacheTrack_TransformGroupAnimation;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrack_TransformGroupAnimation;
	SetMesh(NewMeshData: GeometryCacheMeshData): void;
	static C(Other: UObject | any): GeometryCacheTrack_TransformGroupAnimation;
}

declare class AbcAssetImportData extends AssetImportData { 
	TrackNames: string[];
	static Load(ResourceName: string): AbcAssetImportData;
	static Find(Outer: UObject, ResourceName: string): AbcAssetImportData;
	static GetDefaultObject(): AbcAssetImportData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbcAssetImportData;
	static C(Other: UObject | any): AbcAssetImportData;
}

declare type EAlembicImportType = 'StaticMesh' | 'GeometryCache' | 'Skeletal' | 'EAlembicImportType_MAX';
declare var EAlembicImportType : { StaticMesh:'StaticMesh',GeometryCache:'GeometryCache',Skeletal:'Skeletal',EAlembicImportType_MAX:'EAlembicImportType_MAX', };
declare type EAlembicSamplingType = 'PerFrame' | 'PerXFrames' | 'PerTimeStep' | 'EAlembicSamplingType_MAX';
declare var EAlembicSamplingType : { PerFrame:'PerFrame',PerXFrames:'PerXFrames',PerTimeStep:'PerTimeStep',EAlembicSamplingType_MAX:'EAlembicSamplingType_MAX', };
declare class AbcSamplingSettings { 
	SamplingType: EAlembicSamplingType;
	FrameSteps: any;
	TimeSteps: number;
	FrameStart: any;
	FrameEnd: any;
	bSkipEmpty: boolean;
	clone() : AbcSamplingSettings;
	static C(Other: UObject | any): AbcSamplingSettings;
}

declare class AbcNormalGenerationSettings { 
	bForceOneSmoothingGroupPerObject: boolean;
	HardEdgeAngleThreshold: number;
	bRecomputeNormals: boolean;
	bIgnoreDegenerateTriangles: boolean;
	clone() : AbcNormalGenerationSettings;
	static C(Other: UObject | any): AbcNormalGenerationSettings;
}

declare type EBaseCalculationType = 'PercentageBased' | 'FixedNumber' | 'EBaseCalculationType_MAX';
declare var EBaseCalculationType : { PercentageBased:'PercentageBased',FixedNumber:'FixedNumber',EBaseCalculationType_MAX:'EBaseCalculationType_MAX', };
declare class AbcCompressionSettings { 
	bMergeMeshes: boolean;
	bBakeMatrixAnimation: boolean;
	BaseCalculationType: EBaseCalculationType;
	PercentageOfTotalBases: number;
	MaxNumberOfBases: number;
	MinimumNumberOfVertexInfluencePercentage: number;
	clone() : AbcCompressionSettings;
	static C(Other: UObject | any): AbcCompressionSettings;
}

declare class AbcMaterialSettings { 
	bCreateMaterials: boolean;
	bFindMaterials: boolean;
	clone() : AbcMaterialSettings;
	static C(Other: UObject | any): AbcMaterialSettings;
}

declare class AbcStaticMeshSettings { 
	bMergeMeshes: boolean;
	bPropagateMatrixTransformations: boolean;
	clone() : AbcStaticMeshSettings;
	static C(Other: UObject | any): AbcStaticMeshSettings;
}

declare type EAbcConversionPreset = 'Maya' | 'Max' | 'Custom' | 'EAbcConversionPreset_MAX';
declare var EAbcConversionPreset : { Maya:'Maya',Max:'Max',Custom:'Custom',EAbcConversionPreset_MAX:'EAbcConversionPreset_MAX', };
declare class AbcConversionSettings { 
	Preset: EAbcConversionPreset;
	bFlipU: boolean;
	bFlipV: boolean;
	Scale: Vector;
	Rotation: Vector;
	clone() : AbcConversionSettings;
	static C(Other: UObject | any): AbcConversionSettings;
}

declare class AbcImportSettings extends UObject { 
	ImportType: EAlembicImportType;
	SamplingSettings: AbcSamplingSettings;
	NormalGenerationSettings: AbcNormalGenerationSettings;
	CompressionSettings: AbcCompressionSettings;
	MaterialSettings: AbcMaterialSettings;
	StaticMeshSettings: AbcStaticMeshSettings;
	ConversionSettings: AbcConversionSettings;
	static Load(ResourceName: string): AbcImportSettings;
	static Find(Outer: UObject, ResourceName: string): AbcImportSettings;
	static GetDefaultObject(): AbcImportSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbcImportSettings;
	static C(Other: UObject | any): AbcImportSettings;
}

declare class AlembicTestCommandlet extends Commandlet { 
	static Load(ResourceName: string): AlembicTestCommandlet;
	static Find(Outer: UObject, ResourceName: string): AlembicTestCommandlet;
	static GetDefaultObject(): AlembicTestCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AlembicTestCommandlet;
	static C(Other: UObject | any): AlembicTestCommandlet;
}

declare class AlembicImportFactory extends Factory { 
	ImportSettings: AbcImportSettings;
	bShowOption: boolean;
	static Load(ResourceName: string): AlembicImportFactory;
	static Find(Outer: UObject, ResourceName: string): AlembicImportFactory;
	static GetDefaultObject(): AlembicImportFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AlembicImportFactory;
	static C(Other: UObject | any): AlembicImportFactory;
}

declare class ActorFactoryGeometryCache extends ActorFactory { 
	static Load(ResourceName: string): ActorFactoryGeometryCache;
	static Find(Outer: UObject, ResourceName: string): ActorFactoryGeometryCache;
	static GetDefaultObject(): ActorFactoryGeometryCache;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorFactoryGeometryCache;
	static C(Other: UObject | any): ActorFactoryGeometryCache;
}

declare class GeometryCacheThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	static Load(ResourceName: string): GeometryCacheThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheThumbnailRenderer;
	static GetDefaultObject(): GeometryCacheThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheThumbnailRenderer;
	static C(Other: UObject | any): GeometryCacheThumbnailRenderer;
}

declare class WebSocketConnection extends NetConnection { 
	static Load(ResourceName: string): WebSocketConnection;
	static Find(Outer: UObject, ResourceName: string): WebSocketConnection;
	static GetDefaultObject(): WebSocketConnection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WebSocketConnection;
	static C(Other: UObject | any): WebSocketConnection;
}

declare class WebSocketNetDriver extends NetDriver { 
	WebSocketPort: number;
	static Load(ResourceName: string): WebSocketNetDriver;
	static Find(Outer: UObject, ResourceName: string): WebSocketNetDriver;
	static GetDefaultObject(): WebSocketNetDriver;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WebSocketNetDriver;
	static C(Other: UObject | any): WebSocketNetDriver;
}

declare class ImgMediaSettings extends UObject { 
	DefaultFps: number;
	CacheBehindPercentage: number;
	CacheSizeGB: number;
	CacheThreads: number;
	CacheThreadStackSizeKB: number;
	ExrDecoderThreads: any;
	DefaultProxy: string;
	UseDefaultProxy: boolean;
	static Load(ResourceName: string): ImgMediaSettings;
	static Find(Outer: UObject, ResourceName: string): ImgMediaSettings;
	static GetDefaultObject(): ImgMediaSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ImgMediaSettings;
	static C(Other: UObject | any): ImgMediaSettings;
}

declare class ImgMediaSource extends BaseMediaSource { 
	FramesPerSecondOverride: number;
	ProxyOverride: string;
	SequencePath: DirectoryPath;
	static Load(ResourceName: string): ImgMediaSource;
	static Find(Outer: UObject, ResourceName: string): ImgMediaSource;
	static GetDefaultObject(): ImgMediaSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ImgMediaSource;
	SetSequencePath(Path: string): void;
	GetSequencePath(): string;
	GetProxies(OutProxies?: string[]): {OutProxies: string[]};
	static C(Other: UObject | any): ImgMediaSource;
}

declare class DropTimecode { 
	Hours: number;
	Minutes: number;
	Seconds: number;
	Frame: number;
	Drop: number;
	FrameRate: number;
	Clock: number;
	Color: number;
	Forward: number;
	NewFrame: number;
	clone() : DropTimecode;
	static C(Other: UObject | any): DropTimecode;
	Conv_DropTimecodeToString(): string;
	static Conv_DropTimecodeToString(InTimecode: DropTimecode): string;
}

declare class LinearTimecodeComponent extends SceneComponent { 
	MediaPlayer: MediaPlayer;
	DropTimecode: DropTimecode;
	OnTimecodeChange: UnrealEngineMulticastDelegate<(Timecode: DropTimecode) => void>;
	static Load(ResourceName: string): LinearTimecodeComponent;
	static Find(Outer: UObject, ResourceName: string): LinearTimecodeComponent;
	static GetDefaultObject(): LinearTimecodeComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LinearTimecodeComponent;
	static SetDropTimecodeFrameNumber(Timecode: DropTimecode,FrameNumber: number,OutTimecode?: DropTimecode): {OutTimecode: DropTimecode};
	static GetDropTimeCodeFrameNumber(Timecode: DropTimecode,FrameNumber?: number): {FrameNumber: number};
	GetDropFrameNumber(): number;
	static C(Other: UObject | any): LinearTimecodeComponent;
}

declare class DropTimecodeToStringConversion extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): DropTimecodeToStringConversion;
	static Find(Outer: UObject, ResourceName: string): DropTimecodeToStringConversion;
	static GetDefaultObject(): DropTimecodeToStringConversion;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DropTimecodeToStringConversion;
	static Conv_DropTimecodeToString(InTimecode: DropTimecode): string;
	static C(Other: UObject | any): DropTimecodeToStringConversion;
}

declare class MediaPlaneParameters { 
	Material: MaterialInterface;
	TextureParameterName: string;
	bFillScreen: boolean;
	FillScreenAmount: Vector2D;
	FixedSize: Vector2D;
	RenderTexture: Texture;
	DynamicMaterial: MaterialInstanceDynamic;
	MediaTexture: Texture;
	clone() : MediaPlaneParameters;
	static C(Other: UObject | any): MediaPlaneParameters;
}

declare class MediaPlaneFrustumComponent extends PrimitiveComponent { 
	static Load(ResourceName: string): MediaPlaneFrustumComponent;
	static Find(Outer: UObject, ResourceName: string): MediaPlaneFrustumComponent;
	static GetDefaultObject(): MediaPlaneFrustumComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlaneFrustumComponent;
	static C(Other: UObject | any): MediaPlaneFrustumComponent;
}

declare class MediaPlaneComponent extends PrimitiveComponent { 
	Plane: MediaPlaneParameters;
	EditorFrustum: MediaPlaneFrustumComponent;
	static Load(ResourceName: string): MediaPlaneComponent;
	static Find(Outer: UObject, ResourceName: string): MediaPlaneComponent;
	static GetDefaultObject(): MediaPlaneComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlaneComponent;
	SetMediaPlane(Plane: MediaPlaneParameters): void;
	OnMediaTextureChanged(): void;
	GetPlane(): MediaPlaneParameters;
	static C(Other: UObject | any): MediaPlaneComponent;
}

declare class MediaPlane extends Actor { 
	MediaPlane: MediaPlaneComponent;
	static GetDefaultObject(): MediaPlane;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MediaPlane;
	static C(Other: UObject | any): MediaPlane;
}

declare class MovieSceneMediaSection extends MovieSceneSection { 
	Proxy: string;
	MediaSoundComponent: MediaSoundComponent;
	MediaTexture: MediaTexture;
	MediaSource: MediaSource;
	ThumbnailReferenceOffset: number;
	static Load(ResourceName: string): MovieSceneMediaSection;
	static Find(Outer: UObject, ResourceName: string): MovieSceneMediaSection;
	static GetDefaultObject(): MovieSceneMediaSection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneMediaSection;
	static C(Other: UObject | any): MovieSceneMediaSection;
}

declare class MovieSceneMediaTrack extends MovieSceneNameableTrack { 
	MediaSections: MovieSceneSection[];
	static Load(ResourceName: string): MovieSceneMediaTrack;
	static Find(Outer: UObject, ResourceName: string): MovieSceneMediaTrack;
	static GetDefaultObject(): MovieSceneMediaTrack;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneMediaTrack;
	static C(Other: UObject | any): MovieSceneMediaTrack;
}

declare class UnitTestBase extends UObject { 
	static Load(ResourceName: string): UnitTestBase;
	static Find(Outer: UObject, ResourceName: string): UnitTestBase;
	static GetDefaultObject(): UnitTestBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitTestBase;
	static C(Other: UObject | any): UnitTestBase;
}

declare class UnitTask extends UObject { 
	static Load(ResourceName: string): UnitTask;
	static Find(Outer: UObject, ResourceName: string): UnitTask;
	static GetDefaultObject(): UnitTask;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitTask;
	static C(Other: UObject | any): UnitTask;
}

declare type EUnitTestVerification = 'Unverified' | 'VerifiedNotFixed' | 'VerifiedFixed' | 'VerifiedNeedsUpdate' | 'VerifiedUnreliable' | 'EUnitTestVerification_MAX';
declare var EUnitTestVerification : { Unverified:'Unverified',VerifiedNotFixed:'VerifiedNotFixed',VerifiedFixed:'VerifiedFixed',VerifiedNeedsUpdate:'VerifiedNeedsUpdate',VerifiedUnreliable:'VerifiedUnreliable',EUnitTestVerification_MAX:'EUnitTestVerification_MAX', };
declare class UnitTest extends UnitTestBase { 
	PeakMemoryUsage: any;
	TimeToPeakMem: number;
	LastExecutionTime: number;
	UnitTasks: UnitTask[];
	VerificationState: EUnitTestVerification;
	static Load(ResourceName: string): UnitTest;
	static Find(Outer: UObject, ResourceName: string): UnitTest;
	static GetDefaultObject(): UnitTest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitTest;
	static C(Other: UObject | any): UnitTest;
}

declare class ProcessUnitTest extends UnitTest { 
	static Load(ResourceName: string): ProcessUnitTest;
	static Find(Outer: UObject, ResourceName: string): ProcessUnitTest;
	static GetDefaultObject(): ProcessUnitTest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ProcessUnitTest;
	static C(Other: UObject | any): ProcessUnitTest;
}

declare class MinimalClient extends UObject { 
	static Load(ResourceName: string): MinimalClient;
	static Find(Outer: UObject, ResourceName: string): MinimalClient;
	static GetDefaultObject(): MinimalClient;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MinimalClient;
	static C(Other: UObject | any): MinimalClient;
}

declare class ClientUnitTest extends ProcessUnitTest { 
	MinClient: MinimalClient;
	static Load(ResourceName: string): ClientUnitTest;
	static Find(Outer: UObject, ResourceName: string): ClientUnitTest;
	static GetDefaultObject(): ClientUnitTest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClientUnitTest;
	static C(Other: UObject | any): ClientUnitTest;
}

declare class IPClient extends ClientUnitTest { 
	static Load(ResourceName: string): IPClient;
	static Find(Outer: UObject, ResourceName: string): IPClient;
	static GetDefaultObject(): IPClient;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): IPClient;
	static C(Other: UObject | any): IPClient;
}

declare class HTML5Client extends IPClient { 
	static Load(ResourceName: string): HTML5Client;
	static Find(Outer: UObject, ResourceName: string): HTML5Client;
	static GetDefaultObject(): HTML5Client;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HTML5Client;
	static C(Other: UObject | any): HTML5Client;
}

declare class NUTActor extends Actor { 
	TempDelegate: UnrealEngineDelegate<(InNUTActor: NUTActor) => void>;
	static GetDefaultObject(): NUTActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NUTActor;
	Wait(Seconds: any): void;
	UnitTravel(Dest: string): void;
	UnitSeamlessTravel(Dest: string): void;
	ServerReceiveText(InText: string): void;
	ServerExecute(InDelegate: string): void;
	ServerClientStillAlive(): void;
	ServerClientPing(): void;
	ServerAdmin(Command: string): void;
	NetMulticastPing(): void;
	NetFlush(): void;
	Admin(Command: string): void;
	static C(Other: UObject | any): NUTActor;
}

declare class SteamClient extends IPClient { 
	static Load(ResourceName: string): SteamClient;
	static Find(Outer: UObject, ResourceName: string): SteamClient;
	static GetDefaultObject(): SteamClient;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SteamClient;
	static C(Other: UObject | any): SteamClient;
}

declare class UnitTestActorChannel extends ActorChannel { 
	static Load(ResourceName: string): UnitTestActorChannel;
	static Find(Outer: UObject, ResourceName: string): UnitTestActorChannel;
	static GetDefaultObject(): UnitTestActorChannel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitTestActorChannel;
	static C(Other: UObject | any): UnitTestActorChannel;
}

declare class UnitTestChannel extends Channel { 
	static Load(ResourceName: string): UnitTestChannel;
	static Find(Outer: UObject, ResourceName: string): UnitTestChannel;
	static GetDefaultObject(): UnitTestChannel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitTestChannel;
	static C(Other: UObject | any): UnitTestChannel;
}

declare class UnitTestCommandlet extends Commandlet { 
	static Load(ResourceName: string): UnitTestCommandlet;
	static Find(Outer: UObject, ResourceName: string): UnitTestCommandlet;
	static GetDefaultObject(): UnitTestCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitTestCommandlet;
	static C(Other: UObject | any): UnitTestCommandlet;
}

declare class UnitTestManager extends UObject { 
	bCapUnitTestCount: boolean;
	MaxUnitTestCount: number;
	bCapUnitTestMemory: boolean;
	MaxMemoryPercent: number;
	AutoCloseMemoryPercent: number;
	MaxAutoCloseCount: number;
	UnitTestSessionCount: any;
	PendingUnitTests: UnrealEngineClass[];
	ActiveUnitTests: UnitTest[];
	FinishedUnitTests: UnitTest[];
	static Load(ResourceName: string): UnitTestManager;
	static Find(Outer: UObject, ResourceName: string): UnitTestManager;
	static GetDefaultObject(): UnitTestManager;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitTestManager;
	static C(Other: UObject | any): UnitTestManager;
}

declare class UnitTestPackageMap extends PackageMapClient { 
	static Load(ResourceName: string): UnitTestPackageMap;
	static Find(Outer: UObject, ResourceName: string): UnitTestPackageMap;
	static GetDefaultObject(): UnitTestPackageMap;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitTestPackageMap;
	static C(Other: UObject | any): UnitTestPackageMap;
}

declare class VMReflection extends UnitTest { 
	static Load(ResourceName: string): VMReflection;
	static Find(Outer: UObject, ResourceName: string): VMReflection;
	static GetDefaultObject(): VMReflection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VMReflection;
	static C(Other: UObject | any): VMReflection;
}

declare class VMTestClassA extends UObject { 
	AObjectRef: UObject;
	ByteProp: number;
	UInt16Prop: any;
	UInt32Prop: any;
	UInt64Prop: any;
	Int8Prop: any;
	Int16Prop: any;
	Int32Prop: number;
	Int64Prop: any;
	FloatProp: number;
	DoubleProp: any;
	bBoolPropA: boolean;
	bBoolPropB: boolean;
	bBoolPropC: boolean;
	bBoolPropD: boolean;
	bBoolPropE: boolean;
	NameProp: string;
	StringProp: string;
	TextProp: string;
	BytePropArray: number;
	ObjectPropArray: UObject;
	DynBytePropArray: number[];
	DynBoolPropArray: boolean[];
	DynObjectPropArray: UObject[];
	DynNamePropArray: string[];
	DynDoublePropArray: any[];
	DynFloatPropArray: number[];
	DynInt16PropArray: any[];
	DynInt64PropArray: any[];
	DynInt8PropArray: any[];
	DynIntPropArray: number[];
	DynUInt16PropArray: any[];
	DynUIntPropArray: any[];
	DynUInt64PropArray: any[];
	DynStringPropArray: string[];
	DynTextPropArray: string[];
	DynClassPropArray: UnrealEngineClass[];
	DynPawnPropArray: Pawn[];
	StructProp: Vector;
	StructPropArray: Vector;
	DynStructPropArray: Vector[];
	static Load(ResourceName: string): VMTestClassA;
	static Find(Outer: UObject, ResourceName: string): VMTestClassA;
	static GetDefaultObject(): VMTestClassA;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VMTestClassA;
	static C(Other: UObject | any): VMTestClassA;
}

declare class VMTestClassB extends UObject { 
	BObjectRef: UObject;
	static Load(ResourceName: string): VMTestClassB;
	static Find(Outer: UObject, ResourceName: string): VMTestClassB;
	static GetDefaultObject(): VMTestClassB;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VMTestClassB;
	static C(Other: UObject | any): VMTestClassB;
}

declare class FTextCrash extends ClientUnitTest { 
	static Load(ResourceName: string): FTextCrash;
	static Find(Outer: UObject, ResourceName: string): FTextCrash;
	static GetDefaultObject(): FTextCrash;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FTextCrash;
	static C(Other: UObject | any): FTextCrash;
}

declare class NetBitsTest extends UnitTest { 
	static Load(ResourceName: string): NetBitsTest;
	static Find(Outer: UObject, ResourceName: string): NetBitsTest;
	static GetDefaultObject(): NetBitsTest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NetBitsTest;
	static C(Other: UObject | any): NetBitsTest;
}

declare class UTT61_DebugReplicateData extends ClientUnitTest { 
	static Load(ResourceName: string): UTT61_DebugReplicateData;
	static Find(Outer: UObject, ResourceName: string): UTT61_DebugReplicateData;
	static GetDefaultObject(): UTT61_DebugReplicateData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UTT61_DebugReplicateData;
	static C(Other: UObject | any): UTT61_DebugReplicateData;
}

declare class AndroidPermissionCallbackProxy extends UObject { 
	OnPermissionsGrantedDynamicDelegate: UnrealEngineMulticastDelegate<(Permissions: string[], GrantResults: boolean[]) => void>;
	static Load(ResourceName: string): AndroidPermissionCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): AndroidPermissionCallbackProxy;
	static GetDefaultObject(): AndroidPermissionCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidPermissionCallbackProxy;
	static C(Other: UObject | any): AndroidPermissionCallbackProxy;
}

declare class AndroidPermissionFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): AndroidPermissionFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): AndroidPermissionFunctionLibrary;
	static GetDefaultObject(): AndroidPermissionFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidPermissionFunctionLibrary;
	static CheckPermission(permission: string): boolean;
	static AcquirePermissions(Permissions: string[]): AndroidPermissionCallbackProxy;
	static C(Other: UObject | any): AndroidPermissionFunctionLibrary;
}

declare class ArchVisCharacter extends Character { 
	LookUpAxisName: string;
	LookUpAtRateAxisName: string;
	TurnAxisName: string;
	TurnAtRateAxisName: string;
	MoveForwardAxisName: string;
	MoveRightAxisName: string;
	MouseSensitivityScale_Pitch: number;
	MouseSensitivityScale_Yaw: number;
	static GetDefaultObject(): ArchVisCharacter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ArchVisCharacter;
	static C(Other: UObject | any): ArchVisCharacter;
}

declare class ArchVisCharMovementComponent extends CharacterMovementComponent { 
	RotationalAcceleration: Rotator;
	RotationalDeceleration: Rotator;
	MaxRotationalVelocity: Rotator;
	MinPitch: number;
	MaxPitch: number;
	WalkingFriction: number;
	WalkingSpeed: number;
	WalkingAcceleration: number;
	static Load(ResourceName: string): ArchVisCharMovementComponent;
	static Find(Outer: UObject, ResourceName: string): ArchVisCharMovementComponent;
	static GetDefaultObject(): ArchVisCharMovementComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ArchVisCharMovementComponent;
	static C(Other: UObject | any): ArchVisCharMovementComponent;
}

declare class AudioCaptureComponent extends SynthComponent { 
	JitterLatencyFrames: number;
	static Load(ResourceName: string): AudioCaptureComponent;
	static Find(Outer: UObject, ResourceName: string): AudioCaptureComponent;
	static GetDefaultObject(): AudioCaptureComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioCaptureComponent;
	static C(Other: UObject | any): AudioCaptureComponent;
}

declare class ComponentReference { 
	OtherActor: Actor;
	ComponentProperty: string;
	clone() : ComponentReference;
	static C(Other: UObject | any): ComponentReference;
}

declare class CableComponent extends MeshComponent { 
	bAttachStart: boolean;
	bAttachEnd: boolean;
	AttachEndTo: ComponentReference;
	AttachEndToSocketName: string;
	EndLocation: Vector;
	CableLength: number;
	NumSegments: number;
	SubstepTime: number;
	SolverIterations: number;
	bEnableStiffness: boolean;
	bEnableCollision: boolean;
	CollisionFriction: number;
	CableForce: Vector;
	CableGravityScale: number;
	CableWidth: number;
	NumSides: number;
	TileMaterial: number;
	static Load(ResourceName: string): CableComponent;
	static Find(Outer: UObject, ResourceName: string): CableComponent;
	static GetDefaultObject(): CableComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CableComponent;
	SetAttachEndTo(Actor: Actor,ComponentProperty: string,SocketName: string): void;
	GetCableParticleLocations(Locations?: Vector[]): {Locations: Vector[]};
	GetAttachedComponent(): SceneComponent;
	GetAttachedActor(): Actor;
	static C(Other: UObject | any): CableComponent;
}

declare class CableActor extends Actor { 
	CableComponent: CableComponent;
	static GetDefaultObject(): CableActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CableActor;
	static C(Other: UObject | any): CableActor;
}

declare class CustomMeshTriangle { 
	Vertex0: Vector;
	Vertex1: Vector;
	Vertex2: Vector;
	clone() : CustomMeshTriangle;
	static C(Other: UObject | any): CustomMeshTriangle;
}

declare class CustomMeshComponent extends MeshComponent { 
	static Load(ResourceName: string): CustomMeshComponent;
	static Find(Outer: UObject, ResourceName: string): CustomMeshComponent;
	static GetDefaultObject(): CustomMeshComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CustomMeshComponent;
	SetCustomMeshTriangles(Triangles: CustomMeshTriangle[]): boolean;
	ClearCustomMeshTriangles(): void;
	AddCustomMeshTriangles(Triangles: CustomMeshTriangle[]): void;
	static C(Other: UObject | any): CustomMeshComponent;
}

declare class MobileInstalledContent extends UObject { 
	static Load(ResourceName: string): MobileInstalledContent;
	static Find(Outer: UObject, ResourceName: string): MobileInstalledContent;
	static GetDefaultObject(): MobileInstalledContent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MobileInstalledContent;
	Mount(PakOrder: number,MountPoint: string): boolean;
	GetInstalledContentSize(): number;
	GetDiskFreeSpace(): number;
	static C(Other: UObject | any): MobileInstalledContent;
}

declare class MobilePendingContent extends MobileInstalledContent { 
	static Load(ResourceName: string): MobilePendingContent;
	static Find(Outer: UObject, ResourceName: string): MobilePendingContent;
	static GetDefaultObject(): MobilePendingContent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MobilePendingContent;
	GetTotalDownloadedSize(): number;
	GetRequiredDiskSpace(): number;
	GetInstallProgress(): number;
	GetDownloadStatusText(): string;
	GetDownloadSpeed(): number;
	GetDownloadSize(): number;
	static C(Other: UObject | any): MobilePendingContent;
}

declare class MobilePatchingLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MobilePatchingLibrary;
	static Find(Outer: UObject, ResourceName: string): MobilePatchingLibrary;
	static GetDefaultObject(): MobilePatchingLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MobilePatchingLibrary;
	static HasActiveWiFiConnection(): boolean;
	static GetSupportedPlatformNames(): string[];
	static GetInstalledContent(InstallDirectory: string): MobileInstalledContent;
	static GetActiveDeviceProfileName(): string;
	static C(Other: UObject | any): MobilePatchingLibrary;
}

declare type ESteamVRTouchDPadMapping = 'FaceButtons' | 'ThumbstickDirections' | 'Disabled' | 'ESteamVRTouchDPadMapping_MAX';
declare var ESteamVRTouchDPadMapping : { FaceButtons:'FaceButtons',ThumbstickDirections:'ThumbstickDirections',Disabled:'Disabled',ESteamVRTouchDPadMapping_MAX:'ESteamVRTouchDPadMapping_MAX', };
declare class SteamVRControllerLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): SteamVRControllerLibrary;
	static Find(Outer: UObject, ResourceName: string): SteamVRControllerLibrary;
	static GetDefaultObject(): SteamVRControllerLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SteamVRControllerLibrary;
	static SetTouchDPadMapping(NewMapping: ESteamVRTouchDPadMapping): void;
	static C(Other: UObject | any): SteamVRControllerLibrary;
}

declare class JavascriptPinParams { 
	ContainerType: EPinContainerType;
	bIsReference: boolean;
	bIsConst: boolean;
	index: number;
	clone() : JavascriptPinParams;
	static C(Other: UObject | any): JavascriptPinParams;
}

declare class JavascriptGraphEdNode extends EdGraphNode { 
	BackgroundColor: SlateColor;
	GraphNode: UObject;
	Bidirectional: boolean;
	PriorityOrder: number;
	static Load(ResourceName: string): JavascriptGraphEdNode;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdNode;
	static GetDefaultObject(): JavascriptGraphEdNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdNode;
	UpdateSlate(): void;
	GetDesiredSize(): Vector2D;
	CreatePin(Dir: EEdGraphPinDirection,PinCategory: string,PinSubCategory: string,PinSubCategoryObject: UObject,PinName: string,PinToolTip: string,InPinParams: JavascriptPinParams): JavascriptEdGraphPin;
	static C(Other: UObject | any): JavascriptGraphEdNode;
}

declare class JavascriptSlateEdNode { 
	clone() : JavascriptSlateEdNode;
	static C(Other: UObject | any): JavascriptSlateEdNode;
	AddPinToHoverSet(Pin: JavascriptEdGraphPin): void;
	RemovePinFromHoverSet(Pin: JavascriptEdGraphPin): void;
	static AddPinToHoverSet(InSlateEdNode: JavascriptSlateEdNode,Pin: JavascriptEdGraphPin): void;
	static RemovePinFromHoverSet(InSlateNode: JavascriptSlateEdNode,Pin: JavascriptEdGraphPin): void;
}

declare class JavascriptPerformSecondPassLayoutContainer { 
	PrevNode: EdGraphNode;
	NextNode: EdGraphNode;
	NodeIndex: number;
	MaxNodes: number;
	clone() : JavascriptPerformSecondPassLayoutContainer;
	static C(Other: UObject | any): JavascriptPerformSecondPassLayoutContainer;
}

declare class JavascriptConnectionParams { 
	WireColor: LinearColor;
	AssociatedPin1: JavascriptEdGraphPin;
	AssociatedPin2: JavascriptEdGraphPin;
	WireThickness: number;
	bDrawBubbles: boolean;
	bUserFlag1: boolean;
	bUserFlag2: boolean;
	StartDirection: EEdGraphPinDirection;
	EndDirection: EEdGraphPinDirection;
	clone() : JavascriptConnectionParams;
	static C(Other: UObject | any): JavascriptConnectionParams;
}

declare class JavascriptGraphConnectionDrawingPolicyContainer { 
	clone() : JavascriptGraphConnectionDrawingPolicyContainer;
	static C(Other: UObject | any): JavascriptGraphConnectionDrawingPolicyContainer;
	ApplyHoverDeemphasis(OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Thickness: number,WireColor: LinearColor): void;
	DetermineWiringStyle(OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Params?: JavascriptConnectionParams): {Params: JavascriptConnectionParams};
	DrawConnection(A: Vector2D,B: Vector2D,Params: JavascriptConnectionParams): void;
	DrawSplineWithArrow(StartAnchorPoint: Vector2D,EndAnchorPoint: Vector2D,Params: JavascriptConnectionParams): void;
	GetHorveredPinNum(): number;
	IsContainedHoveredPins(Pin: JavascriptEdGraphPin): boolean;
	MakeRotatedBox(ArrowDrawPos: Vector2D,AngleInRadians: number,WireColor: LinearColor): void;
	static ApplyHoverDeemphasis(Container: JavascriptGraphConnectionDrawingPolicyContainer,OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Thickness: number,WireColor: LinearColor): void;
	static DetermineWiringStyle(Container: JavascriptGraphConnectionDrawingPolicyContainer,OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Params?: JavascriptConnectionParams): {Params: JavascriptConnectionParams};
	static DrawConnection(Container: JavascriptGraphConnectionDrawingPolicyContainer,A: Vector2D,B: Vector2D,Params: JavascriptConnectionParams): void;
	static DrawSplineWithArrow(Container: JavascriptGraphConnectionDrawingPolicyContainer,StartAnchorPoint: Vector2D,EndAnchorPoint: Vector2D,Params: JavascriptConnectionParams): void;
	static GetHorveredPinNum(Container: JavascriptGraphConnectionDrawingPolicyContainer): number;
	static IsContainedHoveredPins(Container: JavascriptGraphConnectionDrawingPolicyContainer,Pin: JavascriptEdGraphPin): boolean;
	static MakeRotatedBox(Container: JavascriptGraphConnectionDrawingPolicyContainer,ArrowDrawPos: Vector2D,AngleInRadians: number,WireColor: LinearColor): void;
}

declare type EGraphSchemaGetStringQuery = 'Description' | 'Title' | 'EGraphSchemaGetStringQuery_MAX';
declare var EGraphSchemaGetStringQuery : { Description:'Description',Title:'Title',EGraphSchemaGetStringQuery_MAX:'EGraphSchemaGetStringQuery_MAX', };
declare class JavascriptGraphMenuBuilder extends JavascriptMenuBuilder { 
	Graph: EdGraph;
	GraphNode: EdGraphNode;
	GraphPin: JavascriptEdGraphPin;
	bIsDebugging: boolean;
	clone() : JavascriptGraphMenuBuilder;
	static C(Other: UObject | any): JavascriptGraphMenuBuilder;
}

declare type ECanCreateConnectionResponse = 'CONNECT_RESPONSE_MAKE' | 'CONNECT_RESPONSE_DISALLOW' | 'CONNECT_RESPONSE_BREAK_OTHERS_A' | 'CONNECT_RESPONSE_BREAK_OTHERS_B' | 'CONNECT_RESPONSE_BREAK_OTHERS_AB' | 'CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE' | 'CONNECT_RESPONSE_MAX';
declare var ECanCreateConnectionResponse : { CONNECT_RESPONSE_MAKE:'CONNECT_RESPONSE_MAKE',CONNECT_RESPONSE_DISALLOW:'CONNECT_RESPONSE_DISALLOW',CONNECT_RESPONSE_BREAK_OTHERS_A:'CONNECT_RESPONSE_BREAK_OTHERS_A',CONNECT_RESPONSE_BREAK_OTHERS_B:'CONNECT_RESPONSE_BREAK_OTHERS_B',CONNECT_RESPONSE_BREAK_OTHERS_AB:'CONNECT_RESPONSE_BREAK_OTHERS_AB',CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE:'CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE',CONNECT_RESPONSE_MAX:'CONNECT_RESPONSE_MAX', };
declare class JavascriptPinConnectionResponse { 
	Message: string;
	Response: ECanCreateConnectionResponse;
	clone() : JavascriptPinConnectionResponse;
	static C(Other: UObject | any): JavascriptPinConnectionResponse;
}

declare class EdGraphSchemaAction { 
	MenuDescription: string;
	TooltipDescription: string;
	Category: string;
	Keywords: string;
	Grouping: number;
	SectionID: number;
	MenuDescriptionArray: string[];
	FullSearchTitlesArray: string[];
	FullSearchKeywordsArray: string[];
	FullSearchCategoryArray: string[];
	LocalizedMenuDescriptionArray: string[];
	LocalizedFullSearchTitlesArray: string[];
	LocalizedFullSearchKeywordsArray: string[];
	LocalizedFullSearchCategoryArray: string[];
	SearchText: string;
	clone() : EdGraphSchemaAction;
	static C(Other: UObject | any): EdGraphSchemaAction;
}

declare class PerformActionContext { 
	ParentGraph: EdGraph;
	FromPins: JavascriptEdGraphPin[];
	Location: Vector2D;
	bSelectNewNode: boolean;
	clone() : PerformActionContext;
	static C(Other: UObject | any): PerformActionContext;
}

declare class JavascriptArrangedWidget { 
	clone() : JavascriptArrangedWidget;
	static C(Other: UObject | any): JavascriptArrangedWidget;
}

declare class JavascriptPinWidget { 
	clone() : JavascriptPinWidget;
	static C(Other: UObject | any): JavascriptPinWidget;
}

declare class JavascriptDetermineLinkGeometryContainer { 
	clone() : JavascriptDetermineLinkGeometryContainer;
	static C(Other: UObject | any): JavascriptDetermineLinkGeometryContainer;
	FindPinGeometries(PinWidget: JavascriptPinWidget): JavascriptArrangedWidget;
	FindPinToPinWidgetMap(Pin: JavascriptEdGraphPin): JavascriptPinWidget;
	GetArrangedNodes(UNode: EdGraphNode): JavascriptArrangedWidget;
	GetOutputPinWidget(): JavascriptPinWidget;
	static FindPinGeometries(Container: JavascriptDetermineLinkGeometryContainer,PinWidget: JavascriptPinWidget): JavascriptArrangedWidget;
	static FindPinToPinWidgetMap(Container: JavascriptDetermineLinkGeometryContainer,Pin: JavascriptEdGraphPin): JavascriptPinWidget;
	static GetArrangedNodes(Container: JavascriptDetermineLinkGeometryContainer,UNode: EdGraphNode): JavascriptArrangedWidget;
	static GetOutputPinWidget(Container: JavascriptDetermineLinkGeometryContainer): JavascriptPinWidget;
}

declare class JavascriptGraphAssetGraphSchema extends EdGraphSchema { 
	OnGetPinColor: UnrealEngineDelegate<(bHovered: boolean, Pin: JavascriptEdGraphPin) => SlateColor>;
	OnGetDefaultValueVisibility: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnGetSlateBrushName: UnrealEngineDelegate<(bHovered: boolean, Pin: JavascriptEdGraphPin) => string>;
	OnPinConnectionListChanged: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => void>;
	OnTryCreateConnection: UnrealEngineDelegate<(PinA: JavascriptEdGraphPin, PinB: JavascriptEdGraphPin) => void>;
	OnMouseEnter: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, SlateEdNode: JavascriptSlateEdNode) => void>;
	OnMouseLeave: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, SlateEdNode: JavascriptSlateEdNode) => void>;
	OnMouseMove: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, Delta: Vector2D, bUserIsDragging: boolean, MouseZone: number) => void>;
	OnMouseButtonDown: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, MyGeometry: Geometry) => void>;
	OnMouseButtonUp: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, MyGeometry: Geometry) => void>;
	OnPerformSecondPassLayout: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptPerformSecondPassLayoutContainer>;
	OnRequiresSecondPassLayout: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnMoveTo: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, NewPosition: Vector2D) => boolean>;
	OnTakeCustomContentWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, OutUserWidget: JavascriptSlateWidget, OutLeftNodeBoxWidget: JavascriptSlateWidget, OutRightNodeBoxWidget: JavascriptSlateWidget) => JavascriptSlateWidget>;
	OnGetValueWidget: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnGetActualPinWidget: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnGetPinStatusIndicator: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnDisableMakePins: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnUsingDefaultPin: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnUsingNodeWidgetMap: UnrealEngineDelegate<() => boolean>;
	OnDetermineWiringStyle: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer) => void>;
	OnComputeSplineTangent: UnrealEngineDelegate<(A: Vector2D, B: Vector2D) => Vector2D>;
	OnDrawSplineWithArrow: UnrealEngineDelegate<(A: Vector2D, B: Vector2D, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer, ArrowRadius: Vector2D) => boolean>;
	OnDrawSplineWithArrow_Geom: UnrealEngineDelegate<(A: Geometry, B: Geometry, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer) => boolean>;
	OnDrawPreviewConnector: UnrealEngineDelegate<(PinGeometry: Geometry, StartPoint: Vector2D, Endpoint: Vector2D, Pin: JavascriptEdGraphPin, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer) => boolean>;
	OnTakeWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptSlateWidget>;
	OnTakeTitleWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptSlateWidget>;
	OnTakeErrorReportingWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptSlateWidget>;
	OnGetString: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, Query: EGraphSchemaGetStringQuery) => string>;
	OnBuildMenu: UnrealEngineDelegate<(Builder: JavascriptGraphMenuBuilder) => void>;
	OnAllocateDefaultPins: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnCreatePin: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnCanCreateConnection: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin) => JavascriptPinConnectionResponse>;
	OnPerformAction: UnrealEngineDelegate<(Action: EdGraphSchemaAction, Context: PerformActionContext) => EdGraphNode>;
	OnContextActions: UnrealEngineDelegate<(FromPin: JavascriptEdGraphPin) => EdGraphSchemaAction[]>;
	OnNodeConnectionListChanged: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnCreateAutomaticConversionNodeAndConnections: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin) => boolean>;
	OnDetermineLinkGeometry: UnrealEngineDelegate<(OutPin: JavascriptEdGraphPin, InputPin: JavascriptEdGraphPin, StartWidgetGeometry: JavascriptArrangedWidget, EndWidgetGeometry: JavascriptArrangedWidget, Container: JavascriptDetermineLinkGeometryContainer) => boolean>;
	OnGetNodeComment: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => string>;
	OnSetNodeComment: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode, string: string) => void>;
	OnIsNodeComment: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnEndUserInteraction: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnCreateOutputSideAddButton: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnAddPinByAddButton: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema;
	BreakSinglePinLink(SourcePin: JavascriptEdGraphPin,TargetPin: JavascriptEdGraphPin): void;
	BreakPinLinks(TargetPin: JavascriptEdGraphPin,bSendsNodeNotifcation: boolean): void;
	BreakNodeLinks(TargetNode: EdGraphNode): void;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema;
}

declare class JavascriptNodeCreator { 
	UNode: JavascriptGraphEdNode;
	clone() : JavascriptNodeCreator;
	static C(Other: UObject | any): JavascriptNodeCreator;
	Finalize(): {Creator: JavascriptNodeCreator};
	static Finalize(Creator?: JavascriptNodeCreator): {Creator: JavascriptNodeCreator};
}

declare class JavascriptGraphEdGraph extends EdGraph { 
	static Load(ResourceName: string): JavascriptGraphEdGraph;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdGraph;
	static GetDefaultObject(): JavascriptGraphEdGraph;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdGraph;
	RebuildGenericGraph(): void;
	static C(Other: UObject | any): JavascriptGraphEdGraph;
	NodeCreator(): JavascriptNodeCreator;
	static NodeCreator(Graph: JavascriptGraphEdGraph): JavascriptNodeCreator;
}

declare class JavascriptGraphEditorLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptGraphEditorLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEditorLibrary;
	static GetDefaultObject(): JavascriptGraphEditorLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEditorLibrary;
	static TryConnection(Schema: EdGraphSchema,A: JavascriptEdGraphPin,B: JavascriptEdGraphPin): void;
	static SetPinType(Pin: JavascriptEdGraphPin,PinType: EdGraphPinType): void;
	static SetPinInfo(A: JavascriptEdGraphPin,InPinName: string,InPinToolTip: string): void;
	static SetNodeMetaData(Schema: EdGraphSchema,UNode: EdGraphNode,KeyValue: string): boolean;
	static ResizeNode(UNode: EdGraphNode,NewSize: Vector2D): void;
	static RemovePinFromHoverSet(InSlateNode: JavascriptSlateEdNode,Pin: JavascriptEdGraphPin): void;
	static NodeCreator(Graph: JavascriptGraphEdGraph): JavascriptNodeCreator;
	static MakeRotatedBox(Container: JavascriptGraphConnectionDrawingPolicyContainer,ArrowDrawPos: Vector2D,AngleInRadians: number,WireColor: LinearColor): void;
	static MakeLinkTo(A: JavascriptEdGraphPin,B: JavascriptEdGraphPin): void;
	static IsValid(A: JavascriptEdGraphPin): boolean;
	static IsContainedHoveredPins(Container: JavascriptGraphConnectionDrawingPolicyContainer,Pin: JavascriptEdGraphPin): boolean;
	static GetPinType(A: JavascriptEdGraphPin): EdGraphPinType;
	static GetPins(UNode: EdGraphNode): JavascriptEdGraphPin[];
	static GetPinName(A: JavascriptEdGraphPin): string;
	static GetPinGUID(A: JavascriptEdGraphPin): Guid;
	static GetPinContainerType(A: JavascriptEdGraphPin): EJavascriptPinContainerType;
	static GetOwningNode(A: JavascriptEdGraphPin): EdGraphNode;
	static GetOutputPinWidget(Container: JavascriptDetermineLinkGeometryContainer): JavascriptPinWidget;
	static GetLinkedTo(A: JavascriptEdGraphPin): JavascriptEdGraphPin[];
	static GetHorveredPinNum(Container: JavascriptGraphConnectionDrawingPolicyContainer): number;
	static GetDirection(A: JavascriptEdGraphPin): EEdGraphPinDirection;
	static GetDefaultObject(): JavascriptEdGraphPin;
	static GetArrangedNodes(Container: JavascriptDetermineLinkGeometryContainer,UNode: EdGraphNode): JavascriptArrangedWidget;
	static FindPinToPinWidgetMap(Container: JavascriptDetermineLinkGeometryContainer,Pin: JavascriptEdGraphPin): JavascriptPinWidget;
	static FindPinGeometries(Container: JavascriptDetermineLinkGeometryContainer,PinWidget: JavascriptPinWidget): JavascriptArrangedWidget;
	static FindPin(UNode: EdGraphNode,PinName: string,Direction: EEdGraphPinDirection): JavascriptEdGraphPin;
	static FindClosestPointOnGeom(Geom: Geometry,TestPoint: Vector2D): Vector2D;
	static Finalize(Creator?: JavascriptNodeCreator): {Creator: JavascriptNodeCreator};
	static DrawSplineWithArrow(Container: JavascriptGraphConnectionDrawingPolicyContainer,StartAnchorPoint: Vector2D,EndAnchorPoint: Vector2D,Params: JavascriptConnectionParams): void;
	static DrawConnection(Container: JavascriptGraphConnectionDrawingPolicyContainer,A: Vector2D,B: Vector2D,Params: JavascriptConnectionParams): void;
	static DetermineWiringStyle(Container: JavascriptGraphConnectionDrawingPolicyContainer,OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Params?: JavascriptConnectionParams): {Params: JavascriptConnectionParams};
	static DestroyNode(UNode: EdGraphNode): void;
	static CenterOf(Geom: Geometry): Vector2D;
	static CanUserDeleteNode(UNode: EdGraphNode): boolean;
	static CanDuplicateNode(UNode: EdGraphNode): boolean;
	static BreakLinkTo(A: JavascriptEdGraphPin,B: JavascriptEdGraphPin): void;
	static BreakAllPinLinks(A: JavascriptEdGraphPin): void;
	static AutowireNewNode(UNode: EdGraphNode,FromPin: JavascriptEdGraphPin): void;
	static ApplyHoverDeemphasis(Container: JavascriptGraphConnectionDrawingPolicyContainer,OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Thickness: number,WireColor: LinearColor): void;
	static AddPinToHoverSet(InSlateEdNode: JavascriptSlateEdNode,Pin: JavascriptEdGraphPin): void;
	static C(Other: UObject | any): JavascriptGraphEditorLibrary;
}

declare class JavascriptGraphAppearanceInfo { 
	CornerImage: SlateBrush;
	CornerText: string;
	PIENotifyText: string;
	ReadOnlyText: string;
	InstructionText: string;
	clone() : JavascriptGraphAppearanceInfo;
	static C(Other: UObject | any): JavascriptGraphAppearanceInfo;
}

declare class JavascriptGraphEditorWidget extends Widget { 
	EdGraph: JavascriptGraphEdGraph;
	OnNodeDoubleClicked: UnrealEngineDelegate<(UNode: EdGraphNode) => void>;
	OnDropActor: UnrealEngineDelegate<(Actors: Actor[], Graph: EdGraph, Point: Vector2D) => void>;
	OnDisallowedPinConnection: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin) => void>;
	OnSelectedNodesChanged: UnrealEngineDelegate<(Set: UObject[]) => void>;
	AppearanceInfo: JavascriptGraphAppearanceInfo;
	CommandList: JavascriptUICommandList;
	static Load(ResourceName: string): JavascriptGraphEditorWidget;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEditorWidget;
	static GetDefaultObject(): JavascriptGraphEditorWidget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEditorWidget;
	SetViewLocation(Location: Vector2D,ZoomAmount: number): void;
	SetNodeSelection(UNode: EdGraphNode,bSelect: boolean): void;
	SetGraph(InEdGraph: JavascriptGraphEdGraph): void;
	SelectAllNodes(): void;
	static NewGraph(ParentScope: UObject): JavascriptGraphEdGraph;
	JumpToPin(JumpToMe: JavascriptEdGraphPin): void;
	JumpToNode(JumpToMe: EdGraphNode,bRequestRename: boolean,bSelectNode: boolean): void;
	GetViewLocation(OutLocation?: Vector2D,OutZoomAmount?: number): {OutLocation: Vector2D, OutZoomAmount: number};
	GetSelectedNodes(): UObject[];
	GetPasteLocation(): Vector2D;
	ClearSelectionSet(): void;
	static C(Other: UObject | any): JavascriptGraphEditorWidget;
}

declare class JavascriptGraphPinObject extends Widget { 
	OnGetGraphPin: UnrealEngineDelegate<() => JavascriptEdGraphPin>;
	OnGetDefaultValue: UnrealEngineDelegate<() => UObject>;
	OnSetDefaultValue: UnrealEngineDelegate<(Value: string) => void>;
	static Load(ResourceName: string): JavascriptGraphPinObject;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphPinObject;
	static GetDefaultObject(): JavascriptGraphPinObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphPinObject;
	static C(Other: UObject | any): JavascriptGraphPinObject;
}

declare type EJavasriptTabActivationCause = 'UserClickedOnTab' | 'SetDirectly' | 'EJavasriptTabActivationCause_MAX';
declare var EJavasriptTabActivationCause : { UserClickedOnTab:'UserClickedOnTab',SetDirectly:'SetDirectly',EJavasriptTabActivationCause_MAX:'EJavasriptTabActivationCause_MAX', };
declare class JavascriptWorkspaceItem { 
	clone() : JavascriptWorkspaceItem;
	static C(Other: UObject | any): JavascriptWorkspaceItem;
	AddGroup(DisplayName: string): JavascriptWorkspaceItem;
	static AddGroup(Parent: JavascriptWorkspaceItem,DisplayName: string): JavascriptWorkspaceItem;
	static GetGroup(Name: string): JavascriptWorkspaceItem;
}

declare type EJavascriptTabRole = 'MajorTab' | 'PanelTab' | 'NomadTab' | 'DocumentTab' | 'EJavascriptTabRole_MAX';
declare var EJavascriptTabRole : { MajorTab:'MajorTab',PanelTab:'PanelTab',NomadTab:'NomadTab',DocumentTab:'DocumentTab',EJavascriptTabRole_MAX:'EJavascriptTabRole_MAX', };
declare class JavascriptEditorTab extends UObject { 
	OnSpawnTab: UnrealEngineDelegate<(Context: UObject) => Widget>;
	OnCloseTab: UnrealEngineDelegate<(Widget: Widget) => void>;
	OnTabActivatedCallback: UnrealEngineDelegate<(TabId: string, Cause: EJavasriptTabActivationCause) => void>;
	Group: JavascriptWorkspaceItem;
	TabId: string;
	DisplayName: string;
	bIsNomad: boolean;
	Role: EJavascriptTabRole;
	static Load(ResourceName: string): JavascriptEditorTab;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTab;
	static GetDefaultObject(): JavascriptEditorTab;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTab;
	Discard(): void;
	Commit(): void;
	CloseTab(Widget: Widget): void;
	static C(Other: UObject | any): JavascriptEditorTab;
}

declare class JavascriptMenuExtension { 
	ExtensionHook: string;
	HookPosition: EJavascriptExtensionHook;
	clone() : JavascriptMenuExtension;
	static C(Other: UObject | any): JavascriptMenuExtension;
}

declare class JavascriptUIExtender extends UObject { 
	MenuExtensions: JavascriptMenuExtension[];
	ToolbarExtensions: JavascriptMenuExtension[];
	OnHook: UnrealEngineDelegate<(Hook: string) => void>;
	static Load(ResourceName: string): JavascriptUIExtender;
	static Find(Outer: UObject, ResourceName: string): JavascriptUIExtender;
	static GetDefaultObject(): JavascriptUIExtender;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUIExtender;
	static GetTopCommandList(): JavascriptUICommandList;
	static EndSection(): void;
	static Bind(Commands: JavascriptUICommands): void;
	static BeginSection(Name: string,text: string): void;
	static AddToolBarButton(Commands: JavascriptUICommands,ID: string): void;
	static AddMenuSeparator(): void;
	static AddMenuEntry(Commands: JavascriptUICommands,ID: string): void;
	static C(Other: UObject | any): JavascriptUIExtender;
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
	static Load(ResourceName: string): JavascriptAssetEditorToolkit;
	static Find(Outer: UObject, ResourceName: string): JavascriptAssetEditorToolkit;
	static GetDefaultObject(): JavascriptAssetEditorToolkit;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptAssetEditorToolkit;
	Refresh(): void;
	Discard(): void;
	Commit(): void;
	static C(Other: UObject | any): JavascriptAssetEditorToolkit;
}

declare class JavascriptAssetTypeActions extends UObject { 
	ActionsName: string;
	Color: Color;
	SupportedClass: UnrealEngineClass;
	Editor: JavascriptAssetEditorToolkit;
	Actions: JavascriptUIExtender;
	static Load(ResourceName: string): JavascriptAssetTypeActions;
	static Find(Outer: UObject, ResourceName: string): JavascriptAssetTypeActions;
	static GetDefaultObject(): JavascriptAssetTypeActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptAssetTypeActions;
	Refresh(): void;
	Discard(): void;
	Commit(): void;
	static C(Other: UObject | any): JavascriptAssetTypeActions;
}

declare class JavascriptCommandlet extends Commandlet { 
	CmdLineTokens: string[];
	CmdLineSwitches: string[];
	static Load(ResourceName: string): JavascriptCommandlet;
	static Find(Outer: UObject, ResourceName: string): JavascriptCommandlet;
	static GetDefaultObject(): JavascriptCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptCommandlet;
	static C(Other: UObject | any): JavascriptCommandlet;
}

declare class JavascriptEditorEngineLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptEditorEngineLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorEngineLibrary;
	static GetDefaultObject(): JavascriptEditorEngineLibrary;
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
	static GetLongPackagePath(InPackage: Package): string;
	static GetEditorWorld(Engine: Engine): World;
	static FindBrushBuilder(Engine: EditorEngine,BrushBuilderClass: UnrealEngineClass): BrushBuilder;
	static Exec(Engine: EditorEngine,InWorld: World,Command: string,Out?: string): {Out: string, $: boolean};
	static DuplicateAsset(AssetName: string,PackagePath: string,OriginalObject: UObject): UObject;
	static DeleteObjectsUnchecked(ObjectsToDelete: UObject[]): number;
	static CanSelectActor(Engine: EditorEngine,Actor: Actor,bInSelected: boolean,bSelectEvenIfHidden: boolean,bWarnIfLevelLocked: boolean): boolean;
	static bspBrushCSG(Engine: EditorEngine,Actor: Brush,Model: Model,PolyFlags: number,BrushType: EBrushType,CSGOper: ECsgOper,bBuildBounds: boolean,bMergePolys: boolean,bReplaceNULLMaterialRefs: boolean,bShowProgressBar: boolean): number;
	static C(Other: UObject | any): JavascriptEditorEngineLibrary;
}

declare class JavascriptAssetData { 
	ObjectPath: string;
	PackageName: string;
	PackagePath: string;
	AssetName: string;
	AssetClass: string;
	ChunkIDs: number[];
	PackageFlags: number;
	clone() : JavascriptAssetData;
	static C(Other: UObject | any): JavascriptAssetData;
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
	static Load(ResourceName: string): JavascriptEditorGlobalDelegates;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorGlobalDelegates;
	static GetDefaultObject(): JavascriptEditorGlobalDelegates;
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
	EndPlayMapDelegate(): void;
	EndPIE(bIsSimulating: boolean): void;
	DisplayLoadErrors(): void;
	CleanseEditor(): void;
	ChangeEditorMode(NewMode: string): void;
	Bind(Key: string): void;
	BeginPIE(bIsSimulating: boolean): void;
	ActorPropertiesChange(): void;
	static C(Other: UObject | any): JavascriptEditorGlobalDelegates;
}

declare class JavascriptEditorInputProcessor extends UObject { 
	static Load(ResourceName: string): JavascriptEditorInputProcessor;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorInputProcessor;
	static GetDefaultObject(): JavascriptEditorInputProcessor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorInputProcessor;
	UnRegister(): void;
	Register(): void;
	HandleMouseMoveEvent(InPointerEvent: UPointerEvent): boolean;
	HandleKeyUpEvent(InKeyEvent: KeyEvent): boolean;
	HandleKeyDownEvent(InKeyEvent: KeyEvent): boolean;
	HandleAnalogInputEvent(InKeyEvent: AnalogInputEvent): boolean;
	Activate(bEnable: boolean): void;
	static C(Other: UObject | any): JavascriptEditorInputProcessor;
}

declare type EJavascriptRHIFeatureLevel = 'ES2' | 'ES3_1' | 'SM4' | 'SM5' | 'Num' | 'EJavascriptRHIFeatureLevel_MAX';
declare var EJavascriptRHIFeatureLevel : { ES2:'ES2',ES3_1:'ES3_1',SM4:'SM4',SM5:'SM5',Num:'Num',EJavascriptRHIFeatureLevel_MAX:'EJavascriptRHIFeatureLevel_MAX', };
declare class JavascriptPDI { 
	clone() : JavascriptPDI;
	static C(Other: UObject | any): JavascriptPDI;
	DrawArc(Base: Vector,X: Vector,Y: Vector,MinAngle: number,MaxAngle: number,Radius: number,Sections: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	DrawCircle(Base: Vector,X: Vector,Y: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawConnectedArrow(ArrowToWorld: Transform,Color: LinearColor,ArrowHeight: number,ArrowWidth: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,NumSpokes: number): void;
	DrawDashedLine(Start: Vector,End: Vector,Color: LinearColor,DashSize: number,DepthPriority: ESceneDepthPriorityGroup,DepthBias: number): void;
	DrawDirectionalArrow(ArrowToWorld: Transform,InColor: LinearColor,Length: number,ArrowSize: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number): void;
	DrawOrientedWireBox(Base: Vector,X: Vector,Y: Vector,Z: Vector,Extent: Vector,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawPolygon(Verts: Vector[],InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup,RHIFeatureLevel: EJavascriptRHIFeatureLevel): void;
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
	static DrawPolygon(PDI: JavascriptPDI,Verts: Vector[],InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup,RHIFeatureLevel: EJavascriptRHIFeatureLevel): void;
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
	static C(Other: UObject | any): JavascriptExtensibilityManager;
	AddExtender(Extender: JavascriptExtender): void;
	RemoveExtender(Extender: JavascriptExtender): void;
	static AddExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static RemoveExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static GetMenuExtensibilityManager(What: string): JavascriptExtensibilityManager;
	static GetToolBarExtensibilityManager(What: string): JavascriptExtensibilityManager;
}

declare class JavascriptViewportClick { 
	clone() : JavascriptViewportClick;
	static C(Other: UObject | any): JavascriptViewportClick;
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
	static C(Other: UObject | any): JavascriptHitProxy;
	GetActor(): Actor;
	GetName(): string;
	static GetActor(Proxy: JavascriptHitProxy): Actor;
	static GetName(Proxy: JavascriptHitProxy): string;
}

declare type EJavascriptMessageSeverity = 'CriticalError' | 'Error' | 'PerformanceWarning' | 'Warning' | 'Info' | 'EJavascriptMessageSeverity_MAX';
declare var EJavascriptMessageSeverity : { CriticalError:'CriticalError',Error:'Error',PerformanceWarning:'PerformanceWarning',Warning:'Warning',Info:'Info',EJavascriptMessageSeverity_MAX:'EJavascriptMessageSeverity_MAX', };
declare class JavascriptEditorLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptEditorLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorLibrary;
	static GetDefaultObject(): JavascriptEditorLibrary;
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
	static SavePackage(Package: Package,Filename: string): boolean;
	static RequestEndPlayMapInPIE(): void;
	static RemoveLevelInstance(World: World): void;
	static RemoveExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static PostEditChange(InObject: UObject): void;
	static OpenPopupWindow(Widget: Widget,PopupDesiredSize: Vector2D,HeadingText: string): void;
	static ModifyObject(UObject: UObject,bAlwaysMarkDirty: boolean): void;
	static MarkPackageDirty(InObject: UObject): boolean;
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
	static GetLevelEditorActions(): JavascriptUICommandList;
	static GetLayerInfoByName(LandscapeInfo: LandscapeInfo,LayerName: string,Owner: LandscapeProxy): LandscapeLayerInfoObject;
	static GetLandscapeInfo(Landscape: Landscape,bSpawnNewActor: boolean): LandscapeInfo;
	static GetLandscapeExtent(LandscapeInfo: LandscapeInfo,MinX?: number,MinY?: number,MaxX?: number,MaxY?: number): {MinX: number, MinY: number, MaxX: number, MaxY: number, $: boolean};
	static GetKey(Click: JavascriptViewportClick): Key;
	static GetHeightmapDataToMemory(LandscapeInfo: LandscapeInfo,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	static GetGroup(Name: string): JavascriptWorkspaceItem;
	static GetFolderPath(Actor: Actor): string;
	static GetEvent(Click: JavascriptViewportClick): EInputEvent;
	static GetEngine(): EditorEngine;
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
	static DrawPolygon(PDI: JavascriptPDI,Verts: Vector[],InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup,RHIFeatureLevel: EJavascriptRHIFeatureLevel): void;
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
	static CreateLogListingWidget(InLogName: string): JavascriptSlateWidget;
	static CreateLogListing(InLogName: string,InLabel: string): void;
	static CreateBrushForVolumeActor(NewActor: Volume,BrushBuilder: BrushBuilder): void;
	static ClearActorLabel(Actor: Actor): void;
	static Build(Builder: BrushBuilder,InWorld: World,InBrush: Brush): boolean;
	static BroadcastHotReload(): void;
	static BroadcastAssetCreated(NewAsset: UObject): void;
	static AddWhitelistedObject(InObject: UObject): void;
	static AddLogListingMessage(InLogName: string,InSeverity: EJavascriptMessageSeverity,LogText: string): void;
	static AddGroup(Parent: JavascriptWorkspaceItem,DisplayName: string): JavascriptWorkspaceItem;
	static AddExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static C(Other: UObject | any): JavascriptEditorLibrary;
}

declare class JavascriptEditorPopupWindow extends UObject { 
	Widget: Widget;
	static Load(ResourceName: string): JavascriptEditorPopupWindow;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorPopupWindow;
	static GetDefaultObject(): JavascriptEditorPopupWindow;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorPopupWindow;
	Open(Heading: string,DesiredSize: Vector2D): boolean;
	OnDismissed(): void;
	static C(Other: UObject | any): JavascriptEditorPopupWindow;
}

declare class JavascriptEditorTabManager extends Widget { 
	Layout: string;
	Tabs: JavascriptEditorTab[];
	static Load(ResourceName: string): JavascriptEditorTabManager;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTabManager;
	static GetDefaultObject(): JavascriptEditorTabManager;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTabManager;
	static C(Other: UObject | any): JavascriptEditorTabManager;
}

declare class JavascriptEditorTick extends UObject { 
	OnTick: UnrealEngineDelegate<(DeltaSeconds: number) => void>;
	static Load(ResourceName: string): JavascriptEditorTick;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTick;
	static GetDefaultObject(): JavascriptEditorTick;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTick;
	GetEngine(): EditorEngine;
	ForceTick(DeltaTime: number): void;
	static C(Other: UObject | any): JavascriptEditorTick;
}

declare class JavascriptEditorToolbar extends Widget { 
	OnHook: UnrealEngineDelegate<() => JavascriptMenuBuilder>;
	static Load(ResourceName: string): JavascriptEditorToolbar;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorToolbar;
	static GetDefaultObject(): JavascriptEditorToolbar;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorToolbar;
	static C(Other: UObject | any): JavascriptEditorToolbar;
}

declare class JavascriptInputEventState { 
	clone() : JavascriptInputEventState;
	static C(Other: UObject | any): JavascriptInputEventState;
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

declare type EJavascriptWidgetMode = 'WM_Translate' | 'WM_TranslateRotateZ' | 'WM_2D' | 'WM_Rotate' | 'WM_Scale' | 'WM_Max' | 'WM_None';
declare var EJavascriptWidgetMode : { WM_Translate:'WM_Translate',WM_TranslateRotateZ:'WM_TranslateRotateZ',WM_2D:'WM_2D',WM_Rotate:'WM_Rotate',WM_Scale:'WM_Scale',WM_Max:'WM_Max',WM_None:'WM_None', };
declare class JavascriptEditorViewport extends PanelWidget { 
	OnClick: UnrealEngineDelegate<(ViewportClick: JavascriptViewportClick, HitProxy: JavascriptHitProxy, Instance: JavascriptEditorViewport) => void>;
	OnTrackingStarted: UnrealEngineDelegate<(InputState: JavascriptInputEventState, bIsDraggingWidget: boolean, bNudge: boolean, Instance: JavascriptEditorViewport) => void>;
	OnTrackingStopped: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => void>;
	OnInputWidgetDelta: UnrealEngineDelegate<(Drag: Vector, Rot: Rotator, Scale: Vector, Instance: JavascriptEditorViewport) => boolean>;
	OnInputKey: UnrealEngineDelegate<(ControllerId: number, Key: Key, Event: EInputEvent, Instance: JavascriptEditorViewport) => boolean>;
	OnInputAxis: UnrealEngineDelegate<(ControllerId: number, Key: Key, Delta: number, DeltaTime: number, Instance: JavascriptEditorViewport) => boolean>;
	OnMouseEnter: UnrealEngineDelegate<(X: number, Y: number, Instance: JavascriptEditorViewport) => boolean>;
	OnMouseMove: UnrealEngineDelegate<(X: number, Y: number, Instance: JavascriptEditorViewport) => boolean>;
	OnMouseLeave: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => boolean>;
	OnDraw: UnrealEngineDelegate<(PDI: JavascriptPDI, Instance: JavascriptEditorViewport) => void>;
	OnDrawCanvas: UnrealEngineDelegate<(Canvas: Canvas, Instance: JavascriptEditorViewport) => void>;
	OnGetWidgetLocation: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => Vector>;
	OnGetWidgetRotation: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => Rotator>;
	OnGetWidgetMode: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => EJavascriptWidgetMode>;
	static Load(ResourceName: string): JavascriptEditorViewport;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport;
	static GetDefaultObject(): JavascriptEditorViewport;
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
	static C(Other: UObject | any): JavascriptEditorViewport;
}

declare class JavascriptEdViewport { 
	clone() : JavascriptEdViewport;
	static C(Other: UObject | any): JavascriptEdViewport;
	GetHitProxy(): JavascriptHitProxy;
	static GetHitProxy(Viewport: JavascriptEdViewport): JavascriptHitProxy;
}

declare class JavascriptEditorModeTools { 
	clone() : JavascriptEditorModeTools;
	static C(Other: UObject | any): JavascriptEditorModeTools;
	ActivateDefaultMode(): {Tools: JavascriptEditorModeTools};
	ActivateMode(InID?: string,bToggle?: boolean): {Tools: JavascriptEditorModeTools};
	DeactivateAllModes(): {Tools: JavascriptEditorModeTools};
	DeactivateMode(InID?: string): {Tools: JavascriptEditorModeTools};
	DestroyMode(InID?: string): {Tools: JavascriptEditorModeTools};
	EndTracking(Viewport: JavascriptEdViewport): boolean;
	EnsureNotInMode(ModeId?: string,ErrorMsg?: string,bNotifyUser?: boolean): {Tools: JavascriptEditorModeTools, $: boolean};
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
	static EnsureNotInMode(Tools?: JavascriptEditorModeTools,ModeId?: string,ErrorMsg?: string,bNotifyUser?: boolean): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsDefaultModeActive(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsModeActive(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsTracking(Tools: JavascriptEditorModeTools): boolean;
	static SetDefaultMode(Tools?: JavascriptEditorModeTools,DefaultID?: string): {Tools: JavascriptEditorModeTools};
	static StartTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
}

declare class JavascriptEditorMode { 
	clone() : JavascriptEditorMode;
	static C(Other: UObject | any): JavascriptEditorMode;
	GetCurrentWidgetAxis(): number;
	GetModeManager(): JavascriptEditorModeTools;
	SelectNone(): void;
	SetCurrentWidgetAxis(InAxis: number): void;
	static GetCurrentWidgetAxis(Mode: JavascriptEditorMode): number;
	static GetModeManager(Mode: JavascriptEditorMode): JavascriptEditorModeTools;
	static SelectNone(Mode: JavascriptEditorMode): void;
	static SetCurrentWidgetAxis(Mode: JavascriptEditorMode,InAxis: number): void;
}

declare type EJavascriptEditAction = 'Skip' | 'Process' | 'Halt' | 'EJavascriptEditAction_MAX';
declare var EJavascriptEditAction : { Skip:'Skip',Process:'Process',Halt:'Halt',EJavascriptEditAction_MAX:'EJavascriptEditAction_MAX', };
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
	static Load(ResourceName: string): JavascriptEdMode;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode;
	static GetDefaultObject(): JavascriptEdMode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode;
	Unregister(): void;
	Register(): void;
	static C(Other: UObject | any): JavascriptEdMode;
}

declare class JavascriptEdModeLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptEdModeLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdModeLibrary;
	static GetDefaultObject(): JavascriptEdModeLibrary;
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
	static EnsureNotInMode(Tools?: JavascriptEditorModeTools,ModeId?: string,ErrorMsg?: string,bNotifyUser?: boolean): {Tools: JavascriptEditorModeTools, $: boolean};
	static EndTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
	static DestroyMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static DeactivateMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static DeactivateAllModes(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static ActivateMode(Tools?: JavascriptEditorModeTools,InID?: string,bToggle?: boolean): {Tools: JavascriptEditorModeTools};
	static ActivateDefaultMode(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static C(Other: UObject | any): JavascriptEdModeLibrary;
}

declare class JavascriptInputEventStateLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptInputEventStateLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptInputEventStateLibrary;
	static GetDefaultObject(): JavascriptInputEventStateLibrary;
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
	static C(Other: UObject | any): JavascriptInputEventStateLibrary;
}

declare type EJSCheckBoxState = 'Unchecked' | 'Checked' | 'Undetermined' | 'EJSCheckBoxState_MAX';
declare var EJSCheckBoxState : { Unchecked:'Unchecked',Checked:'Checked',Undetermined:'Undetermined',EJSCheckBoxState_MAX:'EJSCheckBoxState_MAX', };
declare class JavascriptNotification extends UObject { 
	text: string;
	bUseImage: boolean;
	UImage: SlateBrush;
	FadeInDuration: number;
	FadeOutDuration: number;
	ExpireDuration: number;
	bUseThrobber: boolean;
	bUseSuccessFailIcons: boolean;
	bUseLargeFont: boolean;
	bFireAndForget: boolean;
	CheckBoxState: EJSCheckBoxState;
	CheckBoxStateChanged: UnrealEngineDelegate<(State: ECheckBoxState) => void>;
	CheckBoxText: string;
	Hyperlink: UnrealEngineDelegate<() => void>;
	HyperlinkText: string;
	bAllowThrottleWhenFrameRateIsLow: boolean;
	static Load(ResourceName: string): JavascriptNotification;
	static Find(Outer: UObject, ResourceName: string): JavascriptNotification;
	static GetDefaultObject(): JavascriptNotification;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptNotification;
	Success(): void;
	SetText(InText: string): void;
	Reset(): void;
	Pending(): void;
	Fire(): void;
	Fail(): void;
	Fadeout(): void;
	static C(Other: UObject | any): JavascriptNotification;
}

declare type EPropertyAccessResult = 'MultipleValues' | 'Fail' | 'Success' | 'EPropertyAccessResult_MAX';
declare var EPropertyAccessResult : { MultipleValues:'MultipleValues',Fail:'Fail',Success:'Success',EPropertyAccessResult_MAX:'EPropertyAccessResult_MAX', };
declare class JavascriptPropertyHandle { 
	clone() : JavascriptPropertyHandle;
	static C(Other: UObject | any): JavascriptPropertyHandle;
	CreatePropertyNameWidget(NameOverride: string,ToolTipOverride: string,bDisplayResetToDefault: boolean,bHideText: boolean,bHideThumbnail: boolean): JavascriptSlateWidget;
	CreatePropertyValueWidget(bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	GetChildHandle(Name: string): JavascriptPropertyHandle;
	GetMetaData(Key: string): string;
	GetProperty(): Property;
	GetValueAsFormattedString(OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	SetOnPropertyValueChanged(Custom: JavascriptPropertyCustomization): void;
	SetValueFromFormattedString(InValue: string): EPropertyAccessResult;
	static CreatePropertyNameWidget(Handle: JavascriptPropertyHandle,NameOverride: string,ToolTipOverride: string,bDisplayResetToDefault: boolean,bHideText: boolean,bHideThumbnail: boolean): JavascriptSlateWidget;
	static CreatePropertyValueWidget(Handle: JavascriptPropertyHandle,bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	static GetChildHandle(Parent: JavascriptPropertyHandle,Name: string): JavascriptPropertyHandle;
	static GetMetaData(Handle: JavascriptPropertyHandle,Key: string): string;
	static GetProperty(Handle: JavascriptPropertyHandle): Property;
	static GetValueAsFormattedString(Handle: JavascriptPropertyHandle,OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	static SetOnPropertyValueChanged(Handle: JavascriptPropertyHandle,Custom: JavascriptPropertyCustomization): void;
	static SetValueFromFormattedString(Handle: JavascriptPropertyHandle,InValue: string): EPropertyAccessResult;
}

declare class JavascriptDetailWidgetDecl { 
	clone() : JavascriptDetailWidgetDecl;
	static C(Other: UObject | any): JavascriptDetailWidgetDecl;
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
	static C(Other: UObject | any): JavascriptDetailWidgetRow;
	NameContent(): JavascriptDetailWidgetDecl;
	SetFilterString(InFilterString: string): void;
	ValueContent(): JavascriptDetailWidgetDecl;
	WholeRowContent(): JavascriptDetailWidgetDecl;
	static NameContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static SetFilterString(Row: JavascriptDetailWidgetRow,InFilterString: string): void;
	static ValueContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static WholeRowContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
}

declare class JavascriptPropertyTypeCustomizationUtils { 
	clone() : JavascriptPropertyTypeCustomizationUtils;
	static C(Other: UObject | any): JavascriptPropertyTypeCustomizationUtils;
}

declare class JavascriptDetailPropertyRow { 
	clone() : JavascriptDetailPropertyRow;
	static C(Other: UObject | any): JavascriptDetailPropertyRow;
	CustomWidget(bShowChildren: boolean): JavascriptDetailWidgetRow;
	static CustomWidget(Row: JavascriptDetailPropertyRow,bShowChildren: boolean): JavascriptDetailWidgetRow;
}

declare class JavascriptDetailChildrenBuilder { 
	clone() : JavascriptDetailChildrenBuilder;
	static C(Other: UObject | any): JavascriptDetailChildrenBuilder;
	AddChildContent(SearchString: string): JavascriptDetailWidgetRow;
	AddChildProperty(PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
	GenerateStructValueWidget(StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
	static AddChildContent(ChildBuilder: JavascriptDetailChildrenBuilder,SearchString: string): JavascriptDetailWidgetRow;
	static AddChildProperty(ChildBuilder: JavascriptDetailChildrenBuilder,PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
	static GenerateStructValueWidget(ChildBuilder: JavascriptDetailChildrenBuilder,StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
}

declare class JavascriptPropertyCustomization extends UObject { 
	PropertyTypeName: string;
	OnDestroy: UnrealEngineDelegate<(ID: number) => void>;
	OnCustomizeHeader: UnrealEngineDelegate<(Handle: JavascriptPropertyHandle, HeaderRow: JavascriptDetailWidgetRow, Utils: JavascriptPropertyTypeCustomizationUtils, ID: number) => void>;
	OnCustomizeChildren: UnrealEngineDelegate<(Handle: JavascriptPropertyHandle, ChildBuilder: JavascriptDetailChildrenBuilder, Utils: JavascriptPropertyTypeCustomizationUtils, ID: number) => void>;
	OnPropertyValueChanged: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): JavascriptPropertyCustomization;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyCustomization;
	static GetDefaultObject(): JavascriptPropertyCustomization;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyCustomization;
	Unregister(): void;
	Register(): void;
	static C(Other: UObject | any): JavascriptPropertyCustomization;
}

declare class JavascriptPropertyCustomizationLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptPropertyCustomizationLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyCustomizationLibrary;
	static GetDefaultObject(): JavascriptPropertyCustomizationLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyCustomizationLibrary;
	static WholeRowContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static ValueContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static SetValueFromFormattedString(Handle: JavascriptPropertyHandle,InValue: string): EPropertyAccessResult;
	static SetVAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EVerticalAlignment): void;
	static SetOnPropertyValueChanged(Handle: JavascriptPropertyHandle,Custom: JavascriptPropertyCustomization): void;
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
	static C(Other: UObject | any): JavascriptPropertyCustomizationLibrary;
}

declare class JavascriptRawMeshLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptRawMeshLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptRawMeshLibrary;
	static GetDefaultObject(): JavascriptRawMeshLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptRawMeshLibrary;
	static SetSectionInfo(StaticMesh: StaticMesh,LODIndex: number,SectionIndex: number,Info: MeshSectionInfo): void;
	static SaveRawMesh(StaticMesh: StaticMesh,SourceModelIndex: number,InMesh?: JavascriptRawMesh): {InMesh: JavascriptRawMesh};
	static LoadRawMesh(StaticMesh: StaticMesh,SourceModelIndex: number,OutMesh?: JavascriptRawMesh): {OutMesh: JavascriptRawMesh};
	static IsValidOrFixable(RawMesh: JavascriptRawMesh): boolean;
	static IsValid(RawMesh: JavascriptRawMesh): boolean;
	static GetWedgePosition(RawMesh: JavascriptRawMesh,WedgeIndex: number): Vector;
	static GetSectionInfo(StaticMesh: StaticMesh,LODIndex: number,SectionIndex: number): MeshSectionInfo;
	static Empty(RawMesh?: JavascriptRawMesh): {RawMesh: JavascriptRawMesh};
	static CompactMaterialIndices(RawMesh?: JavascriptRawMesh): {RawMesh: JavascriptRawMesh};
	static Build(StaticMesh: StaticMesh): void;
	static C(Other: UObject | any): JavascriptRawMeshLibrary;
}

declare class JavascriptScrubControlPanel extends Widget { 
	OnClick_Forward_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Forward_Step_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Forward_End_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Backward_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Backward_Step_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Backward_End_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_ToggleLoop_Delegate: UnrealEngineMulticastDelegate<() => void>;
	SetPlaybackPosition_Delegate: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): JavascriptScrubControlPanel;
	static Find(Outer: UObject, ResourceName: string): JavascriptScrubControlPanel;
	static GetDefaultObject(): JavascriptScrubControlPanel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptScrubControlPanel;
	SetViewRange(NewMin: number,NewMax: number): void;
	SetSumFrames(NewSumFrames: number): void;
	SetPlaybackPosition(NewTime: number): void;
	SetLooping(NewbLooping: boolean): void;
	SetFramesPerSecond(NewFramesPerSecond: number): void;
	IsLooping(): boolean;
	GetViewRangeMin(): number;
	GetViewRangeMax(): number;
	GetTotalSequenceLength(): number;
	GetTotalFrameCount(): any;
	GetPlaybackPosition(): number;
	GetFramesPerSecond(): number;
	static C(Other: UObject | any): JavascriptScrubControlPanel;
}

declare type EPropertyEditorNameAreaSettings = 'HideNameArea' | 'ObjectsUseNameArea' | 'ActorsUseNameArea' | 'ComponentsAndActorsUseNameArea' | 'EPropertyEditorNameAreaSettings_MAX';
declare var EPropertyEditorNameAreaSettings : { HideNameArea:'HideNameArea',ObjectsUseNameArea:'ObjectsUseNameArea',ActorsUseNameArea:'ActorsUseNameArea',ComponentsAndActorsUseNameArea:'ComponentsAndActorsUseNameArea',EPropertyEditorNameAreaSettings_MAX:'EPropertyEditorNameAreaSettings_MAX', };
declare class PropertyEditor extends Widget { 
	OnChange: UnrealEngineMulticastDelegate<(ParameterName: string) => void>;
	bUpdateFromSelection: boolean;
	bLockable: boolean;
	bAllowSearch: boolean;
	bHideSelectionTip: boolean;
	NameAreaSettings: EPropertyEditorNameAreaSettings;
	static Load(ResourceName: string): PropertyEditor;
	static Find(Outer: UObject, ResourceName: string): PropertyEditor;
	static GetDefaultObject(): PropertyEditor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyEditor;
	SetObjects(Objects: UObject[],bForceRefresh: boolean,bOverrideLock: boolean): void;
	SetObject(UObject: UObject,bForceRefresh: boolean): void;
	static C(Other: UObject | any): PropertyEditor;
}

declare var Context : JavascriptContext;

declare var Root : JavascriptEditorTick;

