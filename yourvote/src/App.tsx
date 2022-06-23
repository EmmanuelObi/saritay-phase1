import React from "react";
import "./App.css";
import Ballot from "./app/components/Ballot/Ballot";
import useApp from "./app/customHooks/useApp";
import { useAppSelector } from "./app/redux/hooks";

function App() {
  const {
    app: { totalVotes, options },
  } = useAppSelector((state) => state);
  const [blue, green] = options;

  const { handleDimensionsForContainers } = useApp();

  const {
    blueContWidthOnLargeScreen,
    greenContainerWidthOnLargeScreen,
    bothContainersHeightOnLargeScreen,
    blueContainerHeightOnMobileScreen,
    greenContainerHeightOnMobileScreen,
  } = handleDimensionsForContainers(blue, green);

  const screenWidth = window.innerWidth;

  return (
    <div className="App">
      <div
        className="blueContainer"
        style={{
          width: screenWidth > 500 ? blueContWidthOnLargeScreen : "100vw",
          height:
            screenWidth > 500
              ? bothContainersHeightOnLargeScreen
              : blueContainerHeightOnMobileScreen,
        }}
      ></div>
      <div
        className="greenContainer"
        style={{
          width: screenWidth > 500 ? greenContainerWidthOnLargeScreen : "100vw",
          height:
            screenWidth > 500
              ? bothContainersHeightOnLargeScreen
              : greenContainerHeightOnMobileScreen,
        }}
      ></div>
      <Ballot />
      <p className="voteCount">{totalVotes} votes</p>
    </div>
  );
}

export default App;
