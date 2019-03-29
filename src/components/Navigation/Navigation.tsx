import React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import useOnClickOutside from 'use-onclickoutside'
import styled, { css } from 'styled-components';

const logo = `${process.env.PUBLIC_URL}/logo-sharp.svg`;
const hamburger = `${process.env.PUBLIC_URL}/menu.svg`;

const Header = styled.div`
    z-index: 1000;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    display: flex;
    flex-direction: row;
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
        font-size: 2.5rem;
        margin-left: 1rem;
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
    sticky?: boolean;
    isNotFound?: boolean;
}

export interface NavRoute {
    title: string;
    url: string;
    show: boolean;
}

function Navigation(props: NavigationProps) {
    const [isToggled, setIsToggled] = useState(false);
    const ref = useRef(null);
    useOnClickOutside(ref, () => setIsToggled(false));
    useEffect(() => {

    }, [isToggled]);

    function toggleMenu() {
        setIsToggled(!isToggled);
    }

    return (
        <Header>
            <Brand to="/">
                <Logo src={logo} />
                <h1>JAVAZONE</h1>
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