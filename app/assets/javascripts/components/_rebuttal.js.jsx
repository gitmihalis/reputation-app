class Rebuttal extends React.Component {
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
          <div className = "rebuttal-button">
            <img src="/assets/icons/scale_icon.png" width="20px" /> Rebuttal
          </div>
        </a>
        {this.state.showReply && < RebuttalComment close={this.onClickFunc} review_id = {this.props.review_id} token = {this.props.token} addRebuttal = {this.props.addRebuttal} />}
      </div>
    )
  }
}