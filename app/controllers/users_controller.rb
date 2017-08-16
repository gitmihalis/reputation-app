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
    @categories = Category.all
    @authors = []
    @user = User.find params[:id]
    @reviews = @user.received_reviews
    @profile = Profile.where({user_id: @user.id})
    @review_categories = []
    @written_review_categories = []
    @neg_review_categories = []

    @reviews.each do |review|
      @authors.push(review.author)
      @review_categories.push(@categories.where({id: review.category_id}))
    end

    @authorsneg = []
    @reviewsneg = Review.where({receiver_id: @user.id, positive: false})

    @reviewsneg.each do |review|
      @authorsneg.push(review.author)
      @neg_review_categories.push(@categories.where({id: review.category_id}))
    end

    @received = []
    @reviewswritten = Review.where({author_id: @user.id})

    @reviewswritten.each do |review|
      @received.push(review.receiver)
      @written_review_categories.push(@categories.where({id: review.category_id}))
    end

    # Calculate credibilty score
    @total_of_reviews = @reviews.size
    @positive_reviews = 0
    @reviews.each do |review|
      review.positive ? @positive_reviews += 1 : nil
    end
    @credibility_score = @positive_reviews * 100 / @total_of_reviews
  end

  private # +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  def user_params
    params.require(:user).permit(:username, :first_name, :last_name, :email, :password, :password_confirmation)
  end
end