class User < ApplicationRecord
  has_secure_password
  has_many :authored_reviews, foreign_key: "author_id", class_name: "Review"
  has_many :received_reviews, foreign_key: "receiver_id", class_name: "Review"
  has_many :rebuttals, through: :reviews # XXX
  has_many :flags
  has_many :rebuttals
  has_one :profile
end
