function Product(props){
  return (
    //  <div id="display">
    //    <h2>{props.title}</h2>
    //    <div>
    //      <img src={props.img} alt="Product-Image" />
    //    </div>
    //    <div>
    //      <p> Price: {props.price}</p>
    //      <p>Flash Sale: {props.discount}</p>
    //    </div>
    //    <div>
    //      <a href="" className="btn">
    //        View{" "}
    //      </a>
    //      <button className="btn">Buy Now</button>
    //    </div>
    //  </div>

    <div className="container">
      <div className="row">
      <div className="col-md-12" >
       <h2>{props.title}</h2>
       <div className="col-md-12">
         <img src={props.img} alt="Product-Image" />
       </div>
       <div>
         <p> Price: {props.price}</p>
         <p>Flash Sale: {props.discount}</p>
       </div>
       <div>
         <a href="" id="btn">
           View
         </a>
         <button id="btn">Buy Now</button>
       </div>
     </div>
          </div>
    </div>
  );
}
  export default Product