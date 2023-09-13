export interface GetCSGOResponse {
    id:string,
    _v:string ,
    teams:Array<Teams>;
    title:string,
    finished:boolean,
    games:Array<Games> ;
    format:string ,
    started:false ,
    startedAt:Date 
}
export interface Teams {
    deaths:number,
    headshots:number ,
    kills:number ,
    name:string ,
    players:Array<Players> ,
    score:number ,
    teamkills:number ,
    won:boolean ,
    killAssistsGiven:number ,
    killAssistsReceived:number ;
    killAssistsReceivedFromPlayer:Array<PlayerResponse>
}
export interface Players {
    deaths:number ,
    headshots:number ,
    player_id:string ,
    killAssistsGiven:number ,
    killAssistsReceived:number ,
    killsAssistedFromPlayer:Array<PlayerResponse>;
    kills:number ,
    name:string ,
    participationStatus:string;
    structuresCaptured:number,
    structuresDestroyed:number
}
export interface PlayerResponse {
    player_id:string
    killAssist:number ;
}
export interface Games {
    scene:Array<Scene>
}
export interface Scene {
    name:string
}
export interface Map {
    mapName:string 
}
export interface GetDotaResponse{
   teams:Array<Teams> 
   games:Array<Games>
}