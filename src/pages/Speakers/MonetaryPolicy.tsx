import React from 'react';
import { PageBanner } from '../../components/PageBanner/PageBanner';
import { Section } from '../../components/Section/Section';
import { InlineLink } from '../../components/InlineLink/InlineLink';
import { Seperator } from '../../components/Seperator/Seperator';

export function MonetaryPolicyPage() {
    return (
        <>
            <PageBanner header="Reimbursement Policy" subHeader="Refunds for speakers" imageName="2018/180913_JavaZone_0010" />
            <Seperator />
            <Section header={<h1>What & How</h1>}>
                <p>
                    If your presentation or a workshop is accepted, you may apply for a refund for travel and accomodation. Read below to find out if you are eligeble.
                </p>
            </Section>
            <Section header={<h1>How to Apply</h1>}>
                <p>
                    The first thing to note is that you need to <em>apply</em> for reminbursement of costs. This is necessary for our budget planning. If you require financial support, please reach out to <InlineLink external url='mailto:refund@java.no'>refund@java.no</InlineLink> after your session or workshop was accepted.
                </p>
                <p>
                    In this mail, provide an estimate of your travel expenses and the days you will be visiting Oslo during the conference.
                </p>
                <p>
                    Note that we refund a maximum of 1500 NOK a night for accomodation costs <strong>during</strong> the conference. We do not refund travel costs above the cost of a reasonably priced economy ticket.
                </p>
            </Section>
            <Section header={<h1>Confirmation & Reimbursement</h1>}>
                <p>
                    Applications <strong><em>must</em></strong> be confirmed explicitly via <InlineLink external url='mailto:refund@java.no'>refund@java.no</InlineLink> and are only accepted prior to our conference. Reimbursements are provided after the conference. For this, we require you to send us copies of all receipts, the name of your bank and international account numbers (IBAN, BIC/SWIFT, if available). We reserve the right to decline a refund application. Speakers living in proximity to Oslo are not eligible.
                </p>
                <p>
                    Reimbursements are processed and paid after the conference. We will reach out to speakers who applied for reimbursement and process the payments once payment details are provided.
                </p>
            </Section>
        </>
    )
}
