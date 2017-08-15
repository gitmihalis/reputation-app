var ReviewForm = React.createClass({
  handleClick() {
    var i = [999];
    var author_id = 2;
    var receiver_id = 1;
    var content = this.refs.review.value;
    var category_id = this.refs.category.value;
    var reference_url = null;
    if (this.refs.ref_url.value) { reference_url = this.refs.ref_url.value; }
    var positive = true;
    if (this.refs.positive.checked) { positive = false; }
    // var image_url = null;
    // if this.refs.image_url.value { image_url = this.refs.ref_url.value; }
    var reviewObject = {
                        id: i.last,
                        author_id: author_id,
                        receiver_id: receiver_id,
                        content: content,
                        reference_url: reference_url,
                        positive: positive,
                        // image_url: image_url,
                        category_id: parseInt(category_id, 10)
                      }
    $.ajax({
      url: '/reviews',
      type: 'POST',
      data: {
        review: reviewObject
        },
        success: (response) => {
          console.log('it worked!', response);
          console.log(this.props.showAllReviews)
          this.props.addReview(reviewObject)
          i.push(i.last + 1)
      }
    });
    this.props.close
  },

  onClick: function(e){
    this.handleClick();
    this.props.close(e);
  },

  render() {
    return (
      <div>
      <span>Reviewing NAME as a... </span>
        <select ref='category'>
          <option value="1">Buyer</option>
          <option value="2">Seller</option>
          <option value="3">Driver</option>
          <option value="4">Labourer</option>
          <option value="5">Service</option>
          <option value="6">Other</option>
        </select>
        <div>
          <textarea rows='10' cols='60' ref='review' placeholder='Enter a review' />
        </div>
        <p>IMAGE UPLOAD HERE</p>
        <span> Reference URL (optional): </span> <input ref='ref_url' placeholder='http://...' />
        <div>
          <input type='checkbox' ref='positive'/> <span>This is a negative review</span>
        </div>
        <div>
          <button onClick={this.onClick}>Submit</button>
        </div>
      </div>
    )
  }
});
