import React from 'react'

function Home() {
  return (
    <div className="App">
    <header className="App-header">
      <h1>Welcome to Our Online Store</h1>
      <p>Discover a wide range of products!</p>
    </header>
    <section className="product-list">
      <div className="product-card">
        <img src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/10/251796/1.jpg?8212" alt="Product 1" />
        <h2>Product 1</h2>
        <p>$19.99</p>
        <button>Add to Cart</button>
      </div>
      <div className="product-card">
        <img src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/18/251796/1.jpg?8212" alt="Product 2" />
        <h2>Product 2</h2>
        <p>$24.99</p>
        <button>Add to Cart</button>
      </div>
      <div className="product-card">
        <img src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/20/251796/1.jpg?8212" alt="Product 3" />
        <h2>Product 3</h2>
        <p>$29.99</p>
        <button>Add to Cart</button>
      </div>
    </section>
  </div>  )
}
export default Home