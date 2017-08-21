class ReviewModal extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={this.props.close}>&times;</span>
        <div className = "center-form">
          <h1 className = "write-review-title">Write Review</h1>
          < ReviewForm
            addReview = {this.props.addReview}
            reviews = {this.props.reviews}
            close = {this.props.close}
            token = {this.props.token}
            categories = {this.props.categories}
            current_user = {this.props.current_user}
            receiver = {this.props.receiver} />
        </div>
      </div>
    </div>
    )
  }
}

