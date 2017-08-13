class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      authors: this.props.authors
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
    console.log(this.state.authors)
  }


  render() {
    let i = -1;
    const listReviews = this.state.reviews.map((review) => {
    i++;
    return (
      <div key={review.id}>
        <p>{this.state.authors[i].first_name} {this.state.authors[i].last_name}</p>
        <p>{review.content}</p>
      </div>
    )
    });
    return (
      <div>
        < OrderForm />
        <h1>React reviews:</h1>
        {listReviews}
      </div>
    );
  }
}