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

  private

  def profile_params
    params.require(:profile).permit(:bio, :avatar)
  end
end
