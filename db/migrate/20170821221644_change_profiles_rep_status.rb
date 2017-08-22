class ChangeProfilesRepStatus < ActiveRecord::Migration[5.0]
  def change
    change_column :profiles, :rep_status, :string, default: 'New User'
  end
end
