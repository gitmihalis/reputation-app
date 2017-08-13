const OrderForm = React.createClass({
  getInitialState() {
    return {
      burgers: this.props.burgers,
    }
  },

  handleAddBurger() {
    const newBurger = { variety: "Hamburger", add_fried_egg: false }
    const burgers = [ ...this.state.burgers, newBurger ]
    this.setState({ burgers })
  },

  handleRemoveBurger(burgerToRemove) {
    return () => {
      const burgers = this.state.burgers.map((burger) => (
        burger === burgerToRemove ? { ...burger, destroy: true } : burger
      ))

      this.setState({ burgers })
    }
  },

  render() {
    return (
      <FormFor url="/orders/1" method="put" name="order">
        <HashFields name="customer">
          <Label htmlFor="name">Name</Label>
          <TextField name="name" defaultValue={this.props.customer.name} />

          <Label htmlFor="email">Email</Label>
          <EmailField name="mail" defaultValue={this.props.customer.email} />
        </HashFields>

        <ArrayFields name="burgers">
          {this.state.burgers.map((burger, index) => {
            <HashFields name={index}>
              {burger.id && (
                <HiddenField name="id" value={burger.id} />
              )}

              {burger.destroy ? (
                <DestroyField />
              ) : (
                <div>
                  <Label htmlFor="variety">Variety</Label>
                  <Select name="variety" defaultValue={burger.variety}>
                    <option>Hamburger</option>
                    <option>Cheeseburger</option>
                    <option>Bacon Cheeseburger</option>
                  </Select>

                  <Label htmlFor="add_fried_egg">Add a fried egg?</Label>
                  <CheckBox name="add_fried_egg" defaultChecked={burger.add_fried_egg} />

                  <a onClick={this.handleRemoveBurger(burger)}>Remove from order</a>
                </div>
              )}
            </HashFields>
          })}
        </ArrayFields>

        <a onClick={this.handleAddBurger}>Add a burger</a>

        <Label htmlFor="notes">Notes</Label>
        <TextArea name="notes" defaultValue={this.props.notes} />

        <Submit name="commit" value="Update order" />
      </FormFor>
    )
  }
})