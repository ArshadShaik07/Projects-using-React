import { useState, useEffect } from "react";
import "./styles.css";

function AutoComplete() {
  let [data, setData] = useState([]);
  let [value, setValue] = useState("");
  let [filteredData, setFilteredData] = useState([]);

  async function fetchData() {
    const response = await fetch("https://dummyjson.com/users");
    let data = await response.json();
    data = data.users.map((user) => user.firstName.toLowerCase());
    setData(data);
    console.log(data);
  }

  async function handleChange(event) {
    let newValue = event.target.value;
    setValue(newValue);
    let newFilterdata =
      newValue.length > 0
        ? data.filter((d) => d.indexOf(newValue.toLowerCase()) > -1)
        : [];
    setFilteredData(newFilterdata);
    console.log(newFilterdata);
  }

  function DisplayFilteredData({ filteredData }) {
    return (
      <ul className="filtered-list">
        {filteredData.map((fildata, i) => (
          <li key={i} onClick={handleClick}>
            {fildata}
          </li>
        ))}
      </ul>
    );
  }

  function handleClick(event) {
    setValue(event.target.innerText);
    setFilteredData([]);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="web-container">
      <input
        className="name-input"
        value={value}
        placeholder="Type name..."
        onChange={handleChange}
      />
      {filteredData.length > 0 ? (
        <DisplayFilteredData filteredData={filteredData} />
      ) : null}
    </div>
  );
}

export default AutoComplete;
