import React from "react";
import PageBanner from "../../components/PageBanner/PageBanner";
import {Section} from "../../components/Section/Section";
import styled from 'styled-components/macro';
import {getSessions, LoadingState, Session, Speaker} from "../program/data";
import {Link} from "react-router-dom";
import {TextBlock} from "../../components/Blocks/TextBlock";


interface ProgramProps {
}

interface ProgramState {
    loadingState: LoadingState,
    sessions: Session[],
}


export class WorkshopsPage extends React.Component<ProgramProps, ProgramState> {
    constructor(props: ProgramProps) {
        super(props);
        this.state = {
            loadingState: LoadingState.LOADING,
            sessions: [],
        }
    }

    componentDidMount() {
        getSessions()
            .then((sessions) => {
                this.setState({
                    loadingState: LoadingState.LOADED,
                    sessions
                })
            }).catch(rejected => {
            this.setState({
                loadingState: LoadingState.ERROR
            })
        })
    }

    render() {
        const themeColor = 'warm';
        const pageArt = `${process.env.PUBLIC_URL}/page-speakers.svg`;

        return (
            <>
                <PageBanner header="Workshops" subHeader="Bring out the most of your ticket" color={themeColor}
                            artPath={pageArt}/>
                <Section>
                    <TextBlock color={themeColor}>
                        <p>
                            For those of you who want to make the most of their JavaZone ticket we offer a selection of
                            hands-on workshops that take place the day before JavaZone officially begins. To ensure a
                            positive learning experience we’ve limited the spaces on each workshop, so you’ll have to
                            register to secure your place. Registration opens on Monday, August 5 at 10:00, so put a
                            reminder in your calendar!
                        </p>
                    </TextBlock>
                    {this.getContent(this.state)}
                </Section>
            </>
        )
    }

    private getContent(state: ProgramState) {
        const loadingState = state.loadingState;
        switch (loadingState) {
            case LoadingState.LOADING:
                return <Loading/>;
            case LoadingState.ERROR:
                return <Failure/>;
            case LoadingState.LOADED:
                return <SessionList sessions={state.sessions.filter(s => s.format === 'workshop')}/>;
            default:
                makeSwitchExaustive(loadingState);
        }
    }
}

function Failure() {
    return (
        <div className='program__loading'>
            <h2 className='program__loading-header'>Woooops!</h2>
            It seems something is seriously wrong here. We are most likely informed and working on it, so just try again
            in a while.
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

interface SessionListProps {
    sessions: Session[];
}

function SessionList(props: SessionListProps) {
    return (
        <div className="program-list">
            {props.sessions
                .sort((a,b) => a.startTime >= b.startTime ? 1 : -1)
                .map(session => <SessionItem key={session.sessionId} session={session}/>)}
        </div>
    );
}


const SessionItemArticle = styled.article`
    box-sizing: border-box;
    border-radius: 6px;
    width: 100%;
    height: auto;
    padding: 1rem;
    border: 5px solid rgba(255,255,255,0.5);
    background: ${(props: any) => props.theme.colors[`orange100`]};
    margin-bottom: 1rem;
    display: flex;  
    flex-direction: row;
    @media only screen and (max-width: 650px) {
        flex-direction: column;
    }
`;

const ProgramTitle = styled.h1`
    font-size: 2.4rem;
    font-family: 'BenchNine', sans-serif;
    margin 0;
    a {
        text-decoration: none;
        color: black;
    };
    a:hover {
        cursor: pointer;
        text-decoration: underline;
    };
`;

const ProgramSubInfo = styled.div`
    font-size: 1.6rem;
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
    & div:not(:last-child) {
	    margin-right: 1.2rem;
	}
`;


const ProgramInfo = styled.div`
    width: 89%;
`;

const ProgramFav = styled.a`
    margin: auto;
    font-size: 1.6rem;
    padding: 0.8rem 1.8rem;
    box-sizing: border-box;
    border-radius: 2px;
    border: 2px solid black; 
    text-decoration: none;
    text-align: center;
    color: black;
    cursor: pointer;
    transition: 400ms background;
    &:hover {
        background: ${(props: any) => props.theme.colors[`${props.color}400`]};
    }
    @media only screen and (max-width: 650px) {
        margin: 1rem 0 0 0;
        width: 100%;
    }
`;


interface SessionItemProps {
    session: Session;
}

function getDatPrefix(time: string){
    const TuesdayPrefix = '2019-09-10';
    const WednesdayPrefix = '2019-09-11';
    const ThursdayPrefix = '2019-09-12';

    if (time.startsWith(ThursdayPrefix)){
        return "Thursday";
    } else if (time.startsWith(WednesdayPrefix)){
        return "Wednesday"
    } else if (time.startsWith(TuesdayPrefix)){
        return "Tuesday"
    }

    return '';
}

function transformTime(time: string) {
    if (!time) return '';
    return `${getDatPrefix(time)} - ${time.substr(-5)}`
}

function SessionItem(props: SessionItemProps) {
    const {session} = props;
    return (
        <SessionItemArticle>
            <ProgramInfo>
                <ProgramTitle>
                    <Link to={`/program/${session.sessionId}`}>{session.title}</Link>
                </ProgramTitle>
                <ProgramSubInfo>
                    <div>
                        <strong>Workshop</strong>
                    </div>
                    <div>
                        {props.session.room}
                    </div>
                    <div>
                        {props.session.language === 'en' ? 'English' : 'Norwegian'}
                    </div>
                    <div>
                        {`${transformTime(props.session.startTime)}`}
                    </div>
                    <div>
                        {`${props.session.length} min`}
                    </div>
                    <div>
                        {props.session.speakers.length > 1 ? generateSpeakersString(session.speakers) : props.session.speakers[0].name}
                    </div>
                </ProgramSubInfo>
            </ProgramInfo>
            <ProgramFav href={props.session.registerLoc}>
                Register
            </ProgramFav>
        </SessionItemArticle>
    );
}



function generateSpeakersString(speakers: Speaker[]): string {
    let speakersCombined = '';
    speakers.forEach((speaker, idx) => (idx < speakers.length - 1) ? speakersCombined += `${speaker.name}, ` : speakersCombined += speaker.name);
    return speakersCombined;
}


export function makeSwitchExaustive(_unused: never): never {
    throw new Error('This should never happen because compiler will find this bug!');
}
