class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    # If the user exists AND the password is valid
    if user && user.authenticate(params[:session][:password])
      # Set the user id in the browser cookie.
      flash.now[:success] = "You logged in!"
      log_in user
      remember user
      redirect_to user
    else
      flash.now[:danger] = 'Invalid email/password combination'
      render 'new'
    end
  end

  def destroy
    flash.now[:notice] = "You have successfully logged out."
    log_out if logged_in?
    redirect_to root_url
  end
  
end
