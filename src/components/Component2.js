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
                <strong className="text-primary">Retirement Income</strong>
                <h3>Starting Year 2056</h3>
            </div>

            <div className="goal-stats">
                <div className="goal-stat">
                  <h3>$300,000</h3>
                  <p className="text-secondary">My Goal</p>
                </div>
                <div className="goal-stat">
                  <h3>59 %</h3>
                  <p className="text-secondary">Goal Achieved</p>
                </div>
                <div className="goal-stat">
                  <h3>#300</h3>
                  <p className="text-secondary">Est. Monthly Income</p>
                </div>
            </div>
        </div>
    )
}

const GraphComponent = () => {
    return (
        <div className="graph-component">
            <strong>
                Contributions Overtime
            </strong>
            <Graph />
        </div>
    )
}

const PeersComparison = () => {
    return (
        <div className="peers-comparison">
            <strong>How do I compare to my peers?</strong>
            <p className="text-secondary">These numbers represetn current goal achievement</p>
            <div className="peers-comparison-stats">
                <div className="comparison-settings">
                    <div className="comparison-setting">
                        <label htmlFor="age-input">Age:</label>
                        <select name="age-input" id="age-input">
                            <option selected value="Under 30">Under 30</option>
                            <option value="Under 40">Under 40</option>
                        </select>
                    </div>
                    <div className="comparison-setting">
                        <label htmlFor="salary-input">Salary:</label>
                        <select name="salary-input" id="salary-input">
                            <option selected value="K 20 -  K 30">K 20 -  K 30</option>
                            <option value="K 30 - K 40">K 30 - K 40</option>
                        </select>
                    </div>
                    <div className="comparison-setting">
                        <label htmlFor="gender-input">Age:</label>
                        <select name="gender-input" id="gender-input">
                            <option selected value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>

                <div className="comparison-donuts">
                    <div className="comparison-donut">
                        <Donut />
                        <p>Average</p>
                    </div>
                    <div className="comparison-donut">
                        <Donut />
                        <p>Top</p>
                    </div>
                    <div className="comparison-donut">
                        <Donut />
                        <p>Me</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Component2;