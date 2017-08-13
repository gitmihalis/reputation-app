class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [{
        id: 1,
        first_name: null,
        last_name: null,
        content: "There are no reviews yet!"
      }]
    };
    this.addReview = this.addReview.bind(this);
  }

  addReview(){
    const newReview = { //Put together new message
      id: 2,
      first_name: this.props.user_first_name,
      last_name: "Test",
      content: "Test review!"
    };
    const newReviews = this.state.reviews.concat(newReview);
    this.setState({
      reviews: newReviews
    });
  }

  componentWillMount() {
    this.addReview();
  }


  render() {
    return (
      <div>
        <p>{this.props.user_first_name} {this.props.user_last_name}</p>
        <p>{this.state.reviews.first_name} {this.state.reviews.last_name}</p>
        <p>{this.state.reviews[1].content}</p>
      </div>
    );
  }
}