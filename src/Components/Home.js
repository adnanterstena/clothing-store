import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="card-title text-center font-weight-lighter">Shop</h1>
        <hr />
        <h3 className="text-left font-weight-light text-justify">
          In this application you can select the product and see that product on
          the store page. You can select the amount of products you want, also
          can change the selected quantity. And again you can see the results on
          the store page.
          <br />
          <br />
          The products are in the <b>Products</b> page and ordered product are
          in the <b>Shop</b> page.
        </h3>
      </div>
    );
  }
}
export default Home;
