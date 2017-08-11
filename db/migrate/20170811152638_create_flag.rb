class CreateFlag < ActiveRecord::Migration[5.0]
  def change
    create_table :flags do |t|
      t.text :reason
      t.belongs_to :review, index: true
      t.belongs_to :user, index: true

      t.timestamps
    end
  end
end
