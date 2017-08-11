class User < ApplicationRecord
  has_many :authored_reviews, foreign_key: "author_id", class_name: "Review"
  has_many :received_reviews, foreign_key: "receiver_id", class_name: "Review"
  has_many :comments, through: :reviews
  has_many :flags

  has_one :profile
end
