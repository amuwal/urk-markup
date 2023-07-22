import Graph from "./Graph"
import Donut from "./Donut"
import "../styles/component2.css"

const Component2 = () => {
    return (
      <div className="component-2">
        <GoalComponent />
        <GraphComponent /> 
        <PeersComparison />
      </div>
    )
}

const GoalComponent = () => {
    return (
        <div className="goal">
            <div className="goal-headings">
                <p className="text-primary heading-small">Retirement Income</p>
                <p className="heading-large">Starting Year 2056</p>
            </div>

            <div className="goal-stats">
                <div className="goal-stat">
                  <h3>$300,000</h3>
                  <p className="text-secondary text-small">My Goal</p>
                </div>
                <div className="goal-stat">
                  <h3>59 %</h3>
                  <p className="text-secondary text-small">Goal Achieved</p>
                </div>
                <div className="goal-stat">
                  <h3>$300</h3>
                  <p className="text-secondary text-small">Est. Monthly Income</p>
                </div>
            </div>
        </div>
    )
}

const GraphComponent = () => {
    return (
        <div className="graph-component">
            <p className="heading-medium">
                Contributions Overtime
            </p>
            <Graph />
        </div>
    )
}

const PeersComparison = () => {
    return (
        <div className="peers-comparison">
            <p className="heading-medium">How do I compare to my peers?</p>
            <p className="text-secondary text-small">These numbers represetn current goal achievement</p>
            <div className="peers-comparison-stats">
                <div className="comparison-settings">
                    <div className="comparison-setting">
                        <label className="text-medium bolder" htmlFor="age-input">Age:</label>
                        <select className="text-medium" name="age-input" id="age-input">
                            <option selected value="Under 30">Under 30</option>
                            <option value="Under 40">Under 40</option>
                        </select>
                    </div>
                    <div className="comparison-setting">
                        <label className="text-medium bolder" htmlFor="salary-input">Salary:</label>
                        <select className="text-medium" name="salary-input" id="salary-input">
                            <option selected value="K 20 -  K 30">K 20 -  K 30</option>
                            <option value="K 30 - K 40">K 30 - K 40</option>
                        </select>
                    </div>
                    <div className="comparison-setting">
                        <label className="text-medium bolder" htmlFor="gender-input">Gender:</label>
                        <select className="text-medium" name="gender-input" id="gender-input">
                            <option selected value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>

                <div className="comparison-donuts">
                    <div className="comparison-donut">
                        <Donut />
                        <p className="text-medium">Average</p>
                    </div>
                    <div className="comparison-donut">
                        <Donut />
                        <p className="text-medium">Top</p>
                    </div>
                    <div className="comparison-donut">
                        <Donut />
                        <p className="text-medium">Me</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Component2;