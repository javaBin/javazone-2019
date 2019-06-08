import React from "react";
import {getFavorites, getSessions, LoadingState, Session, Speaker} from "./data";
import {RouteComponentProps} from "react-router";
import {Section} from "../../components/Section/Section";
import {TextBlock} from "../../components/Blocks/TextBlock";
import PageBanner from "../../components/PageBanner/PageBanner";

type TParams = { sessionId: string };

interface ProgramProps extends RouteComponentProps<TParams>{}

interface ProgramState {
    loadingState: LoadingState,
    session?: Session,
    isFavorite: boolean
}

type ThemeType = 'green' | 'blue' | 'pink' | 'orange' | 'warm';

function getTheme(): [string, ThemeType]{
    const arts = [
        `${process.env.PUBLIC_URL}/page-partners.svg`,
        `${process.env.PUBLIC_URL}/page-kids-academy.svg`,
        `${process.env.PUBLIC_URL}/page-about.svg`,
        `${process.env.PUBLIC_URL}/page-frivillige.svg`,
        `${process.env.PUBLIC_URL}/page-info.svg`,
        `${process.env.PUBLIC_URL}/page-kids-academy.svg`,
        `${process.env.PUBLIC_URL}/page-speakers.svg`,
        `${process.env.PUBLIC_URL}/page-tickets.svg`,
    ];

    const themes: ThemeType[] = [
        'green', 'blue', 'pink', 'orange' ,'warm'
    ];

    return [arts[Math.floor(Math.random() * arts.length)],
        themes[Math.floor(Math.random() * themes.length)]]

}

export class ProgramDetailsPage extends React.Component<ProgramProps, ProgramState> {
    constructor(props: ProgramProps) {
        super(props);
        this.state = {
            loadingState: LoadingState.LOADING,
            session: undefined,
            isFavorite: false
        }
    }

    componentDidMount() {
        const sessionId = this.props.match.params.sessionId;
        Promise.all([getSessions(), getFavorites()])
            .then(([sessions, favorites]) => {
                this.setState({
                    session: sessions.find(s => s.sessionId === sessionId),
                    isFavorite: favorites.indexOf(sessionId) !== -1,
                    loadingState: LoadingState.LOADED
                })
            }).catch(rejected => {
            this.setState({
                loadingState: LoadingState.ERROR
            })
        })
    }

    render() {
        const {loadingState, session} = this.state;
        if(loadingState === LoadingState.LOADING) {
            return <Section><Loading /></Section>
        } else if (loadingState === LoadingState.ERROR) {
            return <Section><Failure /></Section>
        } else {
            // session should not be undefined at this point.
            return this.getSessionContent(session as Session)
        }

    }

    private getSessionContent(session: Session) {

        const [pageArt, themeColor] = getTheme();
        const {title, speakers, abstract, intendedAudience, room, language, format} = session;
        return <>
            <PageBanner header={title} subHeader={this.generateSpeakerString(speakers)} color={themeColor}
                        artPath={pageArt}/>
            <Section>
                <TextBlock color={themeColor} title="Abstract">
                    <p>{abstract}</p>
                </TextBlock>

                {speakers ? speakers.map(speaker => {
                    if (!speaker.bio) {
                        return null;
                    }
                    return <TextBlock color={themeColor} key={speaker.name} title={speaker.name}>
                        <p>
                            {speaker.bio}
                        </p>
                    </TextBlock>
                }) : null}
                <TextBlock color={themeColor} title="Intended audience">
                    <p>{intendedAudience}</p>
                </TextBlock>
                <TextBlock color={themeColor} title="Location">
                    <p>{room}</p>
                </TextBlock>
                <TextBlock color={themeColor} title="Language">
                    <p>{language === 'en' ? 'English' : 'Norwegian'}</p>
                </TextBlock>
                <TextBlock color={themeColor} title="Format">
                    <p>{format}</p>
                </TextBlock>
            </Section>
            </>


    }

    generateSpeakerString(speakers: Speaker[]) {
        if (!speakers) return '';
        let speakersCombined = '';
        speakers.forEach((speaker, idx) => (idx < speakers.length-1) ? speakersCombined += `${speaker.name}, ` : speakersCombined += speaker.name);
        return speakersCombined;
    }

    transformFormat(format: string) {
        if (!format) return '';
        let replaced = format.replace('-', ' ');
        return replaced.replace(/\w\S*/g, function(txt){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
}

function Failure() {
    return (
        <div className='program__loading'>
            <h2 className='program__loading-header'>Woooops!</h2>
            It seems something is seriously wrong here. We are most likely informed and working on it, so just try again in a while.
        </div>
    )
}

function Loading() {
    return (
        <div className='program__loading'>
            <h2 className='program__loading-header'>Loading program...</h2>
            Hold on one second, fetching program!
        </div>
    )
}
