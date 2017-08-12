require 'rails_helper'

# validates :content, presence: true
# validates :image_url, format: { with: /\A[\w-]+\.(jpe?g|png|gif)\z/ }, allow_nil: true
# validates :author_id, presence: true
# validates :category_id, presence: true
# validates :receiver_id, presence: true


RSpec.describe Review, type: :model do

  describe 'Validations:' do
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
        content: "It was a pleasure working with Eduardo!",
        positive: true,
        retracted: false,
        image_url: 'nil.png',
        reference_url: nil
      })
    end

    # VALID INPUTS
    context 'Valid inputs:' do
      it "Should save when all the required fields are correct" do
        expect(@review.valid?).to eq(true)
      end
    end

    # CONTENT
    context 'Content:' do
      it "Should not save when created without a content" do
        @review.content = nil
        @review.save

        expect(@review.errors.full_messages.to_s).to match("Content can't be blank")
      end
    end

    # AUTHOR ID
    context 'Author id:' do
      it "Should not save when created without a author_id" do
        @review.author_id = nil
        @review.save

        expect(@review.errors.full_messages.to_s).to match("Author can't be blank")
      end
    end

    # RECEIVER ID
    context 'Receiver id:' do
      it "Should not save when created without a receiver_id" do
        @review.receiver_id = nil
        @review.save

        expect(@review.errors.full_messages.to_s).to match("Receiver can't be blank")
      end
    end

    # CATEGORY ID
    context 'Category id:' do
      it "Should not save when created without a category_id" do
        @review.category_id = nil
        @review.save

        expect(@review.errors.full_messages.to_s).to match("Category can't be blank")
      end
    end

    # IMAGE URL
    context 'Image url:' do
      it "Should save when created without a image_url" do
        @review.image_url = nil
        @review.save

        expect(@review.valid?).to eq(true)
      end

      it "Should not save when created with a file extension that doesn't match to jpg, png and gif" do
        @review.image_url = 'credible.txt'
        @review.save

        expect(@review.errors.full_messages.to_s).to match("Image url is invalid")
      end
    end

  end # end of describe 'Validations'

end
