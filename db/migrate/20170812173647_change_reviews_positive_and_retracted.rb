class ChangeReviewsPositiveAndRetracted < ActiveRecord::Migration[5.0]
  def change
    change_column :reviews, :positive, :boolean, default: true
    change_column :reviews, :retracted, :boolean, default: false
  end
end