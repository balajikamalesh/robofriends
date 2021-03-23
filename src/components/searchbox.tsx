import React from 'react';

const SearchBox = ({searchChange}: any) => {
    return (
        <div className="pa2">
            <input
                aria-label="Search Robots"
                type="search"
                className="pa3 ba b--green bg-lightest-blue" 
                placeholder="search robots"
                onChange={searchChange}/>
        </div>
    )
}

export default SearchBox;