class WelcomeController < ApplicationController
  def index
    byebug
    if logged_in?
      redirect_to user_path(current_user)
    else
      render 'index'
    end
  end
end
