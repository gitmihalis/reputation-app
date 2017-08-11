class CreateProfiles < ActiveRecord::Migration[5.0]
  def change
    create_table :profiles do |t|
      t.string :avatar
      t.string :rep_status
      t.text :bio
      t.belongs_to :user, index: true
      t.timestamps
    end
  end
end
