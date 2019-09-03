/* eslint-disable */
import React from 'react';
import PageBanner from '../../components/PageBanner/PageBanner';
import {Section} from '../../components/Section/Section';
import {TextBlock} from '../../components/Blocks/TextBlock';
import styles from './Mobile.module.scss';



export function MobileAppPage() {
    const themeColor = 'blue';
    const pageArt = `${process.env.PUBLIC_URL}/page-about.svg`;
    return (
        <>
            <PageBanner header="JavaZone Apps" subHeader="Your digital companion is here!"
                color={themeColor} artPath={pageArt} />
            <Section>
                <TextBlock color={themeColor} title="Digital Program">
                    <p>
                        This year we are doing our part to save paper (and the planet). You can find the complete, and always up to date agenda here, on our website, or by using our apps. Find it on Google Play and Apple App Store, or simply click on the links below. Thank you for helping us to help the trees!
                    </p>
                    <div className={styles.badges}>
                        <a href="https://apps.apple.com/no/app/javazone/id384888388?mt=8" style={{display:"inline-block", overflow:"hidden", background:"url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2010-08-22&kind=iossoftware&bubble=ios_apps) no-repeat", width:"135px", height:"40px"}}></a>
                        <a href='https://play.google.com/store/apps/details?id=no.schedule.javazone.v3&hl=en&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img style={{height:"60px", paddingTop:"2px"}} alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/></a>
                    </div>
                </TextBlock>
                <TextBlock color={themeColor} title="Digital Pass">
                    <p>
                        You can also use the apps to check-in at each partner stand. Visit all the partners and enter the prize draw!
                    </p>
                    <p>
                        You can either use the JavaZone App for Android and iOS, or go old-school and get a correct punch hole for each in your "paper" passport. Show the app, or the passport with all the check-ins you have got at the javaBin Lounge. We’ll count how many stands you have visited and add your name to the prize draw.
                    </p>
                    <p>
                        The prizes will be drawn shortly after the conference. If you are among the lucky winners, you will hear from us.
                    </p>
                    <p>
                        Enjoy!
                    </p>
                </TextBlock>
            </Section>
        </>
    )
}


