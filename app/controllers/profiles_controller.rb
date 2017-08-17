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

  private

  def profile_params
    params.fetch(:profile).permit(:bio, :avatar)
  end
end
