import Particle from './Particle.js';

import bullseye from '../assets/images/bullseye.svg';
import title from '../assets/images/title.svg';
import smiley from '../assets/images/smiley.svg';

import './Title.scss';

const Title = () => {
  return (
    <div class="logo">
      <img className="bullseye" src={bullseye} />
      <img className="title" src={title} />
      <img className="smiley" src={smiley} />
      <div className="particles">
        <Particle shape="star" x={47} y={75} />
        <Particle shape="square" x={78} />
        <Particle shape="triangle" x={69} y={28} clockwise={false} />
        <Particle shape="star" x={36} y={21} clockwise={false} />
        <Particle shape="triangle" x={20} y={47} />
      </div>
    </div>
  )
}

export default Title
