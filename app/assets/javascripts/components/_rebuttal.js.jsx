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
        <a onClick={this.onClickFunc} href='#' className = "rebuttal-button">Rebuttal</a>
        {this.state.showReply && < RebuttalComment close={this.onClickFunc} review_id = {this.props.review_id} token = {this.props.token} addRebuttal = {this.props.addRebuttal} />}
      </div>
    )
  }
}