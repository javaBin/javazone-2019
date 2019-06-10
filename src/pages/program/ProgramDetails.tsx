import React from "react";
import {getFavorites, getSessions, LoadingState, Session, Speaker} from "./data";
import {RouteComponentProps} from "react-router";
import {Section} from "../../components/Section/Section";
import {TextBlock} from "../../components/Blocks/TextBlock";
import PageBanner from "../../components/PageBanner/PageBanner";
import styled from "styled-components/macro";

type TParams = { sessionId: string };

interface ProgramProps extends RouteComponentProps<TParams>{}

interface ProgramState {
    loadingState: LoadingState,
    session?: Session,
    isFavorite: boolean
    themeColor: ThemeType;
    pageArt: string
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
        const [pageArt, themeColor] = getTheme();
        super(props);
        this.state = {
            loadingState: LoadingState.LOADING,
            session: undefined,
            isFavorite: false,
            themeColor: themeColor,
            pageArt: pageArt,
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
        const {loadingState, session, pageArt, themeColor} = this.state;

        if(loadingState === LoadingState.LOADING) {
            return <Loading pageArt={pageArt} themeColor={themeColor} />
        } else if (loadingState === LoadingState.ERROR) {
            return <Failure pageArt={pageArt} themeColor={themeColor} />
        } else {
            // session should not be undefined at this point.
            return this.getSessionContent(session as Session)
        }

    }

    private getSessionContent(session: Session) {

        const {pageArt, themeColor} = this.state;
        const {title, speakers, abstract, intendedAudience, room, startTime, language, format, length} = session;
        return <>
            <PageBanner header={title} subHeader={this.generateSpeakerString(speakers)} color={themeColor}
                        artPath={pageArt}/>
            <Section>
                <FiltersBox color={themeColor}>
                    <FilterHeader color={themeColor}>{this.transformTime(startTime)} - {room}</FilterHeader>
                    <FilterHeader color={themeColor}>{language === 'en' ? 'English' : 'Norwegian'}</FilterHeader>
                    <FilterHeader color={themeColor}>{this.transformFormat(format)} ({length} Min)</FilterHeader>
                </FiltersBox>
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

    getDatPrefix(time: string){
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

    transformTime(time: string) {
        if (!time) return '';
        return `${this.getDatPrefix(time)}, ${time.substr(-5)}`
    }
}


// to make the loading seem less "jumpy"
const WhiteBlock = styled.div`
    height: 50rem
`;

function Failure(props: {pageArt: string, themeColor: ThemeType}) {
    return (
        <PageBanner header="Woooops!"
                    subHeader="It seems something is seriously wrong here. We are most likely informed and working on it, so just try again in a while."
                    color={props.themeColor}
                    artPath={props.pageArt}
        />
    )
}

function Loading(props: {pageArt: string, themeColor: ThemeType}) {
    return (
        <>
            <PageBanner header="Loading program..."
                        subHeader="Hold on one second, fetching program!"
                        color={props.themeColor}
                        artPath={props.pageArt}
            />
            <Section>
                <WhiteBlock/>
            </Section>
        </>
    )
}



const FiltersBox = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: row
    
    padding-bottom: 3rem;
    padding-top: 3rem;
    border-bottom: ${(props: any) => `5px solid ${props.theme.colors[`${props.color}100`]}`};
    margin-bottom: 1rem;
    padding-bottom: 3rem;
    
    & h1 {
	    margin-right: 10rem;
	}
	
	@media only screen and (max-width: 900px) {
        flex-direction: column;
        & h1 {
	        margin-right: 0;
	    }
    }
`;

const FilterHeader = styled.h1`
    font-size: 3rem;
    text-align: left;
    margin: 1rem 0 0 0;
    color: ${(props: any) => props.theme.colors[`${props.color}400`]};
    @media only screen and (max-width: 450px) {
        font-size: 2rem;
    }
`;
