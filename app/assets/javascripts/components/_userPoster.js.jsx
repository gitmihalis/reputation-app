
class UserPoster extends React.Component {
  render() {
    const name = `${this.props.first_name} ${this.props.last_name}` ;
    const avatarUrl = `${this.props.avatar}`;
    const bio = `${this.props.bio}` ;
    const status = `${this.props.rep_status}`
    return (
        <div className = "search-user-card">
        <a href={`/users/${this.props.username}`}>
          <div id = {this.props.id} className = "search-bio-box">
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

