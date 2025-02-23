import Accordion from "../accordion/accordion.jsx";
import Rating from "../Rating/Rating.jsx";
import ImageSlider from "../image-slider/ImageSlider.jsx";
import LoadMore from "../load-more-button/LoadMore.jsx";
import LightDark from "../darkLightToggle/index.jsx";
import TabsTest from "../customTabs/tabsTest.jsx";
import GithubProfileFinder from "../github-profile-finder/GithubProfileFinder.jsx";
import TicTacToe from "../tic-tac-toe/TicTacToe.jsx";
import AutoComplete from "../autocomplete using api/AutoComplete.jsx";

import { DataContext } from "./Context/index.jsx";
import { useState, useContext } from "react";

function FeatureFlags() {
  const { enabledFlags } = useContext(DataContext);

  const componentsToRender = [
    {
      key: "showGithubProfileFinder",
      component: <GithubProfileFinder />,
    },
    {
      key: "showLightAndDarkMode",
      component: <LightDark />,
    },
    {
      key: "showRating",
      component: <Rating />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showAccordian",
      component: <Accordion />,
    },
    {
      key: "showTabs",
      component: <TabsTest />,
    },
  ];

  return (
    <div>
      {componentsToRender.map((component) =>
        enabledFlags[component.key] ? component.component : null
      )}
    </div>
  );
}

export default FeatureFlags;
