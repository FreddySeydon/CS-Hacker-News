import React from "react";

export default function Searchbar() {
    return(
        <div className="searchbar">
            <form>
                <label className="searchLabel">Search:</label>
                <input type="text" className="searchField"></input>
            </form>
        </div>
    )
}