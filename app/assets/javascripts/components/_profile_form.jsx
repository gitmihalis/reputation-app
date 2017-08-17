class ProfileForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="avatar">
          <img className="resize-image" src={this.props.avatar} />
        </div>
        <div className="bio-box">
        <input type="text"
               defaultValue={this.props.bio} 
               ref={(input) => this.input = input} />
        </div>
      </div>
    )
  }
}