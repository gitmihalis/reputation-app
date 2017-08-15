
class UserPoster extends React.Component {
  render() {
    const name = `${this.props.user.first_name} ${this.props.user.last_name}` ;
    const avatar = `${this.props.profile.avatar}`;
    const bio = `${this.props.profile.bio}`
    return (
      <div style={{margin: 20 + 'px', float: 'left'}}>
        <div>{avatar}</div>
        <div>{name}</div>
        <div>{bio}</div>
      </div>
      );
  }
}
