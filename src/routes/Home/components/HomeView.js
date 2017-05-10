import React from 'react'
import { connect } from 'react-redux'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import HomeView from './home-view.rt'

const mapStateToProps = (state) => ({
  DuckImage : DuckImage
})

export default connect(mapStateToProps)(HomeView)