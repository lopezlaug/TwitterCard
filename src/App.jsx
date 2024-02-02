import "./index.css";
import "./App.css";

import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="lopez.lau">Laura Lopez</TwitterFollowCard>

      <TwitterFollowCard userName="midudev">
        Miguel Angel Duran
      </TwitterFollowCard>

      <TwitterFollowCard userName="perez.perez">
        Marta Perez Perez
      </TwitterFollowCard>
    </section>
  );
}
