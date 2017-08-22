
class FilterableUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };

    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
  }

  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextInput={this.handleFilterTextInput}
        />
        <UserPosters
          profile_details={this.props.profile_details}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}

