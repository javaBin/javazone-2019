import * as React from 'react';
import { PageBanner } from '../../components/PageBanner/PageBanner';
import { Seperator } from '../../components/Seperator/Seperator';
import { CenterSection } from '../../components/CenterSection/CenterSection';
import { AcademyModel } from '../../core/models/Academy';
import { AcademyLocationSection } from '../../components/AcademyLocation/AcademyLocationSection';
import { Section } from '../../components/Section/Section';
import { AcademyProgram } from '../../components/AcademyProgram/AcademyProgram';
import { ImageSection } from '../../components/ImageSection/ImageSection';

const academies: AcademyModel[] = [
    {
        name: 'Oslo',
        location: 'Teknologihuset',
        locationUrl: 'http://www.teknologihuset.no/',
        date: '12th February',
        slots: 80,
        registrationUrl: '',
        imageUrl: 'http://www.teknologihuset.no/uploads/th_ekst-img_3679-1440x575.jpg'
    },
    {
        name: 'Bergen',
        location: 'Det Akademiske Kvarter',
        locationUrl: 'https://kvarteret.no/',
        date: '13th February',
        slots: 80,
        registrationUrl: '',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Det_Akademiske_Kvarter.JPG'
    },
    {
        name: 'Tromsø',
        location: 'Universistet i Tromsø',
        locationUrl: 'https://www.uit.no/startsida',
        date: '14th February',
        slots: 80,
        registrationUrl: '',
        imageUrl: 'http://res.cloudinary.com/simpleview/image/upload/v1451482793/clients/norway/northern-lights-tromso-norway_2-1_a8b03e36-f1cd-46be-939e-ebf6d70c41e2.jpg'
    }
];

export function Academy() {
    return (
        <>
            <PageBanner header="JavaZone Academy" subHeader="A free taste of JavaZone for IT-students!" imageName="academy" />
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
            <Section header={<h1>How do I register?</h1>}>
                <p>
                   Fill in the form by clicking the "Registration" link below for your prefered town. We’ll contact you as soon as possible with information about whether you got a spot. The events are usually quite popular, so make sure to registrer as soon as possible.
                </p> 
            </Section>
            <AcademyLocationSection academies={academies} />
            <Seperator />
            <CenterSection header={<h1>Program & speakers</h1>}>
                <p>A detailed overview of the program and speakers will be available soon.</p>
{/*                 <AcademyProgram /> */}
            </CenterSection>
            <CenterSection header={<h1>Partners</h1>}>
                <p>The partners for the JavaZone Academy will be posted here in the upcoming weeks.</p>
            </CenterSection>
        </>
    )
}
