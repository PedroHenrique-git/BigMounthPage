import { get } from "lodash";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../services/axios";
import { CharactersContainer, CharacterCard, ButtonsWrap } from "./styled";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(false);
      const response = await axios.get("/personagem?page=1&limite=9");
      setCharacters(response.data.characters);
      setIsLoading(true);
    };

    getData();
  }, []);

  if (!isLoading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <CharactersContainer>
      {characters.map((character) => (
        <CharacterCard key={String(character.name)}>
          <figure>
            <img
              src={get(character, "image", false)}
              alt={get(character, "image", false)}
            />
            <figcaption>
              <Link to={`/personagem/${character.id}`}>
                <h3>
                  {get(character, "name", false)
                    ? get(character, "name")
                    : "Unknown"}
                </h3>
              </Link>
              <p>
                <span>Age:</span>
                {get(character, "age", false)
                  ? get(character, "age")
                  : "Unknown"}
              </p>
              <p>
                <span>Condition:</span>
                {get(character, "condition", false)
                  ? get(character, "condition")
                  : "Unknown"}
              </p>
              <p>
                <span>Occupation:</span>
                {get(character, "occupation", false)
                  ? get(character, "occupation")
                  : "Unknown"}
              </p>
              <p>
                <span>Genre:</span>
                {get(character, "genre", false)
                  ? get(character, "genre")
                  : "Unknown"}
              </p>
            </figcaption>
          </figure>
        </CharacterCard>
      ))}
      <ButtonsWrap>
        <button type="button">Next</button>
        <button type="button">Prev</button>
      </ButtonsWrap>
    </CharactersContainer>
  );
}
