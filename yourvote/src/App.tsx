import React from "react";
import "./App.css";
import Ballot from "./app/components/Ballot/Ballot";
import { useAppSelector } from "./app/redux/hooks";

function App() {
  const {
    app: { totalVotes, options },
  } = useAppSelector((state) => state);
  const [blue, green] = options;
  return (
    <div className="App">
      <div
        className="blueContainer"
        style={{
          width: `${((blue.votes * 100) / totalVotes).toFixed(1)}vw`,
          height: `${100}vh`,
        }}
      ></div>
      <div
        className="greenContainer"
        style={{
          width: `${((green.votes * 100) / totalVotes).toFixed(1)}vw`,
          height: `${100}vh`,
        }}
      ></div>
      <Ballot />
      <p className="voteCount">{totalVotes} votes</p>
    </div>
  );
}

export default App;
