import './WeatherApp.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import WeatherSearch from './components/WeatherSearch';
import HeaderComponent from './components/HeaderComponent';
import FadeIn from 'react-fade-in/lib/FadeIn';

function WeatherApp() {
  return (
    <div className='App'>
      <div className='main'>
        <FadeIn>
          <HeaderComponent />
          <WeatherSearch />
        </FadeIn>
      </div>
    </div>
  );
}

export default WeatherApp;
