
import React from 'react';
import './App.css';
import CardList from './components/card-list/CardList';
import SearchBar from './components/search-bar/search-bar';
import { useState, useEffect } from 'react';


const App = () => {
  console.log('App called');
  const [searchField,setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [monstersFiltered, setMonstersFiltered] = useState(monsters);
  
  useEffect( () => {
      console.log('useEffect monstersArray');

      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
    }
    ,[]
  )

  useEffect( () => {
    console.log('useEffect setMonstersFiltered');
    
    const newMonstersFiltered = monsters.filter((monster) => {
        return monster.name.toLowerCase().includes(searchField.toLowerCase());  
      }
    );  
    console.log({newMonstersFiltered});
    setMonstersFiltered(newMonstersFiltered); 
  } 
  , [searchField])
  

  const onSearchChange = (event) => {
    console.log('onSearchChange');
    const searchField = event.target.value.toLowerCase();
    setSearchField(searchField);
  }
  

  return(
    <div className="App">
      <h1 className='title'>Monsters Rolodex</h1>
      <SearchBar onSearchChange = {onSearchChange} placeHolder = 'search monsters' type = 'search' />
      
      <CardList monsters = {monstersFiltered} />
      
    </div>
  )
}

// class App extends Component {
//   constructor(){
//     super();
//     console.log('constructor')
//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }
  
//   componentDidMount(){
//     console.log('componentDidMount')
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => this.setState(
//       () => {
//         return {monsters: users};
//       },
//       () => {
//         console.log(this.state);
//       }
//     ));
//   }

//     //onSearchFormChange function
//     onSearchChange = (event) => {
//       const searchField = event.target.value.toLowerCase();
//       this.setState(() => {
//         return {searchField};
//       })
//     }
  
//   render(){
//     console.log('App render');
//     //set variables to this. and this.state so its not required in rest of code
//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;

//     //create local monstersFiltered array
//     const monstersFiltered = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField.toLowerCase());  
//     });

//     //return
//     return (
//       <div className="App">
//         <h1 className='title'>Monsters Rolodex</h1>
//       <SearchBar onSearchChange = {onSearchChange} placeHolder = 'search monsters' type = 'search' />
      
//       <CardList monsters = {monstersFiltered} />
      
//       </div>
//     );
//   }
  
// }

export default App;
