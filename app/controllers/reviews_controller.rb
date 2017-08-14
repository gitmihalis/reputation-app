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

    private

      protected

      def json_request?
       request.format.json?
      end

      def review_params
        params.require(:data).permit(:content, :author_id, :receiver_id, :category_id)
      end
end
