import { get } from "lodash";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { GrPrevious, GrNext } from "react-icons/gr";
import axios from "../../services/axios";
import { CharactersContainer, CharacterCard, ButtonsWrap } from "./styled";
// import Buttons from "../../components/Buttons";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async (pageNumber) => {
    setIsLoading(false);
    const response = await axios.get(`/personagem?page=${pageNumber}&limite=9`);
    setCharacters(response.data.characters);
    setIsLoading(true);
  };

  useEffect(() => {
    getData(1);
  }, []);

  if (!isLoading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <>
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
      </CharactersContainer>
      <ButtonsWrap>
        <button type="button" onClick={() => getData(1)}>
          1
        </button>
        <button type="button" onClick={() => getData(2)}>
          2
        </button>
        <button type="button" onClick={() => getData(3)}>
          3
        </button>
        <button type="button" onClick={() => getData(4)}>
          4
        </button>
        <button type="button" onClick={() => getData(5)}>
          5
        </button>
      </ButtonsWrap>
      ;
    </>
  );
}
