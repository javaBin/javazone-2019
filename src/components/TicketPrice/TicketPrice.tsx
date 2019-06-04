import React from 'react';
import styled from 'styled-components/macro';

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
    font-size: 5rem;
    font-weight: 700;
    color: ${(props: any) => props.theme.colors[props.color]};
    text-decoration: ${(props: any) => props.soldOut ? 'line-through' : 'none'};
    @media only screen and (max-width: 4500px) {
        font-size: 4em;
    }
`

StyledTicketPrice.defaultProps = {
    soldOut: false,
    color: 'warm200'
}

export { StyledTicketPrice as TicketPrice};