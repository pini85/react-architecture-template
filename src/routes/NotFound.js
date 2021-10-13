import { Link } from "react-router-dom";

import { ROOT } from "./constants";

export const NotFound = () => {
  return (
    <>
      {/* Style this as you see fit */}
      <Link to={ROOT}>Home</Link>
      <h2>404: page not found!</h2>
    </>
  );
};

export default NotFound;
