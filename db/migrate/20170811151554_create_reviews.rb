class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.text :content
      t.boolean :positive
      t.boolean :retracted
      t.string :image_url
      t.string :reference_url
      t.integer :author_id, class_name: :user, foreign_key: true
      t.integer :category_id
      t.integer :receiver_id, class_name: :user, foreign_key: true
    end
  end
end
