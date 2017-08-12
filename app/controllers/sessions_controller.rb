class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_email(params[:email])
    # If the user exists AND the password is valid
    if user && user.authenticate_with_credentials(params[:email], params[:password])
      # Set the user id in the cookie.
      sessions[:user_id] = user.id
      redirect_to '/'
    else
      # If user login info is not valid,
      redirect_to '/login'
    end
  end

  def destroy
    sessions[:user_id] = nil
    redirect_to '/login'
  end
  
end
