require 'rails_helper'

# validates :first_name, presence: { message: "Must be given please." }
# validates :last_name, presence: { message: "Must be given please." }
# validates :email, uniqueness: { case_sensitive: false },
#                   presence: { message: "Sorry, email format seems wrong." },
#                   format: { with: /\A[_a-zA-Z0-9\\-]+(\.[a-zA-Z0-9\\-]+)*@[a-zA-Z0-9\\-]+(\.[a-zA-Z0-9\\-]+)*(\.[a-z]{2,6})\z/ }
# validates :password, confirmation: true,
#                      length: { in: 4..16 },
#                      presence: true
# validates :password_confirmation, presence: { message: "Sorry, must be matched with password." }


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

    # VALID INPUTS
    context 'Valid inputs:' do
      it "Should save when all the required fields are correct" do
        expect(@user.valid?).to eq(true)
      end
    end

    # PASSWORD
    context 'Password:' do
      it "Should match password and password_confirmation" do
        expect(@user.password_digest.present?).to eq(true)
      end

      it "Should have a password longer than 4 characters" do
        @user.password = '123'
        @user.save

        expect(@user.errors.full_messages).to include("Password is too short (minimum is 4 characters)")
      end

      it "Should have a password shorter than 16 characters" do
        @user.password = '12345678901234567'
        @user.save

        expect(@user.errors.full_messages).to include("Password is too long (maximum is 16 characters)")
      end

      it "Should not save when created without a password" do
        @user.password = nil
        @user.save

        expect(@user.errors.full_messages.to_s).to match("Password can't be blank")
      end

      it "Should not save when created without a password_confirmation" do
        @user.password_confirmation = nil
        @user.save

        expect(@user.errors.full_messages.to_s).to match("Sorry, must be matched with password")
      end

      it "Should not save when password doesn't match password_confirmation" do
        @user.password = 'password'
        @user.password_confirmation = 'password1'
        @user.save

        expect(@user.errors.full_messages.to_s).to match("Password confirmation doesn't match Password")
      end
    end

    # NAME
    context 'Name:' do
      it "Should not save when created without a first_name" do
        @user.first_name = nil
        @user.save

        expect(@user.errors.full_messages.to_s).to match("Must be given please.")
      end

      it "Should not save when created without a last_name" do
        @user.last_name = nil
        @user.save

        expect(@user.errors.full_messages.to_s).to match("Must be given please.")
      end
    end

    # EMAIL
    context 'Email:' do
      it "Should not save when created without an email" do
        @user.email = nil
        @user.save

        expect(@user.errors.full_messages.to_s).to match("Sorry, email format seems wrong.")
      end

      it "Should not save when created with a wrong email format" do
        @user.email = 'jSparrow@credible.com <div></div>'
        @user.save

        expect(@user.errors.full_messages.to_s).to match("Email is invalid.")
      end

      it "Should not save when new user input an email that already exists" do
        @user1 = User.create(
          first_name: 'Jackie',
          last_name: 'Sparrow',
          email: 'JsPARROW@credible.com',
          password: 'password',
          password_confirmation: 'password'
        )

        expect(@user1.errors.full_messages.to_s).to match("Email has already been taken")
      end
    end


  end # end of describe 'Validations'

  ##############
  # AUTHENTICATE
  ##############
  describe "user authentication" do
    setup do
      @user = User.create!(
        first_name: 'Jack',
        last_name: 'Sparrow',
        email: 'jSparrow@credible.com',
        password: 'password',
        password_confirmation: 'password'
      )
    end

    it "should return for flase for a user with nil digest" do
      expect(@user.remember_me?('')).to be false
    end
  end
end
