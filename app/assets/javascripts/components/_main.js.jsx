class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews
    };
    this.addReview = this.addReview.bind(this);
  }

  addReview(){
    const newReview = { //Put together new message
      id: 668,
      author_id: 4,
      receiver_id: 1,
      content: "Test review!"
    };
    const newReviews = this.state.reviews.concat(newReview);
    this.setState({
      reviews: newReviews
    });
  }

  componentWillMount() {
    console.log(this.state.reviews)
  }


  render() {
    const listReviews = this.state.reviews.map((review) => {
      return (
        <div key={review.id}>
          <p>{review.author_id} {review.received_id}</p>
          <p>{review.content}</p>
        </div>
        )
    });
    return (
      <div>
        <h1>React reviews:</h1>
        {listReviews}
      </div>
    );
  }
}