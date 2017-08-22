class Review < ApplicationRecord
  belongs_to :category
  belongs_to :author, class_name: 'User', foreign_key: "author_id"
  belongs_to :receiver, class_name: 'User', foreign_key: "receiver_id"
  has_one :rebuttal
  has_many :flags, dependent: :destroy

  validates :content, presence: true
  validates :image_url, format: { with: /\A[\w-]+\.(jpe?g|png|gif)\z/ }, allow_nil: true
  validates :author_id, presence: true
  validates :category_id, presence: true
  validates :receiver_id, presence: true
end
