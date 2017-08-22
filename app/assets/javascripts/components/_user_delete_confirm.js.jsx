var UserDeleteConfirm = React.createClass({
  handleClick() {
    var user_id = this.props.user_id;
    var url = `/users/${user_id}`;
    $.ajax({
      url: url,
      type: 'DELETE',
      headers: {
        'X-CSRF-Token': this.props.token.toString()
        },
      success: (response) => {
        console.log('it worked! Deleted', response);
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
        <p> Are you sure? You will lose your online reputation. This action is irreversible. </p>
        <button className = "submit-confirm-button" onClick={this.onClick}>Confirm Delete Profile</button>
      </div>
    )
  }
});