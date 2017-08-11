class User < ApplicationRecord
  has_many :reviews
  has_many :comments, through: :reviews
  has_many :flags

  has_one :profile
end
