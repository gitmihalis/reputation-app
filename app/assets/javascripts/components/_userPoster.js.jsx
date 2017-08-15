
class UserPoster extends React.Component {
  render() {
    const name = `${this.props.user.first_name} ${this.props.user.last_name}` ;
    const avatarUrl = `${this.props.profile.avatar.url}`;
    const bio = `${this.props.profile.bio}`
    return (
      <div style={{margin: 20 + 'px', float: 'left'}}>
        <div ><img src={avatarUrl} style={{width: 50 + 'px', height: 50 + 'px'}}/></div>
        <div>{name}</div>
        <div>{bio}</div>
      </div>
      );
  }
}
