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
          // this.props.addRebuttal(rebuttalObject);
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
          <p>Are you sure?</p>
        </div>
        <div>
          <button onClick={this.onClick}>Confirm Retract</button>
        </div>
      </div>
    )
  }
});