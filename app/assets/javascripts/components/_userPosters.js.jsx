class UserPosters extends React.Component {
  render() {
    let posters = [];

    for (var i = 1; i <= Object.keys(this.props.profile_details).length; i++ ){
      if (!(this.props.profile_details[i]["user_first_name"].toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1 &&
        this.props.profile_details[i]["user_last_name"].toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1)) {

        posters.push(
          <UserPoster
          key= {i}
          id= {this.props.profile_details[i]["user_id"]}
          first_name = {this.props.profile_details[i]["user_first_name"]}
          last_name = {this.props.profile_details[i]["user_last_name"]}
          bio = {this.props.profile_details[i]["profile"][0]["bio"]}
          rep_status = {this.props.profile_details[i]["profile"][0]["rep_status"]}
          avatar = {this.props.profile_details[i]["profile"][0]["avatar"]["url"]}
          />
        );
      }
    }
    return (
      <div className = "outer-box">
        {posters}
      </div>
    );
  }
}

