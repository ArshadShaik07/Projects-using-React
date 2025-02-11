import Tab from "./index.jsx";
import "./styles.css";

function Data() {
  return <div>Random data</div>;
}

export default function TabsTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <Data />,
    },
  ];
  function currentIndex(index) {
    console.log(index);
  }

  return <Tab tabsData={tabs} onChange={currentIndex} />;
}
