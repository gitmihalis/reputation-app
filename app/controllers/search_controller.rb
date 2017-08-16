class SearchController < ApplicationController

  def show
    @users = User.all
    @profiles = Profile.all
  end
end
