class Flag extends React.Component {
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
          <div className = "flag-button">
            <img src="/assets/icons/scale_icon.png" width="20px" /> Flag
          </div>
        </a>
        {this.state.showReply && < FlagSelector close={this.onClickFunc} review_id = {this.props.review_id} token = {this.props.token} addFlag = {this.props.addFlag} current_user_id = {this.props.current_user_id} />}
      </div>
    )
  }
}