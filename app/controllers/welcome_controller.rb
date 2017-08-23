class WelcomeController < ApplicationController
  def index
    if logged_in?
      redirect_to user_path(current_user.username)
    else
      render 'index'
    end
  end
end
