import React from 'react';
import styles from './Jumbotron.module.scss';
import { useCanPlayVideoType } from '../../core/hooks/UseCanPlayVideoType';

interface JumbotronProps {
    title?: string;
    subTitle?: string;
}

export function Jumbotron(props: JumbotronProps) {

    const canPlayWebm = useCanPlayVideoType('webm');

    function renderSupportedVideoSource() {
        return (
            canPlayWebm 
                ? <source src="timelapse.webm" type="video/webm" />
                : <source src="timelapse.mp4" type="video/mp4" />
        )
    }

    return (
        <div className={styles.jumbotron}>
            <video autoPlay muted loop id="backgroundLapse">
                {renderSupportedVideoSource()}
                Your browser does not support HTML5 video.
            </video>
            <div className={styles.jumbotronContent}>
                <h1>{props.title}</h1>
                <h2>{props.subTitle}</h2>
            </div>
        </div>
    )
}