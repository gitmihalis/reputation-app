require 'rails_helper'

RSpec.describe SessionsController, type: :controller do
  before :each do
    @user = User.create!({
      first_name: "Mike",
      last_name: "Smith",
      email: "mike@example.org",
      password: "foobar1",
      password_confirmation: "foobar1"
    })
  end

  describe "GET sessions#destroy" do
    it "should log a user out" do
      get :destroy
      should set_session
      should redirect_to root_url
    end
  end

  describe "POST sessions#create" do
    it "should login to user's profile page" do
      post :create, params: { session: { email: @user.email,
                                         password: @user.password } }
      expect redirect_to user_path(@user)
    end

    it "should not redirect with bad credentials" do
      post :create, params: { session: { email: @user.email,
                                         password: "incorrect password"}}
      should_not redirect_to user_path(@user)
    end
    
  end

end
