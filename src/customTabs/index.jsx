import { useState } from "react";

function Tabs(props) {
  const [currentTab, setCurrentTab] = useState(0);

  function handleChangeIndex(index) {
    setCurrentTab(index);
    props.onChange(index);
  }

  return (
    <div className="tabs-container">
      <div className="title-container">
        {" "}
        {props.tabsData.map((tab, index) => {
          return (
            <div
              key={index}
              className={`tab-name ${currentTab === index ? "active" : ""}`}
              onClick={() => handleChangeIndex(index)}
            >
              {tab.label}
            </div>
          );
        })}
      </div>

      {props.tabsData.map((tab, i) => (
        <div className="tab-content" key={i}>
          {currentTab === i ? tab.content : null}
        </div>
      ))}
    </div>
  );
}

export default Tabs;
