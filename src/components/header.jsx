import React from "react";

const Header = () => {
  return (
    <div className="container text-center" id="kraken">
      <div className="row">
        <div className="col-lg-6">
          <img
            src={`${process.env.PUBLIC_URL}/images/fitness-logo.jpg`}
            alt="Fitness Logo"
          />
        </div>
        <div className="col-lg-6">
          <h1>Join Kraken Experience</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
