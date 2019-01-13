import * as React from 'react';
import { PageBanner } from '../../components/PageBanner/PageBanner';
import { Seperator } from '../../components/Seperator/Seperator';
import { CenterSection } from '../../components/CenterSection/CenterSection';
import { Section } from '../../components/Section/Section';
import { ImageSection } from '../../components/ImageSection/ImageSection';
import { InlineLink } from '../../components/InlineLink/InlineLink';

export function Partners() {
    return (
        <>
            <PageBanner header="Partner love <3" subHeader="September 11th - 12th, 2019" imageName="partners_2" />
            <Seperator />
            <CenterSection header={<h1>JavaZone 2019: Bigger and better than ever</h1>}>
                <p>
                    JavaZone started out in 2002 as a small conference for Java developers but has since then evolved to become one of the largest developer conferences in the world. Each year thousands of people gather in Oslo Spektrum for three full days of learning, mingling, and fun!
                </p>
            </CenterSection>
            <Section header={<h1>Last two years: Completely. Sold. Out.</h1>}>
                <p>
                    We want JavaZone‘s Expo Area to be an attractive space where our Partners and participants can hang out and spend time together. In previous years our Partners have done a great job to help us achieve this goal, and we look forward to seeing what they bring to JavaZone 2018! JavaZone’s Expo Area is a vibrant, busy space full of life and activity. As a Partner you are not just supporting our conference economically – you participate in the event and help create a unique atmosphere. We work closely with our Partners to help them realize their ideas and make the most out of their stands. Have you got a great concept for your JavaZone stand and need help to realize it? Don’t be shy - just ask us. Almost anything is possible!
                </p>
            </Section>
            <Section header={<h1>Out philosophy: Partners, not sponsors</h1>}>
                <p>
                    We want JavaZone‘s Expo Area to be an attractive space where our Partners and participants can hang out and spend time together. In previous years our Partners have done a great job to help us achieve this goal, and we look forward to seeing what they bring to JavaZone 2018! JavaZone’s Expo Area is a vibrant, busy space full of life and activity. As a Partner you are not just supporting our conference economically – you participate in the event and help create a unique atmosphere. We work closely with our Partners to help them realize their ideas and make the most out of their stands. Have you got a great concept for your JavaZone stand and need help to realize it? Don’t be shy - just ask us. Almost anything is possible!
                </p>
            </Section>
            <ImageSection bottom imageName="2018/180912_JavaZone_0098" />
            <Seperator />
            <CenterSection header={<h1>The Expo Area</h1>}>
                <p>
                    All our partner stands are traditionally located in the Expo Area, which is centrally located in the venue. During each break, the Expo is full of attendees. This is partly because we serve food continuously from restaurant stands throughout the day, and partly because of you – our Partners – make this area one of the liveliest Expo Areas of any conference.
                </p>
                <p>
                    Don‘t you believe us? Have a look for yourself! Our new Partners are always surprised by the huge attention their stands receive in the Expo Area. We have put together a short 15-second timelapse from 2 hours of Expo time, showing both the flow of people during talks and in the breaks between talks. Yes, you get exposure to that many people, for a total of 20 hours!
                </p>
            </CenterSection>
            <h1>VIDEO HERE</h1>
            <Section header={<h1>Partner Options</h1>}>
                <p>
                    Even though all Partners are considered equal, there are a few options to choose from. There is a base package that everyone gets, and then there are a few available expansions. Notice that these expansions have a limited availability.
                </p>
                <h2>Included in all partnerships</h2>
                <h2>Possible expansions</h2>
                <p>
                    <h4>Double Stand Space</h4>
                    Double your stand space and get 12 square meters instead of 6. This gives you a bigger wall for your message and more floor space for your activities.
                </p>
                <p>
                    <h4>Restaurant Stand</h4>
                    We have the capacity for a total of 8 restaurant stands in the Expo Area. The theme and menu are decided by you in collaboration with our food provider. If you have a restaurant stand, you can also opt in for extra food servings and exposure during the evening party.
                </p>
                <p>
                    <h4>Concept Stand</h4>
                    We also have room for 3 extra large ‘Concept‘ stands. These stands have about 70 square meters floor space and have room for a 4-meter tall wall behind it. This is your choice if you want to be really creative.
                </p>
            </Section>
            <Seperator />
            <CenterSection header={<h1>Partnership prices</h1>}>

            </CenterSection>
            <Section header={<h1>Partnership stand</h1>}>
            </Section>
            <Section header={<h1>Partnership ticket</h1>}>
            </Section>
            <ImageSection imageName="2018/180912_JavaZone_0158" />
            <Seperator />
            <CenterSection header={<h1>Contact us</h1>}>
                <p>You can contact us about partnership details at <InlineLink external url="mailto:partner@java.no">partner@java.no</InlineLink></p>
            </CenterSection>
        </>
    )
}
