import {words} from "../Data"
import { useState } from 'react';



function Header() {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([words]);

  const handleSearch = () => {
    const results = words.filter(word => {
      // Check if the word is a string or if it needs to be accessed from an object
      const text = typeof word === 'string' ? word : word.Abbreviation; // Assuming 'Abbreviation' is the property containing the string
      return text.toLowerCase().includes(searchTerm.toLowerCase());
  });
    setSearchResults(results);
  };
  
  return (
      <>
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search for items..."
        />
        <button onClick={handleSearch}>Search</button>
        <div>
          {searchResults.map((result, index) => (
            <div key={index}>{result.Description}</div>
          ))}
        </div>
      </>    
  );
}

export default Header
