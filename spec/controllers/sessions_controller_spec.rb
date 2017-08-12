require 'rails_helper'

RSpec.describe SessionsController, type: :controller do

  describe "login a user", type: :request  do
    it "should redirect to login_path if credentials are invalid" do
      get login_path
    end
  end

end
