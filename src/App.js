import { useEffect, useState } from "react";

require("dotenv").config();
const Twit = require("twit");

function App() {
  const [twData, setTwData] = useState({});

  const apikey = process.env.REACT_APP_API_KEY;
  const apiSecretKey = process.env.REACT_APP_API_SECRET_KEY;
  const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
  const accessTokenSecret = process.env.REACT_APP_ACCESS_TOKEN_SECRET;

  var T = new Twit({
    consumer_key: apikey,
    consumer_secret: apiSecretKey,
    access_token: accessToken,
    access_token_secret: accessTokenSecret,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await T.get(
        "search/tweets",
        {
          q: "ErikLoomis since:2021-3-3",
          count: 5,
        },
        (err, data, response) => {
          console.log("Data: ", data.statuses);
        }
      );
      const newData = await response.json();
      setTwData(newData);
    };
    fetchData();
  }, []);

  return (
    <div className="container-outer">
      <h2>APP</h2>
    </div>
  );
}

export default App;
