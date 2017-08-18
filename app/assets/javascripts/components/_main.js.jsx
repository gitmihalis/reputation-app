class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCurrentUser: true,
      title: "All Reviews",
      reviews: this.props.reviews,
      authors: this.props.authors,
      // avatars: this.props.author_avatars,
      written: false,
      review_categories: this.props.review_categories,
      rebuttals: this.props.rebuttals,
      review_profiles: this.props.review_profiles,
      filter: null,
      title_class: "green-title",
    };
    this.addReview = this.addReview.bind(this);
    this.addRebuttal = this.addRebuttal.bind(this);
    this.showNegReviews = this.showNegReviews.bind(this);
    this.showAllReviews = this.showAllReviews.bind(this);
    this.showWrittenReviews = this.showWrittenReviews.bind(this);
    this.reLoad = this.reLoad.bind(this);
  }

  //ADD REVIEW
  addReview(reviewData){
    // PLEASE DO NOT DELETE YET
    //Put all categories into a key-value pair for reference
    // const categories_and_id = {}
    // const categories = this.props.categories.map((category) => {
    //   categories_and_id[category.id] = category.name
    // });
    // var category_name = categories_and_id[reviewData.category_id]

    // //Change the state to include the new review
    // const newReview = reviewData;
    // const newAuthor = {first_name: this.props.current_user.first_name, last_name: this.props.current_user.last_name };
    // const newReviews = this.state.reviews.concat(newReview);
    // const newAuthors = this.state.authors.concat(newAuthor);
    // const newCategories = this.state.review_categories.concat([ {0 : { name: category_name } } ]);
    // this.state.reviews = newReviews;
    // this.state.authors = newAuthors;
    // this.state.categories = newCategories
    // this.setState({
    //   reviews: newReviews,
    //   authors: newAuthors,
    //   review_categories: newCategories,
    //   written: false
    // });
    window.location.reload()
  }

  addRebuttal(rebuttalData){
    this.state.rebuttals[rebuttalData.review_id] = [ { content: rebuttalData.content } ];
    this.setState({
      rebuttals: this.state.rebuttals
    });
  }

  reLoad(){
    window.location.reload()
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
      written: false,
      title_class: "red-title"
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
      written: false,
      title_class: "green-title"
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
      written: true,
      title_class: "green-title"
    });
  }

  componentWillMount() {
    //console.log(this.state.review_profiles[0][0].avatar)
  }

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> RENDER <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  render() {
    //TOP BUTTON - depending on current_user
    const topButton = () => {
      // Display review button if logged in.
      if (this.props.current_user) {
        //Do not display review button if it is the current user's own profile
        if (this.props.current_user.id !== this.props.receiver.id) {
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
        }
      } else {
        return (
        <div id = "scroll-jump">
          <a href="/login" className = "write-review-button"> Login to Review </a>
          <span className = "must-be-member" >
            You must be a <a href = "/register">Credible Member</a> to leave a review
          </span>
        </div>
        )
      }
    };
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

    //CATEGORY_NAME: Determine the category name of the specific review for display
    let category_name = (review_i) => {
      if (this.state.review_categories[review_i][0]){ //If there's more than 1 review
        return this.state.review_categories[review_i][0].name
      }
      else { //If there's only 1 review
        return this.state.review_categories.name
      }
    }

    //REVIEW_TYPE Display reviews with negative and positive styles
    const review_type = (review, i, receiver_name, receiver_id) => {
      var negative_class = null;
      var negative_icon = () => { return null };
      if (!review.positive) { //If negative review, red colour and thumbs down
        negative_class = "red";
        negative_icon = () => {
          return <img src="/assets/icons/thumbs_down_icon.png" width="20px" />
        }
        if (review.retracted){ //If negative review and retracted
          negative_class = "grey";
          negative_icon = () => {
            return <img src="/assets/icons/thumbs_down_grey_icon.png" width="20px" />
          }
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

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  LIST REVIEWS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    let i = -1;
    const listReviews = this.state.reviews.map((review) => {
      i++;
      var review_id = review.id
      var review_date = Date(review.created_at).slice(4, 15)
      var reviewer_image = this.state.review_profiles[i][0].avatar.url;
      var reviewer_status = this.state.review_profiles[i][0].rep_status

      var author_first_name = this.state.authors[i].first_name
      var author_last_name = this.state.authors[i].last_name
      var author_id = this.state.authors[i].id

      var receiver_id = this.props.receiver.id
      var receiver_name = this.props.receiver.first_name
      var receiver_last_name = this.props.receiver.last_name

      var rebuttal_image = this.props.profile.avatar.url
      var rebuttal_button = () => { return null };
      var rebuttal_comment = () => { return null };
      var retract_button = () => { return null };

      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  Written Reviews <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
      if (this.state.written){ //Variables are different when the reviews are written
        reviewer_image = this.props.profile.avatar.url;
        reviewer_status = this.props.profile.rep_status;

        author_first_name = this.props.receiver.first_name
        author_last_name = this.props.receiver.last_name
        author_id = this.props.receiver.id

        receiver_id = this.state.authors[i].id
        receiver_name = this.state.authors[i].first_name
        receiver_last_name = this.state.authors[i].last_name

        rebuttal_image = this.state.review_profiles[i][0].avatar.url;
      }

      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  Negative Reviews <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
      if (!review.positive){
        //Rebuttal Button
        if (review.retracted == true){
          retract_button = () => {
            return (
              <div className='retracted' >
                <img src="/assets/icons/check_icon_grey.png" width="20px" /> Retracted
              </div>
            )
          }
        }
        if (this.props.current_user){
          if (this.props.current_user.id == receiver_id && review.retracted == false) {
            rebuttal_button = () => {
              return <Rebuttal review_id = {review_id} token = {this.props.token} addRebuttal = {this.addRebuttal} />
            }
          }
          //Retract Button
          if (this.props.current_user.id == review.author_id) {
            if (review.retracted == false){
              retract_button = () => {
                return <Retract review_id = {review_id} token = {this.props.token} reLoad = {this.reLoad} />
              }
            }
          }
        }
      }
      //Rebuttal comments
      if (this.state.rebuttals[review_id] && this.state.rebuttals[review_id][0]){
        rebuttal_comment = () => {
          return (
            <div className = "rebuttal-comment">
              <div className = "float-left">
                <div className = "circle-frame" >
                  <img className = "resize-image" src = {rebuttal_image} />
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


      //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> THE REVIEW RENDERING <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

      // FOR LATER REFACTORING THE REPETITION BELOW
      // const review_html = (review_id, review_date, reviewer_image, receiver_name, receiver_id) => {
      //   return(
      //     HTML
      //   )
      // };

      if (this.state.filter < 1){ //FILTERING - no selected filter
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
                }
        if (review.category_id == this.state.filter){ //FILERTING - selected one of the filters
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

      }
    });


    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>THE LAYOUT <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    const listCategories = this.props.categories.map((category) => {
      return (
        <option key={category.id} value={category.id}>{category.name}</option>
      )
    });
    return (
      <div>

        <div className = "left-side-bar">

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

          <span> Filter Reviews: </span>
          <span>
            <select onChange={e => this.setState({ filter: e.target.value || null }) }>
              <option value = {0} >View All</option>
              {listCategories}
            </select>
          </span>
          <h1 className = {this.state.title_class} >{this.state.title}</h1>
          { listReviews }
        </div>
      </div>
    );
  }
}