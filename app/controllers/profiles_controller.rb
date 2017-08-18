class ProfilesController < ApplicationController
  protect_from_forgery with: :null_session, only: :update
  def new
  end

  def update
    profile = Profile.find_by(id: params[:id])
    user = profile.user
    if profile.update(profile_params)
      redirect_to user_path(user) , notice: 'Profile was successfully updated.'
    else
      redirect_to user_path(user), notice: 'Oh no! Profile was not updated.' 
    end
  end

  def show
    @user = User.find params[:user_id]
    @reviews = @user.received_reviews

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

  private

  def profile_params
    params.fetch(:profile).permit(:bio, :avatar)
  end
end
