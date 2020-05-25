import React, { Component } from "react";
import { connect } from "react-redux";

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      Products: null,
    };
  }
  componentDidMount() {
    this.setState({ Products: this.props.Products });
  }

  ProductTable() {
    return (
      <table className="table table-striped table-responsive">
        <thead className="thead-dark">
          <tr>
            <th></th>
            <th className="col">Product</th>
            <th className="col">Price</th>
            <th className="col">Items</th>
          </tr>
        </thead>
        <tbody className="">
          {this.state.Products.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  src={item.img}
                  alt={item.product}
                  height="70px"
                  width="70px"
                />
              </td>
              <td>
                <b>{item.product}</b>
              </td>
              <td>{item.price}</td>
              <td>{item.AddedToCart}</td>
            </tr>
          ))}
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="card-title text-center font-weight-lighter">Shop</h1>
        <hr />

        {this.state.Products ? (
          this.ProductTable()
        ) : (
          <h3 className="text-info">
            You choose nothing from the Product Menu! Go get it.
          </h3>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  Products: state.Products,
});

export default connect(mapStateToProps)(Shop);
