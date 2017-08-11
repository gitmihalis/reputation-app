class Review < ApplicationRecord
  has_one :author, class_name: "User", foreign_key: "author_id"
  belongs_to :target, class_name: "User", foreign_key: "target_id"
end
