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
        title: "oslo",
        sponsors: [
            {
                name: "Vipps",
                url: "https://www.vipps.no/"
            },
            {
                name: "Sysco",
                url: "https://sysco.no/"
            },
            {
                name: "Sportradar",
                url: "https://www.sportradar.com/"
            },
            {
                name: "Tripletex",
                url: "https://www.tripletex.no/"
            },
            {
                name: "Kantega",
                url: "https://www.kantega.no/"
            },
            {
                name: "Netcompany",
                url: "https://www.netcompany.com/no"
            }
        ],
        program: [
            {
                "time": "11:30",
                "title": "Doors open"
            },
            {
                "time": "12:00 - 12:30",
                "title": "Introduction"
            },
            {
                "time": "12:30 - 13:30",
                "title": "It's about time",
                "speaker": "Christin Gorman"
            },
            {
                "time": "13:30 - 14:00",
                "title": "Break"
            },
            {
                "time": "14:00 - 15:00",
                "title": "Hallo, hører du meg? Slutten på kleine videosamtaler takket være kode",
                "speaker": "Ingvild Indrebø"
            },
            {
                "time": "15:00 - 15:30",
                "title": "Break"
            },
            {
                "time": "15:30 - 16:30",
                "title": "A Brief History of Computer Art.",
                "speaker": "Anders Norås"
            },
            {
                "time": "16:30 - 17:00",
                "title": "Break"
            },
            {
                "time": "17:00 - 18:00",
                "title": "Feltrapport fra en systemarkeolog",
                "speaker": "Hilde Nøkland"
            },
            {
                "time": "18:00 - ∞",
                "title": "Party"
            }
        ]
    },
    {
        title: "bergen",
        sponsors: [
            {
                name: "Kantega",
                url: "https://www.kantega.no/"
            },
            {
                name: "Ambita",
                url: "https://www.ambita.com/"
            }
        ],
        program: [
            {
                "time": "11:30",
                "title": "Doors open"
            },
            {
                "time": "12:00 - 12:30",
                "title": "Introduction"
            },
            {
                "time": "12:30 - 13:30",
                "title": "A Brief History of Computer Art.",
                "speaker": "Anders Norås"
            },
            {
                "time": "13:30 - 14:00",
                "title": "Break"
            },
            {
                "time": "14:00 - 15:00",
                "title": "Open Source all the offentlig things! - men hvordan gjør vi det i NAV?",
                "speaker": "Audun Fauchald Strand, Truls Jørgensen"
            },
            {
                "time": "15:00 - 15:30",
                "title": "Break"
            },
            {
                "time": "15:30 - 16:30",
                "title": "Feltrapport fra en systemarkeolog",
                "speaker": "Hilde Nøkland"
            },
            {
                "time": "16:30 - 17:00",
                "title": "Break"
            },
            {
                "time": "17:00 - 18:00",
                "title": "Skikkelig garasje-IT: Hvordan lage system som kjører på P-hus",
                "speaker": "Stian Mathiassen"
            },
            {
                "time": "18:00 - ∞",
                "title": "Party"
            }
        ]
    },
    {
        title: "tromsø",
        sponsors: [
            {
                name: "Sysco",
                url: "https://sysco.no/"
            }
        ],
        program: [
            {
                "time": "11:30",
                "title": "Doors open"
            },
            {
                "time": "12:00 - 12:30",
                "title": "Introduction"
            },
            {
                "time": "12:30 - 13:30",
                "title": "Hallo, hører du meg? Slutten på kleine videosamtaler takket være kode",
                "speaker": "Ingvild Indrebø"
            },
            {
                "time": "13:30 - 14:00",
                "title": "Break"
            },
            {
                "time": "14:00 - 15:00",
                "title": "A Brief History of Computer Art.",
                "speaker": "Anders Norås"
            },
            {
                "time": "15:00 - 15:30",
                "title": "Break"
            },
            {
                "time": "15:30 - 16:30",
                "title": "Open Source all the offentlig things! - men hvordan gjør vi det i NAV?",
                "speaker": "Audun Fauchald Strand, Truls Jørgensen"
            },
            {
                "time": "16:30 - 17:00",
                "title": "Break"
            },
            {
                "time": "17:00 - 18:00",
                "title": "Skikkelig garasje-IT: Hvordan lage system som kjører på P-hus",
                "speaker": "Stian Mathiassen"
            },
            {
                "time": "18:00 - ∞",
                "title": "Party"
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
        imageUrl: 'https://storage.googleapis.com/javazone-assets/images/academy_teknologihuset.jpg'
    },
    {
        name: 'Bergen',
        location: 'Det Akademiske Kvarter',
        locationUrl: 'https://kvarteret.no/',
        date: '13th February',
        slots: 80,
        registrationUrl: 'https://goo.gl/forms/2PyxrN4sbEOE0jls1',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Det_Akademiske_Kvarter.JPG'
    },
    {
        name: 'Tromsø',
        location: 'Universistet i Tromsø',
        locationUrl: 'https://www.uit.no/startsida',
        date: '14th February',
        slots: 80,
        registrationUrl: 'https://goo.gl/forms/NJi8tlRqGGb0Z6WD3',
        imageUrl: 'http://res.cloudinary.com/simpleview/image/upload/v1451482793/clients/norway/northern-lights-tromso-norway_2-1_a8b03e36-f1cd-46be-939e-ebf6d70c41e2.jpg'
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
                <AcademyProgram program={academyProgram} />
            </CenterSection>
        </>
    )
}
