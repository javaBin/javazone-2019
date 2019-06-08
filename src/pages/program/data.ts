export class Session {
    constructor(
      readonly abstract: string,
      readonly confrenceId: string,
      readonly endTime: string,
      readonly endTimeZulu: string,
      readonly format: string,
      readonly intendedAudience: string,
      readonly language: string,
      readonly length: string,
      readonly level: string,
      readonly room: string,
      readonly sessionId: string,
      readonly speakers: Speaker[],
      readonly startTime: string,
      readonly startTimeZulu: string,
      readonly title: string,
      readonly video: string
    ){}
}

export class Speaker {
    constructor(
        readonly bio: string,
        readonly name: string,
        readonly pictureId: string,
        readonly pictureUrl: string,
        readonly twitter: string
    ){}
}

export enum LoadingState {ERROR, LOADING, LOADED }

function transformSession(s: any): Session {
    return new Session(
        s.abstract,
        s.confrenceId,
        s.endTime,
        s.endTimeZulu,
        s.format,
        s.intendedAudience,
        s.language,
        s.length,
        s.level,
        s.room,
        s.sessionId,
        s.speakers.map((sp: any) => new Speaker(sp.bio, sp.name, sp.pictureId, sp.pictureUrl, sp.twitter)),
        s.startTime,
        s.startTimeZulu,
        s.title,
        s.video
    );
}

//cheesy cache
export let sessions: Promise<Session[]> | undefined = undefined;

export function getSessions(): Promise<Session[]> {

    if (sessions) {
        return sessions;
    }

    sessions = fetch('https://sleepingpill.javazone.no/public/allSessions/javazone_2019')
        .then(response => response.json())
        .then(json => json.sessions)
        .then((sessions: any[]) => sessions.map(s => transformSession(s)))

    return sessions;
}

const FAVORITES_KEY = 'favorites';

export function getFavorites(): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
        const favorites = localStorage.getItem(FAVORITES_KEY) || '[]';
        resolve(JSON.parse(favorites))
    })
}

export function setFavorites(favorites: string[]) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
}
