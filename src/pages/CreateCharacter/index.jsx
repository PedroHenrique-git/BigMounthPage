import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../services/axios";
import { FormContainer } from "./styled";

export default function CreateCharacter() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const [image, setImage] = useState("");
  const [condition, setCondition] = useState("");
  const [genre, setGenre] = useState("");
  const [information, setInformation] = useState("");
  toast.configure();

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/personagem", {
        name,
        age,
        condition,
        occupation,
        image,
        genre,
        information,
      });
      toast.success(`Created`);
    } catch (err) {
      toast.error(`Error: ${err.message}`);
    }
  };

  return (
    <FormContainer>
      <h1>Create character</h1>
      <form onSubmit={handleCreate}>
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
        <input type="submit" value="Create Character" />
      </form>
    </FormContainer>
  );
}
