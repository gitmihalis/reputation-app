class UserPosters extends React.Component {
  render() {
    let posters = [];
    this.props.users.forEach((user) => {
      if (user.first_name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1 &&
          user.last_name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1) {
        return;
      }
      posters.push(<UserPoster user={user} key={user.id} profile={this.props.profiles[user.id - 1]} />);
    });
    return (
      <div className = "outer-box">
        {posters}
      </div>
    );
  }
}
