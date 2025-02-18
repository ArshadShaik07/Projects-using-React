import { useState } from "react";
import Data from "./Data.jsx";
import "./styles.css";

function GithubProfileFinder() {
  const [userName, setUserName] = useState("sangammukherjee");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  async function fetchGithubProfile(user = "ArshadShaik07") {
    try {
      setLoading(true);
      let data = await fetch(`https://api.github.com/users/${user}`);
      if (!data.ok) {
        throw new Error("data not found!");
      }
      let response = await data.json();
      console.log(response);
      setData(response);
    } catch (e) {
      console.error(e);
      alert(e);
      fetchGithubProfile();
    }
    setLoading(false);
  }

  function handleClick() {
    fetchGithubProfile(userName);
  }

  if (loading) {
    return <h2>The page is loading! Plz wait</h2>;
  }

  return (
    <div className="profile-finder-container">
      <h1>Github profile finder</h1>
      <div className="inputs-container">
        <input
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          type="text"
        />
        <button onClick={handleClick}>Find</button>
      </div>
      {data ? <Data details={data} /> : null}
    </div>
  );
}

export default GithubProfileFinder;
