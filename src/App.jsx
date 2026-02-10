import Banner from "./components/Banner/Banner";
import Row from "./components/Row/Row";
import requests from "./api/requests";
import Landing from "./components/Landing/Landing";


function App() {
  return (
    <>
  
     <Landing />
     
      <Banner />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
    </>
  );
}

export default App;
