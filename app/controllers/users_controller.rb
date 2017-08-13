class UsersController < ApplicationController
  def new
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      redrect to "/profile/#{user.username}"
    else
      redirect_to '/register'
    end
  end

  def show
    @authors = []
    @user = User.find params[:id]
    @reviews = @user.received_reviews

    @reviews.each do |review|
      @authors.push(review.author)
    end

  end

  private # +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  def user_params
    params.require(:user).permit(:name, :username, :email, :password, :password_confirmation)
  end
end