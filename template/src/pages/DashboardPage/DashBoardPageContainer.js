import DashBoardPageView from "./DashboardPageView";
import * as S from "./DashBoard.styles";
const DashBoardPageContainer = () => {
  return (
    <S.Container color="purple">
      <DashBoardPageView title="This is the DashBoardView component" />
    </S.Container>
  );
};

export default DashBoardPageContainer;
