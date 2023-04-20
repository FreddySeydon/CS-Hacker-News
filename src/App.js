import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Results from "./Components/Results";
import { useState } from "react";
import { useEffect } from "react";

const API_URL = 'http://hn.algolia.com/api/v1/search?query=';

function App() {
  const [results, setResults] = useState([]);

  // Sample: If we want to search at the beginning with a fixed value
  

  useEffect(() => {
    const query = "React";
    const searchUrl = API_URL + query;
    fetch(searchUrl).then(response => {
      return response.json();
    }).then(responseData => {
      setResults(responseData.hits);
    }).catch((error) => console.error(error));
    ;
  }, []);


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
    <ol>
    <Results results={results} />
    </ol>
    <Footer doSearch={doSearch} />
    </>
  )
}

export default App;
