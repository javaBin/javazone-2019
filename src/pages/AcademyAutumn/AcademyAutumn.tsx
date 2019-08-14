import React from 'react';
import { Section } from '../../components/Section/Section';
import { TextBlock } from '../../components/Blocks/TextBlock';
import PageBanner from "../../components/PageBanner/PageBanner";
import { Link } from '../../components/Link/Link';
import { InlineLink } from '../../components/InlineLink/InlineLink';
import styles from './AcademyAutumn.module.scss';

export function AcademyAutumnPage() {
    const themeColor = 'orange';
    const pageArt = `${process.env.PUBLIC_URL}/page-kids-academy.svg`;
    return (
        <>
            <PageBanner header="Academy" subHeader="Autumn Edition! A free taste of JavaZone for IT-students" color={themeColor} artPath={pageArt} />
            <Section>
                <TextBlock>
                    <h2 className={styles.academyAutumn__topHeader}>What is JavaZone?</h2>
                    <p>
                        Are you a student? Interested in IT? Come join us for JavaZone Academy. JavaZone Academy is a free event for students in Norway which takes place during the second day of the conference. We invite you to take part in the JavaZone experience in Oslo Spektrum for a full day.
                    </p>
                    <p>
                        You will get a free ticket which gives you access to<InlineLink url="/info">the full conference experience</InlineLink>on Thursday, September 12th. You will be able to attend<InlineLink url="/program">all the talks,</InlineLink> mingle in the expo area, talk to our<InlineLink url="/partners">partners,</InlineLink> taste our great food, and all in all have a great time learning new stuff.
                    </p>
                </TextBlock>
            </Section>
            <Section>
                <TextBlock>
                    <div className="registration-container">
                        <Link color="orange" external url="https://forms.gle/JDHsw4hj62uanHoD6">Register for JavaZone Academy!</Link>
                    </div >
                </TextBlock>
            </Section>
            <Section>
                <TextBlock>
                    <InformationGrid />
                </TextBlock>
            </Section>
        </>
    );
}

function InformationGrid() {
    return (
        <>
            <ul className={styles.academyAutumn__questions}>
                <li className={styles.academyAutumn__question}>
                    <div className={styles.academyAutumn__header}>Program and speakers</div>
                    <div className={styles.academyAutumn__answer}>As you will get a full JavaZone ticket for Thursday, you can just check out our regular program for info about the talks. The detailed program that specify which talks will be on Thursday</div>
                </li>
                <li className={styles.academyAutumn__question}>
                    <div className={styles.academyAutumn__header}>How to register?</div>
                    <div className={styles.academyAutumn__answer}>The registration for JavaZone Academy are now open. Due to popular demand, we need to limit the number of tickets we give out. You can apply for a ticket, and we'll let you know if you get a spot at least a week before the conference.</div>
                </li>
                <li className={styles.academyAutumn__question}>
                    <div className={styles.academyAutumn__header}>How much does it cost?</div>
                    <div className={styles.academyAutumn__answer}> Well, we're happy to say that there is such a thing as a free lunch! JavaZone Academy is 100% free. You get the ticket, the talks, the food and everything from us for free. Should you need to travel to be able to attend, that's on you.</div>
                </li>
                <li className={styles.academyAutumn__question}>
                    <div className={styles.academyAutumn__header}>Do you do other things for students?</div>
                    <div className={styles.academyAutumn__answer}>Yes, we do! We usually do the JavaZone Academy event twice a year. In September, it's at the main conference, and in the spring time we come to your town to do it. More info will come. You could also<InlineLink url="/frivillige">become a volunteer</InlineLink>at the conference.</div>
                </li>
            </ul>
        </>
    );
}
