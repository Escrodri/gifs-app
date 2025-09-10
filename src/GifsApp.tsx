import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { useGifs } from "./gifs/hooks/useGifs"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"


export const GifsApp = () => {
  const { gifs, handleSearch, handleTermClicked, previousTerms } = useGifs();
  
  return (
    <>
      {/*- Header */}
      <CustomHeader 
      title="Buscador de Gifs"
      description="Descubre y comparte el Gif perfect" />

      {/* Search */}
      <SearchBar 
      placeholder="Busca lo que quieras"
      onQuery={handleSearch}
      />

      {/* Busquedas previas */}
      <PreviousSearches searches={previousTerms as string[]} onLabelClicked={handleTermClicked} />

      {/* Gifs */}
      <GifList gifs={gifs} />
    </>
  )
}
