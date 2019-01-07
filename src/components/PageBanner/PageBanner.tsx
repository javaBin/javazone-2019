import React from 'react';
import styles from './PageBanner.module.scss';

export interface PageBannerProps {
    header: string;
    subHeader?: string;
}

export function PageBanner(props: PageBannerProps) {
    return (
        <section className={styles.pageBanner} style={{backgroundImage: 'url(https://storage.googleapis.com/javazone-public/images/partners_2.jpg)'}}>
            <div className={styles.pageBannerHeader}>
                <h1>{props.header}</h1>
                <h2>{props.subHeader}</h2>
            </div>
        </section>
    )
}