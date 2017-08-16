class ProfileController < ApplicationController

  def new
  end

  def create
    @current_user.profile.create
  end
end