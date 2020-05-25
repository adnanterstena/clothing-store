import React, { Component } from "react";
import { connect } from "react-redux";
import shopData from "../ClothesData/Stok";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      shopData: shopData, //Product Data
      count: 0, //Product in store
      submitedButton: null,
    };
  }
  componentDidMount() {
    this.setState({
      count: this.props.count,
    });
  }

  componentDidUpdate() {
    this.props.dispatch({
      type: "AddToShop",
      payload: { count: this.state.count },
    });
  }

  //Add to Stok or ejected from stok
  addToStok = (x, changed) => {
    //element of object
    const elementObject = this.state.shopData.find((item) => item.id === x);

    //change data of element
    let ChangedData = elementObject;

    //if user is added ore ejected products from store!
    if (changed === false) {
      ChangedData.items = elementObject.items - 1;
      ChangedData.AddedToCart = elementObject.AddedToCart + 1;
      this.setState({ count: this.state.count + 1 });
    } else {
      ChangedData.items = elementObject.items + 1;
      ChangedData.AddedToCart = elementObject.AddedToCart - 1;
      this.setState({ count: this.state.count - 1 });
    }

    this.setState({ ...shopData, elementObject: ChangedData });
  };

  submitProducts = () => {
    //only part of the product is added on store
    let array = [];
    let count = 0;
    this.state.shopData.map((item) => {
      if (item.AddedToCart > 0) {
        count = count + item.AddedToCart;
        array.push(item);
      }
      return array;
    });
    //dispatch to store of redux
    this.props.dispatch({
      type: "SubmitToShop",
      payload: { products: array, count: count },
    });
  };

  shopData() {
    return (
      <div className="row">
        {this.state.shopData.map((item) => (
          <div key={item.id}>
            <div className="row">
              <div className="col-md-6 text-center">
                <h3 className="card-title text-primary">{item.product}</h3>
                <p className="text-justify">{item.description}</p>
              </div>
              <div>
                <img
                  className="img-thumbnail"
                  src={item.img}
                  alt={item.product}
                  height="200px"
                  width="200px"
                />
                <div className="btn-info text-center">{item.price}</div>
              </div>
              <div className="col-md-3">
                <p className="text m-2 text-muted col-md-7">
                  Only <b>{item.items}</b> items
                </p>
                <input
                  className="form-control m-2 col-md-7"
                  type="text"
                  placeholder="How many?"
                />
                {item.items === 0 ? (
                  <div className="p-4 m-2 col-md-7"></div>
                ) : (
                  <button
                    className="btn btn-primary p-2 m-2 col-md-7"
                    onClick={() => this.addToStok(item.id, false)}
                  >
                    Add To Stock
                  </button>
                )}

                {item.AddedToCart === 0 ? (
                  <div className="p-4 m-2 col-md-7"></div>
                ) : (
                  <button
                    className="btn btn-secondary p-2 m-2 col-md-7"
                    onClick={() => this.addToStok(item.id, true)}
                  >
                    Eject From Stock
                  </button>
                )}
                {item.AddedToCart === 0 ? (
                  ""
                ) : (
                  <p className="text m-2 text-muted col-md-7">
                    <b>{item.AddedToCart}</b> Added
                  </p>
                )}
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    );
  }
  render() {
    return (
      <React.Fragment>
        <h1 className="card-title text-center font-weight-lighter">Products</h1>
        <br />
        <div className="row">
          <p className="text text-info col-md-8">
            If you have shipped a product by submited, you can go to the store
            at <b>Shop menu</b> to proceed further.
          </p>
          <div className="col-md-4">
            <button
              onClick={() => this.submitProducts()}
              className="btn-success p-2 float-right"
            >
              Submit to See Products At Store
            </button>
          </div>
        </div>
        <hr />

        {this.shopData()}
        <br />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
  submitedButton: state.submitedButton,
});

export default connect(mapStateToProps)(Products);
