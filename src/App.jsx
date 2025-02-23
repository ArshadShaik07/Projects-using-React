import Accordion from "./accordion/accordion.jsx";
import Rating from "./Rating/Rating.jsx";
import ImageSlider from "./image-slider/ImageSlider.jsx";
import LoadMore from "./load-more-button/LoadMore.jsx";
import LightDark from "./darkLightToggle/index.jsx";
import TabsTest from "./customTabs/tabsTest.jsx";
import GithubProfileFinder from "./github-profile-finder/GithubProfileFinder.jsx";
import AutoComplete from "./autocomplete using api/AutoComplete.jsx";
import TicTacToe from "./tic-tac-toe/TicTacToe.jsx";
import FeatureFlagsGlobal from "./Feature-Flag/Context/index.jsx";
import FeatureFlags from "./Feature-Flag/index.jsx";
import "./index.css";

function App() {
  return (
    <>
      <FeatureFlagsGlobal>
        <FeatureFlags />
      </FeatureFlagsGlobal>
    </>
  );
}

export default App;
