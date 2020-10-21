# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.delete_all 

u1 = User.create!(
    username: "alvin1",
    password: "password",
    email: "alvin1"
)

u2 = User.create!(
    username: "alvin2",
    password: "password",
    email: "alvin2"
)

demo = User.create!(
    username: "demo",
    password: "password", 
    email: 'demo@demo.com'
)

c1 = City.create!(
    name: "San Francisco"
)
c2 = City.create!(
    name: "New York"
)
c3 = City.create!(
    name: "Chicago"
)
c4 = City.create!(
    name: "Los Angeles" 
)




