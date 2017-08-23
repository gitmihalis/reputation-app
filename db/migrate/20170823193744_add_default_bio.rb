class AddDefaultBio < ActiveRecord::Migration[5.0]
  def change
        change_column :profiles, :bio, :text, default: 'Edit your description...'
  end
end
