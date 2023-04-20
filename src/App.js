import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NewsSnippets from "./Components/NewsSnippets";
import { useState, useEffect } from "react";

function App() {
  const [news, setNews] = useState({});

  useEffect(() => {
    fetch("http://hn.algolia.com/api/v1/search?query=react")
      .then((res) => {
        if (!res.ok) throw new Error(`Did not work out because ${res.status}`);
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log("data", data.hits);
        setNews(data.hits);
      })
      .catch((err) => {
        //console.log(err);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="news-container">
        <ol>
          {news.length
            ? news.map((hit) => {
                return (
                  <li className="title">
                    <a href={hit.url}>{hit.title}</a>
                    <span className="url">({hit.url})</span>
                    <div className="snippet">
                      <p>{hit.points} points</p>
                      <p>by {hit.author} </p>
                      <p>{hit.created_at_i} </p>
                      <a href=""> hide </a>
                      <p>{hit.num_comments} comments</p>
                    </div>
                  </li>
                );
              })
            : "loading"}
        </ol>
      </div>
      <Footer />
    </>
  );
}

export default App;
