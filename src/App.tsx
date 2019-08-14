import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { ThemeProvider } from 'styled-components/macro';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation, { NavRoute } from './components/Navigation/Navigation';
import { Footer } from './components/Footer/Footer';
import { InfoPage } from './pages/Info/Info';
import { TicketsPage } from './pages/Tickets/Tickets';
import { PartnersPage } from './pages/Partners/Partners';
import { FrivilligePage } from './pages/Frivillige/Frivillige';
import { SpeakersPage } from './pages/Speakers/Speakers';
import { AboutUsPage } from './pages/About/About';
import { MonetaryPolicyPage } from './pages/Speakers/MonetaryPolicy';
import { SpeakerTipsPage } from './pages/Speakers/Tips';
import { CookieDisclaimer } from './components/CookieDisclaimer/CookieDisclaimer';
import { InlineLink } from './components/InlineLink/InlineLink';
import { NotFoundPage } from './pages/NotFound/NotFound';
import { CookieInfoPage } from './pages/CookieInfo/CookieInfo';
import Index from './pages/Frontpage/Frontpage';
import theme from './core/theme';
import {ProgramPage} from "./pages/program/Program";
import {ProgramDetailsPage} from "./pages/program/ProgramDetails";
import {WorkshopsPage} from "./pages/Workshops/Workshops";
import {KidsPage} from "./pages/Kids/Kids";
import {JourneyZonePage} from "./pages/JourneyZone/JourneyZone";


const routes: NavRoute[] = [
  {title: 'Info', url: '/info', show: true},
  {title: 'Program', url: '/program', show: true},
  {title: 'Workshops', url: '/workshops', show: true},
  {title: 'Tickets', url: '/tickets', show: true},
  {title: 'Speakers', url: '/speakers', show: true},
  {title: 'JourneyZone', url: '/speakers/journeyzone', show: true},
  {title: 'Partners', url: '/partners', show: true},
  {title: 'Academy', url: '/academy', show: false},
  {title: 'Kids', url: '/kids', show: true},
  {title: 'Frivillige', url: '/frivillige', show: true},
  {title: 'About', url: '/about', show: true},
  {title: 'Cookies', url: '/privacy-cookies', show: false},
  {title: 'Tips for Speakers', url: '/speakers/tips', show: false},
  {title: 'Monetary Policy', url: '/speakers/monetary-policy', show: false},
];

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

function App() {

  useEffect(() => {
    ReactGA.initialize('UA-3676724-14');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <Navigation routes={routes} />
          <Route component={ScrollToTop}/>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/info" component={InfoPage} />
            <Route exact path="/program" component={ProgramPage} />
            <Route exact path="/workshops" component={WorkshopsPage} />
            <Route path="/program/:sessionId" component={ProgramDetailsPage} />
            <Route exact path="/tickets" component={TicketsPage} />
            <Route exact path="/speakers" component={SpeakersPage} />
            <Route exact path="/partners" component={PartnersPage} />
            <Route exact path="/frivillige" component={FrivilligePage} />
            {/* <Route exact path="/academy" component={AcademyPage} /> */}
            <Route exact path="/kids" component={KidsPage} />
            <Route exact path="/about" component={AboutUsPage} />
            <Route exact path="/speakers/journeyzone" component={JourneyZonePage} />
            <Route exact path="/speakers/tips" component={SpeakerTipsPage} />
            <Route exact path="/speakers/monetary-policy" component={MonetaryPolicyPage} />
            <Route exact path="/privacy-cookies" component={CookieInfoPage} />
            <Route component={NotFoundPage} />
          </Switch>
          <Footer routes={routes} />
          <CookieDisclaimer>
            We have given you a dedicated cookie from our cookie jar in order to store your favorite program schedule. We also use cookies to improve your experience on our site. By using this site you agree to this. For more information please visit our <InlineLink url="/privacy-cookies">cookie information page.</InlineLink>
          </CookieDisclaimer>
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
