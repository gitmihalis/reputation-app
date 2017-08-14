class User < ApplicationRecord

  before_save { email.downcase }

  has_many :authored_reviews, foreign_key: "author_id", class_name: "Review"
  has_many :received_reviews, foreign_key: "receiver_id", class_name: "Review"
  has_many :rebuttals, through: :reviews
  has_many :flags
  has_many :rebuttals
  has_one :profile

  validates :first_name, presence: { message: "Must be given please." }
  validates :last_name, presence: { message: "Must be given please." }
  validates :username, presence: { message: "Must be given please." },
                       uniqueness: true
  validates :email, uniqueness: { case_sensitive: false },
                    presence: { message: "Sorry, email format seems wrong." },
                    format: { with: /\A[_a-zA-Z0-9\\-]+(\.[a-zA-Z0-9\\-]+)*@[a-zA-Z0-9\\-]+(\.[a-zA-Z0-9\\-]+)*(\.[a-z]{2,6})\z/ }
  validates :password, confirmation: true,
                       length: { in: 4..16 },
                       presence: true
  validates :password_confirmation, presence: { message: "Sorry, must be matched with password." }

  has_secure_password
end
