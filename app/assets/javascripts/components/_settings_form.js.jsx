var SettingsForm = React.createClass({
  handleClick() {
    var first_name = null;
    if (!this.refs.first_name.value){
      first_name = this.props.first_name;
    } else {
      first_name = this.refs.first_name.value;
    }
    var last_name = null;
    if (!this.refs.last_name.value){
      last_name = this.props.last_name;
    } else {
      last_name = this.refs.last_name.value;
    }
    var email = null;
    if (!this.refs.email.value){
      email = this.props.email;
    } else {
      email = this.refs.email.value;
    }
    var password = null;
    if (!this.refs.password.value){
      password = this.props.password;
    } else {
      password = this.refs.password.value;
    }
    var password_confirmation = null;
    if (!this.refs.password_confirmation.value){
      password = this.props.password_confirmation;
    } else {
      password = this.refs.password_confirmation.value;
    }

    var url = `/users/${this.props.current_user.id}`;

    var userObject = {
                        first_name: first_name,
                        last_name: last_name,
                        email: email,
                        password: "password",
                        password_confirmation: "password"
                      }
    $.ajax({
      url: url,
      type: 'PUT',
      headers: {
        'X-CSRF-Token': this.props.token.toString()
        },
      data: {
        user_update: userObject
        },
        success: (response) => {
          console.log('it worked! Updated user', response);
          this.props.reLoad()
      }
    });
  },

  onClick: function(e){
    this.handleClick(); //Send data to the controller/database
    this.props.close(e); //Cose the modal
  },

  render() {
    var first_name = this.props.first_name;
    var last_name = this.props.last_name;
    var email = this.props.email;
    var password = this.props.password;
    var password_confirmation = this.props.password_confirmation;
    //THE FORM <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  ADD IMAGE UPLOAD
    return (
      <div className = "review-form">
        <div>
          First Name: <input ref='first_name' placeholder= {first_name} />
        </div>
        <div>
          Last Name: <input ref='last_name' placeholder= {last_name} />
        </div>
        <div>
          E-mail: <input ref='email' placeholder= {email} />
        </div>
        <div>
          Password: <input ref='password' placeholder= "********" />
        </div>
        <div>
          Confirm New Password: <input ref='password_confirmation' placeholder= " " />
        </div>
          <button onClick={this.onClick}>Update</button>
        <p>DELETE HERE</p>
      </div>
    )
  }
});

