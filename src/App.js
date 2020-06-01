import React, { createContext } from "react";
import CounterThree from "./CounterThree";
import "./styles.css";

export const UserContext = createContext();
export const ChannelContext = createContext();

const App = () => {
  return <CounterThree />;
};

export default App;
