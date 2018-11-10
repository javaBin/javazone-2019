import classnames from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

export type NavigationPosition = 'start' | 'end';

export interface NavRoute {
    title: string;
    url: string;
}

interface NavigationProps {
    routes: NavRoute[];
    displayBrand?: boolean;
    position?: NavigationPosition;
    sticky?: boolean;
}

export class Navigation extends React.Component<NavigationProps> {

    public static defaultProps: Partial<NavigationProps> = {
        displayBrand: true,
        position: 'start',
        sticky: false,
    };

    constructor (props: NavigationProps) {
        super(props);
    }

    public render() {

        const componentClass = classnames(
            'navigation',
            {'navigation--sticky': this.props.sticky},
            {'navigation--end': this.props.position === 'end'}
        )

        return (
            <div className={componentClass}>
                {this.props.displayBrand ? <Brand /> : null}
                {this.props.routes.map((navRoute: NavRoute) => {
                    return (
                        <NavItem key={navRoute.title} route={navRoute} />
                    )
                })}
            </div>
        )
    }
}

interface NavItemProps {
    route: NavRoute;
    activeRoute?: boolean;
}

const NavItem: React.StatelessComponent<NavItemProps> = (props) => {
    return (
        <Link to={props.route.url}>
            <div className="navigation__nav-item">
                {props.route.title}
            </div>
        </Link>
    )
}

NavItem.defaultProps = {
    activeRoute: false
}

interface BrandProps {
    title?: string;
    displayLogo?: boolean;
}

const Brand: React.StatelessComponent<BrandProps> = (props) => {
    return (
        <Link to="/">
            <div className="navigation__brand">
                <img src="logo.svg" alt="JavaZone Logo" />
				<h1>{props.title}</h1>
            </div>
        </Link>
    )
}

Brand.defaultProps = {
    displayLogo: true,
    title: 'JavaZone'
}
