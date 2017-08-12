class Rebuttal < ApplicationRecord
  belongs_to :review
  # a rebuttal is left by a the receiver of the review, 
  # so we go though a review to find the receiver of the review
  # `@rebuttal.author ( also the author of the review )
  has_one :author, through: :review
end
