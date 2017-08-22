class RebuttalsController < ApplicationController
  skip_before_action :verify_authenticity_token, if: :json_request?

  def create
    @rebuttal = Rebuttal.new(rebuttal_params)

    if @rebuttal.save
      puts ("rebuttal set, yay! Defend your rep!")
      # render json: @review
    else
      puts ("oh no! Did not defend")
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @rebuttal = Rebuttal.find params[:id]
    if @rebuttal.destroy
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

    def rebuttal_params
      params.require(:rebuttal).permit(:content, :review_id)
  end
end
