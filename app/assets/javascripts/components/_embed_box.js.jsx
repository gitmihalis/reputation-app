class EmbedBox extends React.Component {
  constructor() {
    super();
    this.state = {
      showEmbedCode: false
    }
    this.onClickFunc = this.onClickFunc.bind(this)
  }

  onClickFunc(e){
    e.preventDefault();
    this.setState({showEmbedCode: !this.state.showEmbedCode})
  }

  render() {
    return (
      <div>
        <a onClick={this.onClickFunc} href='#' className="write-review-button" >Share</a>
        {this.state.showEmbedCode && <EmbedModal close={this.onClickFunc} current_user = {this.props.current_user} / >}
      </div>
    )
  }
}