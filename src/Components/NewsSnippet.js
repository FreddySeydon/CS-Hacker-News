export default function NewsSnippet({ result }) {
  return (
    <li>
      <div>
        <div>
          <a className="title" href={result.url}>
            {result.title}
          </a>
          <a className="url" href={result.url}>
            ({result.url})
          </a>
        </div>
      </div>
      <div>
        <p className="link">
          {result.points} points by
          <a
            className="link"
            href={`https://news.ycombinator.com/user?id=${result.author}`}
          >
            {result.author}
          </a>
          <a
            href={`https://news.ycombinator.com/item?id=${result.objectID}`}
            className="tooltip"
          >
            {" "}
            x hours ago <div className="tooltiptext">{result.created_at}</div>
          </a>
          <a
            className="link"
            href={`https://news.ycombinator.com/hide?id=${result.objectID}&goto=news`}
          >
            | hide |
          </a>
          <a
            className="link"
            href={`https://news.ycombinator.com/hide?id=${result.objectID}`}
          >
            {result.num_comments} comments
          </a>
        </p>
      </div>
    </li>
  );
}
