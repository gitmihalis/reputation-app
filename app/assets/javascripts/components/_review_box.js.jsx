class ReviewBox extends React.Component {
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
        <a onClick={this.onClickFunc} href='#' className="write-review-button" >Review {this.props.receiver.first_name}</a>
        {this.state.showReply && < ReviewModal close={this.onClickFunc} addReview = {this.props.addReview} reviews = {this.props.reviews} token = {this.props.token} categories = {this.props.categories} current_user = {this.props.current_user} receiver = {this.props.receiver}/ >}
      </div>
    )
  }
}