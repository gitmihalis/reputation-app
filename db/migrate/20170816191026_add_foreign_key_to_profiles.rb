class AddForeignKeyToProfiles < ActiveRecord::Migration[5.0]
  def change
    add_reference :profiles, :users
  end
end
