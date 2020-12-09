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
Reservation.delete_all
Menu.delete_all

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

u1 = User.create!(
    username: "alvin",
    password: "password",
    email: "alvin@alvin.com"
)

u2 = User.create!(
    username: "ryan",
    password: "password",
    email: "ryan@ryan.com"
)

u3 = User.create!(
    username: "chester",
    password: "password",
    email: "chester@chester.com"
)

u4 = User.create!(
    username: "melissa",
    password: "password",
    email: "melissa@melissa.com"
)

u5 = User.create!(
    username: "rachel",
    password: "password",
    email: "rachel@rachel.com"
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
    cuisine: "Peruvian",
    city_id: City.find_by(name: "San Francisco").id,
    price: 3
)

r2 = Restaurant.create!(
    name: "Ozumo",
    address: "161 Steuart Street San Francisco, CA 94105",
    description: "Innovative, Contemporary Japanese cuisine offered at this serene, elegant, Zen-garden inspired restaurant located in the heart of San Francisco's Embarcadero District. Breathtaking bay views, authentic modern Japanese design, 30-person sushi bar, open kitchen and robata grill, sleek and sophisticated Sake Lounge, and a monumental Sake list are among some of the qualities that set Ozumo apart from all other Bay Area Japanese restaurants.",
    phone_num: "(415) 882-1333", 
    hours: "Lunch 11:00am - 2:30pm
            Dinner 4:00pm - 9:30pm",
    payment_option: "AMEX, Dicover, MasterCard, Visa", 
    cuisine: "Japanese",
    city_id: City.find_by(name: "San Francisco").id,
    price: 3
)

r3 = Restaurant.create!(
    name: "Angler",
    address: "132 The Embarcadero, San Francisco, CA 94105",
    description: "Angler is a sea-life focused restaurant with views of the expansive wood burning hearth as well of the San Francisco Bay from Chef Joshua Skenes and Saison Hospitality. Each day’s inspiration is drawn from the products themselves and is an articulation of their natural flavors, served at their peak taste. We work with a small group of fishermen, hunters, gatherers, ranchers, and farmers to find and follow microclimates that produce the highest quality products in local existence. All of the cooking revolves around open wood fire and a fireplace designed for Chef Skenes's unique methodology, techniques, and tools for extracting the best tastes in our products. The expansive cellar features a particular emphasis on the wines of Burgundy as well as benchmark producers from our backyard in Napa and Sonoma. The bar program features carefully curated spirits from well-known and small-batched distillers, to specially sourced selections that date back sev",
    phone_num: "(415) 872-9442", 
    hours: "Lunch 11:00am - 2:00pm
            Dinner 5:30pm - 9:30pm",
    payment_option: "AMEX, Dicover, MasterCard, Visa", 
    cuisine: "American",
    city_id: City.find_by(name: "San Francisco").id,
    price: 4
)

r4 = Restaurant.create!(
    name: "Fogo de Chao",
    address: "201 S, 3rd St Suite 100, San Francisco, CA 94103",
    description: "Fogo de Chao is the leading Brazilian steakhouse specializing in fire-roasting high-quality meats since 1979 utilizing the centuries-old Southern Brazilian cooking technique of churrasco",
    phone_num: "(415) 427-0004", 
    hours: "Lunch 11:30am - 2:00pm
            Dinner 4:30pm - 10:30pm",
    payment_option: "AMEX, Dicover, MasterCard, Visa", 
    cuisine: "Brazillian",
    city_id: City.find_by(name: "San Francisco").id,
    price: 3
)

r5 = Restaurant.create!(
    name: "Jiang Nan",
    address: "103 Washington St 2nd floor, New York, NY 10006",
    description: "Here at Jiang Nan Restaurant, we work hard to ensure that your food is served Sichuan style It is also our full intention to provide you with the high quality of service that you deserve.",
    phone_num: "(718) 353-8855", 
    hours: "Daily 11:15am - 10:00pm",
    payment_option: "AMEX, Dicover, MasterCard, Visa", 
    cuisine: "Chinese",
    city_id: City.find_by(name: "New York").id,
    price: 2
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
    city_id: City.find_by(name: "New York").id,
    price: 3
)

r7 = Restaurant.create!(
    name: "Nusr-Et Steakhouse",
    address: "60 W 53rd St Ground Level New York, NY 10019",
    description: "Saltbae” is opening his second restaurant location in the United States after a very successful launch in Miami.Nusr-Et is one of the worlds most celebrated chefs that will enhance the New York dining experience, in the heart of Manhattan.Chef and founder Nusret Gokce is a master butcher for over twenty years and personally selects each and every cut of meat that is being served in his restaurant. Expert grillers and master butchers complete the magic on the charcoal grill. Nusr-Et steak house will provide a dining experience unlike any other. Guests will delight in the highly personal and engaging Turkish hospitality. Creative fish and seafood options for the non meat lovers will complete the enticing menu that allows guest to choose their own cut from the butcher display.",
    phone_num: "(212) 315-3660", 
    hours: "Daily 12:00pm - 11:00pm",
    payment_option: "AMEX, Dicover, MasterCard, Visa", 
    cuisine: "Turkish",
    city_id: City.find_by(name: "New York").id,
    price: 4
)

r8 = Restaurant.create!(
    name: "Per Se",
    address: "4th Floor Time Warner Center, 10 Columbus Cir, New York, 10019",
    description: "Per Se offers two prix fixe tasting menus a Tasting of Vegetables or the Chef’s Tasting Menu, which changes daily.",
    phone_num: "(212) 823-9335", 
    hours: "Mon-Fri 5:00pm - 11:00pm",
    payment_option: "AMEX, Dicover, MasterCard, Visa", 
    cuisine: "American",
    city_id: City.find_by(name: "New York").id,
    price: 4
)

r9 = Restaurant.create!(
    name: "Alinea",
    address: "1723 N Halsted St, Chicago, IL 60614",
    description: "Chef Grant Achatz draws foodies with New American tasting menus featuring highly creative plates.",
    phone_num: "unavailable", 
    hours: "Daily 5:00pm - 10:00pm",
    payment_option: "AMEX, Dicover, MasterCard, Visa", 
    cuisine: "Fine Dining",
    city_id: City.find_by(name: "Chicago").id,
    price: 4
)

r10 = Restaurant.create!(
    name: "Parlor Pizza Bar",
    address: "1723 N Halsted St, Chicago, IL 60614",
    description: "Industrial-chic pizzeria offering wood-fired pies & a bar with craft beer, plus outdoor seating.",
    phone_num: "(312) 600-6090", 
    hours: "Daily 11:00am - 11:00pm",
    payment_option: "AMEX, Dicover, MasterCard, Visa", 
    cuisine: "Pizzeria",
    city_id: City.find_by(name: "Chicago").id,
    price: 2
)

r11 = Restaurant.create!(
    name: "Kama Bistro",
    address: "9 South La Grange Rd. La Grange, IL 60525",
    description: "Kama Bistro is named after the Indian cupid, the god of love and passion, symbolizing the aesthetic pleasure of the senses. Indulge your senses and experience the passion Kama brings to its food and service, Following in the footsteps of Vikram’s father, a star chef in India, all dishes are prepared from scratch using only fresh ingredients. Traditional curries are elevated with freshly ground spices and time tested family recipes. Kama Indian Bistro aims to be unique, an exotic refuge from the daily grind, perfect for a romantic date, a dinner with friends or a quick appetizer and martini. Sink back into comfortable cushions with relaxing, upbeat music, enjoy the romantic atmosphere and escape from the everyday.",
    phone_num: "(708) 352-3300", 
    hours: "Lunch 11:00am - 3:00pm
            Dinner 5:00pm - 10:00pm",
    payment_option: "AMEX, Dicover, MasterCard, Visa", 
    cuisine: "Indian",
    city_id: City.find_by(name: "Chicago").id,
    price: 3
)

r12 = Restaurant.create!(
    name: "Autre Monde",
    address: "6727 Roosevelt Rd Berwyn, IL 60402",
    description: "Award winning, warm neighborhood restaurant with a European wine bar feel, farm to table sourcing & representing the flavors of Italy, Spain, Portugal, France, Greece and Morocco. Bar features over 70 wines, many available by the glass, a great craft cocktail program and tasty brews. Decor is eclectic making use of re-purposed materials and green technology wherever possible.",
    phone_num: "(708) 775-8122", 
    hours: "Lunch 10:00am - 2:00pm
            Dinner 5:00pm - 9:00pm",
    payment_option: "AMEX, Dicover, MasterCard, Visa", 
    cuisine: "Mediterranean",
    city_id: City.find_by(name: "Chicago").id,
    price: 2
)

r13 = Restaurant.create!(
    name: "Ombu Grill",
    address: "400 Western Ave #104 Los Angeles, CA 90020",
    description: "Ombu Grill is a casual chic Los Angeles Korean barbecue restaurant, featuring a twist of Argentinian asado in a unique mix of cuisines. Our premium quality Korean meats include favorites such as prime beef short ribs, pork, and seafood alongside authentic side dishes (banchan) and fresh salads. We also provide an Argentinian asado experience. Enjoy it alone, or pair the ribs with essential achuras for a complete parrillada combination.Guests delight in relaxing in our space with a modern and sophisticated ambiance. High backed booths and private rooms for small or large groups accommodate both personal and professional occasions, free from any loud interruptions or distractions. Strategic pops of color make for a trendy and inviting environment, while lush greenery provides a positive energy. Our high-tech smokeless grills are just one of many sleek details found at Ombu Grill",
    phone_num: "(213) 637-0262", 
    hours: "Daily 4:30pm - 10:00pm",
    payment_option: "AMEX, Dicover, MasterCard, Visa", 
    cuisine: "Korean",
    city_id: City.find_by(name: "Los Angeles").id,
    price: 2
)
r14 = Restaurant.create!(
    name: "HATCH Yakitori + Bar",
    address: "700 W 7th St Ste G600 Los Angeles, CA 90017",
    description: "HATCH is a modern Japanese grill that celebrates open fire skewers, a fresh raw bar and creative plates. Traditional Japanese cooking is fused with bold Californian flavors to deliver new takes on classic dishes. We pride in quality with our skewers grilled over binchotan charcoal and premium ingredients such as organic Jidori chicken that are locally sourced. We also offer a specialty cocktail program highlighting Japanese roots, a curated list of sake and rare Japanese whiskies. Step into a fun and casual dining experience paired with serious eats.",
    phone_num: "(213) 282-9070", 
    hours: "Daily 10:00am - 10:00pm",
    payment_option: "AMEX, Dicover, MasterCard, Visa", 
    cuisine: "Japanese",
    city_id: City.find_by(name: "Los Angeles").id,
    price: 2
)

r15 = Restaurant.create!(
    name: "Little Sister",
    address: "523 West 7th Street Los Angeles, CA 90014",
    description: "Little Sister DTLA features East-meets-West inspired dishes served in a relaxed social environment that feels more residential than restaurant, as if you're being invited into the Chef Tin's home. Little Sister's menu showcases Chef Tin's take on one of the more interesting and rich collisions of food and culture that was borne out of the European colonization of Southeast Asia. Dishes blend and balance the spices and flavors of Southeast Asia with French techniques and Dutch and British colonial influences. The menu is continually and progressively evolving, reflecting inspiration and theseasons. Scott Young along with Chef Tin curates the restaurant's wine and beverage program with a focus on intriguing labels, both domestically and from around the world. Craft beer selection includes special batches from The Brewery at Abigaile, brewed only for the restaurant.",
    phone_num: "(213) 628-3146", 
    hours: "Daily 10:00am - 10:00pm",
    payment_option: "AMEX, Dicover, MasterCard, Visa", 
    cuisine: "Southeast Asian",
    city_id: City.find_by(name: "Los Angeles").id,
    price: 2
)

r16 = Restaurant.create!(
    name: "C.O.D. Seafood & Raw Bar",
    address: "8408 W. 3rd Street Los Angeles, CA 90048",
    description: "Located on West 3rd Street near the Beverly Center, C.O.D is a modern seafood brasserie offering Asian-inspired Californian cuisine. Influenced by both the great fishing villages of China and our own Californian coast, C.O.D crafts the best of these worlds together on a plate. C.O.D also features two full-sized bars, an extensive wine collection and hand-crafted cocktails. C.O.D stands for “Catch of the Day” and describes our restaurant’s dedication to serving only the freshest and highest quality ingredients available on the market. Our fish is never frozen. Seafood is the focus at C.O.D, but everything else―from the microgreens to pork belly―is also presented at the peak of freshness.",
    phone_num: "(323) 658-9188", 
    hours: "Daily 12:00pm - 10:00pm",
    payment_option: "AMEX, Dicover, MasterCard, Visa", 
    cuisine: "Seafood",
    city_id: City.find_by(name: "Los Angeles").id,
    price: 3
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
    body: "It was much better than I expected. Everything was simply decadent. I found the ambiance to be very charming. They got a new customer for life!",
    overall: 5, food: 3, service: 3, ambience: 4,
    user_id: 1,
    restaurant_id: 7
)
rev2 = Review.create!(
    body: "Yummers! Make sure to save room for dessert, because that was the best part of the meal! The waiter was prompt and polite. Easily earned their 5 stars!",
    overall: 5, food: 5, service: 5, ambience: 5, 
    user_id: 1,
    restaurant_id: 6
)

rev3 = Review.create!(
    body: "Yummers! The food was flavorful, savory, and succulent. The desserts must be sprinkled with crack because I just craved for more and more. I was happy to see how clean everything was. This is definitely a spot I'll be frequenting",
    overall: 5, food: 3, service: 3, ambience: 4,
    user_id: 1,
    restaurant_id: 14
)

rev4 = Review.create!(
    body: "This is one of my favorite places. The waitress was prompt and polite. Everything from the starters to the entrees to the desserts meshed perfectly with my flavor-profile. Everything I tried was bursting with flavor. 5 stars!",
    overall: 5, food: 3, service: 3, ambience: 4,
    user_id: 1,
    restaurant_id: 9
)

rev5 = Review.create!(
    body: "This place had a lot of heart. The decor was unique and incredible. The entree I had was sublime. I removed a star because the hostess made a pass at me. So uncomfortable.",
    overall: 4, food: 3, service: 3, ambience: 4,
    user_id: 1,
    restaurant_id: 9
)

rev6 = Review.create!(
    body: "This place had a lot of heart. Everything was mostly decadent. Try out the huge selection of incredible appetizers. The decor was unique and incredible. Everything was just so yummy. I had to take one star away because my wine glass was dirty.",
    overall: 4, food: 3, service: 3, ambience: 4,
    user_id: 1,
    restaurant_id: 11
)

rev7 = Review.create!(
    body: "I have been here several times before. There were a lot of interesting decorations on the walls. Everything I tried was bursting with flavor. The food was flavorful, savory, and succulent. Everything was just so yummy. It failed to meet the 5-star experience because the busboy had really bad body odor",
    overall: 4, food: 3, service: 3, ambience: 4,
    user_id: 1,
    restaurant_id: 1
)

rev8 = Review.create!(
    body: "This place had a lot of heart. The ambiance gives off an earthy feel-good vibe. The service was good for the most part but the waitress was a bit slow. Everything was just so yummy. I docked them one star because the pork was a little undercooked.",
    overall: 4, food: 3, service: 3, ambience: 4,
    user_id: 1,
    restaurant_id: 13
)

rev9 = Review.create!(
    body: "Yumm-o! The decor was unique and incredible. Everything from the starters to the entrees to the desserts meshed perfectly with my flavor-profile. 5 stars!",
    overall: 5, food: 3, service: 3, ambience: 4,
    user_id: 2,
    restaurant_id: 16
)

rev10 = Review.create!(
    body: "Yummers! The food is simply to die for. I want to hire their decorator to furnish my apartment. The waitress was prompt and polite. 5 stars!",
    overall: 5, food: 3, service: 3, ambience: 4,
    user_id: 2,
    restaurant_id: 7
)

rev11 = Review.create!(
    body: "It was much better than I expected. The food is simply to die for. Try out the huge selection of incredible appetizers. Overall experience: 5 stars.",
    overall: 5, food: 3, service: 3, ambience: 4,
    user_id: 2,
    restaurant_id: 2
)

rev12 = Review.create!(
    body: "OMG! So good! Everything I tried was bursting with flavor. After my meal, I was knocked into a food coma. I'd give more than 5 stars if I could!",
    overall: 5, food: 3, service: 3, ambience: 4,
    user_id: 2,
    restaurant_id: 8
)

rev13 = Review.create!(
    body: "I have been here several times before. Everything I tried was bursting with flavor. Make sure to save room for dessert, because that was the best part of the meal! The entrees are simply to die for. I had to take one star away because my coffee mug was dirty.",
    overall: 4, food: 3, service: 3, ambience: 4,
    user_id: 2,
    restaurant_id: 12
)

rev14 = Review.create!(
    body: "This place was nearby and I decided to check it out. This was one of the best mouth-watering burgers I've had grace my taste buds in a long time. The waitress did an excellent job. There were a lot of interesting decorations on the walls. Everything I tried was bursting with flavor. Satisfactory experience, will come again.",
    overall: 4, food: 3, service: 3, ambience: 4,
    user_id: 2,
    restaurant_id: 13
)

rev15 = Review.create!(
    body: "This place had a lot of heart. Try out the huge selection of incredible appetizers. The decor was unique and incredible. I had to take one star away because the waiter touched the rim of my water glass.",
    overall: 4, food: 3, service: 3, ambience: 4,
    user_id: 2,
    restaurant_id: 15
)

rev16 = Review.create!(
    body: "This place had a lot of heart. Make sure to save room for dessert, because that was the best part of the meal! The food is simply to die for. I want to hire their decorator to furnish my house. It failed to meet the 5-star experience because the staff kept looking at me funny.",
    overall: 4, food: 3, service: 3, ambience: 4,
    user_id: 2,
    restaurant_id: 15
)

rev17 = Review.create!(
    body: "I felt like this place was trying too hard. Overhyped. The waiter was nothing remarkable. Overall, this place is just okay. I might come back.",
    overall: 3, food: 3, service: 3, ambience: 4,
    user_id: 3,
    restaurant_id: 6
)

rev18 = Review.create!(
    body: "I had high hopes for this place. The food was all right but seriously lacked presentation. The service was good for the most part but the waiter was a bit air-headed. The ambiance gives off an earthy feel-good vibe. Might be back. Time will tell.",
    overall: 3, food: 3, service: 3, ambience: 4,
    user_id: 3,
    restaurant_id: 15
)

rev19 = Review.create!(
    body: "This place was nearby and I decided to check it out. The tofu dish tasted spongy and a bit bland. The service wasn't that good and the waitress was air-headed. I felt the prices were too high given the quality of the food. 3 stars.",
    overall: 3, food: 3, service: 3, ambience: 4,
    user_id: 3,
    restaurant_id: 10
)

rev20 = Review.create!(
    body: "This place was just ok. I was not very pleased to find out that the coffee wasn't local. The food was all right but seriously lacked presentation. Overall, this place is just okay. I may come back",
    overall: 3, food: 3, service: 3, ambience: 4,
    user_id: 3,
    restaurant_id: 4
)

rev21 = Review.create!(
    body: "Oh my God! So good! The food is simply to die for. Try out the huge selection of incredible appetizers. I would eat here every day if I could afford it!",
    overall: 5, food: 3, service: 3, ambience: 4,
    user_id: 3,
    restaurant_id: 2
)

rev22 = Review.create!(
    body: "Oh my God! So good! Everything from the starters to the entrees to the desserts meshed perfectly with my flavor-profile. After my meal, I was knocked into a food coma. Everything I tried was bursting with flavor. Everything was just so yummy. I would eat here every day if I could afford it!",
    overall: 5, food: 3, service: 3, ambience: 4,
    user_id: 3,
    restaurant_id: 11
)

rev23 = Review.create!(
    body: "My taste buds are still singing from our last visit! Make sure to save room for dessert, because that was the best part of the meal! The entrees are simply to die for. I want to hire their decorator to furnish my apartment. Easily earned their 5 stars!",
    overall: 5, food: 3, service: 3, ambience: 4,
    user_id: 3,
    restaurant_id: 8
)

rev24 = Review.create!(
    body: "This is one of my favorite places. I was happy to see how clean everything was. I found the ambiance to be very charming. Overall experience: 5 stars.",
    overall: 5, food: 3, service: 3, ambience: 4,
    user_id: 3,
    restaurant_id: 5
)

rev25 = Review.create!(
    body: "Yumm-o! Everything from the starters to the entrees to the desserts meshed perfectly with my flavor-profile. The waitress did an excellent job. I found the ambiance to be very charming. Easily earned their 4 stars!",
    overall: 4, food: 3, service: 3, ambience: 4,
    user_id: 4,
    restaurant_id: 3
)

rev26 = Review.create!(
    body: "I have been here several times before. The ambiance gives off an earthy feel-good vibe. The desserts must be sprinkled with crack because I just craved for more and more. The entrees are simply to die for. I had to take one star away because the waiter touched the rim of my wine glass",
    overall: 4, food: 3, service: 3, ambience: 4,
    user_id: 4,
    restaurant_id: 12
)

rev27 = Review.create!(
    body: "This place had a lot of heart. The appetizers must be sprinkled with crack because I just craved for more and more. The entree I had was sublime. I want to hire their decorator to furnish my apartment. It could have been perfect, but the wait to get in was so long.",
    overall: 4, food: 3, service: 3, ambience: 4,
    user_id: 4,
    restaurant_id: 5
)

rev28 = Review.create!(
    body: "Decent place. Try out the huge selection of incredible appetizers. The service was good for the most part but the waiter was a bit slow. The ambiance gives off an earthy feel-good vibe. The food was cooked to perfection. Overall experience: 4 stars.",
    overall: 4, food: 3, service: 3, ambience: 4,
    user_id: 4,
    restaurant_id: 12
)

rev29 = Review.create!(
    body: "I've got a fetish for good food and this place gets me hot! I was happy to see how clean everything was. Everything I tried was bursting with flavor. The food was flavorful, savory, and succulent. Everything was just so yummy. 5 stars!",
    overall: 5, food: 3, service: 3, ambience: 4,
    user_id: 4,
    restaurant_id: 11
)

rev30 = Review.create!(
    body: "Best experience ever! I was happy to see how clean everything was. I want to hire their decorator to furnish my house. Everything was just so yummy. Easily earned their 5 stars!",
    overall: 5, food: 3, service: 3, ambience: 4,
    user_id: 4,
    restaurant_id: 4
)

rev31 = Review.create!(
    body: "Yumm-o! The food was flavorful, savory, and succulent. I was happy to see how clean everything was. Overall experience: 5 stars.",
    overall: 5, food: 3, service: 3, ambience: 4,
    user_id: 4,
    restaurant_id: 9
)

rev32 = Review.create!(
    body: "I stumbled on this undiscovered gem right in our neighboorhood. The food is simply to die for. The waitress was prompt and polite. Make sure to save room for dessert, because that was the best part of the meal! I was happy to see how clean everything was. I'm definitely coming back for more!",
    overall: 5, food: 3, service: 3, ambience: 4,
    user_id: 4,
    restaurant_id: 3
)

rev33 = Review.create!(
    body: "I am never coming back here! I felt the prices were too high given the quality of the food. There were a lot of interesting decorations on the walls. I was not very pleased to find out that the coffee wasn't fair trade. 2 stars",
    overall: 2, food: 3, service: 3, ambience: 4,
    user_id: 5,
    restaurant_id: 2
)

rev34 = Review.create!(
    body: "Best experience ever! Everything from the starters to the entrees to the desserts meshed perfectly with my flavor-profile. I found the ambiance to be very charming. The waiter did an excellent job. This is definitely a spot I'll be frequenting.",
    overall: 5, food: 3, service: 3, ambience: 4,
    user_id: 5,
    restaurant_id: 3
)

rev35 = Review.create!(
    body: "Best experience ever! Everything I tried was bursting with flavor. The waiter was prompt and polite. Everything was just so yummy. I'd give more than 5 stars if I could!",
    overall: 5, food: 3, service: 3, ambience: 4,
    user_id: 5,
    restaurant_id: 4
)

rev36 = Review.create!(
    body: "OMG! So yummy! Everything was just so yummy. Try out the huge selection of incredible appetizers. Everything I tried was bursting with flavor. The experience was heavenly as I was served a meal fit for God himself. They got a new customer for life!",
    overall: 5, food: 3, service: 3, ambience: 4,
    user_id: 5,
    restaurant_id: 16
)

rev37 = Review.create!(
    body: "My taste buds are still dancing from our last visit! The food is simply to die for. The decor was unique and incredible. Make sure to save room for dessert, because that was the best part of the meal! I was happy to see how clean everything was. This is definitely a spot I'll be frequenting.",
    overall: 5, food: 3, service: 3, ambience: 4,
    user_id: 5,
    restaurant_id: 10
)

rev38 = Review.create!(
    body: "This place was just ok. I felt the prices were too high given the quality of the food. The menu didn't match the one on their website. I would probably come back more often if the service was better.",
    overall: 3, food: 3, service: 3, ambience: 4,
    user_id: 5,
    restaurant_id: 14
)

rev39 = Review.create!(
    body: "I don't understand the hype about this place. Overhyped. I found the entrees to be somewhat agreeable to my personal flavor-profile. I felt the prices were too high given the quality of the food. Might be back. Time will tell.",
    overall: 3, food: 3, service: 3, ambience: 4,
    user_id: 5,
    restaurant_id: 10
)

rev40 = Review.create!(
    body: "I can summarize my visit in one word: Horrible. The service was terrible. The waiter was very slow. I threw up in my mouth a little when they brought me my food. I wish I could put a sign out front that said 'RUN AWAY!'",
    overall: 1, food: 3, service: 3, ambience: 4,
    user_id: 5,
    restaurant_id: 6
)

rev41 = Review.create!(
    body: "I can summarize my visit in one word: Horrible. The food sucked. The service sucked. Everything sucked. I was served dog food on a plate, but I wouldn't even feed it to my dog. I wish I could put a sign out front that said 'DON'T COME HERE!'",
    overall: 1, food: 3, service: 3, ambience: 4,
    user_id: 6,
    restaurant_id: 8
)

rev42 = Review.create!(
    body: "I must have ordered the wrong things because the food was terrible. The waitress was nothing remarkable. I shouldn't have to pay good money to be served vegetables from a can. I found the entrees to not be very agreeable to my personal flavor-profile. I would be hard pressed to come back.",
    overall: 2, food: 3, service: 3, ambience: 4,
    user_id: 6,
    restaurant_id: 7
)

rev43 = Review.create!(
    body: "I don't understand the hype about this place. The steak was a little dry. The menu didn't match the one on their website. Overhyped. Overall experience: 3 stars.",
    overall: 3, food: 3, service: 3, ambience: 4,
    user_id: 6,
    restaurant_id: 16
)

rev44 = Review.create!(
    body: "I have been here several times before. I found the ambiance to be very charming. The food was cooked to perfection. I could see myself being a regular here.",
    overall: 4, food: 3, service: 3, ambience: 4,
    user_id: 6,
    restaurant_id: 5
)

rev45 = Review.create!(
    body: "It was much better than I expected. This was one of the best mouth-watering burgers I've had grace my taste buds in a long time. The waitress was prompt and polite. I'd give more than 5 stars if I could!",
    overall: 5, food: 3, service: 3, ambience: 4,
    user_id: 6,
    restaurant_id: 14
)

rev46 = Review.create!(
    body: "Oh! My! God! So awesome! I was happy to see how clean everything was. Make sure to save room for dessert, because that was the best part of the meal! I'd give more than 5 stars if I could!",
    overall: 5, food: 3, service: 3, ambience: 4,
    user_id: 6,
    restaurant_id: 1
)

rev47 = Review.create!(
    body: "Yummers! The decor was unique and incredible. The food is simply to die for. I'd give more than 5 stars if I could!",
    overall: 5, food: 3, service: 3, ambience: 4,
    user_id: 6,
    restaurant_id: 13
)

rev48 = Review.create!(
    body: "Oh my God! So yummy! Everything was just so yummy. Everything I tried was bursting with flavor. This is definitely a spot I'll be frequenting.",
    overall: 5, food: 3, service: 3, ambience: 4,
    user_id: 6,
    restaurant_id: 1
)

fav1 = Favorite.create!(
    user_id: 6,
    restaurant_id: 1
)

fav2 = Favorite.create!(
    user_id: 6,
    restaurant_id: 2
)

fav3 = Favorite.create!(
    user_id: 6,
    restaurant_id: 3
)

fav4 = Favorite.create!(
    user_id: 6,
    restaurant_id: 4
)

fav5 = Favorite.create!(
    user_id: 1,
    restaurant_id: 2
)

fav6 = Favorite.create!(
    user_id: 1,
    restaurant_id: 3
)

reservation1 = Reservation.create!(
    num_guests: 6,
    date: "10-12-2020",
    time: "17:00",
    special_request: "Mama's birthday",
    reserved: true,
    user_id: 6,
    restaurant_id: 1
)

reservation2 = Reservation.create!(
    num_guests: 2,
    date: "15-12-2020",
    time: "20:00",
    special_request: "Anniversary",
    reserved: true,
    user_id: 6,
    restaurant_id: 9
)

reservation3 = Reservation.create!(
    num_guests: 4,
    date: "29-12-2020",
    time: "11:00",
    special_request: "One wheelchair accessible",
    reserved: true,
    user_id: 6,
    restaurant_id: 16
)

m1 = Menu.create!(
    restaurant_id: 1,
    dish_1: Faker::Food.dish,
    description_1: Faker::Food.description,
    dish_2: Faker::Food.dish,
    description_2: Faker::Food.description,
    dish_3: Faker::Food.dish,
    description_3: Faker::Food.description
)

m2 = Menu.create!(
    restaurant_id: 2,
    dish_1: "12 piece omakase",
    description_1: "#{Faker::Food.sushi}, #{Faker::Food.sushi}, #{Faker::Food.sushi}, #{Faker::Food.sushi}, #{Faker::Food.sushi}, #{Faker::Food.sushi}, #{Faker::Food.sushi}, #{Faker::Food.sushi}, #{Faker::Food.sushi}, #{Faker::Food.sushi}, #{Faker::Food.sushi}, #{Faker::Food.sushi}",
    dish_2: "8 piece omakase",
    description_2: "#{Faker::Food.sushi}, #{Faker::Food.sushi}, #{Faker::Food.sushi}, #{Faker::Food.sushi}, #{Faker::Food.sushi}, #{Faker::Food.sushi}, #{Faker::Food.sushi}, #{Faker::Food.sushi}, ",
    dish_3: "5 piece omakase",
    description_3: "#{Faker::Food.sushi}, #{Faker::Food.sushi}, #{Faker::Food.sushi}, #{Faker::Food.sushi}, #{Faker::Food.sushi}"
)

m3 = Menu.create!(
    restaurant_id: 3,
    dish_1: Faker::Food.dish,
    description_1: Faker::Food.description,
    dish_2: Faker::Food.dish,
    description_2: Faker::Food.description,
    dish_3: Faker::Food.dish,
    description_3: Faker::Food.description
)

m4 = Menu.create!(
    restaurant_id: 4,
    dish_1: Faker::Food.dish,
    description_1: Faker::Food.description,
    dish_2: Faker::Food.dish,
    description_2: Faker::Food.description,
    dish_3: Faker::Food.dish,
    description_3: Faker::Food.description
)

m5 = Menu.create!(
    restaurant_id: 5,
    dish_1: Faker::Food.dish,
    description_1: Faker::Food.description,
    dish_2: Faker::Food.dish,
    description_2: Faker::Food.description,
    dish_3: Faker::Food.dish,
    description_3: Faker::Food.description
)

m6 = Menu.create!(
    restaurant_id: 6,
    dish_1: Faker::Food.dish,
    description_1: Faker::Food.description,
    dish_2: Faker::Food.dish,
    description_2: Faker::Food.description,
    dish_3: Faker::Food.dish,
    description_3: Faker::Food.description
)

m7 = Menu.create!(
    restaurant_id: 7,
   dish_1: Faker::Food.dish,
    description_1: Faker::Food.description,
    dish_2: Faker::Food.dish,
    description_2: Faker::Food.description,
    dish_3: Faker::Food.dish,
    description_3: Faker::Food.description
)

m8 = Menu.create!(
    restaurant_id: 8,
    dish_1: "Chicken Liver Terrine",
    description_1: "Fried à l’Anglaise, Homemade Ham, Gruyère, Mushrooms, Sauce Suprême",
    dish_2: "Duck Leg Confit ",
    description_2: "Le Puy Lentils, Haricots Verts, Potato Purée, Green Peppercorn Jus",
    dish_3: "Gulf Flounder Stuffed with Spinach	",
    description_3: "Potato Confit, Melted Onions, Sorrel Beurre Blanc"
)

m9 = Menu.create!(
    restaurant_id: 9,
    dish_1: "Oysters And Pearls",
    description_1: "Sabayon of Pearl Tapioca with Island Creek Oysters and Regiis Ova Caviar",
    dish_2: "Celeriac Rémoulade",
    description_2: "Hen-of-the-Woods Mushrooms, Bitter Greens, Piedmont Hazelnut Vinaigrette, and Ginger Créme Fraîche",
    dish_3: "Berkshire Pork Belly",
    description_3: "Tokyo Turnips, Wilted Bok Choy, Toasted Cashews, and 'Sauce Périgourdine'"
)

m10 = Menu.create!(
    restaurant_id: 10,
    dish_1: Faker::Food.dish,
    description_1: Faker::Food.description,
    dish_2: Faker::Food.dish,
    description_2: Faker::Food.description,
    dish_3: Faker::Food.dish,
    description_3: Faker::Food.description
)

m11 = Menu.create!(
    restaurant_id: 11,
    dish_1: Faker::Food.dish,
    description_1: Faker::Food.description,
    dish_2: Faker::Food.dish,
    description_2: Faker::Food.description,
    dish_3: Faker::Food.dish,
    description_3: Faker::Food.description
)

m12 = Menu.create!(
    restaurant_id: 12,
    dish_1: Faker::Food.dish,
    description_1: Faker::Food.description,
    dish_2: Faker::Food.dish,
    description_2: Faker::Food.description,
    dish_3: Faker::Food.dish,
    description_3: Faker::Food.description
)

m13 = Menu.create!(
    restaurant_id: 13,
    dish_1: Faker::Food.dish,
    description_1: Faker::Food.description,
    dish_2: Faker::Food.dish,
    description_2: Faker::Food.description,
    dish_3: Faker::Food.dish,
    description_3: Faker::Food.description
)

m14 = Menu.create!(
    restaurant_id: 14,
    dish_1: Faker::Food.dish,
    description_1: Faker::Food.description,
    dish_2: Faker::Food.dish,
    description_2: Faker::Food.description,
    dish_3: Faker::Food.dish,
    description_3: Faker::Food.description
)

m15 = Menu.create!(
    restaurant_id: 15,
    dish_1: Faker::Food.dish,
    description_1: Faker::Food.description,
    dish_2: Faker::Food.dish,
    description_2: Faker::Food.description,
    dish_3: Faker::Food.dish,
    description_3: Faker::Food.description
)

m16 = Menu.create!(
    restaurant_id: 16,
    dish_1: Faker::Food.dish,
    description_1: Faker::Food.description,
    dish_2: Faker::Food.dish,
    description_2: Faker::Food.description,
    dish_3: Faker::Food.dish,
    description_3: Faker::Food.description
)












