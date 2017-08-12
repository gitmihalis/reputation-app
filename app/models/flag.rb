class Flag < ApplicationRecord
  belongs_to :review
  belongs_to :user

  validates :user_id, presence: true
  validates :review_id, presence: true
  validates :reason, presence: { message: "Must be given please." }
end
