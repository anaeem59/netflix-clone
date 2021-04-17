import './App.css';
import requests from './requests';
import Row from './Row';

function App() {
  return (
    <div className="app">
      <h1>Hey</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;


// 
// https://api.themoviedb.org/3/movie/550?api_key=c0845bf0572b5c4075ae24c14f0e5c32