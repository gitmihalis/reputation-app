class Profile < ApplicationRecord
  belongs_to :user
  mount_uploader :avatar, AvatarUploader

  validates :user_id, presence: true
  # validates :bio, presence: true

# TESTING TESTING TESTING TESTING TESTING TESTING TESTING TESTING TESTING
  # def to_param
  #     username
  #   end
# TESTING TESTING TESTING TESTING TESTING TESTING TESTING TESTING TESTING
end
