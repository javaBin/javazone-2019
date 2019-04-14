import React from 'react';
import styles from './Section.module.scss';

interface SectionProps {
    header?: React.ReactNode;
    children?: React.ReactNode;
}

export function Section(props: SectionProps) {
    return (
        <>
            <div className={styles.section}>
                <div className={styles.container}>
                    {props.header}
                    {props.children}
                </div>
            </div>
        </>
    )
}