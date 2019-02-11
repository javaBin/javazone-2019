import React from 'react';
import { PageBanner } from '../../components/PageBanner/PageBanner';
import { Section } from '../../components/Section/Section';
import { InlineLink } from '../../components/InlineLink/InlineLink';
import Link from '../../components/Link/Link';
import { Seperator } from '../../components/Seperator/Seperator';
import { ImageSection } from '../../components/ImageSection/ImageSection';
import { CenterSection } from '../../components/CenterSection/CenterSection';
import './Speakers.scss';
import '../../presentation-format.scss';
import Timeline from './Timeline/Timeline';

export function SpeakersPage() {
    return (
        <>
            <PageBanner header="Call for Speakers" subHeader="Speak at JavaZone 2019" imageName="2018/180913_JavaZone_0010" />
            <Seperator />
            <Section header={<h1>About JavaZone</h1>}>
                <p>
                    JavaZone 2019 will be the 19th consecutive JavaZone conference and will consist of a day of pre-conference workshops on September 10th, followed by two days of lightning talks and presentations on September 11th and 12th.
                </p>
                <p>
                    Last year's event was completely sold out, with more than 3100 attendees enjoying 142 sessions.
                </p>
                <p>
                    JavaZone hosts both international and Norwegian speakers. We'd love to have you join us in 2019!
                </p>
                <p>
                    Our call for speakers opened on February 11th and it will remain open until April 22nd.
                </p>
                <p>
                    <Link external url="http://talks.javazone.no">Submit your talk!</Link>
                </p>
            </Section>
            <ImageSection bottom imageName="2018/180912_JavaZone_0039" />
            <Seperator />
            <Section header={<h1>What is it like speaking at JavaZone?</h1>}>
                <p>
                    Over the last decade JavaZone has grown to become one of the most important Java events in Europe! You can see for yourself – over 1300 videos from previous years talks are available for free at <InlineLink external url='https://vimeo.com/javazone'>Vimeo</InlineLink>, and the <InlineLink external url='https://2018.javazone.no/program'>full program from JavaZone 2018</InlineLink> is also available.
                </p>
                <p>
                    We can brag as much as we want, but JavaZone would be nothing without all the great speakers! That's why we need your help to make sure that JavaZone 2019 will be at least as awesome as the earlier events. If you think you have something interesting to share, please submit your talk or workshop at the latest on April 22nd, 2019.
                </p>
                <p>
                    JavaZone is committed to diversity, and we are especially interested in quality submissions from groups that are under-represented in tech.
                </p>
            </Section>
            <ImageSection imageName="partners_1" />
            <Seperator />

            <Section header={<h1>Formats and Durations</h1>}>
                <p>
                    You should think about which format your talk will work best in. Are you presenting a new idea, or do you require more time to elaborate on your subject? How hands-on do you want to be? We have three formats you can present your material in.
                </p>
            </Section>
            <CenterSection>
                <ul className='presentation-formats'>
                    <Format {...lightnings} />
                    <Format {...presentations} />
                    <Format {...workshops} />
                </ul>
            </CenterSection>
            <Section header={<h1>Get Some Inspiration</h1>}>
                <p>
                    <h3>Workshop for Potential Speakers</h3>
                    On March 12th, we will be <InlineLink external url='https://www.meetup.com/javaBin/events/258787075'>hosting a workshop</InlineLink> for all those considering submitting a talk to JavaZone. More information and the registation link will be posted here later.
                </p>
            </Section>
            <Section header={<h1>Audience and Topics</h1>}>
                <p>
                    JavaZone is a conference for developers and technical architects, with an emphasis on technical talks. However, we are open to talks about other areas, including methodology, project management, and other topics related to programming.
                </p>
                <p>
                    Despite our conference's name, we do not limit our content to Java technology. We will consider all talks based on their relevance to developers and technical architects. We do however set a focus on technology surrounding the JVM when selecting talks.
                </p>
            </Section>
            <Section header={<h1>Ongoing Evaluation of Talks</h1>}>
                <p>
                    Each year we receive hundreds of submissions and we consider each submission as it arrives. Due to a large number of submissions, we can however not guarantee that you will hear from us immediately. We do however answer all submissions and try to do so no later than in July.
                </p>
                <p>
                    Our advice to you is simple. <strong>Submit early!</strong> The earlier you submit, the more likely you are to be noticed. Avoid drowning in the end-of-Call for Speakers-tsunami!
                </p>
                <p>
                    <br />
                    <Link url='/speakers/tips'>
                        Some tips and tricks about your submission
                    </Link>
                </p>
            </Section>
            <CenterSection header={<h1>Dates & Deadlines for JavaZone 2019</h1>}>
                <Timeline />
            </CenterSection>
            <Section header={<h1>What’s in it for me?</h1>}>
                <p>
                    <h3>Accepted presentations, lightning talks, and workshops</h3>
                    As a JavaZone speaker, you get free admission to the conference. Additionally, you are also invited to the speakers' dinner, held on September 10th. Finally, you can apply for a place on JourneyZone, our annual speaker adventure.
                    <h3>Coverage of Expenses</h3>
                    Please see our <InlineLink external url='/speakers/monetary-policy'>reimbursement policy</InlineLink> if you have any questions regarding coverage of other expenses.
                </p>
            </Section>
            <Section header={<h1>Important principles</h1>}>
                <p>
                    JavaZone is proud to be an independent and community-driven conference. It is organized by volunteers from javaBin (the Norwegian Java User Group) and is run as a non-profit organization. This means that we have three important principles for selecting talks:
                </p>
                <ul>
                    <li>We do not sell speaker slots.</li>
                    <li>We do not accept sales pitches masked as presentations</li>
                    <li>We do not differentiate between speakers from partners and independent speakers</li>
                </ul>
                <p>
                    If your talk adheres to these very important principles, you are more than welcome to submit it to our Call for Speakers!
                </p>
            </Section>
            <CenterSection header={<h1>We hope to see you at JavaZone 2019 – please feel free to spread the word to your local community!</h1>}>
                <p className='speakers__regards'>
                    <br />
                    Best regards,<br />the JavaZone Program Committee
                </p>
            </CenterSection>
        </>
    )
}

const Format = (props:any) => (
    <li className='presentation-formats__format format'>
        <span className={`format__icon ${props.icon}`}></span>
        <h3 className='format__title'>{props.title}</h3>
        <p className='format__length'>{props.length}</p>
        <p /* justify={"true"} */ className='format__description'>{props.description}</p>
    </li>
);

const lightnings = {
    icon: 'icon-energy',
    title: 'Lightning talks',
    length: '10 or 20 minutes',
    description: 'Are you presenting a great new idea, or want to give the audience a teaser for a cool topic? Then you should strongly consider the lightning talk format.  Note that the 10-20 minute time limit is strictly enforced!'
};

const presentations = {
    icon: 'icon-graduation',
    title: 'Presentations',
    length: '45 or 60 minutes',
    description: 'Presentations at JavaZone can be either 45 or 60 minutes long. This gives you room to elaborate on an idea. When submitting your talk, please indicate clearly in the outline how much time is reserved for questions.'
};

const workshops = {
//    icon: 'icon-screen-desktop', /* <span class="cui-screen-desktop" aria-hidden="true"></span> */
    icon: 'cui-screen-desktop',
    title: 'Workshops',
    length: '2 hours, 4 hours, 8 hours',
    description: 'We will continue the popular workshop concept with a range of sessions on Tuesday, September 11th. The format for the workshops is in-depth, hands-on and interactive.'
};
