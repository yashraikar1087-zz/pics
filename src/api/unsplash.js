import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 6eef543f991f310cd2721f9c447bdad883d480a56f00b8c150b42f3a18565654"
  }
});
