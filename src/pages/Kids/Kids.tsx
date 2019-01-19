import * as React from 'react';
import {PageBanner} from "../../components/PageBanner/PageBanner";
import {Seperator} from "../../components/Seperator/Seperator";
import {CenterSection} from "../../components/CenterSection/CenterSection";
import {Section} from "../../components/Section/Section";

export function Kids() {
    return (
        <>
            <PageBanner header="JavaZone Kids" subHeader="En smakebit på JavaZone for framtidens utviklere" imageName="kids" />
            <CenterSection>
                <p>
                    JavaZone inviterer alle, og spesielt deltakere på JavaZone, til å ta med seg sine barn på Teknologihuset søndag 24. mars for å gi dem en smakebit på voksenlivet. Vi kjører 3 parallelle sesjoner, slik at vi har noe for både de aller minste og de litt eldre barna.
                </p>
            </CenterSection>
            <Seperator />
            <CenterSection header={<h1>Praktisk informasjon</h1>}/>
            <Section header={<h1>Tid & Sted</h1>}>
                <p>
                    Arrangementet finner sted på Teknologihuset søndag 9. september fra klokken 12.00 til 15.00. Vi serverer enkel mat underveis. Det er viktig at du som forelder også setter av tid til å være til stede hele perioden. Vi lager en egen "foreldresone" med kaffe.
                </p>
            </Section>
            <Section header={<h1>Påmelding</h1>}>
                <p>
                    Vi har et begrenset antall plasser, derfor er det viktig at du melder dine barn på arrangementet. Påmelding er åpen fra torsdag 9. august.
                </p>
            </Section>
            <Section header={<h1>Forberedelser</h1>}>
                <p>
                    Noen av kursene vil kreve litt forberedelse, det vil bli sendt ut egen informasjon om dette pr. mail.
                </p>
            </Section>
            <Section header={<h1>3 parallelle sesjoner</h1>}>
                <p>
                    Vi kjører 3 parallelle sesjoner. Du kan lese mer om de ulike sesjonene under, og melde dere på den dere ønsker å delta på. Har du flere barn i forskjellige aldere som ønsker å være med på ulike sesjoner, så kan du melde deg på flere sesjoner – Sørg i så fall for å melde på riktig antall barn til hver sesjon.
                </p>
                <p>
                    Påmeldingen åpner 1. mars kl. 12.00.
                </p>
            </Section>
            <Seperator />
            <CenterSection header={<h1>Vi sees på teknologihuset søndag 24. mars!</h1>}>
                <p>
                    Vennlig hilsen,
                    <br/>
                    javaBin
                </p>
            </CenterSection>
        </>
    )
}
