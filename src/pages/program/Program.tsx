import PageBanner from "../../components/PageBanner/PageBanner";
import {Section} from "../../components/Section/Section";
import styled from 'styled-components/macro';
import React from "react";
import {getFavorites, getSessions, LoadingState, Session, Speaker} from "./data";
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


const TuesdayPrefix = '2018-09-12';
const WednesdayPrefix = '2018-09-12';
const ThursdayPrefix = '2018-09-12';
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
                        <DayFilter selectedDay={this.state.filter.day} setDayFilter={(day: string) => this.filterDay(day)} />
                        <LanguageFilter selectedLanguage={this.state.filter.language} setLanguageFilter={(lang: string) => this.filterLanguage(lang)} />
                        <FormatFilter selectedFormat={this.state.filter.format} setFormatFilter={(lang: string) => this.filterFormat(lang)} />
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
                                    sessions={this.filterSessions(state.sessions, state.filter)}
                                    addToFav={(sessionId: string) => this.toggleFavorite(sessionId)}/>;
            default:
                makeSwitchExaustive(loadingState);
        }
    }

    private filterSessions(sessions: Session[], filter: Filter) {
        const {day, language} = filter;
        const dayPrefix = getDayPrefix(day);
        return sessions
            .filter(s => day === 'all' || s.startTime.startsWith(dayPrefix))
            .filter(s => language === 'both' || s.language === language);
    }

    private toggleFavorite(sessionId: string) {
        const isFavorite = this.state.favorites.indexOf(sessionId) !== -1;
        if(isFavorite) {
            this.setState({
                favorites: this.state.favorites.filter(id => id !== sessionId)
            })
        } else {
            this.setState(
                {favorites: [sessionId].concat(this.state.favorites)}
            )
        }
    }
}

const Filters = styled.div`

`;

const FilterDiv = styled.div`

`;

const FilterHeader = styled.div`

`;
const FilterButtons = styled.div`

`;


interface DayFilterProps {
    selectedDay?: string, setDayFilter: (day: string) => void
}
function DayFilter(props: DayFilterProps) {
    const {selectedDay, setDayFilter} = props;
    return (
        <FilterDiv>
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
        <FilterDiv>
            <FilterHeader>Language</FilterHeader>
            <FilterButtons>
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
    selectedFormat?: string, setFormatFilter: (Format: string) => void
}
function FormatFilter(props: FormatFilterProps) {
    const {selectedFormat, setFormatFilter} = props;
    return (
        <FilterDiv>
            <FilterHeader>Format</FilterHeader>
            <FilterButtons>
                <button className={`program-filter-button ${selectedFormat === 'no' ? 'enabled' : ''}`}
                        onClick={() => setFormatFilter('no')}>
                    TuesFormat
                </button>
                <button className={`program-filter-button ${selectedFormat === 'en' ? 'enabled' : ''}`}
                        onClick={() => setFormatFilter('en')}>
                    WednesFormat
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

interface SessionItemProps {
    session: Session;
    favorites: string[];
    toggleFav: (session: string) => void
}

function SessionItem(props: SessionItemProps) {
    const {session, favorites} = props;
    const isFavorite = favorites.indexOf(props.session.sessionId) !== -1;
    return (
        <article className={`${isFavorite ? 'program-simple-session-item-fav' : 'program-simple-session-item'}`}>
            <div>{session.title}</div>
            <div>
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
            </div>
            <div>
                <div className="program-favorite-button" >
                    <button onClick={() => {props.toggleFav(props.session.sessionId)}}>
                        {isFavorite ? <CheckCircle size={32} /> : <Circle size={32} />}
                    </button>
                </div>
            </div>
        </article>
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
