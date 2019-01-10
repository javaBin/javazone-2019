import * as React from 'react';
import { PageBanner } from '../../components/PageBanner/PageBanner';
import { Seperator } from '../../components/Seperator/Seperator';
import { CenterSection } from '../../components/CenterSection/CenterSection';
import { AcademyModel } from '../../core/models/Academy';
import { AcademyLocationSection } from '../../components/AcademyLocation/AcademyLocationSection';

const academies: AcademyModel[] = [
    {
        location: 'Oslo',
        date: new Date(),
        slots: 80,
        registrationUrl: ''
    },
    {
        location: 'Bergen',
        date: new Date(),
        slots: 80,
        registrationUrl: ''
    },
    {
        location: 'Tromsø',
        date: new Date(),
        slots: 80,
        registrationUrl: ''
    }
];

export function Academy() {
    return (
        <>
            <PageBanner header="Javazone academy" subHeader="A free taste of JavaZone for IT-students!" imageName="academy" />
            <Seperator />
            <CenterSection header={<h1>Come join is in february</h1>}>
                <p>
                    Are you a student? Interested in IT? Come join us for JavaZone Academy. JavaZone Academy is a free event for students in Norway, where we invite you to take part in the JavaZone experience.
                </p>
                <p>
                    We will bring great talks, food, mingling and great partners to <strong>Oslo</strong>, <strong>Bergen</strong> and <strong>Tromsø</strong>. Join us for a great evening!
                </p>
                <p>
                    A detailed program and more information will be soon posted here. Watch this space!
                </p>
            </CenterSection>
            <AcademyLocationSection academies={academies} />
        </>
    )
}
