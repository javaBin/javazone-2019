import * as React from 'react';
import {PageBanner} from "../../components/PageBanner/PageBanner";
import {Seperator} from "../../components/Seperator/Seperator";
import {CenterSection} from "../../components/CenterSection/CenterSection";
import {Section} from "../../components/Section/Section";
import {KidsProgramSection} from "../../components/KidsProgram/KidsProgramSection";
import {KidsSection} from "../../components/KidsProgram/KidsSection";

export function KidsPage() {
    return (
        <>
            <PageBanner header="JavaZone Kids" subHeader="En smakebit på JavaZone for framtidens utviklere" imageName="kids" />
            <Seperator />
            <CenterSection header={<h1>Tre sesjoner: En smakebit på voksenlivet</h1>}>
                <p>
                    JavaZone inviterer alle, og spesielt deltakere på JavaZone, til å ta med seg sine barn på 
                    <br />
                    <br />
                    <strong><em>Teknologihuset – søndag 24. mars</em></strong>
                    <br />
                    <br />
                    for å gi dem en smakebit på voksenlivet.
                    <br />  
                    Vi kjører 3 parallelle sesjoner, slik at vi har noe for både de aller minste og de litt eldre barna.
                    <br />
                </p>
                <p>
                    Arrangementet er gratis for alle, men har begrenset antall plasser.
                </p>
            </CenterSection>
            <CenterSection header={<h1>Praktisk informasjon</h1>}/>
            <Section header={<h1>Tid & Sted</h1>}>
                <p>
                    Arrangementet finner sted på Teknologihuset <strong><em>søndag 24. mars</em></strong> fra klokken 12.00 til 15.00. Vi serverer enkel mat underveis. Det er viktig at du som forelder også setter av tid til å være til stede hele perioden. Vi lager en egen "foreldresone" med kaffe.
                </p>
            </Section>
            <Section header={<h1>Påmelding</h1>}>
                <p>
                    Vi har et begrenset antall plasser, derfor er det viktig at du melder dine barn på arrangementet. Påmelding er åpen fra <strong><em>torsdag 1. mars</em></strong>. 
                </p>
                <p>                   
                    Det er også viktig om du sier ifra eller melder deg av om du blir forhindret fra å delta, da det pleier å være ventelister på alle våre kurs.
                </p>
            </Section>
            <Section header={<h1>Forberedelser</h1>}>
                <p>
                    Noen av kursene vil kreve litt forberedelse, det vil bli sendt ut egen informasjon om dette pr. mail.
                </p>
            </Section>
            <Section header={<h1>3 parallelle sesjoner</h1>}>
                <p>
                    Vi kjører 3 parallelle sesjoner. Du kan lese mer om de ulike sesjonene under, og melde dere på den dere ønsker å delta på. 
                </p>
                <p>                    
                    Har du flere barn i forskjellige aldere som ønsker å være med på ulike sesjoner, så kan du melde deg på flere sesjoner – Sørg i så fall for å melde på riktig antall barn til hver sesjon.
                </p>
                <p>
                    Påmeldingen åpner 1. mars kl. 12.00.
                </p>
            </Section>
            <Seperator />

            <KidsSection header={<h1>Sesjoner</h1>}>
                <KidsProgramSection header={<h2>Skilpadden Tom</h2>} imageName={"kids-george"} imageType={'png'}>
                    <p>Hils på Tom! Tom er en skilpadde. Tom lærer raskt, og er god på å følge instrukser. Han er dyktig med farger og bevegelse, og gjør stort sett alt du ber ham om. I løpet av 2 timer lærer vi først å kommandere Tom. Vi får ham til å bevege seg og tegne det vi vil. Så lærer vi ham nye ord og kommandoer. Og ja; han lærer gjerne ord på hvilket som helst språk. Vi kommer også til å lære hvordan man styrer flere skilpadder samtidig. Og har vi tid, så bygger vi til og med et spill. Deretter tar du med deg det du har lært hjem – for å fortsette å utvikle dine kunnskaper og ferdigheter. Og du må gjerne dele med venner og familie, på skolen, og online.</p>
                    <p><b>8 år+</b></p>
                </KidsProgramSection>

                <KidsProgramSection header={<h2>Hjelp roboten å tenke selv</h2>} imageName={"kids-robot"}>
                    <p>I dette kurset vil du bygge og programmere verdens tøffeste robot. Robot heter bit:bot og kan enkelt programmeres i et grafisk programmeringsspråk. Med roboten kan du finne på mye rart: du kan få den til å følge en linje eller tegne fine tegninger, den kan blinke og lyse og ikke minst, den ser supertøff ut! Dette blir supergøy</p>
                    <p><b>10 år+</b></p>
                </KidsProgramSection>

                <KidsProgramSection header={<h2>Processing</h2>} imageName={"kids-processing"}>
                    <p>Processing er en utvidelse av programmeringsspråket Java, som gjør det enkelt å komme i gang. Her ønskes ungdommene velkommen til et minikurs hvor de kan lære seg å programmere. Dette kurset er rettet mot nybegynnere og krever ingen forhåndskunnskaper. Målet for kurset er å gå gjennom noen viktige begreper innenfor programmering og at alle skal lære seg nok til å lage et lite interaktivt grafisk program.</p>
                    <p><b>12 år+</b></p>
                </KidsProgramSection>

            </KidsSection>

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
