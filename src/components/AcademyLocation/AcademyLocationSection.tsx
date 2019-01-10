import React from 'react';
import styles from './AcademyLocationSection.module.scss';
import { AcademyModel } from '../../core/models/Academy';

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
    return (
        <h1>{academy.location}</h1>
    )
}