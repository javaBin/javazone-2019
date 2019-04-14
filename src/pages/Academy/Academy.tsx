import React from 'react';
import PageBanner from '../../components/PageBanner/PageBanner';
import { Section } from '../../components/Section/Section';
import { CenterSection } from '../../components/CenterSection/CenterSection';
import { AcademyProgram } from '../../components/AcademyProgram/AcademyProgram';
import { academies } from '../../core/data';
import { TextBlock } from '../../components/Blocks/TextBlock';
import styled from 'styled-components';
import { Link } from '../../components/Link/Link';

export function AcademyPage() {
    return (
        <>
            <PageBanner header="JavaZone Academy" subHeader="A free taste of JavaZone for IT-students!" color="blue" />
            <CenterSection>
                <TextBlock title="Come join us in february">
                    <p>
                        Are you a student? Interested in IT? Come join us for JavaZone Academy. 
                        JavaZone Academy is a free event for students in Norway, where we invite 
                        you to take part in the JavaZone experience.
                    </p>
                    <p>
                        We will bring great talks, free food, mingling, and great partners to <strong>Oslo</strong>, <strong>Bergen</strong>, and <strong>Tromsø</strong>. 
                        Join us for a great evening!
                    </p>
                    <p>
                        A detailed program and more information will be soon posted here. Watch this space!
                    </p>
                </TextBlock>
                <TextBlock title="How do i register?">
                    <p>
                    Fill in the form by clicking the "Registration" link below for your preferred town. We’ll contact you as soon as possible with information about whether you got a spot. The events are usually quite popular, so make sure to register as soon as possible.
                    </p> 
                </TextBlock>
            </CenterSection>
            <Section full>
                <TextBlock>
                    <Formats>
                        <FormatContent grid="oslo" {...academies[0]} />
                        <FormatContent grid="bergen" {...academies[1]} />
                        <FormatContent grid="tromso" {...academies[2]} />
                    </Formats>
                </TextBlock>
            </Section>
            {/* <Section>
                <TextBlock title="Program, speakers and partners">
                    <AcademyProgram program={academies.map(academy => academy.program)} partners={academies.map(city => city.partners)} />
                </TextBlock>
            </Section> */}
        </>
    )
}

const Formats = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 1.5rem;
    grid-template-areas: 'oslo bergen tromso';
    @media only screen and (max-width: 1200px) {
        grid-template-areas:
            'oslo'
            'bergen'
            'tromso';
    }
`

const FormatContent = styled(Session)`
    box-sizing: border-box;
    grid-area: ${(props: any) => props.grid};
    border-radius: 6px;
    width: 100%;
    height: auto;
    color: white;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 5px solid rgba(255, 255, 255, 0.5);
    background: ${(props: any) => props.theme.colors['green400']};
    & > #text {
        text-align: left;
    }
    & > #actions {
        display: flex;
        width: 100%;
        flex-direction: row;
        height: 100%;
        justify-content: center;
        align-items: flex-end;
        & > a {
            margin-right: 2rem;
        }
        @media only screen and (max-width: 450px) {
            flex-direction: column;
            align-items: flex-start;
            & > a {
                margin: 2rem 0 0 0;
                width: 100%;
            }
        }
    }
    & > h1 {
        font-size: 3rem;
        margin: 0;
    }
    & > h3 {
        font-size: 1.5rem;
        margin: 1rem;;
    }
`

interface SessionProps {
    children?: React.ReactNode;
    className: string;
    name: string;
    location: string;
    locationUrl: string;
    date: string;
    slots: number;
    registrationUrl: string;
    imageUrl: string;
    partners: string[];
    program: any;
}

function Session(props: SessionProps) {
    return (
        <div className={props.className}>
            <h1>{props.name}</h1>
            <h3>{props.location}</h3>
            <h3>{props.date}</h3>
            <h3>{props.slots} student slots</h3>
            <div id="actions">
                <Link color="pink" external url={props.registrationUrl}>Register</Link>
            </div>
        </div>  
    )
}
