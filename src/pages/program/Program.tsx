import PageBanner from "../../components/PageBanner/PageBanner";
import { Section } from "../../components/Section/Section";
import styled from 'styled-components/macro';
import React from "react";
import { getFavorites, getSessions, LoadingState, Session, setFavorites, Speaker } from "./data";
import { CheckCircle } from "react-feather";
import { Circle } from "react-feather";
import { Link } from "react-router-dom";


interface ProgramProps { }
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
    ) { }
}


const TuesdayPrefix = '2019-09-10';
const WednesdayPrefix = '2019-09-11';
const ThursdayPrefix = '2019-09-12';
function getDayPrefix(day: 'tue' | 'wed' | 'thu' | 'all'): string {
    if (day === 'tue') {
        return TuesdayPrefix;
    } else if (day === 'wed') {
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
            favorites: []
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
        const themeColor = 'warm';
        const pageArt = `${process.env.PUBLIC_URL}/page-speakers.svg`;

        return (
            <>
                <PageBanner header="JavaZone Program 2019" subHeader="Mark your schedule" color={themeColor} artPath={pageArt} />
                <Section>
                    <FiltersHeader>Filters</FiltersHeader>
                    <FiltersBox>
                        <TopFilterRow>
                            <DayFilter
                                selectedDay={this.state.filter.day}
                                setDayFilter={(day: string) => this.filterDay(day)} />
                            <LanguageFilter
                                selectedLanguage={this.state.filter.language}
                                setLanguageFilter={(lang: string) => this.filterLanguage(lang)} />
                        </TopFilterRow>
                        <FormatFilter
                            selectedFormat={this.state.filter.format}
                            setFormatFilter={(format: string) => this.filterFormat(format)} />
                    </FiltersBox>
                    {this.getContent(this.state)}
                </Section>
            </>
        )
    }

    private filterDay(day: string) {
        this.setState(
            {
                filter: Object.assign({}, this.state.filter, { day })
            }
        )
    }

    private filterLanguage(language: string) {
        this.setState(
            {
                filter: Object.assign({}, this.state.filter, { language })
            }
        )
    }
    private filterFormat(format: string) {
        this.setState(
            {
                filter: Object.assign({}, this.state.filter, { format })
            }
        )
    }

    private getContent(state: ProgramState) {
        const loadingState = state.loadingState;
        switch (loadingState) {
            case LoadingState.LOADING:
                return <Loading />;
            case LoadingState.ERROR:
                return <Failure />;
            case LoadingState.LOADED:
                return <SessionList favorites={state.favorites}
                    sessions={this.filterSessions(state.sessions, state.filter, state.favorites)}
                    addToFav={(sessionId: string) => this.toggleFavorite(sessionId)} />;
            default:
                makeSwitchExaustive(loadingState);
        }
    }

    private filterSessions(sessions: Session[], filter: Filter, fav: string[]) {
        const { day, language, format } = filter;
        const dayPrefix = getDayPrefix(day);

        return sessions
            .filter(s => day === 'all' || s.startTime.startsWith(dayPrefix))
            .filter(s => language === 'both' || s.language === language)
            .filter(s => format === 'all' || s.format === format || (format === 'fav' && fav.includes(s.sessionId)));
    }

    private toggleFavorite(sessionId: string) {
        const isFavorite = this.state.favorites.indexOf(sessionId) !== -1;
        if (isFavorite) {
            const favorites = this.state.favorites.filter(id => id !== sessionId)
            this.setState({ favorites: favorites });
            setFavorites(favorites);
        } else {
            const favorites = [sessionId].concat(this.state.favorites);
            this.setState(
                { favorites: [sessionId].concat(this.state.favorites) }

            )
            setFavorites(favorites);
        }
    }
}

const FiltersHeader = styled.h1`
    font-size: 3rem;
    margin-bottom: 0;
    color: #425282;
`;


const FiltersBox = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: row
    
   
    border-bottom: 5px solid #fff2c3;
    border-bottom: ${(props: any) => `5px solid ${props.theme.colors[`blue300`]}`};
    margin-bottom: 1rem;
    padding-bottom: 3rem;
    
    & div:first-child {
	    margin-right: 5rem;
	}
	
	@media only screen and (max-width: 1160px) {
        flex-direction: column;
        & div:first-child {
	        margin-right: 0;
	    }
    }
`;


const TopFilterRow = styled.div`
    display: flex;
    flex-direction: row
    width: 100%;
    
    & div:first-child {
	    margin-right: 5rem;
	}
    
    @media only screen and (max-width: 660px) {
        flex-direction: column;
        & div:first-child {
	        margin-right: 0;
	    }
    }
`;


const FilterHeader = styled.h1`
    font-size: 2rem;
    text-align: left;
    margin: 1rem 0 0 0;
    color: #425282;
    @media only screen and (max-width: 450px) {
        font-size: 2rem;
    }
`;

const FilterButton = styled.button`
    background: ${(props: any) => props.enabled ? props.theme.colors[`blue300`] : props.theme.colors[`blue100`]};
    border: 0;
    border-radius: 0;
    color: black;
    cursor: pointer;
    margin-bottom: 10px;
    margin-right: 10px;
    outline: 0;
    padding: 10px 10px;
    font-size: 1.5rem;
`;


interface DayFilterProps {
    selectedDay?: string, setDayFilter: (day: string) => void
}
function DayFilter(props: DayFilterProps) {
    const { selectedDay, setDayFilter } = props;
    return (
        <div>
            <FilterHeader>Day</FilterHeader>
            <div>
                <FilterButton enabled={selectedDay === 'tue'}
                    onClick={() => setDayFilter('tue')}>
                    Tuesday
                </FilterButton>
                <FilterButton enabled={selectedDay === 'wed'}
                    onClick={() => setDayFilter('wed')}>
                    Wednesday
                </FilterButton>
                <FilterButton enabled={selectedDay === 'thu'}
                    onClick={() => setDayFilter('thu')}>
                    Thursday
                </FilterButton>
            </div>
        </div>
    )
}


interface LanguageFilterProps {
    selectedLanguage?: string, setLanguageFilter: (Language: string) => void
}
function LanguageFilter(props: LanguageFilterProps) {
    const { selectedLanguage, setLanguageFilter } = props;
    return (
        <div>
            <FilterHeader>Language</FilterHeader>
            <div>
                <FilterButton enabled={selectedLanguage === 'no'}
                    onClick={() => setLanguageFilter('no')}>
                    Norwegian
                </FilterButton>
                <FilterButton enabled={selectedLanguage === 'en'}
                    onClick={() => setLanguageFilter('en')}>
                    English
                </FilterButton>
            </div>
        </div>
    )
}

interface FormatFilterProps {
    selectedFormat?: string,
    setFormatFilter: (Format: string) => void
}

function FormatFilter(props: FormatFilterProps) {
    const { selectedFormat, setFormatFilter } = props;
    return (
        <div>
            <FilterHeader>Format</FilterHeader>
            <div>
                <FilterButton enabled={selectedFormat === 'all'}
                    onClick={() => setFormatFilter('all')}>
                    All
                </FilterButton>
                <FilterButton enabled={selectedFormat === 'presentation'}
                    onClick={() => setFormatFilter('presentation')}>
                    Presentations
                </FilterButton>
                <FilterButton enabled={selectedFormat === 'lightning-talk'}
                    onClick={() => setFormatFilter('lightning-talk')}>
                    Lightning Talks
                </FilterButton>
                <FilterButton enabled={selectedFormat === 'workshop'}
                    onClick={() => setFormatFilter('workshop')}>
                    Workshops
                </FilterButton>
                <FilterButton enabled={selectedFormat === 'fav'}
                    onClick={() => setFormatFilter('fav')}>
                    My Favorites
                </FilterButton>
            </div>
        </div>
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


const DayHeader = styled.h1`
    color: ${(props: any) => props.theme.colors['warm400']};
    font-size: 3rem;
`;

const TimeSlot = styled.h1`
    color: ${(props: any) => props.theme.colors['warm400']};
`;


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
                <DayHeader>Wednesday</DayHeader>
                {Object
                    .keys(timeSlots)
                    .map((timeSlot, idx) => {
                        return <section key={timeSlot + idx}>
                            <TimeSlot>{timeSlot.substr(-5)}</TimeSlot>
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
                <DayHeader>Thursday</DayHeader>
                {Object.keys(timeSlots).map((timeSlot, idx) => {
                    return <section key={timeSlot + idx}>
                        <TimeSlot>{timeSlot.substr(-5)}</TimeSlot>
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
                <DayHeader>Tuesday</DayHeader>
                {Object.keys(timeSlots).map((timeSlot: string, idx) => {
                    return <section key={timeSlot + idx}>
                        <TimeSlot>{timeSlot.substr(-5)}</TimeSlot>
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
    padding: 1rem;
    border: 5px solid rgba(255,255,255,0.5);
    background: ${(props: any) => props.isFavorite ? props.theme.colors[`warm100`] : props.theme.colors[`orange100`]};
    margin-bottom: 1rem;
    display: flex;  
    flex-direction: row;
    @media only screen and (max-width: 500px) {
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
    &:hover {
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
    
    @media only screen and (max-width: 500px) {
        margin: 1rem 0 0 0;
        width: 100%;
    }
`;


interface SessionItemProps {
    session: Session;
    favorites: string[];
    toggleFav: (session: string) => void
}

function SessionItem(props: SessionItemProps) {
    const { session, favorites } = props;
    const isFavorite = favorites.indexOf(props.session.sessionId) !== -1;
    return (
        <SessionItemArticle isFavorite={isFavorite}>
            <ProgramInfo>
                <ProgramTitle>
                    <Link to={`/program/${session.sessionId}`}>{session.title}</Link>
                </ProgramTitle>
                <ProgramSubInfo>
                    <div>
                        <strong>{sessionFormat(props.session.format)}</strong>
                    </div>
                    <div>
                        {props.session.room}
                    </div>
                    <div>
                        {props.session.language === 'en' ? 'English' : 'Norwegian'}
                    </div>
                    <div>
                        {props.session.format === 'lightning-talk' ? props.session.startTime.substr(-5) + ` (${props.session.length} min)` : `${props.session.length} min`}
                    </div>
                    <div>
                        {props.session.speakers.length > 1 ? generateSpeakersString(session.speakers) : props.session.speakers[0].name}
                    </div>
                </ProgramSubInfo>
            </ProgramInfo>
            <ProgramFav>
                <button onClick={() => { props.toggleFav(props.session.sessionId) }}>
                    {isFavorite ? <CheckCircle size={32} /> : <Circle size={32} />}
                </button>
            </ProgramFav>
        </SessionItemArticle>
    );
}

function generateSpeakersString(speakers: Speaker[]): string {
    let speakersCombined = '';
    speakers.forEach((speaker, idx) => (idx < speakers.length - 1) ? speakersCombined += `${speaker.name}, ` : speakersCombined += speaker.name);
    return speakersCombined;
}

const sessionFormat = (format: string) => {
    if (format === 'presentation') return 'Presentation';
    if (format === 'lightning-talk') return 'Lightning Talk';
    return 'Workshop';
};

const mainStartTimes = [
    '18:20',
    '17:00',
    '15:40',
    '14:20',
    '13:00',
    '11:40',
    '10:20',
    '09:00',
];

function groupByTimeSlot(sessions: Session[]): { [a: string]: Session[] } {
    const sorted = sessions.sort(function (a, b) {
        const timeDiff = new Date(a.startTime).getTime() - new Date(b.startTime).getTime();
        if (timeDiff === 0) {
            if (a.format === 'lightning-talk') {
                return 1
            } else if (b.format === 'lightning-talk') {
                return -1;
            }
            else return 0;
        }
        return timeDiff
    });
    const grouped: { [a: string]: Session[] } = sorted.reduce(function (rv: { [a: string]: Session[] }, x: Session) {
        (rv[x['startTime']] = rv[x['startTime']] || []).push(x);
        return rv;
    }, {});

    // group lightning talks in the main slots
    const lightningTalkMovedGrouped: { [a: string]: Session[] } = {};

    Object
        .keys(grouped)
        .forEach((timeStamp, idx) => {
            const timeSlot = timeStamp.substr(-5);
            const day = timeStamp.substr(0, 11);

            if (grouped[timeStamp].length === 1 &&
                !mainStartTimes.includes(timeSlot) &&
                grouped[timeStamp][0].format === 'lightning-talk') {

                // we should move it to prev timeSlot
                const mainSlot = mainStartTimes.find((val) => {
                    return val <= timeSlot
                });
                if (mainSlot === undefined) {
                    throw Error("BUG: could not find slot for lightning-talk");
                }

                if (lightningTalkMovedGrouped[day + mainSlot]) {
                    lightningTalkMovedGrouped[day + mainSlot].push(grouped[timeStamp][0])
                } else {
                    lightningTalkMovedGrouped[day + mainSlot] = grouped[timeStamp]
                }

            }
            else {
                lightningTalkMovedGrouped[timeStamp] = grouped[timeStamp]
            }

        });

    return lightningTalkMovedGrouped;
}

export function makeSwitchExaustive(_unused: never): never {
    throw new Error('This should never happen because compiler will find this bug!');
}
