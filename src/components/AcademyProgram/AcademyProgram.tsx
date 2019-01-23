import React, { useState } from 'react';
import styles from './AcademyProgram.module.scss';
import { ButtonGroup, ActiveButton } from '../Button/ButtonGroup';
import { AcademyProgram as Program } from '../../core/models/AcademyProgram';

interface AcademyProgramProps {
    program: Program[];
}

function ProgramSlot(props: {title: string, time: string, speaker?: string}) {
    return (
        <div className={styles.program}>
            <div className={styles.time}>
                <h2>{props.time}</h2>
            </div>
            <div className={styles.description}>
                <span>{props.title}</span>
                <span className={styles.speaker}>{props.speaker}</span>
            </div>
        </div>
    )
}

function Partner(props: {name: string, url: string}) {
    const partnerImage = `https://storage.googleapis.com/javazone-assets/logos/${props.name.toLocaleLowerCase()}.svg`;
    return (
        <a target="_blank" href={props.url}>
            <img className={styles.partner} src={partnerImage} />
        </a>
    )
}

export function AcademyProgram(props: AcademyProgramProps) {
    const [selectedCity, setSelectedCity] = useState({name: '', key: -1} as ActiveButton)
    const [selectedProgram, setSelectedProgram] = useState({} as Program);
    function activeButton(button: ActiveButton) {
        setSelectedCity(button);
        setSelectedProgram(props.program[button.key]);
    }
    return (
        <div>
            <ButtonGroup activeButton={(button: ActiveButton) => activeButton(button)}>
                <button>Oslo</button>
                <button>Bergen</button>
                <button>Tromsø</button>
            </ButtonGroup>
            {!!selectedCity.name
                ? <div className={styles.container}>
                    {selectedProgram.sponsors.map(sponsor => {
                        return <Partner key={sponsor.name} name={sponsor.name} url={sponsor.url} />
                    })}
                    {selectedProgram.program.map((slot, index) => {
                        return <ProgramSlot key={index} title={slot.title} time={slot.time} speaker={slot.speaker} />
                    })}
                </div>
                : null
            }
        </div>
    )
}