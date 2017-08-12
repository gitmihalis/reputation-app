require 'rails_helper'

# Specs in this file have access to a helper object that includes
# the SessionsHelper. For example:
#
# describe SessionsHelper do
#   describe "string concat" do
#     it "concats two strings with spaces" do
#       expect(helper.concat_strings("this","that")).to eq("this that")
#     end
#   end
# end

RSpec.describe SessionsHelper, type: :helper do
  before :each do
    @user = User.create({
      first_name: 'Nobody',
      last_name: 'McJones',
      email: 'test@sessions.ca',
      admin: false
    })
  end

  describe "#log_in" do
    it "should log in a user" do
      helper.log_in(@user)
      expect(session[:user_id]).to eq(@user.id)
    end
  end


end
