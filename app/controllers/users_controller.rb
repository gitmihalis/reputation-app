class UsersController < ApplicationController
  def show
    @user = User.find params[:id]
    @reviews = @user.received_reviews
  end
end
