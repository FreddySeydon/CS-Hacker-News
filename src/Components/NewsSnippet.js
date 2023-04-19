export default function NewsSnippet({ result }) {
    return(
    <li>
        <a href={result.url}>
            {result.title}
        </a>
    </li>
    )
};