import React from "react";
import {getFavorites, getSessions, LoadingState, Session, Speaker} from "./data";
import {RouteComponentProps} from "react-router";
import {Section} from "../../components/Section/Section";

type TParams = { sessionId: string };
interface ProgramProps extends RouteComponentProps<TParams>{
}
interface ProgramState {
    loadingState: LoadingState,
    session?: Session,
    isFavorite: boolean
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
        const {title, speakers, abstract, intendedAudience, room, language, format} = session;
        return (
            <Section>
                <article>
                    <h1>{title}</h1>
                    <div>
                        <p className="text-wrap">
                            {abstract}
                        </p>
                    </div>
                    {speakers ? speakers.map(speaker => {
                        return <div key={speaker.name}>
                            <p>speaker.name</p>
                            <p className="text-wrap">
                                {speaker.bio}
                            </p>
                        </div>
                    }) : null}
                    <div>
                        intended audience
                        <p>
                            {intendedAudience}
                        </p>
                    </div>
                    <div>
                        Location
                        <p className="too-small">
                            {room}
                        </p>
                    </div>
                    <div>
                        Language
                        <p className="too-small">
                            {language === 'en' ? 'English' : 'Norwegian'}
                        </p>
                    </div>
                    <div >
                        Format
                        <p className="too-small">
                            {format}
                        </p>
                    </div>
                </article>
            </Section>
        );
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
