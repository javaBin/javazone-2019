import * as React from 'react';
import PageBanner from "../../components/PageBanner/PageBanner";
import {Section} from "../../components/Section/Section";
import styled from 'styled-components';
import { TextBlock, AlignedParagraph } from '../../components/Blocks/TextBlock';
import { kidsProgram } from '../../core/data/Kids.data';
import { Link } from '../../components/Link/Link';

export function KidsPage() {
    return (
        <>
            <PageBanner header="JavaZone Kids" subHeader="En smakebit på JavaZone for framtidens utviklere" color="blue" />
            <Section>
                <TextBlock title="Tre sesjoner: en smakebit på voksenlivet">
                    <AlignedParagraph align="center">
                        <p>
                            JavaZone inviterer alle, og spesielt deltakere på JavaZone, til å ta med seg sine barn på 
                            <br />
                            <br />
                            <strong><em>Teknologihuset – søndag 24. mars</em></strong>
                            <br />
                            <br />
                            For å gi dem en smakebit på voksenlivet.
                            <br />  
                            Vi kjører 3 parallelle sesjoner, slik at vi har noe for både de aller minste og de litt eldre barna.
                            <br />
                        </p>
                        <p>
                            Arrangementet er gratis for alle, men har begrenset antall plasser.
                        </p>
                    </AlignedParagraph>
                </TextBlock>
                <TextBlock title="Parktisk informasjon">
                    <AlignedParagraph align="left">
                        <h1>Tid & Sted</h1>
                        <p>
                            Arrangementet finner sted på Teknologihuset <strong><em>søndag 24. mars</em></strong> fra klokken 12.00 til 15.00. Vi serverer enkel mat underveis. Det er viktig at du som forelder også setter av tid til å være til stede hele perioden. Vi lager en egen "foreldresone" med kaffe.
                        </p>
                        <h1>Påmelding</h1>
                        <p>
                            Vi har et begrenset antall plasser, derfor er det viktig at du melder dine barn på arrangementet. Påmelding er åpen fra <strong><em>fredag 1. mars - kl 12:00</em></strong>.
                        </p>
                        <p>                   
                            Det er også viktig om du sier ifra eller melder deg av om du blir forhindret fra å delta, da det pleier å være ventelister på alle våre kurs.
                        </p>
                        <h1>Forberedelser</h1>
                        <p>
                            Noen av kursene vil kreve litt forberedelse, det vil bli sendt ut egen informasjon om dette pr. mail.
                        </p>
                        <h1>Tre parallelle sesjoner</h1>
                        <p>
                            Vi kjører 3 parallelle sesjoner. Du kan lese mer om de ulike sesjonene under, og melde dere på den dere ønsker å delta på. 
                        </p>
                        <p>                    
                            Har du flere barn i forskjellige aldere som ønsker å være med på ulike sesjoner, så kan du melde deg på flere sesjoner – Sørg i så fall for å melde på riktig antall barn til hver sesjon.
                        </p>
                        <p>
                            <strong><em>Påmeldingen åpner 1. mars kl. 12.00.</em></strong>
                        </p>
                    </AlignedParagraph>
                </TextBlock>
            </Section>
            <Section full>
                <TextBlock title="Sesjoner">
                    <Formats>
                        <FormatContent grid="turtle" {...kidsProgram[0]} />
                        <FormatContent grid="robot" {...kidsProgram[1]} />
                        <FormatContent grid="processing" {...kidsProgram[2]} />
                    </Formats>
                </TextBlock>
            </Section>
            <Section>
                <TextBlock title="Vi sees på teknologihuset søndag 24. mars!">
                </TextBlock>
            </Section>
        </>
    )
}

const Formats = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 1.5rem;
    grid-template-areas: 'turtle robot processing';
    @media only screen and (max-width: 1200px) {
        grid-template-areas:
            'turtle'
            'robot'
            'processing';
    }
`

const FormatContent = styled(Session)`
    box-sizing: border-box;
    grid-area: ${(props: any) => props.grid};
    border-radius: 6px;
    width: 100%;
    height: auto;
    color: black;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 5px solid rgba(255, 255, 255, 0.5);
    background: ${(props: any) => props.theme.colors['warm100']};
    & > #text {
        text-align: left;
    }
    & > #actions {
        display: flex;
        width: 100%;
        flex-direction: row;
        height: 100%;
        justify-content: flex-start;
        align-items: flex-end;
        & > a {
            margin-right: 2rem;
        }
        @media only screen and (max-width: 450px) {
            flex-direction: column;
            align-items: flex-start;
            & > a {
                margin: 0;
                width: 100%;
            }
            & > a:first-child {
                margin-bottom: 1rem;
            }
        }
    }
    & > #lol {
        min-width: 15rem;
        min-height: 15rem;
        position: relative;
        overflow: hidden;
        & > img {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-right: -50%;
            transform: translate(-50%, -50%);
        }
    }
    & > h1 {
        font-size: 2rem;
    }
`

interface SessionProps {
    children?: React.ReactNode;
    className: string;
    title: string;
    desc: string;
    recommendedAge: string,
    image: string,
    moreInfoLink: string,
    registrationLink: string,
    speakers: string,
    gear: string
}

function Session(props: SessionProps) {
    return (
        <div className={props.className}>
            <div id="lol">
                <img src={props.image} />
            </div>
            <h1>{props.title}</h1>
            <h3>{props.speakers}</h3>
            <div id="text">
                <div dangerouslySetInnerHTML={{__html: props.desc}} />
                <p>
                    <strong>Utstyr:</strong> {props.gear}
                </p>
                <p>
                    <strong>Anbefalt alder:</strong> {props.recommendedAge}
                </p>
            </div>
            <div id="actions">
                {props.moreInfoLink ? <Link color="blue" external url={props.moreInfoLink}>Mer info</Link> : null}
                <Link color="blue" external url={props.registrationLink}>Påmelding</Link>
            </div>
        </div>  
    )
}
