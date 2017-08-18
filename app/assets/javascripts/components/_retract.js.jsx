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
        <a onClick={this.onClickFunc} href='#' >
          <div className='retract-button' >
            <img src="/assets/icons/check_icon_green.png" width="20px" /> Retract Review
          </div>
        </a>
        {this.state.showReply && < RetractConfirm close={this.onClickFunc} review_id = {this.props.review_id} token = {this.props.token} reLoad = {this.props.reLoad} />}
      </div>
    )
  }
}