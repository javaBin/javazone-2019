import { ScheduleSlot } from "./ScheduleSlot";

export interface AcademyProgram {
    title: string;
    sponsors: {name: string, url: string}[];
    program: {title: string, time: string, speaker?: string}[];
}