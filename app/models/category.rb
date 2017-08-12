class Category < ApplicationRecord
  has_many :reviews

  validates :name, presence: { message: "Must be given please." },
                   length: { in: 2..24 }
end
