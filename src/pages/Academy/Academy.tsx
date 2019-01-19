import React from 'react';
import { PageBanner } from '../../components/PageBanner/PageBanner';
import { Seperator } from '../../components/Seperator/Seperator';
import { CenterSection } from '../../components/CenterSection/CenterSection';
import { AcademyModel } from '../../core/models/Academy';
import { AcademyLocationSection } from '../../components/AcademyLocation/AcademyLocationSection';
import { Section } from '../../components/Section/Section';
import { AcademyProgram } from '../../components/AcademyProgram/AcademyProgram';
import { AcademyProgram as Program } from '../../core/models/AcademyProgram';

const academyProgram: Program[] = [
    {
        city: 'Oslo',
        scheduleSlot: [
            {
                title: 'Doors open',
                time: '1130'
            },
            {
                title: 'Intro',
                time: '1200-1245'
            },
            {
                title: 'It\'s about time',
                time: '1245-1330',
                speaker: 'Christin Gorman'
            },
            {
                title: 'Break',
                time: '1330-1400'
            },
            {
                title: 'Hallo, hører du meg? Slutten på kleine videosamtaler takket være kode',
                time: '1400-1445',
                speaker: 'Ingvild Indrebø'
            },
            {
                title: 'Break',
                time: '1445-1530'
            },
            {
                title: 'A Brief History of Computer Art',
                time: '1530-1630',
                speaker: 'Anders Norås'
            },
            {
                title: 'Break',
                time: '1630-1700'
            },
            {
                title: 'Feltrapport fra en systemarkeolog',
                time: '1700-1800',
                speaker: 'Hilde Nøkland'
            },
            {
                title: 'AweZone Party',
                time: '1800-∞'
            }
        ]
    },
    {
        city: 'Bergen',
        scheduleSlot: [
            {
                title: 'Doors open',
                time: '1130'
            },
            {
                title: 'Intro',
                time: '1200-1245'
            },
            {
                title: '',
                time: '1245-1330',
                speaker: ''
            },
            {
                title: 'Break',
                time: '1330-1400'
            },
            {
                title: '',
                time: '1400-1445',
                speaker: ''
            },
            {
                title: 'Break',
                time: '1445-1530'
            },
            {
                title: '',
                time: '1530-1630',
                speaker: ''
            },
            {
                title: 'Break',
                time: '1630-1700'
            },
            {
                title: '',
                time: '1700-1800',
                speaker: ''
            },
            {
                title: 'AweZone Party',
                time: '1800-∞'
            }
        ]
    },
    {
        city: 'Tromsø',
        scheduleSlot: [
            {
                title: 'Doors open',
                time: '1130'
            },
            {
                title: 'Intro',
                time: '1200-1245'
            },
            {
                title: '',
                time: '1245-1330',
                speaker: ''
            },
            {
                title: 'Break',
                time: '1330-1400'
            },
            {
                title: '',
                time: '1400-1445',
                speaker: ''
            },
            {
                title: 'Break',
                time: '1445-1530'
            },
            {
                title: '',
                time: '1530-1630',
                speaker: ''
            },
            {
                title: 'Break',
                time: '1630-1700'
            },
            {
                title: '',
                time: '1700-1800',
                speaker: ''
            },
            {
                title: 'AweZone Party',
                time: '1800-∞'
            }
        ]
    }
]

const academies: AcademyModel[] = [
    {
        name: 'Oslo',
        location: 'Teknologihuset',
        locationUrl: 'http://www.teknologihuset.no/',
        date: '12th February',
        slots: 80,
        registrationUrl: 'https://goo.gl/forms/1He9hzOMfKuRUVTg1',
        imageUrl: 'https://storage.googleapis.com/javazone-assets/images/academy_teknologihuset.jpg',
        program: academyProgram[0]
    },
    {
        name: 'Bergen',
        location: 'Det Akademiske Kvarter',
        locationUrl: 'https://kvarteret.no/',
        date: '13th February',
        slots: 80,
        registrationUrl: 'https://goo.gl/forms/2PyxrN4sbEOE0jls1',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Det_Akademiske_Kvarter.JPG',
        program: academyProgram[1]
    },
    {
        name: 'Tromsø',
        location: 'Universistet i Tromsø',
        locationUrl: 'https://www.uit.no/startsida',
        date: '14th February',
        slots: 80,
        registrationUrl: 'https://goo.gl/forms/NJi8tlRqGGb0Z6WD3',
        imageUrl: 'http://res.cloudinary.com/simpleview/image/upload/v1451482793/clients/norway/northern-lights-tromso-norway_2-1_a8b03e36-f1cd-46be-939e-ebf6d70c41e2.jpg',
        program: academyProgram[2]
    }
]



export function Academy() {
    return (
        <>
            <PageBanner header="JavaZone Academy" subHeader="A free taste of JavaZone for IT-students!" imageName="academy" />
            <Seperator />
            <CenterSection header={<h1>Come join us in february</h1>}>
                <p>
                    Are you a student? Interested in IT? Come join us for JavaZone Academy. JavaZone Academy is a free event for students in Norway, where we invite you to take part in the JavaZone experience.
                </p>
                <p>
                    We will bring great talks, food, mingling, and great partners to <strong>Oslo</strong>, <strong>Bergen</strong>, and <strong>Tromsø</strong>. Join us for a great evening!
                </p>
                <p>
                    A detailed program and more information will be soon posted here. Watch this space!
                </p>
            </CenterSection>
            <Section header={<h1>How do I register?</h1>}>
                <p>
                   Fill in the form by clicking the "Registration" link below for your preferred town. We’ll contact you as soon as possible with information about whether you got a spot. The events are usually quite popular, so make sure to register as soon as possible.
                </p> 
            </Section>
            <AcademyLocationSection academies={academies} />
            <Seperator />
            <CenterSection header={<h1>Program, speakers and partners</h1>}>
                <AcademyProgram />
            </CenterSection>
        </>
    )
}
