class ReviewModal extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={this.props.close}>&times;</span>
        <p>Some text in the Modal..</p>
        < ReviewForm addReview = {this.props.addReview} reviews = {this.props.reviews} close = {this.props.close} />
      </div>
    </div>
    )
  }
}

