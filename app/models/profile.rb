class Profile < ApplicationRecord
  belongs_to :user

  validates :user_id, presence: true
  validates :bio, presence: true
  validates :avatar, format: { with: /^[\w-]+\.(jpe?g|png|gif)$/ }
end
