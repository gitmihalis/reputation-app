class ProfilesController < ApplicationController
  protect_from_forgery with: :null_session, only: :update
  def new
  end

  def update
    profile = Profile.find_by(id: params[:id])
    user = profile.user

    # :rep_status is true if equal to 'New User', 'Progressing', 'Credible', or 'Incosistent'
    if rep_status_params[:rep_status] != nil
        if profile.update(rep_status_params)
            redirect_to user_path(user)
          return
        else
          redirect_to user_path(user)
          return
        end
    end

    if session[:user_id].to_i != params[:id].to_i
      redirect_to logout_path
      puts "^ Unauthorized profile update from current_user:#{current_user.id}"
      return
    end

    profile.update(profile_params)
  end

  def show
    # @user = User.find params[:user_id]
    @user = User.find_by username: params[:user_username]

    @reviews = @user.received_reviews

    # Calculate credibilty score
    @total_of_reviews = @reviews.count

    @user = User.find params[:id]

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

  def rep_status_params
    params.require(:profile).permit(:id, :rep_status)
  end
end
