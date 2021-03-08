import React from "react";

export default class Products extends Component {
  render() {
    return (
      <div>
        <ul className="products">
          {this.products.map((product) => (
            <li key={products._id}>
              <div className="product">
                <a href="#">
                  <img src={product.image} alt="product image"></img>
                  <p>{product.title}</p>
                </a>
                <div className="product-price">
                  <div>{product.price}</div>
                  <button className="button primary">Add to Cart</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
