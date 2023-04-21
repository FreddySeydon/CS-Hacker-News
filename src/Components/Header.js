export default function Header() {
  return (
    <>
      <div className="header-container">
        <div className="head">
          <a href="https://news.ycombinator.com/news">
            <img
              src="https://news.ycombinator.com/y18.gif"
              alt="logo-img"
              className="logo"
            ></img>
          </a>
          <h4>Hacker News</h4>
          <li>
            <a className="links" href="https://news.ycombinator.com/newest">
              new
            </a>
          </li>
          <p>|</p>
          <li>
            <a className="links" href="https://news.ycombinator.com/front">
              past
            </a>
          </li>
          <p>|</p>
          <li>
            <a
              className="links"
              href="https://news.ycombinator.com/newcomments"
            >
              comments
            </a>
          </li>
          <p>|</p>
          <li>
            <a className="links" href="https://news.ycombinator.com/ask">
              ask
            </a>
          </li>
          <p>|</p>
          <li>
            <a className="links" href="https://news.ycombinator.com/show">
              show
            </a>
          </li>
          <p>|</p>
          <li>
            <a className="links" href="https://news.ycombinator.com/jobs">
              jobs
            </a>
          </li>
          <p>|</p>
          <li>
            <a className="links" href="https://news.ycombinator.com/submit">
              submit
            </a>
          </li>
          <p>|</p>
          <li className="login">
            <a
              className="links"
              href="https://news.ycombinator.com/login?goto=news"
            >
              log in
            </a>
          </li>
        </div>
      </div>
    </>
  );
}
