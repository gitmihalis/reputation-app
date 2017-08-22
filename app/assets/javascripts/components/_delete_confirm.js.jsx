var DeleteConfirm = React.createClass({
  handleClick() {
    var review_id = this.props.review_id;
    var url = `/reviews/${review_id}`;
    $.ajax({
      url: url,
      type: 'DELETE',
      headers: {
        'X-CSRF-Token': this.props.token.toString()
        },
      success: (response) => {
        console.log('it worked! Deleted', response);
        this.props.reLoad();
      }
    });
  },

  onClick: function(e){
    this.handleClick(); //Send data to the controller/database
    this.props.close(e); //Cose the modal
  },

  render() {
    return (
      <div>
        <button className = "submit-confirm-button" onClick={this.onClick}>Confirm</button>
      </div>
    )
  }
});