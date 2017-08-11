class Comment < ApplicationRecord
  belongs_to :review
  belongs_to :user_id, class_name: 'User'
end
