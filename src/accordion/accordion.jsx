import data from "../assets/data.js";
import { useState } from "react";
import "./styles.css";

function Accordion() {
  const [clickedId, setClickedId] = useState();
  const [multi, setMulti] = useState(false);
  const [multiId, setMultiId] = useState([]);

  function handleClickQuestion(id) {
    setClickedId(id === clickedId ? null : id);
    console.log(id);
  }

  function handleMultiClick(id) {
    let multiArr = [...multiId];
    if (multiArr.indexOf(id) === -1) {
      console.log(multiArr.indexOf(id));
      multiArr.push(id);
    } else {
      multiArr.splice(multiArr.indexOf(id), 1);
    }

    setMultiId([...multiArr]);

    console.log(multiArr);
  }

  return (
    <div className="accordion-container">
      <h4>Accordion</h4>
      <button
        onClick={() => {
          setMulti((multi) => !multi);
        }}
      >
        {multi ? "Multi selection enabled" : "Enable multi selection"}
      </button>
      {data.map((data) => {
        return (
          <div
            key={data.id}
            onClick={() => {
              if (!multi) {
                handleClickQuestion(data.id);
              } else {
                handleMultiClick(data.id);
              }
            }}
            className="accordion"
          >
            <div className="question">
              <div>Q. {data.question}</div>
              <span>+</span>
            </div>
            <div className="answer">
              {multi
                ? multiId.indexOf(data.id) !== -1
                  ? data.answer
                  : null
                : clickedId === data.id
                ? data.answer
                : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
