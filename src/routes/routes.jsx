import { Switch, Route } from "react-router-dom";
import Characters from "../pages/Characters/index";
import CreateCharacter from "../pages/CreateCharacter/index";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Characters} />
      <Route exact path="/criar" component={CreateCharacter} />
    </Switch>
  );
}
