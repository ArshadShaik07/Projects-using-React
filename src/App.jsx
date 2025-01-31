import Accordion from "./accordion/accordion.jsx";
import Rating from "./Rating/Rating.jsx";
import Password from "./password/Password.jsx";
import ImageSlider from "./image-slider/ImageSlider.jsx";
import LoadMore from "./load more button/LoadMore.jsx";
import "styles.css";

function App() {
  return <LoadMore url={`https://dummyjson.com/products?`} />;
}

export default App;
