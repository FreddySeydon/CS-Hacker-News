export default function NewsSnippets(news, setNews) {
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
  </div>;
}
