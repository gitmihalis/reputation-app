var ReviewForm = React.createClass({
  handleClick() {
    var i = [999];
    var author_id = this.props.current_user.id;
    var receiver_id = this.props.receiver.id;
    var content = this.refs.review.value;
    var category_id = this.refs.category_id.value;
    var reference_url = null;
    if (this.refs.reference_url.value) { reference_url = this.refs.reference_url.value; }
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
      headers: {
        'X-CSRF-Token': this.props.token.toString()
        },
      data: {
        review: reviewObject
        },
        success: (response) => {
          console.log('it worked!', response);
          this.props.addReview(reviewObject)
          i.push(i.last + 1)
      }
    });
  },

  onClick: function(e){
    this.handleClick(); //Send data to the controller/database
    this.props.close(e); //Cose the modal
  },

  render() {
    //List the categories in the FORM select dropdown
    var current_user = this.props.current_user;
    var receiver = this.props.receiver;
    const listCategories = this.props.categories.map((category) => {
    return (
      <option key={category.id} value={category.id}>{category.name}</option>
      )
    });
    return (
      //THE FORM <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  ADD IMAGE UPLOAD
        <div className = "review-form">
          <span>Reviewing {receiver.first_name} as a... </span>
            <select ref='category_id'>
              {listCategories}
            </select>
          <div>
            <textarea rows='7' ref='review' placeholder='Enter a review' />
          </div>
          <span> Reference URL (optional): </span> <input ref='reference_url' placeholder='http://...' />
          <div>
            <input type='checkbox' ref='positive'/> <span className = "negative-warning">This is a negative review</span>
          </div>
            <button onClick={this.onClick}>Submit</button>
      </div>
    )
  }
});
