# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.delete_all 
City.delete_all
Restaurant.delete_all

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

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
    name: "San Francisco",
    code: "sf"
)
c2 = City.create!(
    name: "New York",
    code: "ny"
)
c3 = City.create!(
    name: "Chicago",
    code: "chicago"
)
c4 = City.create!(
    name: "Los Angeles",
    code: "la"
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

r3 = Restaurant.create!(
    name: "Angler",
    address: "132 The Embarcadero, San Francisco, CA 94105",
    description: "Angler is a sea-life focused restaurant with views of the expansive wood burning hearth as well of the San Francisco Bay from Chef Joshua Skenes and Saison Hospitality. Each day’s inspiration is drawn from the products themselves and is an articulation of their natural flavors, served at their peak taste. We work with a small group of fishermen, hunters, gatherers, ranchers, and farmers to find and follow microclimates that produce the highest quality products in local existence. All of the cooking revolves around open wood fire and a fireplace designed for Chef Skenes's unique methodology, techniques, and tools for extracting the best tastes in our products. The expansive cellar features a particular emphasis on the wines of Burgundy as well as benchmark producers from our backyard in Napa and Sonoma. The bar program features carefully curated spirits from well-known and small-batched distillers, to specially sourced selections that date back sev",
    phone_num: "(415) 872-9442", 
    hours: "Lunch 11:00am - 2:00pm
            Dinner 5:30pm - 9:30pm",
    payment_option: "AMEX, Dicover, MasterCard, Visa", 
    cuisine: "American, Seafood",
    city_id: City.find_by(name: "San Francisco").id 
)

r4 = Restaurant.create!(
    name: "Fogo de Chao",
    address: "201 S, 3rd St Suite 100, San Francisco, CA 94103",
    description: "Fogo de Chao is the leading Brazilian steakhouse specializing in fire-roasting high-quality meats since 1979 utilizing the centuries-old Southern Brazilian cooking technique of churrasco",
    phone_num: "(415) 427-0004", 
    hours: "Lunch 11:30am - 2:00pm
            Dinner 4:30pm - 10:30pm",
    payment_option: "AMEX, Dicover, MasterCard, Visa", 
    cuisine: "Brazillian Steakhouse",
    city_id: City.find_by(name: "San Francisco").id 
)

f1 = open("https://open-street-seed.s3-us-west-1.amazonaws.com/lamar1.jpg")
r1.photo.attach(io: f1, filename: "lamar1.jpg")

f2 = open("https://open-street-seed.s3-us-west-1.amazonaws.com/ozumo.jpg")
r2.photo.attach(io: f2, filename: "ozumo.jpg")

f3 = open("https://open-street-seed.s3-us-west-1.amazonaws.com/angler.jpg")
r3.photo.attach(io: f3, filename: "angler.jpg")

f4 = open("https://open-street-seed.s3-us-west-1.amazonaws.com/fogo.jpg")
r4.photo.attach(io: f4, filename: "fogo.jpg") 




