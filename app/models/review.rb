class Review < ApplicationRecord
  belongs_to :category
  belongs_to :author, class_name: 'User', foreign_key: "author_id"
  belongs_to :receiver, class_name: 'User', foreign_key: "receiver_id"
  has_one :rebuttal
  has_many :flags
end
