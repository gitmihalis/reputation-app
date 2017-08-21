class ReviewsController < ApplicationController
    skip_before_action :verify_authenticity_token, if: :json_request?

    def create
      @review = Review.new(review_params)

      if @review.save
        puts ("yay!")
        # render json: @review
      else
        puts ("oh no!")
        render json: @review.errors, status: :unprocessable_entity
      end
    end

    def update
      @review = Review.find_by(id: retract_params[:review_id])
      @review.retracted = retract_params[:retracted]

      if @review.save
        puts ("yay!")
        # render json: @review
      else
        puts ("oh no!")
        render json: @review.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @review = Review.find params[:id]
      if @review.destroy
        puts ("yay!")
      else
        puts ("oh no!")
        render json: @review.errors, status: :unprocessable_entity
      end
    end

    private

      protected

      def json_request?
       request.format.json?
      end

      def review_params
        params.require(:review).permit(:content, :author_id, :receiver_id, :reference_url, :positive, :category_id)
      end

      def retract_params
        params.require(:retract).permit(:retracted, :review_id)
      end
end