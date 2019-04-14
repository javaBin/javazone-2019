import React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import useOnClickOutside from 'use-onclickoutside'
import styled, { css } from 'styled-components';
import { useIsTop } from '../../core/hooks/UseIsTop';

const logo = `${process.env.PUBLIC_URL}/logo-sharp.svg`;
const hamburger = `${process.env.PUBLIC_URL}/menu.svg`;

const Header = styled.div`
    z-index: 1000;
    position: ${(props: any) => props.isSubpage ? 'sticky' : 'absolute'};
    background: ${(props: any) => props.isSubpage ? 'white' : 'transparent'};
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    display: flex;
    flex-direction: row;
    ${(props: any) => props.isTop ? css`
        border-bottom: 2px solid rgba(0, 0, 0, 0.2);
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
    ` : null};
    justify-content: space-between;
`

const Brand = styled(Link)`
    pointer-events: auto;
    line-height: 0;
    width: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2rem 1rem;
    text-decoration: none;
    color: black;
    & > h1 {
        font-size: 2.5em;
        margin-left: 1rem;
        @media (max-width: 450px) {
            font-size: 1.5em;
        }
    }
`

const Logo = styled.img`
    width: 4rem;
`

const Icon = styled.img`
    height: 2rem;
    width: 2rem;
`

const MenuButton = styled.button`
    cursor: pointer;
    outline: none;
    pointer-events: auto;
    padding: 0.5rem;
    width: fit-content;
    background: none;
    border: none;
`

const MenuToggle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

const Menu = styled.div`
    margin: 1rem;
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
    background: #FFC236;
    border-radius: 0.4rem;
    ${(props: any) => props.isToggled && css`
        width: 16rem;
    `};
`

const MenuContent = styled.div`
    padding: 0 1rem 1rem 1rem;
`

const MenuLink = styled(Link)`
    font-size: 1.4rem;
    color: black;
    text-decoration: none;
    & > h2 {
        margin: 0.5rem 0;
    }
`

interface NavigationProps extends RouteComponentProps {
    routes: NavRoute[];
    displayBrand?: boolean;
    // position?: NavigationPosition;
    isNotFound?: boolean;
}

export interface NavRoute {
    title: string;
    url: string;
    show: boolean;
}

function Navigation(props: NavigationProps) {
    const [isToggled, setIsToggled] = useState(false);
    const isSubpage = props.location.pathname !== '/';
    const isTop = useIsTop();
    const ref = useRef(null);
    useOnClickOutside(ref, () => setIsToggled(false));
    function toggleMenu() {
        setIsToggled(!isToggled);
    }

    return (
        <Header isTop={!isTop} isSubpage={isSubpage}>
            <Brand to="/">
                <Logo src={logo} />
                <h1><b>JavaZone</b></h1>
            </Brand>
            <Menu ref={ref} isToggled={isToggled}>
                <MenuToggle>
                    <MenuButton onClick={toggleMenu}>
                        <Icon src={hamburger} />
                    </MenuButton>
                </MenuToggle>
                {isToggled ? <MenuContent>
                    {props.routes.map(route => {
                        return route.show ? <MenuLink onClick={toggleMenu} to={route.url}><h2>{route.title}</h2></MenuLink> : null
                    })}
                </MenuContent>: null}
            </Menu>
        </Header>
    );
}

export default withRouter(Navigation);