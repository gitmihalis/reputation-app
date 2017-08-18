class ScoreChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credScore: this.props.credScore,
    }
  }

  render() {
    let angle = 0;
    let rotation = 0;
    let divStyle = {};
    let content = '';

    // if positive reviews are above 50% chart background color is red and slices one and two colors are green
    // otherwise, chart background color is green and slices one and two colors are red
    if (this.state.credScore >= 50) {
      angle = (100 - this.state.credScore) * 360 / 100;
      rotation = 270 - angle;
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
      angle = (this.state.credScore) * 360 / 100;
      rotation = 270 - angle;
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

    // if credScore is 'No Reviews' print without percentage sign
    if (this.state.credScore == 'No Reviews') {
      content = `${this.state.credScore}`;
      divStyle = {
        chart2: {
          background: "#989097",
        },
        sOne: {
          background: "#989097",
        },
        sTwo: {
          background: "#989097",
        },
        contentSpan: {
          fontSize: '26px',
          color: '#139838',
        }
      };
    } else {
      content = `${this.state.credScore} %`;
    }

    return (
      <div className="card">
        <div className="donut-chart chart2" style={divStyle.chart2}>
          <div className="slice one" style={divStyle.sOne}></div>
          <div className="slice two" style={divStyle.sTwo}></div>
          <div className="chart-center" >
            <span style={divStyle.contentSpan}>{content}</span>
          </div>
        </div>
      </div>
    )
  }
}
