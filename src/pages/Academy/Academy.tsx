import React from 'react';
import PageBanner from '../../components/PageBanner/PageBanner';
import { Seperator } from '../../components/Seperator/Seperator';
import { CenterSection } from '../../components/CenterSection/CenterSection';
import { AcademyLocationSection } from '../../components/AcademyLocation/AcademyLocationSection';
import { Section } from '../../components/Section/Section';
import { AcademyProgram } from '../../components/AcademyProgram/AcademyProgram';
import { academies } from '../../core/data';
import { TextBlock } from '../../components/Blocks/TextBlock';

export function AcademyPage() {
    return (
        <>
            <PageBanner header="JavaZone Academy" subHeader="A free taste of JavaZone for IT-students!" color="blue" />
            <Section>
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
            </Section>
            <AcademyLocationSection academies={academies} />
            <Section>
                <TextBlock title="Program, speakers and partners">
                    <AcademyProgram program={academies.map(academy => academy.program)} partners={academies.map(city => city.partners)} />
                </TextBlock>
            </Section>
        </>
    )
}
