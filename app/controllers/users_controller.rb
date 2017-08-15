class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    user = User.new(user_params)
    if user.save
      flash.now[:success] = "Your new account has been created!" 
      log_in user
      redirect_to user_path(user)
    else 
      render 'new'
    end
  end

  def show
    @user = User.find params[:id]
    @reviews = @user.received_reviews
  end
  
  private # +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end
end