import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navigation, NavRoute } from './components/Navigation/Navigation';
import { Frontpage } from './pages/Frontpage/Frontpage';
import { Footer } from './components/Footer/Footer';
import { Info } from './pages/Info/Info';
import { Tickets } from './pages/Tickets/Tickets';
import { Partners } from './pages/Partners/Partners';
import { Academy } from './pages/Academy/Academy';
import { Kids } from './pages/Kids/Kids';
import { CookieDisclaimer } from './components/CookieDisclaimer/CookieDisclaimer';

const routes: NavRoute[] = [
  {title: 'Info', url: '/info'},
  {title: 'Tickets', url: '/tickets'},
  {title: 'Partners', url: '/partners'},
  {title: 'Academy', url: '/academy'},
  {title: 'Kids', url: '/kids'},
];

class App extends React.Component {
  public render() {
    return (
      <Router>
        <>
          <Navigation sticky routes={routes} />
          <Route exact path="/" component={Frontpage} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/tickets" component={Tickets} />
          <Route exact path="/partners" component={Partners} />
          <Route exact path="/academy" component={Academy} />
          <Route exact path="/kids" component={Kids} />
          <Footer />
          <CookieDisclaimer>
            We use cookies because they taste brilliant and will enhance your javazoning experience.
          </CookieDisclaimer>
        </>
      </Router>
    );
  }
}

export default App;