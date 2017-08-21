ActiveAdmin.register Flag do

  index do
    column :reason
    column :review
    column :user
    column :created_at
    actions
  end

end
