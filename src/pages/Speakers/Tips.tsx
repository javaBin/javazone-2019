import React from 'react';
import PageBanner from '../../components/PageBanner/PageBanner';
import { Section } from '../../components/Section/Section';
import { TextBlock, AlignedParagraph } from '../../components/Blocks/TextBlock';

export function SpeakerTipsPage() {
    const themeColor = 'pink';
    const pageArt = `${process.env.PUBLIC_URL}/page-speakers.svg`;
    return (
        <>
            <PageBanner header="Tips And Tricks for Speakers" subHeader="Make that abstract shine" color={themeColor} artPath={pageArt} />
            <Section header={<h1>Increase the chance of your talk being accepted</h1>}>
                <TextBlock color={themeColor} title="Increase the chance of your talk being accepted">
                    <p>
                        There is generally a very high correlation between how much work one puts into the creation of a proposal and the chance that the proposal is accepted. Even a proposal with an extremely cool theme, entertaining title, and an experienced speaker may be excluded if the description is lacking. We have gathered some tips that should be considered when writing a JavaZone proposal, and a few reasons why proposals may be rejected.
                    </p>
                </TextBlock>
                <TextBlock color={themeColor} title="Things to think about when writing your abstract">
                    <AlignedParagraph align="left">
                        <p>
                            <h3>Create a good title</h3>
                            The title is the first thing people will see. A poorly worded title may be the only thing many will see of your proposal. A good title is catchy and concise, and should describe what you will talk about.
                        </p>
                        <p>
                            <h3>Write a catchy abstract</h3>
                            The abstract is what will be featured in the JavaZone program for the public to read. If the program committee doesn't believe that the abstract is good enough to convince people to come to your presentation then the proposal won't be accepted.
                        </p>
                        <p>
                            <h3>Provide a detailed outline</h3>
                            The outline is your chance to pitch the proposal to the program committee. This section will not be published, but if your outline is thin or just a copy of your abstract then you're not selling yourself well.
                        </p>
                        <p>
                            <h3>Be concise</h3>
                            With an exciting theme, it's easy to find many things one wants to present. Don't get carried away. Your proposal outline should explain how you will cover everything in a clear and structured manner.
                        </p>
                        <p>
                            <h3>Include supporting materials</h3>
                            If you've held the talk before then please include links to any supporting material that you can show us. This could be video recordings, slide decks, blogs posts, GitHub repositories, photos, etc.
                        </p>
                        <p>
                            <h3>Fill out all mandatory fields properly</h3>
                            Nothing says you haven't put much effort into your proposals like a submission form filled with 'TODO' or 'TBD' in the required fields. This is fine for the initial submission, but please make sure the required information is filled out properly by the submission deadline.
                        </p>
                        <p>
                            <h3>Ask someone to review your proposal</h3>
                            If your proposal is full of typos it will be noticed (especially in key fields such as the title). This isn't a point that will necessarily mean the proposal will be rejected, but it doesn't help your case.
                        </p>
                        <p>
                            <h3>Do you plan on doing live coding? Be sure to describe your plan to us</h3> 
                            Live coding can make a presentation more entertaining, but it also increases the chances of something going wrong. If the program committee doesn't get the feeling that you have a solid plan for the demonstration then it might hurt your chances to be accepted.
                        </p>
                        <p>
                            <h3>Send in multiple proposals</h3>
                            If you have multiple things you can talk about then submitting 2 or 3 different proposals will increase your chances of finding a place in the schedule.
                        </p>
                        <p>
                            <h3>... but please don't spam us</h3>
                            The program committee reviews hundreds of proposals each year. A few well-written proposals are much more valuable than a bucket full of half-prepared ideas.
                        </p>
                        <p>
                            <h3>Don't shout</h3>
                            You will definitely be noticed IF YOUR TITLE IS ENTIRELY UPPERCASE (!!!!!!!!), but not necessarily in a positive way.
                        </p>
                    </AlignedParagraph>
                </TextBlock>
            </Section>
        </>
    )
}
