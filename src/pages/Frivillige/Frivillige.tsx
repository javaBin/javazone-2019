import React from 'react';
import PageBanner from '../../components/PageBanner/PageBanner';
import {Section} from '../../components/Section/Section';
import { academies } from '../../core/data';
import { TextBlock } from '../../components/Blocks/TextBlock';
import styled from 'styled-components/macro';
import { Link } from '../../components/Link/Link';
import { InlineLink } from '../../components/InlineLink/InlineLink';

import styles from './Frivillige.module.scss';
import { ImageSection } from '../../components/ImageSection/ImageSection';

export function FrivilligePage() {
    const themeColor = 'blue';
    const pageArt = `${process.env.PUBLIC_URL}/page-frivillige.svg`;
    return (
        <>
            <PageBanner header="Bli frivillig på JavaZone" subHeader="Meld deg på i dag!" color={themeColor} artPath={pageArt} />
            <Section>
                <TextBlock color={themeColor} title="Hva er JavaZone?">
                    <p>
                        JavaZone er verdens største community-drevne Java-konferanse.
                    </p>
                    <p>
                        Hvert år strømmer over 3100 utviklere til Oslo for å delta på JavaZone. I tillegg kommer nærmere 200 foredragsholdere fra hele verden, pluss mennesker fra over 50 ulike partnere.
                    </p>
                </TextBlock>
                <TextBlock color={themeColor} title="Hvem leter vi etter?">
                    <p>
                        Har du lyst til å bidra til at disse menneskene skal få en fantastisk opplevelse, og også få ta del i dette selv?<br />
                        Er du student høsten 2019?
                    </p>
                    <p>
                        Perfekt! Du er akkurat den vi leter etter! <br />
                        Søk som frivillig på JavaZone 2019, og bli med å hjelpe oss å lage tidenes beste JavaZone!
                    <br />
                    </p>
                    <p>
                        <b>PS:</b> JavaZone drives av javaBin, som i tillegg til denne konferansen, også jevnlig arrangerer kule meetups over hele landet.
                        Så hvis du trives som frivillig på JavaZone, er det bare å slenge seg på et javaBin-arrangement!
                        Informasjon om neste meetup finner du<InlineLink external url="https://java.no">her</InlineLink>:)
                    </p>
                    <p>
                        <br />
                        <Link color="orange" external url="http://bit.ly/jzf2019">Meld deg på som frivillig!</Link>
                    </p>
                </TextBlock>
            </Section>
            <ImageSection bottom imageName="2018/180912_JavaZone_0026" />
            <Section>
                <TextBlock color={themeColor} title="Ofte Stilte Spørsmål (FAQ)">
                    <br />
                    <ul className={styles.frivillig__questions}>
                        <li className={styles.frivillig__question}>
                            <div className={styles.frivillig__header}>Hvem kan bli frivillig på JavaZone?</div>
                            <div className={styles.frivillig__answer}>Alle studenter som behersker norsk og engelsk flytende kan bli frivillige på JavaZone. Så lenge du vil gjøre en innsats, så er du hjertelig velkommen til å søke!</div>
                        </li>
                        <li className={styles.frivillig__question}>
                            <div className={styles.frivillig__header}>Hva skal jeg gjøre som frivillig?</div>
                            <div className={styles.frivillig__answer}>Det vil være en del ulike oppgaver, og du kan blant annet være salvakt, ha ansvar for info-stand eller opp- og nedrigging. Nærmere informasjon rundt oppgavene vil gis under opplæringsmøtet i forkant av konferansen. Vi vil prøve å dele ut vakter og arbeidoppgaver tilpasset dine ønsker og interesser.</div>
                        </li>
                        <li className={styles.frivillig__question}>
                            <div className={styles.frivillig__header}>Hvor mange frivillige bidrar på JavaZone?</div>
                            <div className={styles.frivillig__answer}>Hvert år deltar over 50 frivillige på JavaZone. Interessen for dette er stor, så dessverre får ikke alle søkere plass. Men ikke la dette hindre deg i å søke, prøv da vel!</div>
                        </li>
                        <li className={styles.frivillig__question}>
                            <div className={styles.frivillig__header}>Får jeg med meg noe faglig som frivillig?</div>
                            <div className={styles.frivillig__answer}>Å være frivillig på JavaZone er litt som å være frivillig på en musikkfestival, bare mer nerdete! Du får ca. 50% fri, og kan da gå på foredrag, spise god mat og snakke med kule folk.</div>
                        </li>
                        <li className={styles.frivillig__question}>
                            <div className={styles.frivillig__header}>Hva med reise hvis jeg ikke bor i Oslo?</div>
                            <div className={styles.frivillig__answer}>JavaZone dekker ikke reise eller overnatting for frivillige. Men erfaringsmessig så er det mange studiesteder som velger å gi reisestøtte. Spør derfor instituttet/skolen din om dette.</div>
                        </li>
                        <li className={styles.frivillig__question}>
                            <div className={styles.frivillig__header}>Får jeg bli med på AweZone?</div>
                            <div className={styles.frivillig__answer}>Selvsagt får du det! JavaZone er ikke det samme uten! Her får du se de kuleste bandene og snakke med de beste folka i IT-bransjen! Ingen jobbing på kvelden – bare fest og moro =)</div>
                        </li>
                        <li className={styles.frivillig__question}>
                            <div className={styles.frivillig__header}>Når må jeg møte opp som frivillig?</div>
                            <div className={styles.frivillig__answer}>Det er oppmøte i Oslo Spektrum kl. 19:00 tirsdag 10. september for opplæring, noen oppgaver, mat og omvisning i lokalene. JavaZone er ferdig kl. 18 på torsdag 12. september. Da rigger vi ned, og deretter går vi videre for mat og drikke. Vi spanderer :) Detaljer blir sendt ut til de som blir tatt opp som frivillige.</div>
                        </li>
                        <li className={styles.frivillig__question}>
                            <div className={styles.frivillig__header}>Når er søknadsfristen?</div>
                            <div className={styles.frivillig__answer}>Fristen for å søke er 3. juni, og du vil få svar på søknaden etter dette. Dersom du melder deg på etter fristen er gått ut, vil du havne på venteliste og du vil da få mail så snart frivillig-påmeldingen for neste JavaZone åpner.</div>
                        </li>
                        <li className={styles.frivillig__question}>
                            <div className={styles.frivillig__header}>I don’t speak Norwegian… What about me?</div>
                            <div className={styles.frivillig__answer}>Being a volunteer at JavaZone requires you to be fluent in both Norwegian and English. This is because you are one of the main goto-people for 3100 guests.</div>
                        </li>
                        <li className={styles.frivillig__question}>
                            <div className={styles.frivillig__header}>Spørsmål?</div>
                            <div className={styles.frivillig__answer}>Hvis du skulle ha noen spørsmål som ikke er besvart her, ta gjerne kontakt de frivilligansvarlige på<InlineLink url="mailto:student@java.no">student@java.no</InlineLink>!</div>
                        </li>
                    </ul>
                </TextBlock>
            </Section>
            <Section>
                <TextBlock color={themeColor} title="Bli med da vel!">
                    <p>
                        <Link color="orange" external url="http://bit.ly/jzf2019">Meld deg på som frivillig!</Link>
                        <br />
                    </p>
                </TextBlock>
            </Section>
        </>
    )
}


const Formats = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 1.5rem;
    grid-template-areas: 'lightning presentation workshop';
    @media only screen and (max-width: 900px) {
        grid-template-areas:
            'lightning'
            'presentation'
            'workshop';
    }
`

const FormatContent = styled(Format)`
    box-sizing: border-box;
    grid-area: ${(props: any) => props.grid};
    border-radius: 6px;
    width: 100%;
    height: auto;
    color: ${(props: any) => props.theme.colors['orange400']};
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 5px solid rgba(255, 255, 255, 0.5);
    background: ${(props: any) => props.theme.colors['orange100']};
    & > img {
        width: 3rem;
    }
    & > h1 {
        font-size: 2.4rem;
    }
    & > h3 {
        font-size: 1.4rem;
    }
`

interface FormatProps {
    children?: React.ReactNode;
    className: string;
    title: string;
    icon: string;
    description: string;
    length: string;
}

function Format(props: FormatProps) {
    return (
        <div className={props.className}>
            <img src={props.icon} />
            <h1>{props.title}</h1>
            <h3>{props.length}</h3>
            <p>{props.description}</p>
        </div>
    )
}
