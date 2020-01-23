import React from 'react';
import Slider1 from 'assets/001 - Home/slider-1.jpg';
import Slider2 from 'assets/001 - Home/slider-2.jpg';
import Slider3 from 'assets/001 - Home/slider-3.jpg';
import AwesomeSlider from 'react-awesome-slider'
import AwsSliderStyles from './styles.scss';

function HomeSlider() {
  return (
    <div>
      <AwesomeSlider cssModule={AwsSliderStyles}>
        <div><img src={Slider1}/></div>
        <div><img src={Slider2}/></div>
        <div><img src={Slider3}/></div>
      </AwesomeSlider>
    </div>
  );
}

export default HomeSlider;
