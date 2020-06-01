import React, { useContext } from "react";
import { UserContext, ChannelContext } from "./App";

const ComponentF = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      I am the user: {user} with channel: {channel}
    </div>
  );
};

export default ComponentF;
