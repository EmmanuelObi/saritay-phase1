import { useDispatch } from "react-redux";
import { appActions } from "../redux/appSlice";
import { useAppSelector } from "../redux/hooks";

const useApp = () => {
  const dispatch = useDispatch();
  const {
    app: { totalVotes },
  } = useAppSelector((state) => state);

  const voteOnClick = (optionName: string) => {
    dispatch(appActions.setOptions(optionName));
    dispatch(appActions.setTotalVotes(totalVotes + 1));
  };

  return {
    voteOnClick,
  };
};

export default useApp;
