import "./styles.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function ImageSlider(props) {
  let data;
  const [imagesData, setImagesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [displayImage, setDisplayImage] = useState(0);

  async function fetchUrl(url) {
    try {
      setLoading((l) => true);
      let response = await fetch(`${url}page=1&limit=10`);
      data = await response.json();
      setImagesData(data);
      setLoading((l) => false);
    } catch (e) {
      console.error(e);
      console.log("data not found");
    }
  }

  useEffect(() => {
    fetchUrl(props.url);
  }, [props.url]);

  function handlePrev() {
    if (displayImage !== 0) {
      setDisplayImage((d) => d - 1);
    } else {
      setDisplayImage(imagesData.length - 1);
    }
  }

  function handleNext() {
    if (displayImage === imagesData.length - 1) {
      setDisplayImage((d) => 0);
    } else {
      setDisplayImage((d) => d + 1);
    }
  }

  return (
    <div className="images-slider">
      {loading ? (
        <div className="loader">the page is loading</div>
      ) : (
        <div className="images-slider-container">
          <svg
            className="left-slider"
            onClick={handlePrev}
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
          >
            <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
          </svg>
          {imagesData.map((image, i) => {
            if (i === displayImage) {
              return (
                <img className="images" key={i} src={image.download_url} />
              );
            }
          })}
          <svg
            className="right-slider"
            onClick={handleNext}
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
          >
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>

          <span className="slide-dots-container">
            {imagesData.map((_, i) => {
              return (
                <button
                  key={i}
                  onClick={() => setDisplayImage(i)}
                  className={
                    displayImage === i ? "slide-btn active-slide" : "slide-btn"
                  }
                ></button>
              );
            })}
          </span>
        </div>
      )}
    </div>
  );
}

export default ImageSlider;
