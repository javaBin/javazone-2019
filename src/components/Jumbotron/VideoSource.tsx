import React, { lazy } from 'react';

export interface VideoSourceProps {
    canPlayWebm: boolean;
}

export default function VideoSource(props: VideoSourceProps) {
    return props.canPlayWebm
        ? <source src="timelapse.webm" type="video/webm" />
        : <source src="timelapse.mp4" type="video/mp4" />
}