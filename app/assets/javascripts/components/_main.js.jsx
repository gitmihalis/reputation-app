class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "All Reviews",
      reviews: this.props.reviews,
      authors: this.props.authors,
      // avatars: this.props.author_avatars,
      written: false,
      review_categories: this.props.review_categories,
      rebuttals: this.props.rebuttals,
      review_profiles: this.props.review_profiles
    };
    this.addReview = this.addReview.bind(this);
    this.addRebuttal = this.addRebuttal.bind(this);
    this.showNegReviews = this.showNegReviews.bind(this);
    this.showAllReviews = this.showAllReviews.bind(this);
    this.showWrittenReviews = this.showWrittenReviews.bind(this);
  }

  //ADD REVIEW
  addReview(reviewData){
    //Put all categories into a key-value pair for reference
    const categories_and_id = {}
    const categories = this.props.categories.map((category) => {
      categories_and_id[category.id] = category.name
    });
    var category_name = categories_and_id[reviewData.category_id]

    //Change the state to include the new review
    const newReview = reviewData;
    const newAuthor = {first_name: this.props.current_user.first_name, last_name: this.props.current_user.last_name };
    const newReviews = this.state.reviews.concat(newReview);
    const newAuthors = this.state.authors.concat(newAuthor);
    const newCategories = this.state.review_categories.concat([ {0 : { name: category_name } } ]);
    this.state.reviews = newReviews;
    this.state.authors = newAuthors;
    this.state.categories = newCategories
    this.setState({
      reviews: newReviews,
      authors: newAuthors,
      review_categories: newCategories,
      written: false
    });
    window.location.reload()
  }

  addRebuttal(rebuttalData){
    this.state.rebuttals[rebuttalData.review_id] = [ { content: rebuttalData.content } ];
    this.setState({
      rebuttals: this.state.rebuttals
    });
  }

  //NEGATIVE REVIEWS
  showNegReviews(){
    this.setState({
      title: "Negative Reviews",
      reviews: this.props.reviewsneg,
      authors: this.props.authorsneg,
      review_categories: this.props.neg_review_categories,
      rebuttals: this.props.rebuttals,
      review_profiles: this.props.neg_review_profiles,
      written: false
    });
  }

  //ALL REVIEWS
  showAllReviews(){
    this.setState({
      title: "All Reviews",
      reviews: this.props.reviews,
      authors: this.props.authors,
      review_categories: this.props.review_categories,
      rebuttals: this.props.rebuttals,
      review_profiles: this.props.review_profiles,
      written: false
    });
  }

  //WRITTEN REVIEWS
  showWrittenReviews(){
    this.setState({
      title: 'Reviews written by ' + this.props.receiver.first_name,
      reviews: this.props.reviewswritten,
      authors: this.props.received,
      review_categories: this.props.written_review_categories,
      rebuttals: this.props.written_rebutted,
      review_profiles: this.props.written_review_profiles,
      written: true
    });
  }

  componentWillMount() {
    console.log(this.state.review_profiles[0][0].avatar)
    //GOOD FOR TESTING <<<<<<<<<<<<<<<<<<<<<<<<<<<<
  }

  //RENDERED TO THE PAGE
  render() {
    //Javascipt to move the review button after scroll
    $(document).scroll(function() {
      var y = $(document).scrollTop(),
          header = $("#scroll-jump");
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
    const review_type = (review, i, receiver_name, receiver_id) => {
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
            Reviewed <a href = {receiver_id} >{receiver_name}</a> as a {category_name(i)}
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
      var author_id = this.state.authors[i].id
      var receiver_id = this.props.receiver.id
      var receiver_name = this.props.receiver.first_name
      var receiver_last_name = this.props.receiver.last_name
      var review_id = review.id
      var rebuttal_button = () => { return null };
      var retract_button = () => { return null };
      var rebuttal_comment = () => { return null };
      var reviewer_image = this.state.review_profiles[i][0].avatar.url;
      var reviewer_status = this.state.review_profiles[i][0].rep_status
      console.log(this.state.review_profiles[i][0].avatar.url)
      if (this.state.written){
        reviewer_image = this.props.profile.avatar.url;
        reviewer_status = this.props.profile.rep_status;
        author_first_name = this.props.receiver.first_name
        author_last_name = this.props.receiver.last_name
        author_id = this.props.receiver.id
        receiver_id = this.state.authors[i].id
        receiver_name = this.state.authors[i].first_name
        receiver_last_name = this.state.authors[i].last_name

        //REBUTTAL IF WRITTEN
        if (this.state.rebuttals[review_id] && this.state.rebuttals[review_id][0]){
          rebuttal_comment = () => {
            return (
              <div className = "rebuttal-comment">
                <div className = "float-left">
                  <div className = "circle-frame" >
                    <img className = "resize-image" src = "IMAGE" />
                  </div>
                </div>
                <span className = "rebuttal-name">
                  <p><a href = {receiver_id} >{receiver_name} {receiver_last_name}</a></p>
                </span>
                <div className = "content">
                {this.state.rebuttals[review_id][0]["content"]}
                </div>
              </div>
            )
          }
        }
      }

      //REBUTTAL BUTTON
      if (!review.positive){
        if (this.props.current_user){
          if (this.props.current_user.id == receiver_id) {
            rebuttal_button = () => {
              return <Rebuttal review_id = {review_id} token = {this.props.token} addRebuttal = {this.addRebuttal} />
            }
          }
          //RETRACT BUTTON
          if (this.props.current_user.id == review.author_id) {
            retract_button = () => {
              return "retract!"
            }
          }
        }
      }

      //REBUTTAL
      if (this.state.rebuttals[review_id] && this.state.rebuttals[review_id][0]){
        rebuttal_comment = () => {
          return (
            <div className = "rebuttal-comment">
              <div className = "float-left">
                <div className = "circle-frame" >
                  <img className = "resize-image" src = "" />
                </div>
              </div>
              <span className = "rebuttal-name">
                <p><a href = {receiver_id} >{receiver_name} {receiver_last_name}</a></p>
              </span>
              <div className = "content">
              {this.state.rebuttals[review_id][0]["content"]}
              </div>
            </div>
          )
        }
        var rebuttal_button = () => { return null };
      }
      return (
        <div className = "review" key={review.id}>
          <div className = "review-header">
            <span className = "float-right">
              <p> <img src="/assets/icons/calendar_icon.png" width="16px" /> {review_date}</p>
            </span>
            <div className = "float-left">
              <div className = "circle-frame" >
                <img className = "resize-image" src = {reviewer_image} />
              </div>
            </div>
            <div className = "reviewer-info">
              <a className = "reviewer-name" href = { author_id } > {author_first_name} {author_last_name} </a>
              <span className = "status">
                {reviewer_status}
              </span>
            </div>
            {review_type(review, i, receiver_name, receiver_id)}
           </div>
          <div className = "content">
            <p>{review.content}</p>
            {rebuttal_button()}
            {retract_button()}
            {rebuttal_comment()}

          </div>
        </div>
      )
    });

    //Review button or login prompt - depending on current_user
    const topButton = () => {
      if (this.props.current_user) {
        return(
          <div id = "scroll-jump">
          <ReviewBox
            addReview = {this.addReview}
            reviews = {this.state.reviews}
            token = {this.props.token}
            categories = {this.props.categories}
            current_user = {this.props.current_user}
            receiver = {this.props.receiver}
            />
          </div>
        )
      } else {
        return (
        <div id = "scroll-jump">
          <a href="/login" className = "write-review-button"> Login </a>
          <span className = "must-be-member" >
            You must be a <a href = "/register">Credible Member</a> to leave a review
          </span>
        </div>
        )
      }
    };

    //RENDER THE LAYOUT
    return (
      <div>
        <div className = "left-side-bar">
          <Profile
            profile = {this.props.profile}
            created_at = {this.props.receiver.created_at}
           />

          <div className = "select-reviews" onClick={event => { this.showAllReviews() } }>
            <p><strong>All Received Reviews </strong></p>
          </div>
          <div className = "select-reviews" onClick={event => { this.showNegReviews() } }>
            <p><strong>Negative Received Reviews </strong></p>
          </div>
          <div className = "select-reviews" onClick={event => { this.showWrittenReviews() } } >
            <p><strong>Written Reviews </strong></p>
          </div>
        </div>
        <div className = "right-box">
        { topButton() }
          <h1 className = "name"> {this.props.receiver.first_name} {this.props.receiver.last_name}</h1>
          <h1 className = "review-type-title" >{this.state.title}</h1>
          { listReviews }
        </div>
      </div>
    );
  }
}