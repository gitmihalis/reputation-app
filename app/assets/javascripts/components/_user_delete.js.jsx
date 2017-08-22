class UserDelete extends React.Component {
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
        <a onClick={this.onClickFunc} href='#' >
          <div className = "delete-users-button">
            <img src = "/assets/icons/trash.png" width = "20px" /> Delete Profile
          </div>
        </a>
        {this.state.showReply && < UserDeleteConfirm close={this.onClickFunc} user_id = {this.props.user_id} token = {this.props.token} reLoad = {this.props.reLoad} />}
      </div>
    )
  }
}