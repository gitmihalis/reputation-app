
class UserPoster extends React.Component {
  render() {
    const name = `${this.props.user.first_name} ${this.props.user.last_name}` ;
    const avatarUrl = `${this.props.profile.avatar.url}`;
    const bio = `${this.props.profile.bio}` ;
    const status = `${this.props.profile.rep_status}`
    return (
        <div className = "search-user-card">
        <a href={`/users/${this.props.user.id}`}>
          <div id = {this.props.profile.id} className = "search-bio-box">
            {bio}
          </div>
          <img src={avatarUrl} className = "search-avatar" />
          <div className = "search-name" >
            {name}
          </div>
          <div className = "search-status">
            {status}
          </div>
        </a>
      </div>
    );
  }
}
