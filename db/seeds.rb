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
Review.delete_all
Favorite.delete_all

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

r5 = Restaurant.create!(
    name: "Jiang Nan",
    address: "103 Washington St 2nd floor, New York, NY 10006",
    description: "Here at Jiang Nan Restaurant, we work hard to ensure that your food is served Sichuan style It is also our full intention to provide you with the high quality of service that you deserve.",
    phone_num: "(718) 353-8855", 
    hours: "Daily 11:15am - 10:00pm",
    payment_option: "AMEX, Dicover, MasterCard, Visa", 
    cuisine: "Chinese (Sichuan), Chinese (Shanghai), Chinese (Canton)",
    city_id: City.find_by(name: "New York").id
)

r6 = Restaurant.create!(
    name: "The Leopard at des Artistes",
    address: "1 West 67th St. New York, NY 10023",
    description: "Located in the New York landmarked Hotel Des Artistes, and surrounded by the astonishing 1920s murals by Howard Chandler Christy, THE LEOPARD at des Artistes cuisine respect the rich Italian cultural traditions, the absolute quality of ingredients, and the balance between dishes based on rural elements, such as pasta, vegetables, cheese, and seafood ingredients from the Mediterranean.",
    phone_num: "(212) 787-8767", 
    hours: "Lunch 11:30am - 3:00pm
            Dinner 5:00pm - 9:30pm",
    payment_option: "AMEX, Dicover, MasterCard, Visa", 
    cuisine: "Italian",
    city_id: City.find_by(name: "New York").id
)

r7 = Restaurant.create!(
    name: "Nusr-Et Steakhouse",
    address: "60 W 53rd St Ground Level New York, NY 10019",
    description: "Saltbae” is opening his second restaurant location in the United States after a very successful launch in Miami.Nusr-Et is one of the worlds most celebrated chefs that will enhance the New York dining experience, in the heart of Manhattan.Chef and founder Nusret Gokce is a master butcher for over twenty years and personally selects each and every cut of meat that is being served in his restaurant. Expert grillers and master butchers complete the magic on the charcoal grill. Nusr-Et steak house will provide a dining experience unlike any other. Guests will delight in the highly personal and engaging Turkish hospitality. Creative fish and seafood options for the non meat lovers will complete the enticing menu that allows guest to choose their own cut from the butcher display.",
    phone_num: "(212) 315-3660", 
    hours: "Daily 12:00pm - 11:00pm",
    payment_option: "AMEX, Dicover, MasterCard, Visa", 
    cuisine: "Steakhouse, Steak",
    city_id: City.find_by(name: "New York").id
)

r8 = Restaurant.create!(
    name: "Per Se",
    address: "4th Floor Time Warner Center, 10 Columbus Cir, New York, 10019",
    description: "Per Se offers two prix fixe tasting menus a Tasting of Vegetables or the Chef’s Tasting Menu, which changes daily.",
    phone_num: "(212) 823-9335", 
    hours: "Mon-Fri 5:00pm - 11:00pm",
    payment_option: "AMEX, Dicover, MasterCard, Visa", 
    cuisine: "American",
    city_id: City.find_by(name: "New York").id
)

r9 = Restaurant.create!(
    name: "Alinea",
    address: "1723 N Halsted St, Chicago, IL 60614",
    description: "Chef Grant Achatz draws foodies with New American tasting menus featuring highly creative plates.",
    phone_num: "unavailable", 
    hours: "Daily 5:00pm - 10:00pm",
    payment_option: "AMEX, Dicover, MasterCard, Visa", 
    cuisine: "Fine Dining",
    city_id: City.find_by(name: "Chicago").id
)

r10 = Restaurant.create!(
    name: "Parlor Pizza Bar",
    address: "1723 N Halsted St, Chicago, IL 60614",
    description: "Industrial-chic pizzeria offering wood-fired pies & a bar with craft beer, plus outdoor seating.",
    phone_num: "(312) 600-6090", 
    hours: "Daily 11:00am - 11:00pm",
    payment_option: "AMEX, Dicover, MasterCard, Visa", 
    cuisine: "American, Pizzeria",
    city_id: City.find_by(name: "Chicago").id
)

r11 = Restaurant.create!(
    name: "Kama Bistro",
    address: "9 South La Grange Rd. La Grange, IL 60525",
    description: "Kama Bistro is named after the Indian cupid, the god of love and passion, symbolizing the aesthetic pleasure of the senses. Indulge your senses and experience the passion Kama brings to its food and service, Following in the footsteps of Vikram’s father, a star chef in India, all dishes are prepared from scratch using only fresh ingredients. Traditional curries are elevated with freshly ground spices and time tested family recipes. Kama Indian Bistro aims to be unique, an exotic refuge from the daily grind, perfect for a romantic date, a dinner with friends or a quick appetizer and martini. Sink back into comfortable cushions with relaxing, upbeat music, enjoy the romantic atmosphere and escape from the everyday.",
    phone_num: "(708) 352-3300", 
    hours: "Lunch 11:00am - 3:00pm
            Dinner 5:00pm - 10:00pm",
    payment_option: "AMEX, Dicover, MasterCard, Visa", 
    cuisine: "Indian, French, American",
    city_id: City.find_by(name: "Chicago").id
)

r12 = Restaurant.create!(
    name: "Autre Monde",
    address: "6727 Roosevelt Rd Berwyn, IL 60402",
    description: "Award winning, warm neighborhood restaurant with a European wine bar feel, farm to table sourcing & representing the flavors of Italy, Spain, Portugal, France, Greece and Morocco. Bar features over 70 wines, many available by the glass, a great craft cocktail program and tasty brews. Decor is eclectic making use of re-purposed materials and green technology wherever possible.",
    phone_num: "(708) 775-8122", 
    hours: "Lunch 10:00am - 2:00pm
            Dinner 5:00pm - 9:00pm",
    payment_option: "AMEX, Dicover, MasterCard, Visa", 
    cuisine: "Mediterranean, Tapas / Small Plates",
    city_id: City.find_by(name: "Chicago").id
)

r13 = Restaurant.create!(
    name: "Ombu Grill",
    address: "400 Western Ave #104 Los Angeles, CA 90020",
    description: "Ombu Grill is a casual chic Los Angeles Korean barbecue restaurant, featuring a twist of Argentinian asado in a unique mix of cuisines. Our premium quality Korean meats include favorites such as prime beef short ribs, pork, and seafood alongside authentic side dishes (banchan) and fresh salads. We also provide an Argentinian asado experience. Enjoy it alone, or pair the ribs with essential achuras for a complete parrillada combination.Guests delight in relaxing in our space with a modern and sophisticated ambiance. High backed booths and private rooms for small or large groups accommodate both personal and professional occasions, free from any loud interruptions or distractions. Strategic pops of color make for a trendy and inviting environment, while lush greenery provides a positive energy. Our high-tech smokeless grills are just one of many sleek details found at Ombu Grill",
    phone_num: "(213) 637-0262", 
    hours: "Daily 4:30pm - 10:00pm",
    payment_option: "AMEX, Dicover, MasterCard, Visa", 
    cuisine: "Korean, Argentinean",
    city_id: City.find_by(name: "Los Angeles").id
)
r14 = Restaurant.create!(
    name: "HATCH Yakitori + Bar",
    address: "700 W 7th St Ste G600 Los Angeles, CA 90017",
    description: "HATCH is a modern Japanese grill that celebrates open fire skewers, a fresh raw bar and creative plates. Traditional Japanese cooking is fused with bold Californian flavors to deliver new takes on classic dishes. We pride in quality with our skewers grilled over binchotan charcoal and premium ingredients such as organic Jidori chicken that are locally sourced. We also offer a specialty cocktail program highlighting Japanese roots, a curated list of sake and rare Japanese whiskies. Step into a fun and casual dining experience paired with serious eats.",
    phone_num: "(213) 282-9070", 
    hours: "Daily 10:00am - 10:00pm",
    payment_option: "AMEX, Dicover, MasterCard, Visa", 
    cuisine: "Japanese, Izakaya",
    city_id: City.find_by(name: "Los Angeles").id
)

r15 = Restaurant.create!(
    name: "Little Sister",
    address: "523 West 7th Street Los Angeles, CA 90014",
    description: "Little Sister DTLA features East-meets-West inspired dishes served in a relaxed social environment that feels more residential than restaurant, as if you're being invited into the Chef Tin's home. Little Sister's menu showcases Chef Tin's take on one of the more interesting and rich collisions of food and culture that was borne out of the European colonization of Southeast Asia. Dishes blend and balance the spices and flavors of Southeast Asia with French techniques and Dutch and British colonial influences. The menu is continually and progressively evolving, reflecting inspiration and theseasons. Scott Young along with Chef Tin curates the restaurant's wine and beverage program with a focus on intriguing labels, both domestically and from around the world. Craft beer selection includes special batches from The Brewery at Abigaile, brewed only for the restaurant.",
    phone_num: "(213) 628-3146", 
    hours: "Daily 10:00am - 10:00pm",
    payment_option: "AMEX, Dicover, MasterCard, Visa", 
    cuisine: "Southeast Asian, Asian, Seafood",
    city_id: City.find_by(name: "Los Angeles").id
)

r16 = Restaurant.create!(
    name: "C.O.D. Seafood & Raw Bar",
    address: "8408 W. 3rd Street Los Angeles, CA 90048",
    description: "Located on West 3rd Street near the Beverly Center, C.O.D is a modern seafood brasserie offering Asian-inspired Californian cuisine. Influenced by both the great fishing villages of China and our own Californian coast, C.O.D crafts the best of these worlds together on a plate. C.O.D also features two full-sized bars, an extensive wine collection and hand-crafted cocktails. C.O.D stands for “Catch of the Day” and describes our restaurant’s dedication to serving only the freshest and highest quality ingredients available on the market. Our fish is never frozen. Seafood is the focus at C.O.D, but everything else―from the microgreens to pork belly―is also presented at the peak of freshness.",
    phone_num: "(323) 658-9188", 
    hours: "Daily 12:00pm - 10:00pm",
    payment_option: "AMEX, Dicover, MasterCard, Visa", 
    cuisine: "Seafood, Oyster Bar, Contemporary Asian",
    city_id: City.find_by(name: "Los Angeles").id
)

f1 = open("https://open-street-seed.s3-us-west-1.amazonaws.com/lamar1.jpg")
r1.photo.attach(io: f1, filename: "lamar1.jpg")

f2 = open("https://open-street-seed.s3-us-west-1.amazonaws.com/ozumo.jpg")
r2.photo.attach(io: f2, filename: "ozumo.jpg")

f3 = open("https://open-street-seed.s3-us-west-1.amazonaws.com/angler.jpg")
r3.photo.attach(io: f3, filename: "angler.jpg")

f4 = open("https://open-street-seed.s3-us-west-1.amazonaws.com/fogo.jpg")
r4.photo.attach(io: f4, filename: "fogo.jpg") 

f5 = open("https://open-street-seed.s3-us-west-1.amazonaws.com/jiangnan.jpg")
r5.photo.attach(io: f5, filename: "jiangnan.jpg") 

f6 = open("https://open-street-seed.s3-us-west-1.amazonaws.com/leopard.jpeg")
r6.photo.attach(io: f6, filename: "leopardc.jpeg")

f7 = open("https://open-street-seed.s3-us-west-1.amazonaws.com/nurse.jpg")
r7.photo.attach(io: f7, filename: "nurse.jpg")

f8 = open("https://open-street-seed.s3-us-west-1.amazonaws.com/perse.jpg")
r8.photo.attach(io: f8, filename: "perse.jpg")

f9 = open("https://open-street-seed.s3-us-west-1.amazonaws.com/alinea.jpg")
r9.photo.attach(io: f9, filename: "alinea.jpg")

f10 = open("https://open-street-seed.s3-us-west-1.amazonaws.com/pizza.jpg")
r10.photo.attach(io: f10, filename: "pizza.jpg")

f11 = open("https://open-street-seed.s3-us-west-1.amazonaws.com/kama.jpg")
r11.photo.attach(io: f11, filename: "kama.jpg")

f12 = open("https://open-street-seed.s3-us-west-1.amazonaws.com/autre.jpg")
r12.photo.attach(io: f12, filename: "autre.jpg")

f13 = open("https://open-street-seed.s3-us-west-1.amazonaws.com/ombu+grill.jpg")
r13.photo.attach(io: f13, filename: "ombu.jpg")

f14 = open("https://open-street-seed.s3-us-west-1.amazonaws.com/hatch.jpg")
r14.photo.attach(io: f14, filename: "hatch.jpg")

f15 = open("https://open-street-seed.s3-us-west-1.amazonaws.com/littlesister.jpg")
r15.photo.attach(io: f15, filename: "littlesister.jpg")

f16 = open("https://open-street-seed.s3-us-west-1.amazonaws.com/cod.jpg")
r16.photo.attach(io: f16, filename: "cod.jpg")


rev1 = Review.create!(
    body: "First review test",
    overall: 1,
    food: 2,
    service: 3,
    ambience: 4,
    user_id: 1,
    restaurant_id: 1
)
rev2 = Review.create!(
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consequatur magnam voluptate maxime molestias dolor veritatis dignissimos sint reiciendis enim assumenda aut quod facere nulla aspernatur eaque, dicta vero tempora. Sapiente recusandae voluptatem voluptate, neque quod mollitia esse voluptatum impedit blanditiis distinctio soluta debitis accusamus officiis. Expedita quam amet est necessitatibus aperiam non veritatis magnam odio perspiciatis asperiores! Quod, animi. Vitae quam dignissimos delectus laudantium, sapiente debitis magnam totam quaerat accusamus repellat labore adipisci recusandae dolore cum rem iste veniam nihil? At quidem nostrum sapiente, repellendus cumque reiciendis debitis porro iste, odio esse impedit possimus animi libero ipsam numquam voluptates nam deleniti ipsa cupiditate nemo excepturi? Repudiandae culpa rem sequi ad laboriosam blanditiis id eligendi, deleniti necessitatibus quidem? Ea, aperiam!",
    overall: 5,
    food: 5,
    service: 5,
    ambience: 5,
    user_id: 2,
    restaurant_id: 1
)
rev3 = Review.create!(
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consequatur magnam voluptate maxime molestias dolor veritatis dignissimos sint reiciendis enim assumenda aut quod facere nulla aspernatur eaque, dicta vero tempora. Sapiente recusandae voluptatem voluptate, neque quod mollitia esse voluptatum impedit blanditiis distinctio soluta debitis accusamus officiis. Expedita quam amet est necessitatibus aperiam non veritatis magnam odio perspiciatis asperiores! Quod, animi. Vitae quam dignissimos delectus laudantium, sapiente debitis magnam totam quaerat accusamus repellat labore adipisci recusandae dolore cum rem iste veniam nihil? At quidem nostrum sapiente, repellendus cumque reiciendis debitis porro iste, odio esse impedit possimus animi libero ipsam numquam voluptates nam deleniti ipsa cupiditate nemo excepturi? Repudiandae culpa rem sequi ad laboriosam blanditiis id eligendi, deleniti necessitatibus quidem? Ea, aperiam!",
    overall: 1,
    food: 2,
    service: 3,
    ambience: 4,
    user_id: 3,
    restaurant_id: 1
)

fav1 = Favorite.create!(
    user_id: 3,
    restaurant_id: 1
)

fav2 = Favorite.create!(
    user_id: 3,
    restaurant_id: 2
)










