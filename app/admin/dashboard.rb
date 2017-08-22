ActiveAdmin.register_page "Dashboard" do
  
  sql = "SELECT review_id, COUNT(*) FROM flags GROUP BY review_id ORDER BY COUNT DESC"
  important_flags_array = ActiveRecord::Base.connection.execute(sql)

  menu priority: 1, label: proc{ I18n.t("active_admin.dashboard") }

  content title: proc{ I18n.t("active_admin.dashboard") } do

    div class: "blank_slate_container", id: "dashboard_default_message" do
      span class: "blank_slate" do
        span I18n.t("active_admin.dashboard_welcome.welcome")
        small I18n.t("active_admin.dashboard_welcome.call_to_action")
      end
    end


    columns do
      column do
        panel "Recent Flags" do
          ul do
            Flag.order(:created_at).last(55).map do |flag|
              li link_to("#{flag.created_at.strftime("%m/%d/%y")}", admin_flag_path(flag))
            end
          end
        end
      end

      column do
        panel "Important Issues!" do
          ul do
            important_flags_array.take(55).each do |hash|
              li link_to "REVIEW:#{hash["review_id"]} has #{hash["count"]} flags", admin_review_path(hash["review_id"])
            end
          end
        end
      end
    end
  end # content
end
