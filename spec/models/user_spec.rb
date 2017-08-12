require 'rails_helper'

# create_table "users", force: :cascade do |t|
#   t.string   "first_name"
#   t.string   "last_name"
#   t.string   "email"
#   t.string   "password_digest"
#   t.datetime "created_at",                      null: false
#   t.datetime "updated_at",                      null: false
#   t.boolean  "admin",           default: false
# end


RSpec.describe User, type: :model do

  describe 'Validations:' do
    before :each do
      @user = User.create(
        first_name: 'Jack',
        last_name: 'Sparrow',
        email: 'jSparrow@credible.com',
        password: 'password',
        password_confirmation: 'password'
      )
    end

    it "Should not save when created without a password" do
      @user.password = nil
      @user.save

      expect(@user.errors.full_messages.to_s).to match("Password can't be blank")
    end

  end # end of describe 'Validations'

end
