var RebuttalComment = React.createClass({
  handleClick() {
    var i = [999];
    var review_id = this.props.review_id;
    var content = this.refs.rebuttal.value;
    var rebuttalObject = {
                        id: i.last,
                        review_id: review_id,
                        content: content
                      }
    $.ajax({
      url: '/rebuttals',
      type: 'POST',
      headers: {
        'X-CSRF-Token': this.props.token.toString()
        },
      data: {
        rebuttal: rebuttalObject
        },
        success: (response) => {
          console.log('it worked!', response);
          // this.props.addReview(rebuttalObject)
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
    return (
      <div>
        <div>
          <textarea rows='5' ref='rebuttal' placeholder='Defend your reputation...' />
        </div>
        <div>
          <button onClick={this.onClick}>Submit</button>
        </div>
      </div>
    )
  }
});