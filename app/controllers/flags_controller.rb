class FlagsController < ApplicationController
    skip_before_action :verify_authenticity_token, if: :json_request?

  def create
    @flag = Flag.new(flag_params)

    if @flag.save
      puts ("flag set, yay!")
      # render json: @review
    else
      puts ("oh no! Did not flag")
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @flag = Flag.find params[:id]
    if @flag.destroy
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

    def flag_params
      params.require(:flag).permit(:reason, :review_id, :user_id)
  end
end