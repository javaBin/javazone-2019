import classnames from 'classnames';
import React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import styles from './Navigation.module.scss';
import { useRef, useEffect, useState } from 'react';
import { useWindowWidth } from '../../core/hooks/UseWindowWidth';
import { useIsFrontpage } from '../../core/hooks/UseIsFrontpage';
import styled, { css } from 'styled-components';

const logo = `${process.env.PUBLIC_URL}/logo-sharp.svg`;
const hamburger = `${process.env.PUBLIC_URL}/menu.svg`;

const Header = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Brand = styled.div`
    pointer-events: auto;
    line-height: 0;
    width: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2rem 1rem;
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
    z-index: 1000;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
    background: #FFC236;
    border-radius: 0.4rem;
    ${(props: any) => props.isToggled && css`
        width: 12rem;
    `};
`

const MenuContent = styled.div`
    padding: 0 1rem 1rem 1rem;
`

const MenuLink = styled(Link)`
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

    useEffect(() => {
        console.log('isToggled', isToggled);
    }, [isToggled]);

    function toggleMenu() {
        setIsToggled(!isToggled);
    }

    return (
        <Header>
            <Brand>
                <Logo src={logo} />
                <h1>JAVAZONE</h1>
            </Brand>
            <Menu isToggled={isToggled}>
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

// export type NavigationPosition = 'start' | 'end';

// const MENU_WIDTH = 900;

// export interface NavRoute {
//     title: string;
//     url: string;
//     show: boolean;
// }

// interface NavigationProps extends RouteComponentProps {
//     routes: NavRoute[];
//     displayBrand?: boolean;
//     position?: NavigationPosition;
//     sticky?: boolean;
//     isNotFound?: boolean;
// }

// interface NavigationState {
//     subMenuItems: NavRoute[];
// }

// function Navigation(props: NavigationProps) {

//     const windowWidth = useWindowWidth();
//     const isFrontpage = useIsFrontpage(props.location.pathname, props.routes);

//     const componentClass = classnames(
//         styles.navigation,
//         {[styles.space]: windowWidth <= MENU_WIDTH},
//         {[styles.frontpage]: isFrontpage || props.isNotFound},
//         {[styles.navigationSticky]: props.sticky},
//         {[styles.navigationEnd]: props.position === 'end'}
//     );

//     function renderMenuButton() {
//         return (
//             <MenuButton pathname={props.location.pathname} routes={props.routes} />
//         )
//     }

//     return (
//         <div className={componentClass}>
//             {props.displayBrand ? <Brand /> : null}
//             {windowWidth <= MENU_WIDTH
//                 ? renderMenuButton()
//                 : props.routes.map((navRoute: NavRoute) => {
//                     return (
//                         navRoute.show ? <NavItem pathname={props.location.pathname} key={navRoute.title} route={navRoute} /> : null
//                     )
//                 })}
//         </div>
//     )
// }

// Navigation.defaultProps = {
//     displayBrand: true,
//     sticky: false
// }

// interface MenuButtonProps {
//     routes: NavRoute[];
//     pathname: string;
// }

// function MenuButton(props: MenuButtonProps) {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     function handleOpenMenu() {
//         setIsMenuOpen(!isMenuOpen);
//     }
//     return (
//         <>
//             <button className={styles.menu} onClick={handleOpenMenu}>
//                 <img src={isMenuOpen ? 'x.svg' : 'menu.svg'} />
//             </button>
//             {isMenuOpen ? <div className={styles.menuContainer}>
//                 {props.routes.map(route => {
//                     return route.show ? <NavItem itemClicked={handleOpenMenu} pathname={props.pathname} key={route.title} route={route} /> : null
//                 })}
//             </div> : null}
//         </>
//     )
// }

// interface NavItemProps {
//     route: NavRoute;
//     activeRoute?: boolean;
//     pathname: string;
//     itemClicked?: () => void;
// }

// const NavItem: React.StatelessComponent<NavItemProps> = (props: NavItemProps) => {
//     const navItemRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
//     const [isActiveRoute, setIsActiveRoute] = useState(false);
//     const [elementPosition, setElementPosition] = useState(0);
//     const [outOfBounds, setOutOfBounds] = useState(false);

//     useEffect(() => {
//         if(navItemRef.current && elementPosition === 0) {
//             setElementPosition(navItemRef.current.offsetWidth + navItemRef.current.offsetLeft);
//         }
//     }, []);
//     useEffect(() => {
//         setIsActiveRoute(props.pathname === props.route.url);
//     }, [props.pathname]);

//     const componentClass = classnames(
//         styles.navigationNavItem,
//         {[styles.active]: isActiveRoute}
//     );

//     return (
//         !outOfBounds ?
//         <Link onClick={props.itemClicked} to={props.route.url}>
//             <div ref={navItemRef} className={componentClass}>
//                 {props.route.title}
//             </div>
//         </Link> : null
//     )
// }

// NavItem.defaultProps = {
//     activeRoute: false
// }

// interface BrandProps {
//     title?: string;
//     displayLogo?: boolean;
// }

// const Brand: React.StatelessComponent<BrandProps> = (props) => {
//     return (
//         <Link to="/">
//             <div className={styles.navigationBrand}>
//                 <img src={logo} alt="Logo" />
// 				<h1>{props.title}</h1>
//             </div>
//         </Link>
//     )
// }

// Brand.defaultProps = {
//     displayLogo: true,
//     title: 'JAVAZONE'
// }

export default withRouter(Navigation);