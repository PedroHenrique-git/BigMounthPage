import { Switch, Route } from "react-router-dom";
import Characters from "../pages/Characters/index";
import CreateCharacter from "../pages/CreateCharacter/index";
import EditCharacter from "../pages/EditCharacter/index";
import CharacterData from "../pages/CharacterData/index";
import Page404 from "../pages/404/index";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Characters} />
      <Route exact path="/criar" component={CreateCharacter} />
      <Route exact path="/edit/:id" component={EditCharacter} />
      <Route exact path="/personagem/:id" component={CharacterData} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}
