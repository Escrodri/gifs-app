import { useState } from "react";

interface props {
    placeholder: string;
    onQuery: (query: string) => void;
}

export const SearchBar = ({placeholder = 'Buscar', onQuery}: props) => {

  const [query, setQuery] = useState('')

  const handleSearch = () => {
    onQuery(query)
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }
  return (
    <div className="search-container">
        <input 
        type="text" 
        placeholder={placeholder} 
        value={ query }
        onChange={ (event) => setQuery(event.target.value) }
        onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>Buscar</button>
    </div>
  )
}
