class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credScore: this.props.credScore,
      totOfReviews: this.props.totOfReviews
    }
  }

  render() {
    let angle = 0;
    let rotation = 0;
    let divStyle = {};
    let content = '';
    let status = '';

    // chart background color is red and slices one and two colors are green if positive reviews are above 50%,
    // otherwise chart background color is green and slices one and two colors are red
    if (this.state.credScore >= 50) {
      angle = (100 - this.state.credScore) * 360 / 100;
      rotation = 270 - angle;
      divStyle = {
        chart2: {
          background: "#aa3c3c",
        },
        sOne: {
          background: "#00a085",
          transform: `rotate(${rotation}deg`,
        },
        sTwo: {
          background: "#00a085",
        }
      };
    } else {
      angle = (this.state.credScore) * 360 / 100;
      rotation = 270 - angle;
      divStyle = {
        chart2: {
          background: "#00a085",
        },
        sOne: {
          background: "#aa3c3c",
          transform: `rotate(${rotation}deg`,
        },
        sTwo: {
          background: "#aa3c3c",
        }
      };
    }

    // Print without percentage sign and change chart color to gray if credScore is 'No Reviews'
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

    // Condition to assign a user status:
    // 0 - 2 Reviews: New user
    // 3 - 9 Reviews: Progressing
    // 10+ Reviews and 75%+ Credibility score: Credible
    // 10+ Reviews and 75%- Credibility score: Inconsistent
    if (this.state.totOfReviews >= 10 && this.state.credScore >= 75) {
      status = "Credible"
    } else if (this.state.totOfReviews >= 10) {
      status = "Inconsistent"
    } else if (this.state.totOfReviews <= 2) {
      status = "New User"
    } else {
      status = "Progressing"
    }

    return (
      <div className = "widget-holder" id="widget">
        <div className="widget-block-right">
          <div className="donut-chart chart2" style={divStyle.chart2}>
            <div className="slice one" style={divStyle.sOne}></div>
            <div className="slice two" style={divStyle.sTwo}></div>
            <div className="chart-center" >
              <span style={divStyle.contentSpan}>{content}</span>
            </div>
          </div>
        </div>
        <div className = "widget-block-left">
          <div className="widget-name">
            <span>Name Last</span>
          </div>
          <div className="total-reviews">
            <span>{this.state.totOfReviews} Reviews</span>
          </div>
          <div className="widget-status">
            <span>{status}</span>
          </div>
        </div>
      </div>
    )
  }
}
