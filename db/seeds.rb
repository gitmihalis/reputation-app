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
  email: "john@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

user27 = User.create!(
  first_name: "Kelly",
  last_name: "Barber",
  username: "kellyBarber",
  email: "kellybarber@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

user28 = User.create!(
  first_name: "Ayesha",
  last_name: "Khan",
  username: "ayeshaKhan",
  email: "ayeshakhan@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

user29 = User.create!(
  first_name: "Vlad",
  last_name: "Duta",
  username: "vladDuta",
  email: "vladduta@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

user30 = User.create!(
  first_name: "Tom",
  last_name: "Chen",
  username: "tomChen",
  email: "tomchen@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

user31 = User.create!(
  first_name: "Kevin",
  last_name: "Kuttumkal",
  username: "kevinKuttumkal",
  email: "kevinkuttumkal@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

user32 = User.create!(
  first_name: "Victor",
  last_name: "Festa",
  username: "victorFesta",
  email: "victorfesta@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

user33 = User.create!(
  first_name: "John",
  last_name: "Tolentino",
  username: "johnTolentino",
  email: "johntolentino@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

user34 = User.create!(
  first_name: "Jonathan",
  last_name: "Lam",
  username: "jonathanLam",
  email: "jonathanlam@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

user35 = User.create!(
  first_name: "Arnold",
  last_name: "Chan",
  username: "arnoldChan",
  email: "arnoldchan@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

user36 = User.create!(
  first_name: "Marcos",
  last_name: "Silva",
  username: "marcosSilva",
  email: "marcossilva@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

user37 = User.create!(
  first_name: "Tak",
  last_name: "Ng",
  username: "takNg",
  email: "takng@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

user5 = User.create!(
  first_name: "David",
  last_name: "Mills",
  username: "davidMills",
  email: "davidmills@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

user6 = User.create!(
  first_name: "Maggie",
  last_name: "Moss",
  username: "maggieMoss",
  email: "maggiemoss@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

user7 = User.create!(
  first_name: "Engin",
  last_name: "Arslan",
  username: "enginArslan",
  email: "enginarslan@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

user8 = User.create!(
  first_name: "Nayyir",
  last_name: "Jutha",
  username: "nayyirJutha",
  email: "nayyirjutha@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

user9 = User.create!(
  first_name: "Johnny",
  last_name: "Hsiao",
  username: "johnnyHsiao",
  email: "johnnyhsiao@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

user10 = User.create!(
  first_name: "Stosh",
  last_name: "Fabricius",
  username: "stoshfabricius",
  email: "stoshFabricius@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

user11 = User.create!(
  first_name: "Xiyang",
  last_name: "Chen",
  username: "xiyangChen",
  email: "xiyangchen@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

user12 = User.create!(
  first_name: "Thom",
  last_name: "Lamb",
  username: "thomLamb",
  email: "thomlamb@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

user13 = User.create!(
  first_name: "Zach",
  last_name: "Levy",
  username: "zachLevy",
  email: "zachlevy@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

user14 = User.create!(
  first_name: "Justin",
  last_name: "Henderiks",
  username: "justinHenderiks",
  email: "justinhenderiks@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

user15 = User.create!(
  first_name: "Monting",
  last_name: "Lin",
  username: "montingLin",
  email: "montinglin@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

user16 = User.create!(
  first_name: "Harry",
  last_name: "Mills",
  username: "harryMills",
  email: "harrymills@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

user17 = User.create!(
  first_name: "Erica",
  last_name: "Wright",
  username: "ericaWright",
  email: "ericawright@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

user18 = User.create!(
  first_name: "Cody",
  last_name: "Brouwers",
  username: "codyBrouwers",
  email: "codybrouwers@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

user19 = User.create!(
  first_name: "Robert",
  last_name: "Jackiewicz",
  username: "robertJackiewicz",
  email: "robertjackiewicz@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

user20 = User.create!(
  first_name: "Juan",
  last_name: "Gonzalez",
  username: "juanGonzalez",
  email: "juangonzalez@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

user21 = User.create!(
  first_name: "Alex",
  last_name: "Wilmer",
  username: "alexWilmer",
  email: "alexwilmer@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

user22 = User.create!(
  first_name: "Laith",
  last_name: "Azer",
  username: "laithAzer",
  email: "laithazer@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

user23 = User.create!(
  first_name: "Fabio",
  last_name: "Neves",
  username: "fabioNeves",
  email: "fabioneves@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

user24 = User.create!(
  first_name: "Chriscelle",
  last_name: "Dela Cruz",
  username: "chriscelleCruz",
  email: "chriscellecruz@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

user25 = User.create!(
  first_name: "Iskender",
  last_name: "Piyale-Sheard",
  username: "iskenderSheard",
  email: "iskendersheard@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

user26 = User.create!(
  first_name: "Sumiya",
  last_name: "Abdirashid",
  username: "sumiyaAbdirashid",
  email: "sumiyaabdirashid@credible.ca",
  password: "password",
  password_confirmation: "password",
  admin: false
)

puts "Seeding profile data..."

user1.create_profile({
  bio: "Whatevah!",
  avatar: open_asset('eduardoM.jpeg'),
})

user2.create_profile({
  bio: "Nice to see you!",
  avatar: open_asset('lauraP.jpg'),
  rep_status: "progressing"
})

user3.create_profile({
  bio: "Sleeping!",
  avatar: open_asset('mihalisF.jpeg'),
})

user4.create_profile({
  bio: "I'm a seller, trying to empty my apartment!",
  avatar: open_asset('johnD.jpeg'),
})

user5.create_profile({
  bio: "Freelance Software Craftsman, I make tools that change the world.",
  avatar: open_asset('davidMills.jpeg'),
})

user6.create_profile({
  bio: "I'll fill this in later.",
  avatar: open_asset('maggieMoss.png'),
})

user7.create_profile({
  bio: "I am a Front End Developer with Bachelor of Science in Materials Engineering and a Post Graduate Certificate in Visual Effects.",
  avatar: open_asset('enginArslan.jpg'),
})

user8.create_profile({
  bio: "Self-taught, self-driven, and highly motivated full stack software developer with a primary focus on back-end development.",
  avatar: open_asset('nayyirJutha.jpeg'),
})

user9.create_profile({
  bio: "LHL alumni. Like long walks on the beach. Enjoy food and board games way too much.",
  avatar: open_asset('johnnyHsiao.jpg'),
})

user10.create_profile({
  bio: "I like to write instructions for computers",
  avatar: open_asset('stoshFabricius.jpeg'),
})

user11.create_profile({
  bio: "...",
  avatar: open_asset('xiyangChen.jpg'),
})

user12.create_profile({
  bio: "Senior Software Engineer at Brainsights, a neuro-marketing company",
  avatar: open_asset('thomLamb.jpeg'),
})

user13.create_profile({
  bio: "Entrepreneur, developer, builder of many prototypes",
  avatar: open_asset('zachLevy.jpg'),
})

user14.create_profile({
  bio: "LHL alumni. Computer Tech'y grad. Former technology generalist. Cyclist / courier. Easily confused.",
  avatar: open_asset('justinHenderiks.jpg'),
})

user15.create_profile({
  bio: "Lived in Taipei, Singapore, Beijing, Shanghai, Toronto. Computer Science & Economics UofT grad. Strong interest in entrepreneurship, biochemistry, nutrition,...",
  avatar: open_asset('montingLin.jpeg'),
})

user16.create_profile({
  bio: "I'm an expat brit now living in Toronto. When I'm not mentoring for Lighthouse Labs I do freelance work, mostly in Ruby on Rails.",
  avatar: open_asset('harryMills.jpeg'),
})

user17.create_profile({
  bio: "Alumni from the Vancouver April 2015 Cohort. Currently working for Mozilla/Firefox making prototypes and extensions.",
  avatar: open_asset('ericaWright.jpg'),
})

user18.create_profile({
  bio: "Was in the first Toronto cohort and am now working as a full stack developer at Flipgive just down the hall!",
  avatar: open_asset('codyBrouwers.jpeg'),
})

user19.create_profile({
  bio: "Founder of Brew Box. I really like beer.",
  avatar: open_asset('robertJackiewicz.jpeg'),
})

user20.create_profile({
  bio: "I went to Basic school, Pascal High School, did C as an undergrad, failed a VB master and after a couple of decades I have not given up on JS.",
  avatar: open_asset('juanGonzalez.png'),
})

user21.create_profile({
  bio: "Musician, JavaScript enthusiast, cook, wannabe cryptocurrency cryptographer",
  avatar: open_asset('alexWilmer.png'),
})

user22.create_profile({
  bio: "Alumni mentor, July 2015, Developer at Think Research",
  avatar: open_asset('laithAzer.jpg'),
})

user23.create_profile({
  bio: "I've been doing this since the last century.",
  avatar: open_asset('fabioNeves.jpg'),
})

user24.create_profile({
  bio: "...",
  avatar: open_asset('chriscelleCruz.png'),
})

user25.create_profile({
  bio: "Community Manager @ Lighthouse Labs",
  avatar: open_asset('iskenderSheard.jpeg'),
})

user26.create_profile({
  bio: "Education Manager @ LHL",
  avatar: open_asset('sumiyaAbdirashid.jpeg'),
})

user27.create_profile({
  bio: "...",
  avatar: open_asset('kellyBarber.jpg'),
})

user28.create_profile({
  bio: "...",
  avatar: open_asset('ayeshaKhan.jpg'),
})

user29.create_profile({
  bio: "...",
  avatar: open_asset('vladDuta.jpeg'),
})

user30.create_profile({
  bio: "...",
  avatar: open_asset('tomChen.jpg'),
})

user31.create_profile({
  bio: "...",
  avatar: open_asset('kevinK.jpeg'),
})

user32.create_profile({
  bio: "...",
  avatar: open_asset('victorFesta.jpg'),
})

user33.create_profile({
  bio: "...",
  avatar: open_asset('johnTolentino.jpeg'),
})

user34.create_profile({
  bio: "...",
  avatar: open_asset('jonathanLam.jpg'),
})

user35.create_profile({
  bio: "...",
  avatar: open_asset('arnoldChan.png'),
})

user36.create_profile({
  bio: "...",
  avatar: open_asset('marcosSilva.jpeg'),
})

user37.create_profile({
  bio: "...",
  avatar: open_asset('takNg.jpg'),
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
review7 = category1.reviews.create!({
  author: user1,
  receiver: user2,
  content: "Bad review",
  positive: false,
  retracted: false,
  image_url: nil,
  reference_url: nil
})
review8 = category1.reviews.create!({
  author: user1,
  receiver: user2,
  content: "Bad review",
  positive: false,
  retracted: false,
  image_url: nil,
  reference_url: nil
})
review9 = category1.reviews.create!({
  author: user1,
  receiver: user2,
  content: "Bad review",
  positive: false,
  retracted: false,
  image_url: nil,
  reference_url: nil
})
review10 = category1.reviews.create!({
  author: user1,
  receiver: user2,
  content: "Bad review",
  positive: false,
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



