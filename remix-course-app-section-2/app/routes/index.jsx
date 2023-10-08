import { Link } from '@remix-run/react';

import homeStyles from '../styles/home.css'
import MainNavigation from '../components/MainNavigation';

export default function Index() {
  return (

    <main id="content">
      <h1>A better way of keeping track of yout notes</h1>
      <p>Try our early beta and never loose track of you</p>
      <p id="cta">
        <Link to="/notes">Try Now!</Link>
      </p>

    </main>
  );

}

export function links() {
  return [{ rel: 'stylesheet', href: homeStyles }]
}