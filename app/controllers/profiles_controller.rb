class ProfilesController < ApplicationController

  def new
  end

  def update
    profile = Profile.find_by(user: params[:session][:user_id])
    profile.avatar = params[:session][:avatar]
    if profile.save
      render json: { status: 'OK' }
    else
      render json: { error: 'Could not upload image'}
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
    params.require(:profile).permit(:bio, :avatar)
  end
end
