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
      flags: this.props.flags
    };
    this.addFlag = this.addFlag.bind(this);
    this.addReview = this.addReview.bind(this);
    this.addRebuttal = this.addRebuttal.bind(this);
    this.showNegReviews = this.showNegReviews.bind(this);
    this.showAllReviews = this.showAllReviews.bind(this);
    this.showWrittenReviews = this.showWrittenReviews.bind(this);
    this.reLoad = this.reLoad.bind(this);
  }


  //ADD REVIEW
  addReview(reviewData){
    window.location.reload()
  }

  addRebuttal(rebuttalData){
    this.state.rebuttals[rebuttalData.review_id] = [ { content: rebuttalData.content } ];
    this.setState({
      rebuttals: this.state.rebuttals
    });
  }

  addFlag(flagData){
    this.state.flags[flagData.review_id] = [ { reason: flagData.reason, user_id: flagData.user_id, review_id: flagData.review_id } ];
    this.setState({
      flags: this.state.flags
    });
    console.log("flag")
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
      title_class: "red-title",
      flags: this.props.neg_flags
    });
    $("#all").removeClass("clicked");
    $("#written").removeClass("clicked");
    $("#negative").addClass("clicked").addClass("red");
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
      title_class: "green-title",
      flags: this.props.flags
    });
    $("#all").addClass("clicked");
    $("#written").removeClass("clicked");
    $("#negative").removeClass("clicked").removeClass("red");
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
      title_class: "green-title",
      flags: this.props.written_flagged
    });
    $("#all").removeClass("clicked");
    $("#written").addClass("clicked");
    $("#negative").removeClass("clicked").removeClass("red");
  }

  componentWillMount() {
    //console.log(this.state.rebuttals[7])
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
            <div>
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
          <a href="/login">
            <div className = "write-review-button">
              Login to Review
            </div>
          </a>
        </div>
        )
      }
    };

  //SHARE BUTTON - depending on current_user
  const settings = () =>{
    // Display share button if logged in
    if (this.props.current_user) {
      // Display share button if logged in AND is the current user's own profile
      if (this.props.current_user.id == this.props.receiver.id) {
        return(
          <Settings
            reLoad = {this.reLoad}
            first_name = {this.props.current_user.first_name}
            last_name = {this.props.current_user.last_name}
            email = {this.props.current_user.email}
            token = {this.props.token}
            current_user = {this.props.current_user}
            password = {this.props.receiver.password}
            password_confirmation = {this.props.receiver.password_confirmation}
          />
        )
      }
    }
  }

  const embedButton = () => {
    // Display share button if logged in
    if (this.props.current_user) {
      // Display share button if logged in AND is the current user's own profile
      if (this.props.current_user.id == this.props.receiver.id) {
        return(
          <div>
          <EmbedBox current_user = {this.props.current_user}/>
          </div>
        )
      }
    } else {
      return
    }
  };

    //Javascipt to move the review button after scroll

    $(document).scroll(function() {
      var y = $(document).scrollTop(),
          header = $("#fade-button");
      if(y >= 320)  {
          header.css({
            "position" : "fixed",
            "top" : "125px",
            "right" : "48px",
            "-webkit-animation-duration" : "0.5s",
            "animation-duration" : "0.5s",
            "-webkit-animation-fill-mode" : "both",
            "animation-fill-mode": "both"
          });
          header.removeClass("hidden");
          header.addClass("fadeIn");
      } else {
          header.css({
            "position" : "fixed",
            "top" : "125px",
            "right" : "48px"
          });
          header.removeClass("fadeIn");
          header.addClass("hidden");

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
    const review_type = (review, i, receiver_name, receiver_id, receiver_username) => {
      var negative_class = null;
      var thumb_icon = () => {
        return <img src="/assets/icons/thumbs_up_icon.png" width="20px" />
      };

      if (!review.positive) { //If negative review, red colour and thumbs down
        negative_class = "red";
        thumb_icon = () => {
          return <img src="/assets/icons/thumbs_down_icon.png" width="20px" />
        }
        if (review.retracted){ //If negative review and retracted
          negative_class = "grey";
          thumb_icon = () => {
            return <img src="/assets/icons/thumbs_down_grey_icon.png" width="20px" />
          }
        }
      }
      return(
        <span className = "reviewing-as">
          <p className = {negative_class}>
            {thumb_icon()}
            Reviewed <a href = {receiver_username} >{receiver_name}</a> as a {category_name(i)}
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
      var author_username = this.state.authors[i].username

      var receiver_id = this.props.receiver.id
      var receiver_username = this.props.receiver.username
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
        author_username = this.props.receiver.username

        receiver_id = this.state.authors[i].id
        receiver_username = this.state.receiver.username
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
                <p><a href = {receiver_username} >{receiver_name} {receiver_last_name}</a></p>
              </span>
              <div className = "content">
              {this.state.rebuttals[review_id][0]["content"]}
              </div>
            </div>
          )
        }
        var rebuttal_button = () => { return null };
      }

      // Flags
      var flag = () => {
        if (this.props.current_user){
          if (this.state.flags[review_id][0]){
            // console.log(this.state.flags[review_id].length)
            for (var i = 0; i < this.state.flags[review_id].length; i++){
              if (this.state.flags[review_id][i]["user_id"] == this.props.current_user.id){
                return(
                  <img src = "/assets/icons/flag_red_icon.png" width = "20px" />
                )
              } else {
                return (
                  <Flag
                  review_id = {review_id}
                  token = {this.props.token}
                  addFlag = {this.addFlag}
                  current_user_id = {this.props.current_user.id}
                  />
                )
              }
            }
          } else {
            return (
              <Flag
              review_id = {review_id}
              token = {this.props.token}
              addFlag = {this.addFlag}
              current_user_id = {this.props.current_user.id}
              />
            )
          }
        }
      }

      // Delete
      var delete_button = () => {
        if (this.props.current_user){
          if (author_id == this.props.current_user.id){
            return(
              <Delete
              review_id = {review_id}
              token = {this.props.token}
              reLoad = {this.reLoad}
              current_user_id = {this.props.current_user.id}
              />
            )
          }
        }
      }


      //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> THE REVIEW RENDERING <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

      if (this.state.filter < 1){ //FILTERING - no selected filter
          return (
            <div className = "review" key={review.id}>

              <div className = "review-header">
                <div className = "float-right">
                  {delete_button()}
                </div>
                <div className = "float-right review-date">
                  <p> <img src="/assets/icons/calendar_icon.png" width="16px" /> {review_date}</p>
                </div>
                <div className = "float-left">
                  <div className = "circle-frame" >
                    <img className = "resize-image" src = {reviewer_image} />
                  </div>
                </div>
                <div className = "reviewer-info">
                  <a className = "reviewer-name" href = { author_username } > {author_first_name} {author_last_name} </a>
                  <span className = "status">
                    {reviewer_status}
                  </span>
                </div>
                {review_type(review, i, receiver_name, receiver_id, receiver_username)}
               </div>
              <div className = "content">
                {review.reference_url}
                <p>{review.content}</p>
                {rebuttal_button()}
                {retract_button()}
                {rebuttal_comment()}
                {flag()}
              </div>
            </div>
          )
                }
        if (review.category_id == this.state.filter){ //FILERTING - selected one of the filters
          return (
            <div className = "review" key={review.id}>

              <div className = "review-header">
                <div className = "float-right">
                  {delete_button()}
                </div>
                <span className = "float-right">
                  <p> <img src="/assets/icons/calendar_icon.png" width="16px" /> {review_date}</p>
                </span>
                <div className = "float-left">
                  <div className = "circle-frame" >
                    <img className = "resize-image" src = {reviewer_image} />
                  </div>
                </div>
                <div className = "reviewer-info">
                  <a className = "reviewer-name" href = { author_username } > {author_first_name} {author_last_name} </a>
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
                {flag()}
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
          <div id = "fade-button" className = "hidden button-left">
            { topButton() }
          </div>
        <span className = "right-box">
          <div className = "fixed-nav" id = "review-nav" >
              <div id = "all"
                className = "select-reviews clicked"
                onClick={event => {
                    $('html, body').animate({ scrollTop: 0 }, 'medium');
                    this.showAllReviews();
                  }
                }>
                <p><strong>All Reviews </strong></p>
              </div>
              <div id = "negative"
                className = "select-reviews"
                onClick={event => {
                    $('html, body').animate({ scrollTop: 0 }, 'medium');
                    this.showNegReviews();
                  }
                }>
                <p><strong>Negative Reviews </strong></p>
              </div>
              <div id = "written"
                className = "select-reviews"
                onClick={event => {
                    $('html, body').animate({ scrollTop: 0 }, 'medium');
                    this.showWrittenReviews();
                  }
                }>
                <p><strong>Written Reviews </strong></p>
              </div>
            <div className = "filter">
              <select onChange={e => this.setState({ filter: e.target.value || null }) }>
                <option value = {0} >Filter...</option>
                {listCategories}
                <option value = {0} >View All</option>
              </select>
            </div>
          </div>

        <div className = "widget-profile">
          <Widget totOfReviews={this.props.totOfReviews} posReviews={this.props.posReviews} credScore={this.props.credScore} />
            { embedButton() }
        </div>
        <div className = "settings-button">
          { settings() }
        </div>

        </span>
        <div className = "right-box">
          <div className = "content">
            <div className ="button-top">
              { topButton() }
            </div>
            <h1 className = "name"> {this.props.receiver.first_name} {this.props.receiver.last_name}</h1>
            <h2 className = {this.state.title_class} >{this.state.title}</h2>
            { listReviews }
          </div>
        </div>
      </div>
    );
  }
}