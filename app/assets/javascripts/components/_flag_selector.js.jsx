var FlagSelector = React.createClass({
  handleClick() {
    var i = [999];
    var review_id = this.props.review_id;
    var reason = this.refs.reason.value;
    var user_id = this.props.current_user_id
    var flagObject = {
                        review_id: review_id,
                        reason: reason,
                        user_id: user_id
                      }
    $.ajax({
      url: '/flags',
      type: 'POST',
      headers: {
        'X-CSRF-Token': this.props.token.toString()
        },
      data: {
        flag: flagObject
        },
        success: (response) => {
          console.log('it worked!', response);
          // this.props.addFlag(flagObject);
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
        <select ref = "reason" >
          <option value = "Inappropriate" >Inappropriate</option>
          <option value = "Spam" >Spam</option>
          <option value = "Irrelevant" >Irrelevant</option>
        </select>
        <div>
          <button onClick={this.onClick}>Submit</button>
        </div>
      </div>
    )
  }
});