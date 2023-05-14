function product(props) {
  return (
    <div id="display">
      <h2>{props.title}</h2>
      <div>
        <img src={props.img} alt="Product-Image" />
      </div>
      <div>
        <p> Price: {props.price}</p>
        <p>Flash Sale: {props.discount}</p>
      </div>
      <div>
        <a href="" className="btn">
          View{" "}
        </a>
        <button className="btn">Buy Now</button>
      </div>
    </div>
  );
}

export default product;
