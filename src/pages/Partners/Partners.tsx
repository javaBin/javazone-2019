import React, {Suspense} from 'react';
import PageBanner from '../../components/PageBanner/PageBanner';
import {Section} from '../../components/Section/Section';
import {ImageSection} from '../../components/ImageSection/ImageSection';
import {InlineLink} from '../../components/InlineLink/InlineLink';
import {List} from '../../components/List/List';
import {TicketPrice} from '../../components/TicketPrice/TicketPrice';
import VideoSource from '../../components/Jumbotron/VideoSource';
import {useCanPlayVideoType} from '../../core/hooks/UseCanPlayVideoType';
import {PartnerPrice, PartnerPriceList} from '../../components/PartnerPrices/PartnerPrices';
import {AlignedParagraph, TextBlock} from '../../components/Blocks/TextBlock';
import styled from 'styled-components/macro';
import PartnerList from "../../components/PartnerList/PartnerList";

const SoldOutBox = styled.div`
    box-sizing: border-box;
    border-radius: 6px;
    width: 60%;
    height: auto;
    color: white;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
    align-items: center;
    border: 5px solid rgba(255, 255, 255, 0.5);
    background: ${(props: any) => props.theme.colors['blue400']};
    & > h1 {
        font-size: 3rem;
        margin: 0;
    }
    @media only screen and (max-width: 1200px) {
        width: 100%;
    }
`

const CenterStuff = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export function PartnersPage() {

    const canPlayWebm = useCanPlayVideoType('webm');
    const themeColor = 'green';
    const pageArt = `${process.env.PUBLIC_URL}/page-partners.svg`;

    return (
        <>
            <PageBanner header="Partner love <3" subHeader="September 11th - 12th, 2019" color={themeColor}
                        artPath={pageArt}/>
            <Section>
                <TextBlock color={themeColor} title="JavaZone 2019: Bigger and better than ever">
                    <p>
                        JavaZone started out in 2002 as a small conference for Java developers but has since then
                        evolved to become one of the largest developer conferences in the world. Each year thousands of
                        people gather in Oslo Spektrum for three full days of learning, mingling, and fun!
                    </p>
                </TextBlock>
                <TextBlock color={themeColor} title="Last three years: Completely. Sold. Out">
                    <p>
                        Last year, a record breaking 3100 people attended JavaZone. We were completely sold out of
                        tickets AND partner stands. The same happened last year, and a year before. So you might want to
                        join in early if you want to be part of the conference!
                    </p>
                </TextBlock>
                <TextBlock color={themeColor} title="Our philosophy: Partners, not sponsors">
                    <p>
                        We want JavaZone‘s Expo Area to be an attractive space where our partners and participants can
                        hang out and spend time together. In previous years, our partners have done a great job helping
                        us achieve this goal, and we look forward to seeing what they bring to JavaZone 2019! JavaZone’s
                        Expo Area is a vibrant, busy space full of life and activity. As a partner you are not just
                        supporting our conference economically – you participate in the event and help creating a unique
                        atmosphere. We work closely with our partners to help them realize their ideas and make the most
                        out of their stands. Have you got a great concept for your JavaZone stand and need help to
                        realize it? Don’t be shy - just ask us. Almost anything is possible!
                    </p>
                </TextBlock>
            </Section>
            <PartnerList color='warm'/>
            <Section>
                <TextBlock color={themeColor} title="The Expo Area">
                    <p>
                        All our partner stands are traditionally located in the Expo Area, which is located in the
                        center of the venue. During each break, the Expo is full of attendees. This is partly because we
                        continuously serve food from the restaurant stands – throughout the day, and partly because of
                        you – our partners – make this area one of the liveliest Expo Areas of any conference.
                    </p>
                    <p>
                        Don‘t you believe us? Have a look for yourself! Our new partners are always surprised by the
                        huge attention their stands receive in the Expo Area. We have put together a short 15-second
                        timelapse from 2 hours of Expo time, showing both the flow of people during talks and in the
                        breaks between talks. Yes, you get exposure to that many people, for a total of 20 hours!
                    </p>
                    <p>
                        <i>The video below shows a time-lapse of the JavaZone 2018 event.</i>
                    </p>
                </TextBlock>
            </Section>
            <Section particles color="warm">
                <div style={{margin: '2rem 0'}}>
                    <Suspense fallback={<img src="splash.jpg"/>}>
                        <video style={{width: '100%'}} muted controls id="backgroundLapse">
                            <VideoSource canPlayWebm={canPlayWebm}/>
                            Your browser does not support HTML5 video.
                        </video>
                    </Suspense>
                </div>
            </Section>
            <Section>
                <TextBlock color={themeColor} title="Partner options">
                    <p>
                        Even though all partners are considered equal, there are a few options to choose from. There is
                        a base package that everyone gets, and then there are a few available expansions. Note that
                        these expansions have limited availability.
                    </p>
                    <h2>Included in all partnerships</h2>
                    <AlignedParagraph align="left">
                        <List>
                            <li>A 6-square meter stand space in the central arena at Oslo Spektrum with two side
                                walls.
                            </li>
                            <li>4 tickets to the conference for manning the stand.</li>
                            <li>Discounted participant tickets for your employees.</li>
                            <li>Branding on <InlineLink external url="https://www.javazone.no">javazone.no</InlineLink>,
                                at the venue, the program and in other promotional material that JavaZone produces.
                            </li>
                        </List>
                        <h1>Possible expansions:</h1>
                        <h2>Double Stand Space</h2>
                        <List>
                            <li>Double the stand area to 12 square meters.</li>
                            <li>One long back wall. It is also possible to divide the area in two if you would prefer.
                            </li>
                        </List>
                        <h2>Restaurant Stand</h2>
                        <List>
                            <li>A dedicated food stand serving food throughout the conference. The menu will be decided
                                in collaboration between yourselves and our event partners.
                            </li>
                            <li>Approx. 108 square meters (12 x 9).</li>
                            <li>4-meter high back wall.</li>
                        </List>
                        <h2>Concept Stand</h2>
                        <List>
                            <li>A large space for presenting your own 'concept'. This could be, for example, a gaming
                                area, a coffee bar, or a chillout area.
                            </li>
                            <li>Approx. 70 square meters (10 x 7).</li>
                            <li>4-meter high back wall.</li>
                        </List>
                    </AlignedParagraph>
                </TextBlock>
            </Section>
            <Section>
                <TextBlock color={themeColor} title="Partnership prices">
                    <TicketPrice soldOut>71.000</TicketPrice>
                    <CenterStuff>
                        <SoldOutBox>
                            <h1>Sold out!</h1>
                            <p>
                                Our partner packages for 2019 are now sold out. But if you would like to join the
                                waiting list and stay informed of any changes to the 2019 partnership possibilities then
                                please <InlineLink plain external url="https://tinyurl.com/jzpartner2019">register your
                                contact details and partnership preferences</InlineLink>
                            </p>
                        </SoldOutBox>
                    </CenterStuff>
                    <AlignedParagraph align="left">
                        <p>
                            <i>Note that all 50+ partnerships for JavaZone 2018 were sold out long before the
                                conference.</i>
                        </p>
                        <p>
                            All partnerships have a base price for entry which gives you everything described above.
                            We also have some add-ons, as well as tickets for your employees, priced below.
                        </p>
                        <p>
                            <i style={{fontSize: '1.2rem'}}>After March 1st, the price will increase to NOK
                                86.000,-.</i><br/>
                            <i style={{fontSize: '1rem'}}>All prices are ex VAT.</i>
                        </p>
                    </AlignedParagraph>
                </TextBlock>
            </Section>
            <Section>
                <TextBlock color={themeColor} title="Partnership stands">
                    <PartnerPriceList soldOut>
                        <PartnerPrice item="Extra Stand Space">38.000</PartnerPrice>
                        <PartnerPrice item="Restaurant Stand">65.000</PartnerPrice>
                        <PartnerPrice item="Restaurant Stand (Evening)">20.000</PartnerPrice>
                        <PartnerPrice item="Concept Stand">60.000</PartnerPrice>
                    </PartnerPriceList>
                </TextBlock>
                <TextBlock color={themeColor} title="Partnership tickets">
                    <PartnerPriceList>
                        <PartnerPrice item="Tickets for employees (0 - 30)">5.890</PartnerPrice>
                        <PartnerPrice item="Tickets for employees (31 - 50)">5.690</PartnerPrice>
                        <PartnerPrice item="Tickets for employees (51 - ∞)">5.490</PartnerPrice>
                        <PartnerPrice item="Tickets for employees (Late-Bird)">6.490</PartnerPrice>
                    </PartnerPriceList>
                </TextBlock>
            </Section>
            <ImageSection imageName="2018/180912_JavaZone_0158"/>
            <Section>
                <TextBlock color={themeColor} title="Contact us">
                    <p>You can contact us about partnership details at <InlineLink external
                                                                                   url="mailto:partner@java.no">partner@java.no</InlineLink>
                    </p>
                </TextBlock>
            </Section>
        </>
    )
}
