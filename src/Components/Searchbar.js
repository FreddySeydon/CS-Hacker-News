import { useRef } from "react"

export default function Searchbar({doSearch}) {
    const searchField = useRef();

    function handleSearch(event) {
        if(event.code !== 'Enter') {
            return;
        }

        const searchText = searchField.current.value;

        // Do not search if the search text is empty
        if(searchText.length === 0) {
            return;
        }

        doSearch(searchText);

        event.preventDefault();
    }

    return(
        <div className="searchbar">
            <form>
                <label className="searchLabel">Search:</label>
                <input ref={searchField} type="text" className="searchField" onKeyDown={handleSearch}></input>
            </form>
        </div>
    )
}