class EmbedModal extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    const username = this.props.current_user.username;
    const embedCode = `<script type="text/javascript" id="load_widget" src="http://0.0.0.0:3000/embed.js" data="${username}"></script>`

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

