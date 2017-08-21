class Delete extends React.Component {
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
          <div className = "delete-button">
            <img src = "/assets/icons/trash.png" width = "100%" />
          </div>
        </a>
        {this.state.showReply && < DeleteConfirm close={this.onClickFunc} review_id = {this.props.review_id} token = {this.props.token} reLoad = {this.props.reLoad} current_user_id = {this.props.current_user_id} />}
      </div>
    )
  }
}