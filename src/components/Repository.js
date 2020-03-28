import * as React from "react";

import {
  useParams
} from "react-router-dom";

const Repository = ({repository}) => {

  let { id } = useParams();
  return (
    <div>
      Repository
    </div>
  );
};

export default Repository;