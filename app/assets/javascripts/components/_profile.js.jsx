function Profile(props) {
  return(
    <div>
      <div className="avatar">
        <img className="resize-image" src={props.avatar} />
      </div>
      <div className="bio-box">
        <p className="date-joined"> <strong>Joined: </strong> </p>
        <p>{props.bio}</p>
      </div>
    </div>
  );
}
