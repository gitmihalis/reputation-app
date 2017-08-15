class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      authors: this.props.authors
    };
    this.addReview = this.addReview.bind(this);
    this.showNegReviews = this.showNegReviews.bind(this);
    this.showAllReviews = this.showAllReviews.bind(this);
    this.showWrittenReviews = this.showWrittenReviews.bind(this);
  }

  addReview(reviewData){
    const newReview = reviewData;
    const newAuthor = {first_name: this.props.current_user.first_name, last_name: this.props.current_user.last_name };
    const newReviews = this.state.reviews.concat(newReview);
    const newAuthors = this.state.authors.concat(newAuthor);
    this.setState({
      reviews: newReviews,
      authors: newAuthors
    });
  }

  showNegReviews(){
    this.setState({
      reviews: this.props.reviewsneg,
      authors: this.props.authorsneg
    });
  }

  showAllReviews(){
    this.setState({
      reviews: this.props.reviews,
      authors: this.props.authors
    });
  }

  showWrittenReviews(){
    this.setState({
      reviews: this.props.reviewswritten,
      authors: this.props.received
    });
  }

  componentWillMount() {
    // console.log(this.props.current_user)
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
        <ReviewBox
          addReview = {this.addReview}
          reviews = {this.state.reviews}
          token = {this.props.token}
          categories = {this.props.categories}
          current_user = {this.props.current_user}
          receiver = {this.props.receiver}/>

        <div className = "left-side-bar">
          <div className = "avatar">
            <img className = "resize-image" src = "https://content-static.upwork.com/uploads/2014/10/02123010/profile-photo_friendly.jpg" />
          </div>
          <p onClick={event => { this.showNegReviews() } } ><strong> Show Negative Reviews </strong></p>
          <p onClick={event => { this.showAllReviews() } } ><strong> Show All Reviews </strong></p>
          <p onClick={event => { this.showWrittenReviews() } } ><strong> Show Written Reviews </strong></p>
        </div>
        <div className = "right-box">
          <h1>React reviews:</h1>
          {listReviews}
        </div>
      </div>
    );
  }

  componentDidUpdate(){
    this.showAllReviews
  }

}