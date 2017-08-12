require 'rails_helper'

# validates :user_id, presence: true
# validates :review_id, presence: true
# validates :reason, presence: { message: "Must be given please." }

RSpec.describe Rebuttal, type: :model do

  describe "Validations:" do
    before :each do
      @user1 = User.create!(
        id: 1,
        first_name: "Eduardo",
        last_name: "Matsushita",
        email: "eduardo@credible.ca",
        password: 'password',
        password_confirmation: 'password' ,
        admin: true
      )
      @user2 = User.create!(
        id: 2,
        first_name: "Laura",
        last_name: "Penstone",
        email: "laura@credible.ca",
        password: "password",
        password_confirmation: "password",
        admin: true
       )

      @category = Category.create!(name: "Buyer")

      @review = @category.reviews.create!({
        author_id: 2,
        receiver_id: 1,
        content: "It was not a pleasure working with Eduardo!",
        positive: false,
        retracted: false,
        image_url: 'nil.png',
        reference_url: nil
      })

      @flag = @review.flags.create!({
        user_id: 1,
        reason: "Inappropriate"
      })

    end

    # VALID INPUTS
    context 'Valid inputs:' do
      it "Should save when all the required fields are correct" do
        expect(@flag.valid?).to eq(true)
      end
    end

    # REASON
    context 'Reason:' do
      it "Should not save when created without a reason" do
        @flag.reason = nil
        @flag.save

        expect(@flag.errors.full_messages.to_s).to match("Must be given please.")
      end
    end

    # REVIEW ID
    context 'Review id:' do
      it "Should not save when created without a review_id" do
        @flag.review_id = nil
        @flag.save

        expect(@flag.errors.full_messages.to_s).to match("Review can't be blank")
      end
    end

    # USER ID
    context 'User id:' do
      it "Should not save when created without a user_id" do
        @flag.user_id = nil
        @flag.save

        expect(@flag.errors.full_messages.to_s).to match("User can't be blank")
      end
    end

  end # end of describe 'Validations'
end
