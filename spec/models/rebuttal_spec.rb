require 'rails_helper'

# validates :content, presence: { message: "Must be given please." }
# validates :review_id, presence: true

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

      @rebuttal = @review.create_rebuttal({
        content: "Maybe you're wrong."
      })
    end

    # VALID INPUTS
    context 'Valid inputs:' do
      it "Should save when all the required fields are correct" do
        expect(@rebuttal.valid?).to eq(true)
      end
    end

    # CONTENT
    context 'Content:' do
      it "Should not save when created without a content" do
        @rebuttal.content = nil
        @rebuttal.save

        expect(@rebuttal.errors.full_messages.to_s).to match("Must be given please.")
      end
    end

    # REVIEW ID
    context 'Review id:' do
      it "Should not save when created without a review_id" do
        @rebuttal.review_id = nil
        @rebuttal.save

        expect(@rebuttal.errors.full_messages.to_s).to match("Review can't be blank")
      end
    end

  end # end of describe 'Validations'
end
