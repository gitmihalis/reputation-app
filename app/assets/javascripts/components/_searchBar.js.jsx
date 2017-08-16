class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Search Name"
        value={this.props.filterText}
        onChange={this.handleFilterTextInputChange}
      />
    );
  }
}
