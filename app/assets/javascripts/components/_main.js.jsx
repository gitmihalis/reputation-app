class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "All Reviews",
      reviews: this.props.reviews,
      authors: this.props.authors,
      written: false,
      review_categories: this.props.review_categories
    };
    this.addReview = this.addReview.bind(this);
    this.showNegReviews = this.showNegReviews.bind(this);
    this.showAllReviews = this.showAllReviews.bind(this);
    this.showWrittenReviews = this.showWrittenReviews.bind(this);
  }

  addReview(reviewData){

    //Put all categories into a key-value pair for reference
    const categories_and_id = {}
    const categories = this.props.categories.map((category) => {
      categories_and_id[category.id] = category.name
    });

    //Change the state to include the new review
    const newReview = reviewData;
    const newAuthor = {first_name: this.props.current_user.first_name, last_name: this.props.current_user.last_name };
    const newReviews = this.state.reviews.concat(newReview);
    const newAuthors = this.state.authors.concat(newAuthor);
    const newCategories = this.state.review_categories.concat([{0 : {name: categories_and_id[reviewData.category_id]}}]);
    this.setState({
      reviews: newReviews,
      authors: newAuthors,
      review_categories: newCategories,
      written: false
    });
  }


  //NEGATIVE REVIEWS
  showNegReviews(){
    this.setState({
      title: "Negative Reviews",
      reviews: this.props.reviewsneg,
      authors: this.props.authorsneg,
      written: false
    });
  }

  //ALL REVIEWS
  showAllReviews(){
    this.setState({
      title: "All Reviews",
      reviews: this.props.reviews,
      authors: this.props.authors,
      written: false
    });
  }

  //WRITTEN REVIEWS
  showWrittenReviews(){
    this.setState({
      title: 'Reviews written by ' + this.props.receiver.first_name,
      reviews: this.props.reviewswritten,
      authors: this.props.received,
      written: true
    });
  }

  componentWillMount() {
      console.log("")
  }

  //RENDERED TO THE PAGE
  render() {
    //Javascipt to move the review button after scroll
    $(document).scroll(function() {
      var y = $(document).scrollTop(),
          header = $("#test");
      if(y >= 550)  {
          header.css({position: "fixed", "top" : "0", "left" : "0"});
      } else {
          header.css("position", "relative");
      }
    });

    //CATEGORY_NAME: Determine the category of the review for display
    let category_name = (i) => {
      if (this.state.review_categories[i][0]){
        return this.state.review_categories[i][0].name
      }
      else{
        return this.state.review_categories.name
      }
    }

    //REVIEW_TYPE Display reviews with negative and positive styles
    const review_type = (review, i, receiver_name) => {
      var negative_class = null;
      var negative_icon = () => { return null };
      if (review.positive == false) { //If negative review, red colour and thumbs down
        negative_class = "red";
        negative_icon = () => {
          return <img src="/assets/icons/thumbs_down_icon.png" width="20px" />
        }
      }
      return(
        <span className = "reviewing-as">
          <p className = {negative_class}>
            {negative_icon()}
            Reviewed {receiver_name} as a {category_name(i)}
          </p>
        </span>
      )
    }

    // LIST REVIEWS : Render the reviews (different if written or received)
    let i = -1;
    const listReviews = this.state.reviews.map((review) => {
      i++;
      var review_date = Date(review.created_at).slice(4, 15)
      var author_first_name = this.state.authors[i].first_name
      var author_last_name = this.state.authors[i].last_name
      var receiver_name = this.props.receiver.first_name
      if (this.state.written){
        author_first_name = this.props.receiver.first_name
        author_last_name = this.props.receiver.last_name
        receiver_name = this.state.authors[i].first_name
      }
      return (
        <div className = "review" key={review.id}>
          <span className = "float-right">
            <p> <img src="/assets/icons/calendar_icon.png" width="16px" /> {review_date} </p>
          </span>
          <span className = "float-left">
            <div className = "circle-frame" />
          </span>
            <span className = "reviewer-name">
              <p>{author_first_name} {author_last_name}</p>
          </span>
          {review_type(review, i, receiver_name)}
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
          <div className = "bio-box">
            <p className = "date-joined"> <strong>Joined: {Date(this.props.receiver.created_at).slice(4, 15)}</strong> </p>
            <p> {this.props.profile.bio}</p>
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