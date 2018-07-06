import React, { Component } from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import './App.css'

const mode = [
  `onion`,
  `normal`,
  `swipe`
]
const PlantappContainer = `detail-and-compare`
// const PlantappOrigin = `detail-screen`
// const PlantappCompare = `compare-screen`

const StyledApp = styled.div`
  text-align: center;
  width: 100%;
  background: transparent;
  --bg: #000;
  --button-bg: #4a4a4a;
  --button-color: #97a0a6;

  padding: 10px 0;
  border-bottom: 1px rgba(185,194,200,0.25) solid;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${'' /* opacity: var(--onion-mode-opacity); */}
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModeButn = styled.div`
  background: var(--button-bg);
  color: var(--button-color);
  font-size: 14px;
  line-height: 16px;

  border-radius: 2px;
  padding: 4px 12px;
  margin: 4px;

  cursor: pointer;
`

const RangeWrapper = styled.div`
  display: ${props => props.visiable ? `block` : `none`};
  width: 320px !important;
  .input-range__track {
    background: var(--button-color);
  }
  .input-range__track--background {
    background: var(--button-bg);
  }
  .input-range__slider {
    background: var(--button-color);
    border: none;
  }
  .input-range__label-container {
    display: none;
  }
`
export default class App extends Component {
  state = {
    mode: `normal`,
    value: 1
  }
  handleClick = (id) => {
    const ref = document.getElementsByClassName(PlantappContainer)[0]
    ref.setAttribute('data-mode', mode[id])
    this.setState({ mode:  mode[id]})
  }

  handleSlide = (value) => {
    this.setState({ value })
    if (this.state.mode === `onion`) {
      document.body.style.setProperty('--onion-mode-opacity', value)
    } else if (this.state.mode === `swipe`) {
      document.body.style.setProperty('--swipe-mode-width', `${value*100}%`)
    }
  }

  componentDidMount () {
    var _gaq = _gaq || [];

    _gaq.push(['_setAccount', 'UA-74093364-18']);
    _gaq.push(['_trackPageview']);

    (function() {
      var ga = document.createElement('script');
      ga.type = 'text/javascript';
      ga.async = true;
      ga.src = 'https://ssl.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(ga, s);
    })()

    console.log(`bg.js`)
  }
  render() {
    return (
      <StyledApp>
        <Wrapper>
          {
            _.map(mode, (m, id) =>
              <ModeButn key={id} onClick={() => this.handleClick(id)}>{m}</ModeButn>
            )
          }
        </Wrapper>
        <RangeWrapper visiable={this.state.mode !== 'normal'}>
          <InputRange
            maxValue={1}
            minValue={0}
            step={0.01}
            value={this.state.value}
            onChange={(value) => this.handleSlide(value)} />
        </RangeWrapper>
      </StyledApp>
    )
  }
}
