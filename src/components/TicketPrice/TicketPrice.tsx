import React from 'react';
import styled from 'styled-components';

interface TicketPriceProps {
    soldOut?: boolean;
    children: React.ReactNode;
    className: string;
}

function TicketPrice(props: TicketPriceProps) {
    return (
        <span className={props.className}>NOK {props.children},-</span>
    )
}

TicketPrice.defaultProps = {
    soldOut: false
}

const StyledTicketPrice = styled(TicketPrice)`
    margin-top: 3rem;
    font-size: 6em;
    font-weight: 700;
    color: ${(props: any) => props.theme.colors['warm200']};
    text-decoration: ${(props: any) => props.soldOut ? 'line-through' : 'none'};
`

export { StyledTicketPrice as TicketPrice};