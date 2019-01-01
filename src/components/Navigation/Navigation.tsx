import classnames from 'classnames';
import * as React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { ChevronDown } from 'react-feather';
import styles from './Navigation.module.scss';
import { useRef, useEffect, useState } from 'react';
import { useWindowWidth } from '../../core/hooks/UseWindowWidth';
import { useIsFrontpage } from '../../core/hooks/UseIsFrontpage';

export type NavigationPosition = 'start' | 'end';

export interface NavRoute {
    title: string;
    url: string;
}

interface NavigationProps extends RouteComponentProps {
    routes: NavRoute[];
    displayBrand?: boolean;
    position?: NavigationPosition;
    sticky?: boolean;
}

interface NavigationState {
    subMenuItems: NavRoute[];
}

function Navigation(props: NavigationProps) {

    const windowWidth = useWindowWidth();
    const isFrontpage = useIsFrontpage(props.location.pathname);

    const componentClass = classnames(
        styles.navigation,
        {[styles.frontpage]: isFrontpage},
        {[styles.navigationSticky]: props.sticky},
        {[styles.navigationEnd]: props.position === 'end'}
    );

    return (
        <div className={componentClass}>
            {props.displayBrand ? <Brand /> : null}
            {props.routes.map((navRoute: NavRoute) => {
                return (
                    <NavItem pathname={props.location.pathname} key={navRoute.title} windowWidth={windowWidth} route={navRoute} />
                )
            })}
        </div>
    )
}

Navigation.defaultProps = {
    displayBrand: true,
    sticky: false
}

const MoreButton: React.StatelessComponent = (props) => {
    return (
        <div className={styles.navigationNavItem}>
            More
            <ChevronDown />
        </div>
    )
}

interface NavItemProps {
    windowWidth?: number;
    route: NavRoute;
    activeRoute?: boolean;
    pathname: string;
}

const NavItem: React.StatelessComponent<NavItemProps> = (props) => {
    const navItemRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
    const [isActiveRoute, setIsActiveRoute] = useState(false);
    const [elementPosition, setElementPosition] = useState(0);
    const [outOfBounds, setOutOfBounds] = useState(false);

    useEffect(() => {
        if(navItemRef.current && elementPosition === 0) {
            setElementPosition(navItemRef.current.offsetWidth + navItemRef.current.offsetLeft);
        }
    }, []);
    useEffect(() => {
        if(props.windowWidth) {
            props.windowWidth <= elementPosition ? setOutOfBounds(true) : setOutOfBounds(false);
        }
    }, [props.windowWidth]);
    useEffect(() => {
        setIsActiveRoute(props.pathname === props.route.url);
    }, [props.pathname]);

    const componentClass = classnames(
        styles.navigationNavItem,
        {[styles.active]: isActiveRoute}
    );

    return (
        !outOfBounds ?
        <Link to={props.route.url}>
            <div ref={navItemRef} className={componentClass}>
                {props.route.title}
            </div>
        </Link> : null
    )
}

NavItem.defaultProps = {
    windowWidth: 0,
    activeRoute: false
}

interface BrandProps {
    title?: string;
    displayLogo?: boolean;
}

const Brand: React.StatelessComponent<BrandProps> = (props) => {
    return (
        <Link to="/">
            <div className={styles.navigationBrand}>
                <img src="logo-sharp.svg" alt="Logo" />
				<h1>{props.title}</h1>
            </div>
        </Link>
    )
}

Brand.defaultProps = {
    displayLogo: true,
    title: 'JAVAZONE'
}

export default withRouter(Navigation);