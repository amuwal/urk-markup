
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
        <h1>ToDo (graph component)</h1>
    )
}

const PeersComparison = () => {
    return (
        <h1>ToDo (peers comparison)</h1>
    )
}
export default Component2;