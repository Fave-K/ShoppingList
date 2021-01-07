import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Section from './Section';

export class SectionContainer extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return <Section {...this.props} />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SectionContainer);
