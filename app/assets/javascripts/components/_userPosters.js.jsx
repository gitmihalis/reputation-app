class UserPosters extends React.Component {
  render() {
    let posters = [];

    const profile_details = (Object.entries(this.props.profile_details))

    for (var i = 0; i < profile_details.length; i++ ){
      if (!(profile_details[i][1]["user_first_name"].toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1 &&
        profile_details[i][1]["user_last_name"].toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1)) {

        posters.push(
          <UserPoster
          key= {i}
          id= {profile_details[i][0]}
          first_name = {profile_details[i][1]["user_first_name"]}
          last_name = {profile_details[i][1]["user_last_name"]}
          bio = {profile_details[i][1]["profile"][0]["bio"]}
          rep_status = {profile_details[i][1]["profile"][0]["rep_status"]}
          avatar = {profile_details[i][1]["profile"][0]["avatar"]["url"]}
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

