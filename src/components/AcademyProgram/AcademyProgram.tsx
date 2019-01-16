import React from 'react';
import styles from './AcademyProgram.module.scss';
import { ButtonGroup, ActiveButton } from '../Button/ButtonGroup';

interface AcademyProgramProps {
    lol?: string;
}

export function AcademyProgram(props: AcademyProgramProps) {
    function activeButton(button: ActiveButton) {
        console.log('her?', button);
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