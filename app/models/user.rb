class User < ApplicationRecord

  attr_accessor :remember_token

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
  validates :password_confirmation, presence: { message: "Must be given please." }

  has_secure_password

  # Returns the hash digest of the given string.
  def User.digest(string)
    cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
                                                  BCrypt::Engine.cost
    BCrypt::Password.create(string, cost: cost)
  end

  # Returns a random token.
  def User.new_token
    SecureRandom.urlsafe_base64
  end

  # Remembers a user in the database for use in persistent sessions.
  def remember
    self.remember_token = User.new_token
    update_attribute(:remember_digest, User.digest(remember_token))
  end

  # returns true if the given token matches the digest
  def remember_me?(remember_token)
    return false if remember_digest.nil?
    BCrypt::Password.new(remember_digest).is_password?(remember_token)
  end

  # Forgets a user.
  def forget
    update_attribute(:remember_digest, nil)
  end

  # TESTING TESTING TESTING TESTING TESTING TESTING TESTING TESTING TESTING

    def to_param
      username
    end
  # TESTING TESTING TESTING TESTING TESTING TESTING TESTING TESTING TESTING


end

