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
      <div className = "search-bar-outer-box">
        <input className = "search-bar"
          type="text"
          placeholder="Search Names..."
          value={this.props.filterText}
          onChange={this.handleFilterTextInputChange}
        />
      </div>
    );
  }
}
