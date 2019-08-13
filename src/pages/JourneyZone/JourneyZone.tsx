import React from 'react';
import PageBanner from '../../components/PageBanner/PageBanner';
import {Section} from '../../components/Section/Section';
import { academies } from '../../core/data';
import { TextBlock } from '../../components/Blocks/TextBlock';
import styled from 'styled-components/macro';
import { InlineLink } from '../../components/InlineLink/InlineLink';
import { Link } from '../../components/Link/Link';
import { ImageSection } from '../../components/ImageSection/ImageSection';


export function JourneyZonePage() {
    const themeColor = 'green';
    const pageArt = `${process.env.PUBLIC_URL}/page-info.svg`;
    return (
        <>
            <PageBanner header="JourneyZone 2019" subHeader="Gaustatoppen Hiking" color={themeColor} artPath={pageArt} />
            <Section>
                <TextBlock color={themeColor} title="What is this?">
                    <p>
                        JourneyZone is our annual trip for speakers and conference organisers just after the JavaZone conference. This year, our destination is the summit of Gaustatoppen in Telemark county.
                    </p>
                </TextBlock>
                <TextBlock color={themeColor} title="What is this Gaustatoppen place?">
                    <p>
                        To lazily quote Wikipedia: "Gaustatoppen is the highest mountain in the county Telemark in Norway which lies in the municipality Tinn and Hjartdal. The view from the summit is impressive, as one can see an area of approximately 60,000 km², one sixth of Norway's mainland. ... The summit is accessible on foot in the summer, on a rocky pathway of medium difficulty, although the southern side of the mountain is very dangerous and inaccessible." <InlineLink external url="https://en.wikipedia.org/wiki/Gaustatoppen">--Wikipedia</InlineLink>
                    </p> 
                </TextBlock>
                <TextBlock color={themeColor} title="When? Where?">
                    <p>
                        We are leaving Oslo early in the morning Friday (the day after JavaZone) September 13th at 0800. We will be back in Oslo (Central station) on Sunday September 15th at 14:00. The entire trip is planned, so all you need to do is meet up. We will send a packing list closer to the event.
                    </p> 
                </TextBlock>
                <TextBlock color={themeColor} title="Who can attend?">
                    <p>
                        All speakers of JavaZone are invited, but we have a limited number of spots available for the journey. Those who hold full presentations and workshops are prioritised, but presenters of lightning talks are of course also welcome to apply!
                    </p> 
                    <p>
                        In order to attend, you must be in a physical condition that allows you to hike up a mountain for two full days and sleep in a tent. No extraordinary physical activity is required by participants.
                    </p> 
                </TextBlock>
                <TextBlock color={themeColor} title="Personal expenses">
                    <p>
                        JavaZone will cover almost all your expenses which is considered your reward for holding your talk at the conference. To ensure that we stretch the budget to accommodate as many as possible we require that all attendees pay NOK 1500. 
                    </p> 
                </TextBlock>
                <TextBlock color={themeColor} title="The Program">
                    <p>
                        The program is, as usual, tightly packed and full of interesting events. The main activity is hiking (on a mountain), so good shoes and hiking gear is necessary. The details will be a surprise and could change depending on the weather conditions. We will adapt to whatever comes our way and setup a great program accordingly.
                    </p>
                    <p>
                        <br />
                        <Link color="green" external url="https://forms.gle/2SQ1Bm12r9eKhU6L6">Sign Up Now!</Link>
                    </p>
                </TextBlock>
            </Section>
        </>
    )
}


