var NewReview = React.createClass({
  handleClick() {
    var id = [1222333];
    var author_id = this.refs.author_id_test.value;
    var review = this.refs.review_test.value;
    var reviewObject = {
                        id: i.last,
                        author_id: author_id,
                        receiver_id: 1,
                        content: review,
                        category_id: 1
                      }
    $.ajax({
      url: '/reviews',
      type: 'POST',
      data: {
        data: reviewObject
        },
        success: (response) => {
          console.log('it worked!', response);
          console.log(this.props.showAllReviews)
          this.props.addReview(reviewObject)
          i.push(i.last + 1)
      }
    });
  },

  render() {
    return (
      <div>
        <input ref='author_id_test' placeholder='Enter author id' />
        <input ref='review_test' placeholder='Enter a review' />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
});
