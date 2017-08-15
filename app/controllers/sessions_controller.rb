class SessionsController < ApplicationController
  def new
    render 'new'
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    # If the user exists AND the password is valid
    if user && user.authenticate(params[:session][:password])
      # Set the user id in the browser cookie.
      log_in user
      params[:session][:remember_me] == '1' ? remember(user) : forget(user)
      flash[:success] = "Welcome back #{user.first_name}"
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
