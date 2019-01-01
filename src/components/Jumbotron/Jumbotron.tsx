import React, { lazy, Suspense } from 'react';
import styles from './Jumbotron.module.scss';
import { useCanPlayVideoType } from '../../core/hooks/UseCanPlayVideoType';

const VideoSource = lazy(() => import('./VideoSource'));

interface JumbotronProps {
    title?: string;
    subTitle?: string;
}

export function Jumbotron(props: JumbotronProps) {

    const canPlayWebm = useCanPlayVideoType('webm');

    return (
        <div className={styles.jumbotron}>
                <Suspense fallback={<img src="splash.jpg" />}>
                    <video autoPlay muted loop id="backgroundLapse">
                        <VideoSource canPlayWebm={canPlayWebm} />
                        Your browser does not support HTML5 video.
                    </video>
                </Suspense>
            <div className={styles.jumbotronContent}>
                <h1>{props.title}</h1>
                <h2>{props.subTitle}</h2>
            </div>
        </div>
    )
}