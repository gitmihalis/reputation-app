
class UserPoster extends React.Component {
  render() {
    const name = `${this.props.user.first_name} ${this.props.user.last_name}` ;
    const avatarUrl = `${this.props.profile.avatar.url}`;
    const bio = `${this.props.profile.bio}`
    return (
      <a href={`/users/${this.props.user.id}`}>
        <div style={{background: '#20b2aa', margin:'20px', float: 'left', border: '1px solid #ccc', width: '300px', height: '360px', padding: '5px', position: 'relative'}}>
          <div>
            <img src={avatarUrl} style={{width: '100%', height: '100%'}}/>
          </div>
          <div style={{background: '#20b2aa', opacity: 0.6, color: '#ffffff', fontSize: '2em', position: 'absolute', top: '20px', width: '100%', textAlign: 'center'}}>{name}</div>
          <div style={{fontSize: '1.2em', textAlign: 'center', marginTop: '5px'}}>{bio}</div>
        </div>
      </a>
      );
  }
}
