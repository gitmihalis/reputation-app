
function Profile(props) {

  return(
    <div>
      <div className="avatar">
        <img className="resize-image" src={props.avatar} />
      </div>
      <div className="bio-box">
        <p className="date-joined"> <strong>Joined: {Date(props.created).slice(4,15)} </strong> </p>
        <ProfileForm formToken={props.formToken} id={props.profileId}/>
      </div>
    </div>
  );
}
