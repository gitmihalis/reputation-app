class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "All Reviews",
      reviews: this.props.reviews,
      authors: this.props.authors,
      review_categories: this.props.review_categories
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
      title: "Negative Reviews",
      reviews: this.props.reviewsneg,
      authors: this.props.authorsneg,
    });
  }

  showAllReviews(){
    this.setState({
      title: "All Reviews",
      reviews: this.props.reviews,
      authors: this.props.authors
    });
  }

  showWrittenReviews(){
    this.setState({
      title: 'Reviews written by ' + this.props.receiver.first_name,
      reviews: this.props.reviewswritten,
      authors: this.props.received
    });
  }

  componentWillMount() {
     console.log(this.state.review_categories)
  }


  render() {
    $(document).scroll(function() {
      var y = $(document).scrollTop(),
          header = $("#test");
      if(y >= 550)  {
          header.css({position: "fixed", "top" : "0", "left" : "0"});
      } else {
          header.css("position", "relative");
      }
    });

    const review_type = (review, i) => {
      if (review.positive == true) {
        return(
          <span className = "reviewing-as">
            <p>HC Reviewed {this.props.receiver.first_name} as {this.state.review_categories[i][0].name}</p>
          </span>
        )
      } else {
        return(
          <span className = "reviewing-as">
            <p className = "red"><img src="/assets/icons/thumbs_down_icon.png" width="20px" /> HC Reviewed {this.props.receiver.first_name} as {this.state.review_categories[0][0].name}</p>
          </span>
        )
      } }

    let i = -1;
    const listReviews = this.state.reviews.map((review) => {
    i++;
    return (
      <div className = "review" key={review.id}>
        <span className = "float-right">
          <p> <img src="/assets/icons/calendar_icon.png" width="16px" /> {Date(review.created_at).slice(0, 15)} </p>
        </span>
        <span className = "float-left">
          <div className = "circle-frame" />
        </span>
          <span className = "reviewer-name">
            <p>{this.state.authors[i].first_name} {this.state.authors[i].last_name}</p>
        </span>
        {review_type(review, i)}
        <div className = "content">
          <p>{review.content}</p>
        </div>
      </div>
    )
    });
    return (
      <div>
        <div className = "left-side-bar">
          <div className = "avatar">
            <img className = "resize-image" src = "https://content-static.upwork.com/uploads/2014/10/02123010/profile-photo_friendly.jpg" />
          </div>
          <div className = "select-reviews" onClick={event => { this.showAllReviews() } }>
            <p><strong>All Reviews </strong></p>
          </div>
          <div className = "select-reviews" onClick={event => { this.showWrittenReviews() } } >
            <p><strong>Written Reviews </strong></p>
          </div>
          <div className = "select-reviews" onClick={event => { this.showNegReviews() } }>
            <p className = "negative" ><strong>Negative Reviews </strong></p>
          </div>
        </div>
        <div className = "right-box">
        <div id = "test">
          <ReviewBox
            addReview = {this.addReview}
            reviews = {this.state.reviews}
            token = {this.props.token}
            categories = {this.props.categories}
            current_user = {this.props.current_user}
            receiver = {this.props.receiver}/>
        </div>
          <h1 className = "name"> {this.props.receiver.first_name} {this.props.receiver.last_name}</h1>
          <div className = "bio-box">
            <p> {this.props.profile.bio}</p>
          </div>
          <h1 className = "review-type-title" >{this.state.title}</h1>
          {listReviews}
        </div>
      </div>
    );
  }

  componentDidUpdate(){
    this.showAllReviews
  }

}