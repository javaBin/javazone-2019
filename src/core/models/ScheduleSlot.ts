import { Speaker } from "./Speaker";


export interface ScheduleSlot {
    title: string;
    speaker?: string;
    duration?: number;
    time: string;
}