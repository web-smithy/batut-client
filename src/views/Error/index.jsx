import './style.scss';
import React from 'react';
import Header from '../../components/Header';
import error from '../../assets/img/error.svg';

function ErrorPage() {
  return (
    <div className="main-wrapper">
      <Header />
      <section className="error-page">
        <div className="container">
          <div className="error-page__img">
            <img src={error} alt="error" />
          </div>
          <div className="error-page__wrap">
            <h1 className="error-page__title">Not found... &#9785;</h1>
            <p>The link is broken or the page has been moved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ErrorPage;
