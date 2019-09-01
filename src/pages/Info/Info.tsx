import React from 'react';
import PageBanner from '../../components/PageBanner/PageBanner';
import { Section } from '../../components/Section/Section';
import { InlineLink } from '../../components/InlineLink/InlineLink';
import { ImageSection } from '../../components/ImageSection/ImageSection';
import { TextBlock, AlignedParagraph } from '../../components/Blocks/TextBlock';

export function InfoPage() {
    const themeColor = 'orange';
    const pageArt = `${process.env.PUBLIC_URL}/page-info.svg`;
    return (
        <>
            <PageBanner header="Another year, another JavaZone!" subHeader="September 11th - 12th, 2019" 
                color={themeColor} artPath={pageArt} />
            <Section>
                <TextBlock color={themeColor} title="JavaZone 101 the Who, What and Where">
                    <p>
                        JavaZone – the biggest European community-driven conference for modern developers will be 18 years old in 2019! Don’t miss out on two days of inspiring tech talks, a day of hands-on sessions, mingling, and a great party!
                    </p>
                    <p>
                        JavaZone is organized by <InlineLink external url="https://javabin.no">javaBin</InlineLink>, the Norwegian Java User Group. Our goal is to organize a community-driven conference for Java developers where they can learn new things, share knowledge, and socialize.
                    </p>
                    <p>
                        We have been organizing JavaZone since 2001 and have been excited to watch the event grow bigger and better every year. In 2018 we hosted over 3100 participants and 160 speakers across 7 parallel tracks over the course of two days. In addition, we also offered a selection of 9 workshops held on the day before the conference started.
                    </p>
                    <p>
                        We would not be what we are today without YOU! Thank you for your support and contributions over the years. Don’t procrastinate! Join your fellow Java developers at JavaZone on September 11th-12th, 2019!
                    </p>
                </TextBlock>
                <TextBlock color={themeColor} title="FIRST THING FIRST: YOUR TICKET!">
                    <p>
                        To attend JavaZone you will need a ticket. The ticket grants you access to the full JavaZone experience, including workshops. The ticket sales ticket sales will open in February. The start for ticket sales will be announced on social media and on this page. The number of tickets is limited and distributed on a first-come-first-served basis, so it pays to be quick.
                    </p>
                </TextBlock>
            </Section>
            <ImageSection imageName="partners_1" />
            <Section>
                <TextBlock color={themeColor} title="Two conference days">
                    <p>
                        Two days full of talks from renowned Norwegian and international speakers, in varying formats and categories. You don´t want to miss our amazing lineup.
                    </p>
                    <p>
                        Our doors open at 8:00 on Wednesday. At 8:30, you can expect our unique opening show taking place in the expo. The talks will start at 9:00 both days.
                    </p>
                </TextBlock>
                <TextBlock color={themeColor} title="An after party to remember">
                    <p>
                        After a long day of unique learning experiences, it feels good to chill out with some good food and drink. JavaZone parties are legendary - and we can promise something amazing for our afterparty this year as well! Scroll down for more information about AweZone!
                    </p>
                </TextBlock>
                <TextBlock color={themeColor} title="Hands-on-workshops">
                    <p>
                        Do you prefer practical tasks more than theory? Take part in one of our great workshops and boost your knowledge and skills. The workshops are included in your ticket, but we have a limited number of seats. More information, along with registration details will be made available in August.
                    </p>
                </TextBlock>
                <TextBlock color={themeColor} title="... And a whole lotta love">
                    <p>
                        You will meet lots of interesting people at JavaZone! Grab your coffee (or tea) and mingle away!
                    </p>
                </TextBlock>
            </Section>
            <ImageSection imageName="partners_3" />
            <Section>
                <TextBlock color={themeColor} title="The Javazone program">
                    <p>
                        The program will be made available before the summer holidays. Stay tuned!
                    </p>
                </TextBlock>
                <TextBlock color={themeColor} title="Lightning talks">
                    <p>
                        Lightning talks are either 10 or 20 minutes long and often gives a quick introduction to a concept. This is a great way to get a sneak peek at something new.
                    </p>
                </TextBlock>
                <TextBlock color={themeColor} title="Presentations">
                    <p>
                        Presentations at JavaZone have a length of 45 or 60 minutes and will give you a deeper understanding of a concept than lightning talks.
                    </p>
                </TextBlock>
                <TextBlock color={themeColor} title="Workshops">
                    <p>
                        Full blown learning sessions. This is where you get down and dirty with code. This year we’ll be offering a wide variety of 2-hour and 4-hour workshops.
                    </p>
                </TextBlock>
            </Section>
            <ImageSection imageName="info_1" />
            <Section>
                <TextBlock color={themeColor} title="AweZone: celebrating the community">
                <p>
                        AweZone is JavaZone's traditional party which takes place on Wednesday evening.
                    </p>
                    <p>
                        The party offers a great chance to catch up with old friends, meet new ones, and also experience a great line-up of entertainment!
                    </p>
                    <p>
                        On Wednesday, we will be starting the pre-party at Oslo Spektrum at 19:20. At 20:00, we will be leaving Oslo Spektrum together and moving towards Youngstorget, and the best geeky super-party ever – AweZone! We will be spending the evening at <InlineLink external url="https://tukthuset.no">Tukthuset</InlineLink>, <InlineLink external url="https://himkok.squarespace.com/">Himkok</InlineLink>, and <InlineLink external url="https://kulturhusetioslo.no/">Kulturhuset</InlineLink>.
                    </p>
                    <p>
                        At 20:00, you will be able to find DJ Finson performing at Tukthuset. At the same time, Organ Unit will start playing at Himkok.
                    </p>
                    <p>
                        At Kulturhuset, we have the pleasure of presenting you Collision of Rhythm at 20:30. DJ & Drums will be taking over the stage on the 1st (a.k.a. ground) floor at 21:00.
                    </p>
                    <p>
                        On the other floors, you will be able to enjoy the drinks, stay in the chill-out areas, participate in activities like Shuffleboard, Ping Pong, or Foosball, as well as mingle with the conference organizers, speakers, other participants, and our partners!
                    </p>
                    <p>
                        Oh, and one more thing! We will be serving good food in the evening as well. Some drinks are on us, some will be on our partners! Bring yourself, your good mood, and don't forget your ID (due to age limits).
                    </p>
                    <p>
                        Notice that the age limit at Kulturhuset and Tukthuset will be 18 years and up, while at Himkok will be 20 years and up.
                    </p>
                </TextBlock>
            </Section>
            <Section>
                <TextBlock color={themeColor} title="A few very important principles">
                    <p>
                        JavaZone is a 100% community-organized conference created by <InlineLink external url="https://javabin.no">javaBin</InlineLink>. The program is chosen by our independent program committee, and they operate under the principle that no-one is paid to hold a presentation, and likewise, that no-one can pay us to get their presentation accepted.
                    </p>
                    <p>
                        We as organizers strive to create the best possible learning experience for all our speakers and participants, and we expect you to do the same. Everyone is welcome at JavaZone, but we do require that you treat your fellow conference participants with respect. We reserve the right to take any action necessary to make sure this principle is upheld. For more details, see our <InlineLink external url="https://java.no/principles.html">Code of Conduct</InlineLink> that applies to all events organized by javaBin.
                    </p>
                    <AlignedParagraph align="left">
                        <p>
                            <strong>Should any unwanted event occur, we‘re here to help:</strong>
                        </p>
                        <p>
                            <strong>Before the conference</strong><br />
                            You can contact us by email: <InlineLink external noBlankTarget url="mailto:javazone@java.no">javazone@java.no</InlineLink> (this goes to a small group of people, the core organizers of JavaZone), or <InlineLink external noBlankTarget url="mailto:styret@java.no">styret@java.no</InlineLink> (this goes to the javaBin board).
                        </p>
                        <p>
                            <strong>During the conference</strong><br />
                            Ask at the info stand, and we‘ll be in touch. Contact information will also be available at the info stand.
                        </p>
                    </AlignedParagraph>
                </TextBlock>
            </Section>
            <Section>
                <TextBlock color={themeColor} title="Questions?">
                    <p>
                        Do not hesitate to contact us if you have any questions. Contact us at <InlineLink external noBlankTarget url="mailto:javazone@java.no">javazone@java.no</InlineLink> and we’ll try our best to give you an answer.
                    </p>
                    <p>
                        We are looking forward to seeing you at JavaZone 2019!
                    </p>
                </TextBlock>
            </Section>
        </>
    )
}