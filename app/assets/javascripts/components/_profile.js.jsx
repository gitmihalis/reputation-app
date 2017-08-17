class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: this.props.profile.avatar.url,
      bio: this.props.profile.bio,
      created_at: this.props.created_at
    };
  }

  componentWillMount() {
    console.log(this.state.avatar)
  }

  render() {

    return(
      <div>
        <div className = "avatar">
          <img className = "resize-image" src = {this.state.avatar} />
        </div>
        <div className = "bio-box">
          <p className = "date-joined"> <strong>Joined: {Date(this.state.created_at).slice(4, 15)}</strong> </p>
          <p> {this.state.bio}</p>
        </div>
      </div>
    );
  }
}
