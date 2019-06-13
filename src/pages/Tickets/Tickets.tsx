import React from 'react';
import PageBanner from '../../components/PageBanner/PageBanner';
import { TicketPrice } from '../../components/TicketPrice/TicketPrice';
import { ImageSection } from '../../components/ImageSection/ImageSection';
import { Section } from '../../components/Section/Section';
import { InlineLink } from '../../components/InlineLink/InlineLink';
import { Link } from '../../components/Link/Link';
import { TextBlock } from '../../components/Blocks/TextBlock';

export function TicketsPage() {
    const themeColor = 'green';
    const pageArt = `${process.env.PUBLIC_URL}/page-tickets.svg`;
    return (
        <>
            <PageBanner header="The Ticket Booth" subHeader="Come join us in Oslo, September 11th - 12th, 2019" 
                color={themeColor} artPath={pageArt} />
            <Section>
                <TextBlock color={themeColor} title="AND WE'RE SOLD OUT!">
                    <TicketPrice soldOut>6.890</TicketPrice>
                    <p>
                        <br />
                        <Link color="green" external url="https://forms.gle/d7KC4x22CAvHwUEy7">Add your name to the waiting list</Link>
                    </p>
                </TextBlock>
            </Section>
            <Section>
                <TextBlock color={themeColor} title="What's included?">
                    <p>
                        The JavaZone Ticket includes full access to the conference and entry to workshops on Tuesday (limited seating: first come, first served). 
                    </p>
                    <p>
                        The price also includes a 1-year membership in javaBin, the Norwegian Java User Group.
                        <br />
                        Prices are ex. VAT.
                    </p>
                    <p>
                        After April 1st, the ticket price will be NOK 6.890,- (Late Bird price).
                    </p>
                </TextBlock>
            </Section>
            <ImageSection imageName="tickets_2" />
            <Section>
                <TextBlock color={themeColor} title="Working for one of our partners?">
                    <p>
                        All partners of JavaZone get reduced prices on tickets. Partners can buy tickets at a reduced price until July 1st. The main partner contact person can order tickets by using this <InlineLink external url="https://goo.gl/forms/OSr49HdV3LH7j62h1">invoice request form</InlineLink>. Read more about <InlineLink url="/partners">JavaZone partnership</InlineLink> here.
                    </p>
                </TextBlock>
                <TextBlock color={themeColor} title="Need more than one ticket?">
                    <p>
                        Multiple tickets can be bought at the same time. You can then assign the tickets to the participants via email. Just use our regular webshop and specify the number of tickets you require when buying.
                    </p>
                </TextBlock>
                <TextBlock color={themeColor} title="Need an invoice?">
                    <p>
                        Paying by invoice can be accommodated if required, but please consider buying the tickets using the webshop if you can. You’ll get a receipt which can be used for reimbursements even when paying with credit card.
                    </p>
                    <p>
                        Request your invoice here: <InlineLink external url="https://goo.gl/forms/OSr49HdV3LH7j62h1">Invoice request form</InlineLink>.
                    </p>
                </TextBlock>
                <TextBlock color={themeColor} title="Refund policy">
                    <p>
                        If you need a refund on your ticket, send an email with your request to <InlineLink external noBlankTarget url="mailto:javazone@java.no">javazone@java.no</InlineLink>. We'll refund the full ticket price minus a small processing fee (to cover credit card fees or invoice fees) for requests submitted before August 1st. Refund requests received after August 1st will only be accepted if javaBin are able to resell the tickets. For tickets bought in bulk (applies to both partner tickets and large regular orders), a maximum of 5 tickets can be refunded under this policy.
                    </p>
                </TextBlock>
            </Section>
            <ImageSection imageName="2018/180912_JavaZone_0035" />
            <Section>
                <TextBlock color={themeColor} title="The javaBin membership included in the ticket">
                    <p>
                        JavaZone is organized for and by the community. Your ticket includes a membership to javaBin, giving you access to all the javaBin community events and voting rights for a full year after buying the ticket.
                    </p>
                </TextBlock>
            </Section>
            <Section>
                <TextBlock color={themeColor} title="Need more info about JavaZone?">
                    <p>
                        We'll release more information about the conference before the summer, and the detailed program with information about all the talks will be ready in July. Until then, have a look at the video on top and <InlineLink external url="https://2018.javazone.no">the 2018 website</InlineLink> to get a feel for how awesome JavaZone is!
                    </p>
                    <p>
                        Don't wait too long buying your ticket, though – last year all of the 3,100 spots were gone, and we had long waiting lists. We expect a decent amount of interest this year as well.
                    </p>
                </TextBlock>
            </Section>
        </>
    )
}
