import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Promo from '../Promo';
import AnimatedWave from '../AnimatedWave';

function MainPromo({ servicesRef, aboutRef, detailsRef }) {
  return (
    <div className="main-wrapper">
      <Header servicesRef={servicesRef} aboutRef={aboutRef} detailsRef={detailsRef} />
      <main className="main">
        <Promo />
        <AnimatedWave />
      </main>
    </div>
  );
}

MainPromo.propTypes = {
  servicesRef: PropTypes.shape(
    { current: PropTypes.instanceOf(Element) },
  ),
  aboutRef: PropTypes.shape(
    { current: PropTypes.instanceOf(Element) },
  ),
  detailsRef: PropTypes.shape(
    { current: PropTypes.instanceOf(Element) },
  ),
};

MainPromo.defaultProps = {
  servicesRef: null,
  aboutRef: null,
  detailsRef: null,
};

export default MainPromo;
