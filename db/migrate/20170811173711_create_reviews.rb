class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer :author_id, class_name: :user, foreign_key: true
      t.integer :target_id, class_name: :user, foreign_key: true
      t.timestamps
    end
  end
end
