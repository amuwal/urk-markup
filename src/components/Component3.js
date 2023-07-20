import "../styles/component3.css"


const Component3 = () => {
  return (
    <div className="component-3">
      <RetirementStrategy />
      <HousingAdvanceAd />
    </div>
  );
};

const RetirementStrategy = () => {
  return (
    <div className="retirement-strategy">
      <h3>
        <b>Retirement Strategy</b>
      </h3>
      <div className="retirement-settings">
        <div className="retirement-setting">
          <strong>Employee Contribution</strong>
          <div className="range-div">
            <input type="range" />
            <label htmlFor="">12%</label>
          </div>
        </div>
        <div className="retirement-setting">
          <strong>Retirement Age</strong>
          <div className="range-div">
            <input type="range" />
            <label htmlFor="">65</label>
          </div>
        </div>
      </div>
      <div className="retirement-stats">
        <div className="retirement-stat">
          <p>Employer Contribution</p>
          <p>8.4%</p>
        </div>
        <div className="retirement-stat">
          <p>Interest Rate</p>
          <p>5%</p>
        </div>
      </div>
      <button className="btn-primary">Update</button>
      <a href="#" className="text-primary">
        View Help Docs
      </a>
    </div>
  );
};

const HousingAdvanceAd = () => {
  return (
    <div className="houseing-advance-ad">
      <div className="houseing-advance-ad-heading">
        <p>Are you considering a</p>
        <strong>Housing Advance?</strong>
      </div>
      <p className="text-secondary">Limited time reduced interest</p>
      <a href="#" className="text-primary">
        Learn More
      </a>
    </div>
  );
};
export default Component3;
