import React, { useState } from 'react';
import styles from './AcademyProgram.module.scss';
import { ButtonGroup, ActiveButton } from '../Button/ButtonGroup';

interface AcademyProgramProps {
    lol?: string;
}

export function AcademyProgram(props: AcademyProgramProps) {
    const [selectedCity, setSelectedCity] = useState({name: '', key: -1} as ActiveButton)
    function activeButton(button: ActiveButton) {
        setSelectedCity(button);
    }
    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <ButtonGroup activeButton={(button: ActiveButton) => activeButton(button)}>
                    <button>Oslo</button>
                    <button>Bergen</button>
                    <button>Tromsø</button>
                </ButtonGroup>
                <div hidden className={styles.program}>
                </div>
            </div>
        </div>
    )
}