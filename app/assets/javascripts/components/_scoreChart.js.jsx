class ScoreChart extends React.Component {
    // TESTING
  constructor(props) {
    super(props);
    this.state = {
      credScore: this.props.credScore,
    }
  }

  render() {
    const angle = (100 - this.state.credScore) * 360 / 100;
    const rotation = 270 - angle;
    let divStyle = {};

    if (this.state.credScore >= 50) {
      divStyle = {
        chart2: {
          background: "#da0909",
        },
        sOne: {
          background: "#139838",
          transform: `rotate(${rotation}deg`,
        },
        sTwo: {
          background: "#139838",
        }
      };
    } else {
      divStyle = {
        chart2: {
          background: "#139838",
        },
        sOne: {
          background: "#da0909",
          transform: `rotate(${rotation}deg`,
        },
        sTwo: {
          background: "#da0909",
        }
      };
    }

    return (
      <div className="card">
        <div className="donut-chart chart2" style={divStyle.chart2}>
          <div className="slice one" style={divStyle.sOne}></div>
          <div className="slice two" style={divStyle.sTwo}></div>
          <div className="chart-center" >
            <span>{`${this.state.credScore} %`}</span>
          </div>
        </div>
      </div>
    )
    // TESTING
  }
}
