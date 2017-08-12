class CreateRebuttal < ActiveRecord::Migration[5.0]
  def change
    create_table :rebuttals do |t|
      t.text :content
      t.belongs_to :review
      t.timestamps
    end
  end
end
