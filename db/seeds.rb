# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding Data ..."

# Helper functions
def open_asset(file_name)
  File.open(Rails.root.join('db', 'seed_assets', file_name))
end

# Only run on development (local) instances not on production, etc.
unless Rails.env.development?
  puts "Development seeds only (for now)!"
  exit 0
end

Flag.destroy_all
Rebuttal.destroy_all
Profile.destroy_all
Category.destroy_all
Review.destroy_all
User.destroy_all

User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')
Review.connection.execute('ALTER SEQUENCE reviews_id_seq RESTART WITH 1')
Category.connection.execute('ALTER SEQUENCE categories_id_seq RESTART WITH 1')
Profile.connection.execute('ALTER SEQUENCE profiles_id_seq RESTART WITH 1')
Rebuttal.connection.execute('ALTER SEQUENCE rebuttals_id_seq RESTART WITH 1')
Flag.connection.execute('ALTER SEQUENCE flags_id_seq RESTART WITH 1')

puts "Seeding user data..."

user1 = User.create!(
  first_name: "Eduardo",
  last_name: "Matsushita",
  username: "eduardoM",
  email: "eduardo@credible.ca",
  password: 'password',
  password_confirmation: 'password' ,
  admin: true
)

user2 = User.create!(
  first_name: "Laura",
  last_name: "Penstone",
  username: "lauraP",
  email: "laura@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: true
 )
user3 = User.create!(
  first_name: "Mihalis",
  last_name: "Fthenos",
  username: "mihalisF",
  email: "mihalis@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: true
)
user4 = User.create!(
  first_name: "John",
  last_name: "Doe",
  username: "johnD",
  email: "john@example.com",
  password: "password",
  password_confirmation: "password",
  admin: false
)

puts "Seeding profile data..."

user1.create_profile({
  bio: "Whatevah!",
  avatar: open_asset('eduardoM.jpeg'),
  rep_status: "credible"
})

user2.create_profile({
  bio: "Nice to see you!",
  avatar: open_asset('lauraP.png'),
  rep_status: "credible"
})

user3.create_profile({
  bio: "Sleeping!",
  avatar: open_asset('mihalisF.jpeg'),
  rep_status: "suspicious"
})
user4.create_profile({
  bio: "I'm a seller, trying to empty my apartment!",
  avatar: open_asset('johnD.png'),
  rep_status: "credible"
})

puts "Seeding category data..."

category1 = Category.create!(name: "Buyer")
category2 = Category.create!(name: "Seller")
category3 = Category.create!(name: "Service")
category4 = Category.create!(name: "Driver")

puts "Seeding review data..."

review1 = category1.reviews.create!({
  author: user2,
  receiver: user1,
  content: "It was a pleasure working with Eduardo!",
  positive: true,
  retracted: false,
  image_url: 'nil.png',
  reference_url: nil
})
review2 = category2.reviews.create!({
  author: user4,
  receiver: user2,
  content: "This was a great time!",
  positive: true,
  retracted: false,
  image_url: 'nil.png',
  reference_url: nil
})
review3 = category1.reviews.create!({
  author: user3,
  receiver: user1,
  content: "Such fun doing things!",
  positive: false,
  retracted: false,
  image_url: nil,
  reference_url: nil
})
review4 = category1.reviews.create!({
  author: user1,
  receiver: user3,
  content: "Everything went as expected!",
  positive: true,
  retracted: false,
  image_url: nil,
  reference_url: nil
})
review5 = category1.reviews.create!({
  author: user3,
  receiver: user4,
  content: "Not so neat :( but ... later I will retract this",
  positive: false,
  retracted: true,
  image_url: nil,
  reference_url: nil
})
review6 = category1.reviews.create!({
  author: user2,
  receiver: user3,
  content: "Awesome!",
  positive: true,
  retracted: false,
  image_url: nil,
  reference_url: nil
})

puts "Seeding rebuttal data..."

# Create rebuttal on negative review
review3.create_rebuttal({
  content: "I didn't do that!"
})

puts "Seeding flag data..."

review1.flags.create!({
  user: user1,
  reason: "Inappropriate"
})
review6.flags.create!({
  user: user3,
  reason: "Inappropriate"
})

puts "Seeding complete!"



