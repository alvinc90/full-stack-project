# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.delete_all 
City.delete_all
Restaurant.delete_all

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

r1 = Restaurant.create!(
    name: "La Mar Cebicheria Peruana",
    address: "pier 1 1/2, San Francisco, CA 94105",
    description: "Inspired by the thousands of cebicherias found throughout Peru, La Mar Cebicheri­a Peruana, was created as an attempt to globalize and enshrine one of the best guarded treasures of Peruvian cuisine: cebiche, Peruvian seafood and the scenery created to enjoy them, the Peruvian style cebicheria.",
    phone_num: "(415) 397-8880", 
    hours: "Lunch 11:30am - 2:30pm
            Dinner 5:00pm - 9:30pm",
    payment_option: "AMEX, Dicover, MasterCard, Visa", 
    cuisine: "Peruvian, Seafood",
    city_id: City.find_by(name: "San Francisco").id 
)

r2 = Restaurant.create!(
    name: "Ozumo",
    address: "161 Steuart Street San Francisco, CA 94105",
    description: "Innovative, Contemporary Japanese cuisine offered at this serene, elegant, Zen-garden inspired restaurant located in the heart of San Francisco's Embarcadero District. Breathtaking bay views, authentic modern Japanese design, 30-person sushi bar, open kitchen and robata grill, sleek and sophisticated Sake Lounge, and a monumental Sake list are among some of the qualities that set Ozumo apart from all other Bay Area Japanese restaurants.",
    phone_num: "(415) 882-1333", 
    hours: "Lunch 11:00am - 2:30pm
            Dinner 4:00pm - 9:30pm",
    payment_option: "AMEX, Dicover, MasterCard, Visa", 
    cuisine: "Japanese, Sushi, Japanese Specialty",
    city_id: City.find_by(name: "San Francisco").id 
)




