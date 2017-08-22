class Settings extends React.Component {
  constructor() {
    super();
    this.state = {
      showReply: false
    }
    this.onClickFunc = this.onClickFunc.bind(this)
  }
  onClickFunc(e){
    e.preventDefault();
    this.setState({showReply: !this.state.showReply})
  }
  render() {
    return (
      <div>
        <a onClick={this.onClickFunc} href='#' ><div className = "settings-icon"> <img src="/assets/icons/gear_icon.png" width = "35px"/> </div></a>
        {this.state.showReply && < SettingsModal close={this.onClickFunc} reLoad = {this.props.reLoad} first_name = {this.props.first_name} last_name = {this.props.last_name} email = {this.props.email} token = {this.props.token} current_user = {this.props.current_user} password = {this.props.password} password_confirmation = {this.props.password_confirmation} / >}
      </div>
    )
  }
}