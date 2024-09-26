import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CheckoutForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      phoneNumber: '',
      email: '',
      year: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {}

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  render() {
    return (
      <div className="checkout" id="checkout-input">
        <div className="checkout-content">
          <h3>Let's Checkout</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="input-title">
              <label htmlFor="firstName">
                <small>First Name</small>
              </label>
              <input
                name="firstName"
                value={this.state.name}
                placeholder="Given Name"
              />
            </div>
            <div className="input-title">
              <label htmlFor="lastName">
                <small>Last Name</small>
              </label>
              <input
                name="lastName"
                value={this.state.name}
                placeholder="Surname"
              />
            </div>
            <div className="input-title">
              <label htmlFor="address">
                <small>Address</small>
              </label>
              <input
                name="address"
                value={this.state.name}
                placeholder="Address"
              />
            </div>
            <div className="input-title">
              <label htmlFor="phoneNumber">
                <small>Phone Number</small>
              </label>
              <input
                name="phoneNumber"
                value={this.state.name}
                placeholder="Phone Number"
              />
            </div>
            <div className="input-title">
              <label htmlFor="email">
                <small>Email</small>
              </label>
              <input name="email" value={this.state.name} placeholder="Email" />
            </div>
            <div className="input-title">
              <label htmlFor="creditCard">
                <small>Credit Card</small>
              </label>
              <input
                name="creditCard"
                value={this.state.name}
                placeholder="Credit Card"
              />
            </div>
            <div>
              <div className="input-title">
                <label htmlFor="expiration">
                  <small>Expiration</small>
                </label>
                <select className="select-expiration">
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
                <input
                  className="expiration-year"
                  name="year"
                  value={this.state.name}
                  placeholder="Year"
                />
              </div>
            </div>
            <div>
              <Link to="/confirmation-page">
                <button className="checkout-cta" type="button">
                  Submit
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    loadCart: () => dispatch(),
  };
};

export default connect(mapStateToProps, null)(CheckoutForm);
