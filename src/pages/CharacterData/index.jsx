import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { ContainerContent, CharacterCard } from "./styled";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../services/axios";

// eslint-disable-next-line react/prop-types
export default function CharacterData({ match }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const [image, setImage] = useState("");
  const [condition, setCondition] = useState("");
  const [genre, setGenre] = useState("");
  const [information, setInformation] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        // eslint-disable-next-line react/prop-types
        const { id } = match.params;
        const response = await axios.get(`/personagem/${id}`);
        const { personagem } = response.data;
        setName(personagem[0].name);
        setAge(personagem[0].age);
        setOccupation(personagem[0].occupation);
        setImage(personagem[0].image);
        setCondition(personagem[0].condition);
        setGenre(personagem[0].genre);
        setInformation(personagem[0].information);
      } catch (err) {
        toast.error(err.message);
      }
    };
    loadData();
    // eslint-disable-next-line react/prop-types
  }, [match.params]);
  return (
    <ContainerContent>
      <h1>Complete Data</h1>
      <CharacterCard>
        <figure>
          <img src={image} alt={image} />
          <figcaption>
            <h3>{name}</h3>
            <p>
              <span>Age:</span>
              {age}
            </p>
            <p>
              <span>Condition:</span>
              {condition}
            </p>
            <p>
              <span>Occupation:</span>
              {occupation}
            </p>
            <p>
              <span>Genre:</span>
              {genre}
            </p>
            <p>
              <span>Information:</span>
              {information}
            </p>
          </figcaption>
        </figure>
      </CharacterCard>
    </ContainerContent>
  );
}
