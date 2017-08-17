class ProfilesController < ApplicationController
  protect_from_forgery with: :null_session, only: :update
  def new
  end

  def update
    profile = Profile.find_by(id: params[:id])
    if profile.update!(profile_params)
      respond_to do |format|
        format.html { redirect_to user_path(3), notice: 'Profile was successfully updated.' }
        format.json { render json: profile, status: :created, location: profile }
        format.js
      end
    else
      respond_to do |format|
        format.html { redirect_to user_path(3), notice: 'Oh no! Profile was not updated.' }
        format.json { render json: profile, status: :rejected, location: profile }
        format.js
      end
    end
  end

  private

  def profile_params
    params.require(:profile).permit(:bio, :avatar)
  end
end
