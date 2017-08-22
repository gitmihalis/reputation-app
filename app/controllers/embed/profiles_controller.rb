class Embed::ProfilesController < ApplicationController
  # Display the user's own widget when shared
  def show

    # TESTING TESTING TESTING TESTING TESTING TESTING TESTING TESTING TESTING


    # @user = User.find params[:id]
    @user = User.find_by username: params[:id]
    @reviews = @user.received_reviews
    # TESTING TESTING TESTING TESTING TESTING TESTING TESTING TESTING TESTING

    # Calculate credibilty score
    @total_of_reviews = @reviews.count

    @positive_reviews = 0
    @reviews.each do |review|
      @positive_reviews += 1 if review.positive  # increment positive reviews by one if review is positive
      @total_of_reviews -= 1 if review.retracted  # decrement total of reviews by one if review is retracted
    end

    if @total_of_reviews <= 0 # Assign credibility score to "No Reviews" if total of reviews is zero
      @credibility_score = "No Reviews"
    else
      @credibility_score = @positive_reviews * 100 / @total_of_reviews
    end

  end

end