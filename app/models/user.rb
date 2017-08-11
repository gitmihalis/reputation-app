class User < ApplicationRecord
  has_many :authored_reviews, foreign_key: "author_id", class_name: "Review"
  has_many :gotten_reviews, foreign_key: "taget_id", class_name: "Review"
end
