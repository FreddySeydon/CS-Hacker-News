import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Results from "./Components/Results";
import { useState } from "react";

const API_URL = 'http://hn.algolia.com/api/v1/search?query=';

function App() {
  const [results, setResults] = useState([]);

  // Sample: If we want to search at the beginning with a fixed value
  /*
  const query = 'React';
  useEffect(() => {
    const searchUrl = API_URL + query;

    fetch(searchUrl).then(response => {
      return response.json();
    }).then(responseData => {
      setResults(responseData.hits);
    });
  }, []);
  */

  function doSearch(query) {
    const searchUrl = API_URL + query;

    fetch(searchUrl).then(response => {
      return response.json();
    }).then(responseData => {
      setResults(responseData.hits);
    });
  }
  
  return (
    <>
    <Header />
    <Results results={results} />
    <Footer doSearch={doSearch} />
    </>
  )
}

export default App;
