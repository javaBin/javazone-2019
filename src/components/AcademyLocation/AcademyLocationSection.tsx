import React from 'react';
import classnames from 'classnames';
import styles from './AcademyLocationSection.module.scss';
import { AcademyModel } from '../../core/models/Academy';
import { Button } from '../Button/Button';
import Link from '../Link/Link';

interface AcademyLocationSectionProps {
    academies: AcademyModel[]
}

export function AcademyLocationSection(props: AcademyLocationSectionProps) {
    return (
        <div className={styles.section}>
            <div className={styles.locations}>
                {props.academies.map(academy => {
                    return <AcademyLocation key={academy.name} {...academy} />
                })}
            </div>
        </div>
    )
}

function AcademyLocation(academy: AcademyModel) {
    const classes = classnames(
        {[styles.oslo]: academy.name === 'Oslo'},
        {[styles.bergen]: academy.name === 'Bergen'},
        {[styles.tromso]: academy.name === 'Tromsø'},
    )
    return (
        <div className={styles.card}>
            <div className={styles.imageBox}>
                <h1>{academy.name}</h1>
                <img className={classes} src={academy.imageUrl} />
            </div>
            <div className={styles.contentBox}>
                <h1>{academy.date}</h1>
                <a target="_blank" className={styles.location} href={academy.locationUrl}>{academy.location}</a>
                <span className={styles.slots}>{academy.slots} students</span>
                <Link external url="https://javazone.no">Registration</Link>
            </div>
        </div>
    )
}