import React from 'react';
import styled from 'styled-components';

interface TicketPriceProps {
    soldOut?: boolean;
    children: React.ReactNode;
    className: string;
    color?: string;
}

function TicketPrice(props: TicketPriceProps) {
    return (
        <span className={props.className}>NOK {props.children},-</span>
    )
}

const StyledTicketPrice = styled(TicketPrice)`
    margin-top: 3rem;
    font-size: 6em;
    font-weight: 700;
    color: ${(props: any) => props.theme.colors[props.color]};
    text-decoration: ${(props: any) => props.soldOut ? 'line-through' : 'none'};
`

StyledTicketPrice.defaultProps = {
    soldOut: false,
    color: 'warm200'
}

export { StyledTicketPrice as TicketPrice};