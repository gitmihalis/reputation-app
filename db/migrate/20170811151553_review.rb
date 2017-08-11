class Review < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.text :content
      t.boolean :positive
      t.boolean :retracted
      t.string :image_url
      t.string :reference_url
      t.belongs_to :author, class_name: 'User', index: true
      t.belongs_to :receiver, class_name: 'User', index: true
      t.belongs_to :category, index: true

      t.timestamps
    end
  end
end
