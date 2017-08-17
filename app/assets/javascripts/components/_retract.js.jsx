class Retract extends React.Component {
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
        <a onClick={this.onClickFunc} href='#' >Retract</a>
        {this.state.showReply && < RetractConfirm close={this.onClickFunc} review_id = {this.props.review_id} token = {this.props.token} />}
      </div>
    )
  }
}