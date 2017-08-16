class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: this.props.profile.avatar,
      bio: this.props.profile.bio,
      created_at: this.props.created_at
    };
  }

  render() {

    return(
      <div>
        <div className = "avatar">
          <img className = "resize-image" src = "https://content-static.upwork.com/uploads/2014/10/02123010/profile-photo_friendly.jpg" />
        </div>
        <div className = "bio-box">
          <p className = "date-joined"> <strong>Joined: {Date(this.state.created_at).slice(4, 15)}</strong> </p>
          <p> {this.state.bio}</p>
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
    );
  }
}
