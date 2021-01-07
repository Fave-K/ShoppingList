import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ProductDetails from './ProductDetails';

export class ProductDetailsContainer extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return <ProductDetails {...this.props} />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductDetailsContainer);
