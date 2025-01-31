import { useState, useEffect } from "react";
import "./styles.css";

function LoadMore(props) {
  let limit = 20;
  let [skip, setSkip] = useState(0);
  let [products, setProducts] = useState([]);
  let [disable, setDisable] = useState(false);

  async function fetchProducts(url) {
    let response = await fetch(url);
    let data = await response.json();
    setProducts([...products, ...data.products]);
    console.log(data);
    console.log(data.products[0].thumbnail);
    console.log(products.length);
  }

  function handleLoadMore() {
    setSkip((s) => s + 20);
  }

  //limit=20&skip=
  useEffect(() => {
    fetchProducts(`${props.url}limit=${limit}&skip=${skip}`);
  }, [skip]);

  useEffect(() => {
    if (products.length > 100) {
      setDisable(true);
    }
  }, [products]);

  return (
    <>
      <div className="products">
        {products.map((product, _) => {
          return (
            <div key={product.id} className="product-container">
              <img src={product.thumbnail} />
              <p>{product.title}</p>
            </div>
          );
        })}
      </div>
      <button disabled={disable} className="load-btn" onClick={handleLoadMore}>
        Load More
      </button>
    </>
  );
}

export default LoadMore;
