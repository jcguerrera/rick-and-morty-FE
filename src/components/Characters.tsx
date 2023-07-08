import { useEffect, useState } from "react";
import axios from 'axios';
import Card from "./Card.tsx";

function Character(){
    const URL = 'https://rickandmortyapi.com/api/character?page=1';
    const [characters, setCharacters] = useState<any[]>([]);
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(URL);
          setCharacters(response.data?.results);
        } catch(error) {
          console.error(error);
        }
      }
      void fetchData();
    }, []);
    console.log(characters);
    
    return(
      <>
        {
          characters.map(character =>(
            <Card
              key={character.id}
              imageURL={character.image}
              nameCharacter={character.name} 
            />
          ))
        }    
      </>
    )
}

export default Character;