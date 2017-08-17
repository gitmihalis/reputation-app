class ProfileForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('submit handled!')
    // make the ajax request here and update the database
    $.ajax({
      url: `/profiles/${this.props.id}`,
      type: 'PATCH',
      headers: {
        'X-CSRF-Token': this.props.formToken.toString()
      },
      data: {
        profile: { avatar: event.target.value }
        },
        success: (response) => {
          console.log('it worked!', response);
      }
    });
  }

  render() {
    return (
      <form action={`/profiles/${this.props.id}`} 
            method="POST"
            enctype="multipart/form-data">
        <input type="submit" value="Upload"  />
        <input type="hidden" name="_method" value="PUT" />
        <input type="file" name="profile[avatar]" />    
      </form>
    )
  }
}