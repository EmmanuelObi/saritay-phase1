import React from "react";
import useApp from "../../customHooks/useApp";
import { useAppSelector } from "../../redux/hooks";
import Option from "../Option/Option";
import styles from "./Ballot.module.css";

const Ballot = () => {
  const {
    app: { options },
  } = useAppSelector((state) => state);

  const { voteOnClick } = useApp();

  const [cats, dogs] = options;
  return (
    <div className={styles.ballotContainer}>
      <Option
        optionName={cats.name}
        optionCount={cats.votes}
        optionColor="rgb(10, 159, 233)"
        onClick={() => voteOnClick(cats.name)}
      />
      <div className={styles.divider}></div>
      <Option
        optionName={dogs.name}
        optionCount={dogs.votes}
        optionColor="rgb(101, 238, 183)"
        onClick={() => voteOnClick(dogs.name)}
      />
    </div>
  );
};

export default Ballot;
