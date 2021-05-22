import React from "react";
import { apiClient, authProvider } from "../../utils/API.js";

async function getAll(pages) {
  const user = await apiClient.kraken.streams.getAllLiveStreams(pages);
  // if (!user) {
  //   return false;
  // }
  // return await apiClient.helix.streams.getStreamByUserId(user.id) !== null;
  return await user;
};

const Jumbotron = ({ children }) => {

  console.log(getAll(1));

  return (
    <div
      style={{ height: 560, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron border border-success"
    >
      {children}
    </div>
  );
};

export default Jumbotron;
