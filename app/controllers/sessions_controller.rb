class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    # If the user exists AND the password is valid
    if user && user.authenticate(params[:session][:password])
      # Set the user id in the browser cookie.
      log_in user
      redirect_to user
    else
      flash.now[:danger] = 'Invalid email/password combination'
      render 'new'
    end
  end

  def destroy
    sessions[:user_id] = nil
    flash[:notice] = "You have successfully logged out."
    redirect_to root_url
  end
  
end
