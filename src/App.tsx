import React, { createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation, { NavRoute } from './components/Navigation/Navigation';
import { Frontpage } from './pages/Frontpage/Frontpage';
import Footer from './components/Footer/Footer';
import { Info } from './pages/Info/Info';
import { Tickets } from './pages/Tickets/Tickets';
import { Partners } from './pages/Partners/Partners';
import { Academy } from './pages/Academy/Academy';
import { CookieDisclaimer } from './components/CookieDisclaimer/CookieDisclaimer';
import { NotFound } from './pages/NotFound/NotFound';
import {Kids} from "./pages/Kids/Kids";

const routes: NavRoute[] = [
  {title: 'Info', url: '/info'},
  {title: 'Partners', url: '/partners'},
  {title: 'Academy', url: '/academy'},
  {title: 'Kids', url: '/kids'},
];

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

class App extends React.Component {
  public render() {
    return (
      <Router>
        <>
          <Navigation sticky routes={routes} />
          <Route component={ScrollToTop}></Route>
          <Switch>
            <Route exact path="/" component={Frontpage} />
            <Route exact path="/info" component={Info} />
            {/* <Route exact path="/tickets" component={Tickets} /> */}
            <Route exact path="/partners" component={Partners} />
            <Route exact path="/academy" component={Academy} />
            <Route exact path="/kids" component={Kids} />
            <Route component={NotFound} />
          </Switch>
          <Footer routes={routes} />
          <CookieDisclaimer>
            We have given you a dedicated cookie from our cookie jar in order to store your favorite program schedule. We also use cookies to improve your experience on our site. By using this site you agree to this.
          </CookieDisclaimer>
        </>
      </Router>
    );
  }
}

export default App;