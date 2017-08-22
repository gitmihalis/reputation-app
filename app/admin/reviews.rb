ActiveAdmin.register Review do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :positive, :retracted, :image_url, :reference_url, :content, :author, :category, :receiver
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

end

# t.text     "content"
# t.boolean  "positive",      default: true
# t.boolean  "retracted",     default: false
# t.string   "image_url"
# t.string   "reference_url"
# t.integer  "author_id"
# t.integer  "category_id"
# t.integer  "receiver_id"