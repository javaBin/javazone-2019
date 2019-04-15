import React from 'react';
import PageBanner from '../../components/PageBanner/PageBanner';
import { InlineLink } from '../../components/InlineLink/InlineLink';
import { Link } from '../../components/Link/Link';
import { ImageSection } from '../../components/ImageSection/ImageSection';
import {Section} from '../../components/Section/Section';
import styled from 'styled-components/macro';
import { lightning, presentation, workshop } from '../../core/data/PresentationFormats.data';
import Timeline from '../../components/Timeline/Timeline';
import { TextBlock, AlignedParagraph } from '../../components/Blocks/TextBlock';
import { CenterTextBlock } from '../../components/Blocks/CenterTextBlock';
import { List } from '../../components/List/List';

export function SpeakersPage() {
    const themeColor = 'pink';
    const pageArt = `${process.env.PUBLIC_URL}/page-speakers.svg`;
    return (
        <>
            <PageBanner header="Call for Speakers" subHeader="Speak at JavaZone 2019" 
                color={themeColor} artPath={pageArt} />
            <Section>
                <TextBlock color={themeColor} title="About JavaZone">
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
                    <Link color="pink" external url="https://talks.javazone.no">Submit your talk!</Link>
                </TextBlock>
            </Section>
            <ImageSection bottom imageName="2018/180912_JavaZone_0039" />
            <Section>
                <TextBlock color={themeColor} title="What is it like speaking at JavaZone?">
                    <p>
                        Over the last decade JavaZone has grown to become one of the most important Java events in Europe! You can see for yourself – over 1300 videos from previous years talks are available for free at <InlineLink external url='https://vimeo.com/javazone'>Vimeo</InlineLink>, and the <InlineLink external url='https://2018.javazone.no/program'>full program from JavaZone 2018</InlineLink> is also available.
                    </p>
                    <p>
                        We can brag as much as we want, but JavaZone would be nothing without all the great speakers! That's why we need your help to make sure that JavaZone 2019 will be at least as awesome as the earlier events. If you think you have something interesting to share, please submit your talk or workshop at the latest on April 22nd, 2019.
                    </p>
                    <p>
                        JavaZone is committed to diversity, and we are especially interested in quality submissions from groups that are under-represented in tech.
                    </p>
                </TextBlock>
            </Section>
            <ImageSection imageName="partners_1" />
            <Section>
                <TextBlock color={themeColor} title="Formats and durations">
                    <p>
                        You should think about which format your talk will work best in. Are you presenting a new idea, or do you require more time to elaborate on your subject? How hands-on do you want to be? We have three formats you can present your material in.
                    </p>
                </TextBlock>
            </Section>
            <Section>
                <Formats>
                    <FormatContent grid="lightning" {...lightning}></FormatContent>
                    <FormatContent grid="presentation" {...presentation}></FormatContent>
                    <FormatContent grid="workshop" {...workshop}></FormatContent>
                </Formats>
            </Section>
            <Section>
                <TextBlock color={themeColor} title="Get some inspiration">
                    <h1>Workshop for Potential Speakers</h1>
                    <p>
                        On March 12th, we will be <InlineLink external url='https://www.meetup.com/javaBin/events/258787075'>hosting a workshop</InlineLink> for all those considering submitting a talk to JavaZone. More information and the registation link will be posted here later.
                    </p>
                </TextBlock>
                <TextBlock color={themeColor} title="Audience and Topics">
                    <p>
                        JavaZone is a conference for developers and technical architects, with an emphasis on technical talks. However, we are open to talks about other areas, including methodology, project management, and other topics related to programming.
                    </p>
                    <p>
                        Despite our conference's name, we do not limit our content to Java technology. We will consider all talks based on their relevance to developers and technical architects. We do however set a focus on technology surrounding the JVM when selecting talks.
                    </p>
                </TextBlock>
                <TextBlock color={themeColor} title="Ongoing Evaluation of Talks">
                    <p>
                        Each year we receive hundreds of submissions and we consider each submission as it arrives. Due to a large number of submissions, we can however not guarantee that you will hear from us immediately. We do however answer all submissions and try to do so no later than in July.
                    </p>
                    <p>
                        Our advice to you is simple. <strong>Submit early!</strong> The earlier you submit, the more likely you are to be noticed. Avoid drowning in the end-of-Call for Speakers-tsunami!
                    </p>
                    <br />
                    <Link color="blue" url='/speakers/tips'>
                        Some tips and tricks about your submission
                    </Link>
                </TextBlock>
            </Section>
            <Section>
                <CenterTextBlock title="Dates & Deadlines for JavaZone 2019">
                    <Timeline />
                </CenterTextBlock>
            </Section>
            <Section>
                <TextBlock color={themeColor} title="What’s in it for me?">
                    <h1>Accepted presentations, lightning talks, and workshops</h1>
                    <p>
                        As a JavaZone speaker, you get free admission to the conference. Additionally, you are also invited to the speakers' dinner, held on September 10th. Finally, you can apply for a place on JourneyZone, our annual speaker adventure.
                    </p>
                    <h1>Coverage of Expenses</h1>
                    <p>
                        Please see our <InlineLink external url='/speakers/monetary-policy'>reimbursement policy</InlineLink> if you have any questions regarding coverage of other expenses.
                    </p>
                </TextBlock>
            </Section>
            <Section>
                <TextBlock color={themeColor} title="Important principles">
                    <AlignedParagraph aling="left">
                        <p>
                            JavaZone is proud to be an independent and community-driven conference. It is organized by volunteers from javaBin (the Norwegian Java User Group) and is run as a non-profit organization. This means that we have three important principles for selecting talks:
                        </p>
                        <List>
                            <li>We do not sell speaker slots.</li>
                            <li>We do not accept sales pitches masked as presentations</li>
                            <li>We do not differentiate between speakers from partners and independent speakers</li>
                        </List>
                        <p>
                            If your talk adheres to these very important principles, you are more than welcome to submit it to our Call for Speakers!
                        </p>
                    </AlignedParagraph>
                </TextBlock>
                <AlignedParagraph align="center">
                <TextBlock color={themeColor} title="We hope to see you at JavaZone 2019 – please feel free to spread the word to your local community!"></TextBlock>
                </AlignedParagraph>
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