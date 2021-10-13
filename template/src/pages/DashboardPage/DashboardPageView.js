import PropTypes from "prop-types";
const DashBoardPageView = ({ title }) => {
  return <h1>{title}</h1>;
};
DashBoardPageView.prototype = {
  trackId: PropTypes.string.isRequired,
};
export default DashBoardPageView;
