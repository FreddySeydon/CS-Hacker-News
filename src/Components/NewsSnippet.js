export default function NewsSnippet({ result }) {
    return(
    <li>
        <div className="news-container">
            <a className="title" href={result.url}>
                {result.title}
            </a>
            <a href={result.url}>{result.url}</a>
        </div>
        <div className="news-container">
            <p>{result.points} points by 
            <a href={`https://news.ycombinator.com/user?id=${result.author}`}>{result.author}</a>
            <a href={`https://news.ycombinator.com/item?id=${result.objectID}`} className="tooltip">ago <div className="tooltiptext">{result.created_at}</div></a>
            </p>
        </div>
    </li>
    )
};