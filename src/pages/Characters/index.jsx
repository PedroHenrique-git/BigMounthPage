import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../services/axios";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/personagem");
      setCharacters(response.data.characters);
    };

    setIsLoading(false);
    getData();
    setIsLoading(true);
  }, []);

  if (!isLoading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <ul>
      <li>
        <Link to="/criar">Criar</Link>
      </li>
      {characters.map((character) => (
        <li>{character.name}</li>
      ))}
    </ul>
  );
}
