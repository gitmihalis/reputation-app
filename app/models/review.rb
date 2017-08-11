class Review < ApplicationRecord
  belongs_to :category
  belongs_to :author, class_name: 'User'
  belongs_to :receiver, class_name: 'User'
  has_one :comment
  has_many :flags
end
