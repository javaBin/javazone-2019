import React from 'react';
import styles from './PageBanner.module.scss';

export interface PageBannerProps {
    header: string;
    subHeader?: string;
}

export function PageBanner(props: PageBannerProps) {
    return (
        <section className={styles.pageBanner}>
            <h1>{props.header}</h1>
            <h2>{props.subHeader}</h2>
        </section>
    )
}