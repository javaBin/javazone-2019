import {Partner} from "../../core/models";
import {useFetch} from "../../core/hooks/useFetch";
import {Section} from "../Section/Section";
import {TextBlock} from "../Blocks/TextBlock";
import {Col, Grid, Row} from "react-flexbox-grid";
import React from "react";
import styled from "styled-components/macro";

function shuffle(o: Partner[]) {
    for (let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) ;
    return o;
}


export interface PartnerListProps {
    color: string;
}

const PartnersListContainer = styled(Row)`
    margin-bottom: 3rem;
    justify-content: center;
`

const PartnerLogo = styled.img`
    width: 10rem;
    &:hover {
        transform: scale(1.2);
    }    
`

function PartnerList(props: PartnerListProps) {
    const partners = useFetch<Partner>(
        "https://d3o108dy577i1m.cloudfront.net/2019/partners/partners-2019.json"
    );
    const shuffled = shuffle(partners);
    return !shuffled.length ? null :
        (
            <Section color={props.color}>
                <TextBlock color={props.color} title="Partners"/>
                <Grid fluid>
                    <PartnersListContainer>
                        {shuffled.map((partner) => {
                            return (
                                <Col key={partner.name}>
                                    <a href={partner.homepageUrl}>
                                        <PartnerLogo src={partner.logoUrl} alt={partner.name}/>
                                    </a>
                                </Col>
                            )
                        })}
                    </PartnersListContainer>
                </Grid>
            </Section>
        );
}

export default PartnerList
