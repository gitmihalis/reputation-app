class SettingsModal extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={this.props.close}>&times;</span>
        <div className = "center-form">
          <h1 className = "write-review-title">Edit Your Profile</h1>
          < SettingsForm
            reLoad = {this.props.reLoad}
            first_name = {this.props.first_name}
            last_name = {this.props.last_name}
            email = {this.props.email}
            close = {this.props.close}
            token = {this.props.token}
            current_user = {this.props.current_user}
            password = {this.props.password}
            password_confirmation = {this.props.password_confirmation} />
        </div>
      </div>
    </div>
    )
  }
}
