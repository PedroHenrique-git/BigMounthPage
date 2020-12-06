import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../services/axios";
import { FormContainer } from "./styled";

// eslint-disable-next-line react/prop-types
export default function EditCharacter({ match }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const [image, setImage] = useState("");
  const [condition, setCondition] = useState("");
  const [genre, setGenre] = useState("");
  const [information, setInformation] = useState("");
  toast.configure();

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line react/prop-types
      const { id } = match.params;
      await axios.put(`/personagem/${id}`, {
        name,
        age,
        condition,
        occupation,
        image,
        genre,
        information,
      });
      toast.success(`Edited`);
    } catch (err) {
      toast.error(`Error: ${err.message}`);
    }
  };

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
    <FormContainer>
      <h1>Edit Character</h1>
      <form onSubmit={handleEdit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="age">
          Age:
          <input
            type="text"
            name="age"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <label htmlFor="age">
          Occupation:
          <input
            type="text"
            name="age"
            id="age"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
        </label>
        <label htmlFor="condition">
          Condition:
          <input
            type="text"
            name="condition"
            id="condition"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          />
        </label>
        <label htmlFor="image">
          Image:
          <input
            type="text"
            name="image"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label htmlFor="genre">
          Genre:
          <input
            type="text"
            name="genre"
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </label>
        <label htmlFor="information">
          Information:
          <textarea
            type="text"
            name="information"
            id="information"
            value={information}
            onChange={(e) => setInformation(e.target.value)}
          />
        </label>
        <input type="submit" value="Edit Character" />
      </form>
    </FormContainer>
  );
}
