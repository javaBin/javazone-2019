import React from 'react';
import PageBanner from '../../components/PageBanner/PageBanner';
import { Section } from '../../components/Section/Section';
import { InlineLink } from '../../components/InlineLink/InlineLink';
import { TextBlock, AlignedParagraph } from '../../components/Blocks/TextBlock';

export function MonetaryPolicyPage() {
    const themeColor = 'pink';
    const pageArt = `${process.env.PUBLIC_URL}/page-speakers.svg`;
    return (
        <>
            <PageBanner header="Reimbursement Policy" subHeader="Refunds for speakers" color={themeColor} artPath={pageArt} />
            <Section>
                <TextBlock color={themeColor} title="What & How">
                    <AlignedParagraph align="center">
                        <p>
                            If your presentation or a workshop is accepted, you may apply for a refund of your travel expenses and receive free accommodation. Read below to find out if you are eligible.
                        </p>
                        <p>
                            Applications for speaker reimbursements <strong><em>must</em></strong> be submitted before June 20th, 2019 via <InlineLink external url="https://forms.gle/oj2ZdotMqwL2cZcv7">the application form</InlineLink>.
                        </p>
                    </AlignedParagraph>
                </TextBlock>
                <TextBlock color={themeColor} title="How to apply">
                    <AlignedParagraph align="left">
                        <p>
                            The first thing to note is that you need to <strong><em>apply</em></strong> for reminbursement. This is necessary for our budget planning. To apply please <InlineLink external url="https://forms.gle/oj2ZdotMqwL2cZcv7">provide an estimate of your travel expenses and list the nights you are going to stay in Oslo</InlineLink>.
                        </p>
                        <p>
                            Please note that we do not refund travel expenses for those holding lightning talks. However, speakers (including the ones holding lightning talks) will receive a free conference ticket.
                        </p>
                    </AlignedParagraph>
                </TextBlock>
                <TextBlock color={themeColor} title="Confirmation & reimbursment">
                    <p>
                        Applications must be confirmed to become valid and are only accepted if submitted prior to the 20th of June. Payments are provided after the conference. For this, we require you to send us copies of all receipts, the name of your bank and international account numbers (IBAN, BIC/SWIFT, if available) to <InlineLink external url='mailto:refund@java.no'>refund@java.no</InlineLink>. We reserve the right to decline a refund application. Speakers living in proximity to Oslo are not eligible.
                    </p>
                    <p>
                        Reimbursements are processed and paid after the conference. We will reach out to speakers who applied for reimbursement and process the payments once payment details are provided.
                    </p>
                    <p>
                        If you have any questions, please reach out to <InlineLink external url='mailto:refund@java.no'>refund@java.no</InlineLink>.
                    </p>
                </TextBlock>
            </Section>
        </>
    )
}
