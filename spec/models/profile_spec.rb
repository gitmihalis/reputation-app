require 'rails_helper'

# validates :user_id, presence: true
# validates :bio, presence: true
# validates :avatar, format: { with: /\A[\w-]+\.(jpe?g|png|gif)\z/ }


RSpec.describe Profile, type: :model do

  describe 'Validations:' do
    before :each do
      @user = User.create!(
        id: 1,
        first_name: "Eduardo",
        last_name: "Matsushita",
        username: "eduardoM",
        email: "eduardo@credible.ca",
        password: 'password',
        password_confirmation: 'password' ,
        admin: true
      )

      @profile = @user.create_profile({
        bio: "Whatevah!",
        avatar: "eduardo.png",
        rep_status: "credible"
      })
    end

    # VALID INPUTS
    context 'Valid inputs:' do
      it "Should save when all the required fields are correct" do
        expect(@profile.valid?).to eq(true)
      end
    end

    # USER ID
    context 'User id:' do
      it "Should not save when created without a user_id" do
        @profile.user_id = nil
        @profile.save

        expect(@profile.errors.full_messages.to_s).to match("User can't be blank")
      end
    end

    # BIO
    context 'Bio:' do
      it "Should not save when created without a bio" do
        @profile.bio = nil
        @profile.save

        expect(@profile.errors.full_messages.to_s).to match("Bio can't be blank")
      end
    end

    # AVATAR
    context 'Avatar:' do
      it "Should not save when created without an avatar" do
        @profile.avatar = nil
        @profile.save

        expect(@profile.errors.full_messages.to_s).to match("Avatar is invalid")
      end

      it "Should not save when created with a file extension that doesn't match to jpg, png and gif" do
        @profile.avatar = 'eduardo.txt'
        @profile.save

        expect(@profile.errors.full_messages.to_s).to match("Avatar is invalid")
      end
    end

  end # end of describe 'Validations'
end
