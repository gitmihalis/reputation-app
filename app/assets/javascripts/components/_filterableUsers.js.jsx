
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
          users={this.props.users}
          profiles={this.props.profiles}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}

