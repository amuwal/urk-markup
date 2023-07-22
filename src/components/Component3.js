import { useState } from "react";
import "../styles/component3.css";

const Component3 = () => {
  return (
    <div className="component-3">
      <RetirementStrategy />
      {window.innerWidth > 800 ? <HousingAdvanceAd /> : null}
    </div>
  );
};

const RetirementStrategy = () => {
  const handleOnChange = (e) => {
    const input = e.target;
    const label = input.nextSibling;
    const val = input.value;
    const newVal =
      label.innerHTML[label.innerHTML.length - 1] === "%"
        ? Math.floor((val * 12) / 50) + " %"
        : +val + 30;
    label.innerHTML = newVal;
  };

  return (
    <div className="retirement-strategy">
      <p className="heading-medium">Retirement Strategy</p>
      <div className="retirement-settings">
        <div className="retirement-setting">
          <p className="text-medium bolder">Employee Contribution</p>
          <div className="range-div">
            <input
              onChange={handleOnChange}
              id="employee-contribution"
              type="range"
            />
            <label className="text-medium bolder" htmlFor="">
              12 %
            </label>
          </div>
        </div>
        <div className="retirement-setting">
          <p className="text-medium bolder">Retirement Age</p>
          <div className="range-div">
            <input onChange={handleOnChange} min={0} max={70} type="range" />
            <label className="text-medium bolder" htmlFor="">
              65
            </label>
          </div>
        </div>
      </div>
      <div className="retirement-stats">
        <div className="retirement-stat">
          <p className="text-medium bolder">Employer Contribution</p>
          <p className="text-medium bolder">8.4%</p>
        </div>
        <div className="retirement-stat">
          <p className="text-medium bolder">Interest Rate</p>
          <p className="text-medium bolder">5 %</p>
        </div>
      </div>
      <button className="btn-primary text-medium">Update</button>
      {window.innerWidth > 800 ? (
        <a href="#" className="text-primary text-medium">
          View Help Docs
        </a>
      ) : null}
    </div>
  );
};

const HousingAdvanceAd = () => {
  return (
    <div className="houseing-advance-ad">
      <div className="houseing-advance-ad-heading">
        <p className="text-large">Are you considering a</p>
        <p className="text-large bolder">Housing Advance?</p>
      </div>
      <p className="text-secondary text-small">Limited time reduced interest</p>
      <a href="#" className="text-primary text-medium">
        Learn More
      </a>
    </div>
  );
};
export default Component3;
