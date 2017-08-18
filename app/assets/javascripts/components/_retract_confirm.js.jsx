var RetractConfirm = React.createClass({
  handleClick() {
    var review_id = this.props.review_id;
    var url = `/reviews/${review_id}`;
    var retractObject = {
                        review_id: review_id,
                        retracted: true
                      }
    $.ajax({
      url: '/reviews/' + review_id,
      type: 'PUT',
      headers: {
        'X-CSRF-Token': this.props.token.toString()
        },
      data: {
        retract: retractObject
        },
        success: (response) => {
          console.log('it worked!', response);
          this.props.reLoad();
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
      <div className = 'retract-box'>
          <span className='verify-retract'>Are you sure? </span>
        <span>
          <button className='confirm-retract-button' onClick={this.onClick}>Yes, Confirm Retract</button>
        </span>
      </div>
    )
  }
});