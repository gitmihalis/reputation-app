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
      <div id="widget">
        <div className="wrapper box1 card">
          <div className="donut-chart chart2" style={divStyle.chart2}>
            <div className="slice one" style={divStyle.sOne}></div>
            <div className="slice two" style={divStyle.sTwo}></div>
            <div className="chart-center" >
              <span style={divStyle.contentSpan}>{content}</span>
            </div>
          </div>
        </div>
        <div className="wrapper box2 total-reviews">
          <p>{this.state.totOfReviews} Reviews</p>
        </div>
        <div className="wrapper box3 status">
          <p><img className="margin-right" src="/assets/icons/thumbs_down_icon.png" width="32px"/>{status}</p>
        </div>
      </div>
    )
  }
}
