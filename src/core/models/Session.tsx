import { Speaker } from './Speaker';

export interface Session {
    sessionId: string;
    title: string;
    room: string;
    conferenceId: string;
    intendedAudience: string;
    endTimeZulu: Date;
    level: string;
    length: number;
    format: string;
    abstract: string;
    speakers: Speaker[];
    startTime: Date;
    endTime: Date;
}