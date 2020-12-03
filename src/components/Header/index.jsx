import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import logo from "../../images/logo.png";
import { Header, Section, Links } from "./styled";

export default function Cabecalho() {
  return (
    <Header>
      <img src={logo} alt="" srcSet="" />
      <Section>
        <Links>
          <Link to="/">
            <FaHome size={30} />
          </Link>
          <Link to="/criar">
            <IoIosCreate size={30} />
          </Link>
        </Links>
        <form>
          <label htmlFor="nomePersonagem">
            <input
              placeholder="Pesquisar personagem"
              type="text"
              name="nomePersonagem"
              id="nomePersonagem"
            />
            <button type="submit">
              <BsSearch size={30} />
            </button>
          </label>
        </form>
      </Section>
    </Header>
  );
}
