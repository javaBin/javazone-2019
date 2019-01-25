import React, { createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation, { NavRoute } from './components/Navigation/Navigation';
import { FrontPage } from './pages/Frontpage/Frontpage';
import Footer from './components/Footer/Footer';
import { InfoPage } from './pages/Info/Info';
import { PartnersPage } from './pages/Partners/Partners';
import { AcademyPage } from './pages/Academy/Academy';
import { CookieInfoPage } from './pages/CookieInfoPage/CookieInfoPage';
import { CookieDisclaimer } from './components/CookieDisclaimer/CookieDisclaimer';
import { InlineLink } from './components/InlineLink/InlineLink';
import { NotFoundPage } from './pages/NotFound/NotFound';

const routes: NavRoute[] = [
  {title: 'Info', url: '/info'},
  {title: 'Partners', url: '/partners'},
  {title: 'Academy', url: '/academy'},
  {title: 'Cookies', url: '/privacy-cookies'},
];

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
}

class App extends React.Component {
  public render() {
    return (
      <Router>
        <>
          <Navigation sticky routes={routes} />
          <Route component={ScrollToTop}></Route>
          <Switch>
            <Route exact path="/" component={FrontPage} />
            <Route exact path="/info" component={InfoPage} />
            {/* <Route exact path="/tickets" component={Tickets} /> */}
            <Route exact path="/partners" component={PartnersPage} />
            <Route exact path="/academy" component={AcademyPage} />
            <Route exact path="/privacy-cookies" component={CookieInfoPage} />
            <Route component={NotFoundPage} />
          </Switch>
          <Footer routes={routes} />
          <CookieDisclaimer>
            We have given you a dedicated cookie from our cookie jar in order to store your favorite program schedule. We also use cookies to improve your experience on our site. By using this site you agree to this. For more information please visit our <InlineLink url="/privacy-cookies">cookie information page.</InlineLink>
          </CookieDisclaimer>
        </>
      </Router>
    );
  }
}

export default App;