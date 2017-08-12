require 'rails_helper'

# validates :name, presence: { message: "Must be given please." },
#                length: { in: 2..24 }

RSpec.describe Category, type: :model do

  describe 'Validations:' do
    before :each do
      @category = Category.create(
        name: 'Buyer'
      )
    end

    # VALID INPUTS
    context 'Valid inputs:' do
      it "Should save when all the required fields are correct" do
        expect(@category.valid?).to eq(true)
      end
    end

    #NAME
    context 'Name:' do
      it "Should not save when created without a name" do
        @category.name = nil
        @category.save

        expect(@category.errors.full_messages.to_s).to match("Must be given please.")
      end

      it "Should have a name longer than 2 characters" do
        @category.name = 'a'
        @category.save

        expect(@category.errors.full_messages).to include("Name is too short (minimum is 2 characters)")
      end

      it "Should have a name shorter than 24 characters" do
        @category.name = 'abcdefghijklmnopqrstuwxyz'
        @category.save

        expect(@category.errors.full_messages).to include("Name is too long (maximum is 24 characters)")
      end
    end
  end # end of describe 'Validations'
end
