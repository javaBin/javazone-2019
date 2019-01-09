import React from 'react';
import styles from './PageBanner.module.scss';

export interface PageBannerProps {
    header: string;
    subHeader: string;
    imageName: string;
}

export function PageBanner(props: PageBannerProps) {
    const imagePath = `url(https://storage.googleapis.com/javazone-static/images/${props.imageName}.jpg)`;
    return (
        <section className={styles.pageBanner} style={{backgroundImage: imagePath}}>
            <div className={styles.pageBannerHeader}>
                <h1>{props.header}</h1>
                <h2>{props.subHeader}</h2>
            </div>
        </section>
    )
}