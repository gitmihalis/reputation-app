ActiveAdmin.register Flag do

#  establish the query that counts flag.reviews
# turn it inot a function
# inject that into the active admin dashboard

  index do
    column :reason
    column :review
    column :user
    column :created_at
    actions
  end

end
