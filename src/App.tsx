import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation, { NavRoute } from './components/Navigation/Navigation';
import { Frontpage } from './pages/Frontpage/Frontpage';
import Footer from './components/Footer/Footer';
import { Info } from './pages/Info/Info';
import { Tickets } from './pages/Tickets/Tickets';
import { Partners } from './pages/Partners/Partners';
import { Academy } from './pages/Academy/Academy';
import { Kids } from './pages/Kids/Kids';
import { CookieDisclaimer } from './components/CookieDisclaimer/CookieDisclaimer';

// Test

const routes: NavRoute[] = [
  {title: 'Info', url: '/info'},
  {title: 'Tickets', url: '/tickets'},
  {title: 'Partners', url: '/partners'},
  {title: 'Academy', url: '/academy'},
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
            <Route exact path="/" component={Frontpage} />
            <Route exact path="/info" component={Info} />
            <Route exact path="/tickets" component={Tickets} />
            <Route exact path="/partners" component={Partners} />
            <Route exact path="/academy" component={Academy} />
          </Switch>
          {/* <Route exact path="/kids" component={Kids} /> */}
          <Footer />
          <CookieDisclaimer>
            We have given you a dedicated cookie from our cookie jar in order to store your favorite program schedule. By using this site you agree to this.
          </CookieDisclaimer>
        </>
      </Router>
    );
  }
}

export default App;