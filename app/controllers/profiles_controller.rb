class ProfilesController < ApplicationController
  protect_from_forgery with: :null_session, only: :update
  def new
  end

  def update

    profile = Profile.find_by(id: params[:id])
    byebug
    # profile.avatar = params[:session][:avatar]
    if profile.update(profile_params)
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
