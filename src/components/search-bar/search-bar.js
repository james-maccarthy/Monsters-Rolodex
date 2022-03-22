import React from 'react';
import './search-bar.css';

const SearchBar = ({placeHolder,type,onSearchChange} ) => {
    
     
        return(
            <div>
                <input 
                    className= 'search-bar'
                    placeholder = {placeHolder} 
                    type = {type}
                    onChange={onSearchChange}
                />
            </div>
        
        )
    
}
export default SearchBar;