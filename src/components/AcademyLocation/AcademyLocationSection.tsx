import React from 'react';
import classnames from 'classnames';
import styles from './AcademyLocationSection.module.scss';
import { AcademyModel } from '../../core/models/Academy';
import { Button } from '../Button/Button';

interface AcademyLocationSectionProps {
    academies: AcademyModel[]
}

export function AcademyLocationSection(props: AcademyLocationSectionProps) {
    return (
        <div className={styles.section}>
            <div className={styles.locations}>
                {props.academies.map(academy => {
                    return <AcademyLocation {...academy} />
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
                <h1>{academy.date.toDateString()}</h1>
                <span>{academy.location}</span>
                <span>{academy.slots}</span>
                <Button>Registration</Button>
            </div>
        </div>
    )
}