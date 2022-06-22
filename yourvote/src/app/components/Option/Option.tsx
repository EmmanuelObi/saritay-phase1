import React from "react";
import { useAppSelector } from "../../redux/hooks";
import styles from "./Option.module.css";

interface OptionProps {
  optionName: string;
  optionCount: number;
  optionColor: string;
  onClick: () => void;
}

const Option = (props: OptionProps) => {
  const {
    app: { totalVotes },
  } = useAppSelector((state) => state);
  const { optionName, optionCount, optionColor, onClick } = props;
  return (
    <div className={styles.optionContainer} onClick={onClick}>
      <p className={styles.optionName} style={{ color: optionColor }}>
        {optionName}
      </p>
      <p className={styles.optionCount} style={{ color: optionColor }}>
        {((optionCount * 100) / totalVotes).toFixed(1)}%
      </p>
    </div>
  );
};

export default Option;
