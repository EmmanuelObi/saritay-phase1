import { useDispatch } from "react-redux";
import { Option } from "../models/appModels";
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

  const handleDimensionsForContainers = (blue: Option, green: Option) => {
    const blueContWidthOnLargeScreen = `${(
      (blue.votes * 100) /
      totalVotes
    ).toFixed(1)}vw`;

    const greenContainerWidthOnLargeScreen = `${(
      (green.votes * 100) /
      totalVotes
    ).toFixed(1)}vw`;
    const bothContainersHeightOnLargeScreen = `100vh`;

    const blueContainerHeightOnMobileScreen = `${(
      (blue.votes * 100) /
      totalVotes
    ).toFixed(1)}vh`;
    const greenContainerHeightOnMobileScreen = `${(
      (green.votes * 100) /
      totalVotes
    ).toFixed(1)}vh`;

    return {
      blueContWidthOnLargeScreen,
      greenContainerWidthOnLargeScreen,
      bothContainersHeightOnLargeScreen,
      blueContainerHeightOnMobileScreen,
      greenContainerHeightOnMobileScreen,
    };
  };

  return {
    voteOnClick,
    handleDimensionsForContainers,
  };
};

export default useApp;
