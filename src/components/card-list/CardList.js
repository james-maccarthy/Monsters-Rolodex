import React from 'react';
import './card-list.styles.css'

const CardList = ({monsters}) => (
   <div className='card-list'>
        {monsters.map((monster) => {
            return <div className='card-container' key = {monster.id}>
                        <img 
                            alt = {`monster ${monster.name}`}
                            src = {`https://robohash.org/${monster.id}?set=set2&size=180x180`}
                        />
                        {monster.name}
                    </div>
        })}
    </div>
);
export default CardList;


        
     
    