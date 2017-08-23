class EmbedModal extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    const username = this.props.current_user.username;
    const embedCode = `<iframe src = "http://0.0.0.0:3000/embed/${username}" width = "470px" height = "280px" frameborder = "0" >`

    return(
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={this.props.close}>&times;</span>
        <div className = "center-form">
          <h1>{this.props.current_user.first_name}, embed your widget now!</h1>
          <textarea unselectable="on" id="my_textarea" readOnly autoFocus className="embed-code" type="text" defaultValue={embedCode} />
        </div>
      </div>
    </div>
    )
  }
}

