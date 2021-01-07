import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Home from './Home';

export class HomeContainer extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return <Home {...this.props} />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
