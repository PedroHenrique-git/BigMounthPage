import { Link } from "react-router-dom";
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
      </Section>
    </Header>
  );
}
