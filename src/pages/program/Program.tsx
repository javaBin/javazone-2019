import PageBanner from "../../components/PageBanner/PageBanner";
import {Section} from "../../components/Section/Section";
import styled from 'styled-components/macro';
import React from "react";
import {getFavorites, getSessions, LoadingState, Session, setFavorites, Speaker} from "./data";
import {CheckCircle} from "react-feather";
import {Circle} from "react-feather";

interface ProgramProps {}
interface ProgramState {
    filter: Filter
    loadingState: LoadingState,
    sessions: Session[],
    favorites: string[]
}

class Filter {
    constructor(
        readonly day: 'tue' | 'wed' | 'thu' | 'all' = 'all',
        readonly language: 'en' | 'no' | 'both' = 'both',
        readonly format: 'all' | 'presentation' | 'lightning-talk' | 'workshop' | 'fav' = 'all'
    ) {}
}


const TuesdayPrefix = '2018-09-11';
const WednesdayPrefix = '2018-09-12';
const ThursdayPrefix = '2018-09-13';
function getDayPrefix(day: 'tue' | 'wed' | 'thu' | 'all'): string {
    if(day === 'tue') {
        return TuesdayPrefix;
    } else if(day === 'wed') {
        return WednesdayPrefix;
    } else if (day === 'thu') {
        return ThursdayPrefix;
    } else {
        return 'all';
    }
}

export class ProgramPage extends React.Component<ProgramProps, ProgramState> {
    constructor(props: ProgramProps) {
        super(props);
        this.state = {
            filter: new Filter(),
            loadingState: LoadingState.LOADING,
            sessions: [],
            favorites:[]
        }
    }

    componentDidMount() {
        Promise.all([getSessions(), getFavorites()])
            .then(([sessions, favorites]) => {
                this.setState({
                    sessions,
                    favorites,
                    loadingState: LoadingState.LOADED
                })
            }).catch(rejected => {
                this.setState({
                    loadingState: LoadingState.ERROR
                })
        })
    }

    render() {
        const themeColor = 'pink';
        const pageArt = `${process.env.PUBLIC_URL}/page-speakers.svg`;

        return (
            <>
                <PageBanner header="Javazone Program 2019" subHeader="Mark your schedule" color={themeColor} artPath={pageArt} />
                <Section>
                    <Filters>
                        <DayFilter
                            selectedDay={this.state.filter.day}
                            setDayFilter={(day: string) => this.filterDay(day)} />
                        <LanguageFilter
                            selectedLanguage={this.state.filter.language}
                            setLanguageFilter={(lang: string) => this.filterLanguage(lang)} />
                        <FormatFilter
                            selectedFormat={this.state.filter.format}
                            setFormatFilter={(format: string) => this.filterFormat(format)} />
                    </Filters>
                    {this.getContent(this.state)}
                </Section>
            </>
        )
    }

    private filterDay(day: string) {
        this.setState(
            {
                filter: Object.assign({}, this.state.filter, {day})
            }
        )
    }

    private filterLanguage(language: string) {
        this.setState(
            {
                filter: Object.assign({}, this.state.filter, {language})
            }
        )
    }
    private filterFormat(format: string) {
        this.setState(
            {
                filter: Object.assign({}, this.state.filter, {format})
            }
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
                return <SessionList favorites={state.favorites}
                                    sessions={this.filterSessions(state.sessions, state.filter, state.favorites)}
                                    addToFav={(sessionId: string) => this.toggleFavorite(sessionId)}/>;
            default:
                makeSwitchExaustive(loadingState);
        }
    }

    private filterSessions(sessions: Session[], filter: Filter, fav: string[]) {
        const {day, language, format} = filter;
        const dayPrefix = getDayPrefix(day);

        return sessions
            .filter(s => day === 'all' || s.startTime.startsWith(dayPrefix))
            .filter(s => language === 'both' || s.language === language)
            .filter(s => format === 'all' || s.format === format || (format === 'fav' && fav.includes(s.sessionId)));
    }

    private toggleFavorite(sessionId: string) {
        const isFavorite = this.state.favorites.indexOf(sessionId) !== -1;
        if(isFavorite) {
            const favorites = this.state.favorites.filter(id => id !== sessionId)
            this.setState({favorites: favorites});
            setFavorites(favorites);
        } else {
            const favorites = [sessionId].concat(this.state.favorites);
            this.setState(
                {favorites: [sessionId].concat(this.state.favorites)}

            )
            setFavorites(favorites);
        }
    }
}

const Filters = styled.div`
    display: grid;
    width: 100%;
    grid-gap: 1.5rem;
    grid-template-areas: 
        'day language' 
        'format .';
    @media only screen and (max-width: 450px) {
        grid-template-areas: 'day' 'language' 'format';
    }
`;

const FilterDiv = styled.div`
        grid-area: ${(props: any) => props.grid};
`;

const FilterHeader = styled.h1`
    font-size: 3rem;
    text-transform: uppercase;
    text-align: left;
    margin: 1rem 0 0 0;
    color: ${(props: any) => props.theme.colors[`pink400`]};
    @media only screen and (max-width: 450px) {
        font-size: 2rem;
    }
`;

const FilterButtons = styled.div`
   
`
;


interface DayFilterProps {
    selectedDay?: string, setDayFilter: (day: string) => void
}
function DayFilter(props: DayFilterProps) {
    const {selectedDay, setDayFilter} = props;
    return (
        <FilterDiv grid="day">
            <FilterHeader>Day</FilterHeader>
            <FilterButtons>
                <button className={`program-filter-button ${selectedDay === 'tue' ? 'enabled' : ''}`}
                        onClick={() => setDayFilter('tue')}>
                    Tuesday
                </button>
                <button className={`program-filter-button ${selectedDay === 'wed' ? 'enabled' : ''}`}
                        onClick={() => setDayFilter('wed')}>
                    Wednesday
                </button>
                <button className={`program-filter-button ${selectedDay === 'thu' ? 'enabled' : ''}`}
                        onClick={() => setDayFilter('thu')}>
                    Thursday
                </button>
            </FilterButtons>
        </FilterDiv>
    )
}


interface LanguageFilterProps {
    selectedLanguage?: string, setLanguageFilter: (Language: string) => void
}
function LanguageFilter(props: LanguageFilterProps) {
    const {selectedLanguage, setLanguageFilter} = props;
    return (
        <FilterDiv grid="language">
            <FilterHeader>Language</FilterHeader>
            <FilterButtons theme="pink">
                <button className={`program-filter-button ${selectedLanguage === 'no' ? 'enabled' : ''}`}
                        onClick={() => setLanguageFilter('no')}>
                    Norwegian
                </button>
                <button className={`program-filter-button ${selectedLanguage === 'en' ? 'enabled' : ''}`}
                        onClick={() => setLanguageFilter('en')}>
                    English
                </button>
            </FilterButtons>
        </FilterDiv>
    )
}

interface FormatFilterProps {
    selectedFormat?: string,
    setFormatFilter: (Format: string) => void
}

function FormatFilter(props: FormatFilterProps) {
    const {selectedFormat, setFormatFilter} = props;
    return (
        <FilterDiv grid="format">
            <FilterHeader>Format</FilterHeader>
            <FilterButtons>
                <button className={`program-filter-button ${selectedFormat === 'all' ? 'enabled' : ''}`}
                        onClick={() => setFormatFilter('all')}>
                    All
                </button>
                <button className={`program-filter-button ${selectedFormat === 'presentation' ? 'enabled' : ''}`}
                        onClick={() => setFormatFilter('presentation')}>
                    Presentations
                </button>
                <button className={`program-filter-button ${selectedFormat === 'lightning-talk' ? 'enabled' : ''}`}
                        onClick={() => setFormatFilter('lightning-talk')}>
                    Lightning Talks
                </button>
                <button className={`program-filter-button ${selectedFormat === 'workshop' ? 'enabled' : ''}`}
                        onClick={() => setFormatFilter('workshop')}>
                    Workshops
                </button>
                <button className={`program-filter-button ${selectedFormat === 'fav' ? 'enabled' : ''}`}
                        onClick={() => setFormatFilter('fav')}>
                    My Favorites
                </button>
            </FilterButtons>
        </FilterDiv>
    )
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

interface SessionListProps {
    sessions: Session[];
    favorites: string[];
    addToFav: (sessionId: string) => void;
}
function SessionList(props: SessionListProps) {
    return (
        <div className="program-list">
            <Tuesday favorites={props.favorites} addToFav={props.addToFav} sessions={props.sessions} />
            <Wednesday favorites={props.favorites} addToFav={props.addToFav} sessions={props.sessions} />
            <Thursday favorites={props.favorites} addToFav={props.addToFav} sessions={props.sessions} />
        </div>
    );
}

interface DayProps {
    sessions: Session[];
    favorites: string[];
    addToFav: (sessionId: string) => void;
}

function Wednesday(props: DayProps) {
    const filteredList = props.sessions.filter(session => session.startTime.startsWith(WednesdayPrefix));
    const timeSlots = groupByTimeSlot(filteredList);
    return (
        filteredList.length > 0 ?
            <div>
                <h1 className="program-day-header">Wednesday</h1>
                {Object
                    .keys(timeSlots)
                    .map((timeSlot, idx) => {
                        return <section key={timeSlot + idx}>
                            <h1 className="program-day-timeslot">{timeSlot.substr(-5)}</h1>
                            {timeSlots[timeSlot]
                                .map((session, idx) => {
                                return <SessionItem favorites={props.favorites}
                                                    toggleFav={props.addToFav}
                                                    key={session.sessionId}
                                                    session={session} />
                            })}
                        </section>
                    })}
            </div> : null
    );
}

function Thursday(props: DayProps) {
    const filteredList = props.sessions.filter(session => session.startTime.startsWith(ThursdayPrefix));
    const timeSlots = groupByTimeSlot(filteredList);
    return (
        filteredList.length > 0 ?
            <div>
                <h1 className="program-day-header">Thursday</h1>
                {Object.keys(timeSlots).map((timeSlot, idx) => {
                    return <section key={timeSlot + idx}>
                        <h1 className="program-day-timeslot">{timeSlot.substr(-5)}</h1>
                        {timeSlots[timeSlot].map((session, idx) => {
                            return <SessionItem favorites={props.favorites} toggleFav={props.addToFav} key={session.sessionId} session={session} />
                        })}
                    </section>
                })}
            </div> : null
    );
}

function Tuesday(props: DayProps) {
    const filteredList = props.sessions.filter(session => session.startTime.startsWith(TuesdayPrefix));
    const timeSlots = groupByTimeSlot(filteredList);
    return (
        filteredList.length > 0 ?
            <div>
                <h1 className="program-day-header">Tuesday</h1>
                {Object.keys(timeSlots).map((timeSlot: string, idx) => {
                    return <section key={timeSlot + idx}>
                        <h1 className="program-day-timeslot">{timeSlot.substr(-5)}</h1>
                        {timeSlots[timeSlot].map((session, idx) => {
                            return <SessionItem favorites={props.favorites} toggleFav={props.addToFav} key={session.sessionId} session={session} />
                        })}
                    </section>
                })}
            </div> : null
    );
}


const SessionItemArticle = styled.article`
    box-sizing: border-box;
    border-radius: 6px;
    width: 100%;
    height: auto;
    color: ${(props: any) => props.theme.colors['warm400']};
    padding: 1rem;
    border: 5px solid rgba(255,255,255,0.5);
    background: ${(props: any) => props.theme.colors[`orange100`]};
    margin-bottom: 1rem;
    display: flex;  
    flex-direction: row;
`;

const ProgramTitle = styled.a`
    text-decoration: none;
    font-size: 2.4rem;
    font-family: 'BenchNine', sans-serif;
    color: ${(props: any) => props.theme.colors['warm400']};
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
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
    width: 93%;
`;

const ProgramFav = styled.div`
    width: 7%;
    margin: auto;
    button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }
`;


interface SessionItemProps {
    session: Session;
    favorites: string[];
    toggleFav: (session: string) => void
}

function SessionItem(props: SessionItemProps) {
    const {session, favorites} = props;
    const isFavorite = favorites.indexOf(props.session.sessionId) !== -1;
    return (
        <SessionItemArticle>
            <ProgramInfo>
                <ProgramTitle href={`/program/${session.sessionId}`}>{session.title}</ProgramTitle>
                <ProgramSubInfo>
                    <div className="program-margin-right">
                        <strong>{sessionFormat(props.session.format)}</strong>
                    </div>
                    <div className="program-margin-right">
                        {props.session.room}
                    </div>
                    <div className="program-margin-right">
                        {props.session.language === 'en' ? 'English' : 'Norwegian'}
                    </div>
                    <div className="program-margin-right">
                        {`${props.session.length} Minutes`}
                    </div>
                    <div>
                        {props.session.speakers.length > 1 ? generateSpeakersString(session.speakers) : props.session.speakers[0].name}
                    </div>
                </ProgramSubInfo>
            </ProgramInfo>
            <ProgramFav>
                    <button onClick={() => {props.toggleFav(props.session.sessionId)}}>
                        {isFavorite ? <CheckCircle size={32} /> : <Circle size={32} />}
                    </button>
            </ProgramFav>
        </SessionItemArticle>
    );
}

function generateSpeakersString(speakers: Speaker[]): string {
    let speakersCombined = '';
    speakers.forEach((speaker, idx) => (idx < speakers.length-1) ? speakersCombined += `${speaker.name}, ` : speakersCombined += speaker.name);
    return speakersCombined;
}

const sessionFormat = (format: string) => {
    if (format === 'presentation') return 'Presentation';
    if (format === 'lightning-talk') return 'Lightning Talk';
    return 'Workshop';
};

function groupByTimeSlot(sessions: Session[]): {[a: string]: Session[]} {
    const sorted = sessions.sort(function(a, b) {
        return new Date(a.startTime).getTime() - new Date(b.startTime).getTime();
    });
    const grouped = sorted.reduce(function(rv: {[a: string]: Session[]}, x: Session) {
        (rv[x['startTime']] = rv[x['startTime']] || []).push(x);
        return rv;
    }, {});
    return grouped;
}

export function makeSwitchExaustive(_unused: never): never {
    throw new Error('This should never happen because compiler will find this bug!');
}
