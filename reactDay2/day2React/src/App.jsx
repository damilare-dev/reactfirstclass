import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./style.css";
import Product from "./product";

function App() {
  const products = [
    {
      title: "Men's Polo",
      img: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/13/9452831/1.jpg?7701",
      price: 23.67,
      discountPrice: 20,
    },

    {
      title: "Fragrances",
      img: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/59/5350961/1.jpg?9484",
      price: "$2.67",
      discountPrice: "$20",
    },

    {
      title: "Fragrances",
      img: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/59/5350961/1.jpg?9484",
      price: "$2.67",
      discountPrice: "$20",
    },

    {
      title: "Fragrances",
      img: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/59/5350961/1.jpg?9484",
      price: "$2.67",
      discountPrice: "$20",
    },

    {
      title: "Fragrances",
      img: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/59/5350961/1.jpg?9484",
      price: "$2.67",
      discountPrice: "$20",
    },

    {
      title: "Fragrances",
      img: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/59/5350961/1.jpg?9484",
      price: "$2.67",
      discountPrice: "$20",
    },

    {
      title: "Skincare",
      img: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/63/9523401/1.jpg?0920",
      price: "$20",
      discountPrice: "$10",
    },

    {
      title: "Footwears",
      img: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/25/2404491/1.jpg?9956",
      price: "$2.67",
      discountPrice: "$20",
    },

    {
      title: "Phones",
      img: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/78/8925522/1.jpg?1774",
      price: "$40",
      discountPrice: "$30",
    },

    {
      title: "Phones",
      img: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/78/8925522/1.jpg?1774",
      price: 5.67,
      discountPrice: 3.5,
    },

    {
      title: "Phones",
      img: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/78/8925522/1.jpg?1774",
      price: 5.67,
      discountPrice: 3.5,
    },

    {
      title: "Laptops",
      img: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/10/251796/1.jpg?8212",
      price: 5.67,
      discountPrice: 3.5,
    },
  ];

  return (
    <>
      <h1>Product Page</h1>

      <div id="itemDisplay-container">
        {products.length > 0 ? (
          products.map((value, index) => {
            return (
              <div key={index} className="product-display">
                <Product
                  title={value.title}
                  img={value.img}
                  price={value.price}
                  discount={value.discountPrice}
                />
              </div>
            );
          })
        ) : (
          <h1>NO PRODUCTS YET. SITE UNDER MAINTENANCE</h1>
        )}
      </div>
    </>
  );
}

export default App;
