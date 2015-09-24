Restaurant.create(
  name: 'Go!Go!Curry!',
  street_address: '231 Thompson St',
  city_zipcode: 'New York, NY 10012',
  latitude: 40.729500,
  longitude: -73.999026
)

Restaurant.create(
  name: 'Blue Ribbon Fried Chicken',
  street_address: '28 E 1st St',
  city_zipcode: 'New York, NY 10003',
  latitude: 40.724535,
  longitude: -73.991019
)

Restaurant.create(
  name: 'Meatball Shop',
  street_address: '84 Stanton St',
  city_zipcode: 'New York, NY 10002',
  latitude: 40.721660,
  longitude: -73.988781
)

Restaurant.create(
  name: 'Chipotle',
  street_address: '625 Broadway',
  city_zipcode: 'New York, NY 10012',
  latitude: 40.726052,
  longitude: -73.996539
)

u = User.create(
  first_name: 'Aaron',
  last_name: 'Wong',
  email: 'aarn.wong@gmail.com',
  password: 'password'
)
# u.avatar = File.open('/Users/aaronwong/desktop/yelp-clone/app/assets/images/aaron-wong.jpg')
# u.save!

u = User.create(
  first_name: 'Aiven',
  last_name: 'Song',
  email: 'aiven.song@gmail.com',
  password: 'password'
)
# u.avatar = File.open('/Users/aaronwong/desktop/yelp-clone/app/assets/images/aiven-song.jpg')
# u.save!

u = User.create(
  first_name: 'Derek',
  last_name: 'Chan',
  email: 'derek.chan@gmail.com',
  password: 'password'
)
# u.avatar = File.open('/Users/aaronwong/desktop/yelp-clone/app/assets/images/derek-chan.jpg')
# u.save!

u = User.create(
  first_name: 'Ariel',
  last_name: 'Hou',
  email: 'ariel.hou@gmail.com',
  password: 'password'
)
# u.avatar = File.open('/Users/aaronwong/desktop/yelp-clone/app/assets/images/ariel-hou.jpg')
# u.save!

u = User.create(
  first_name: 'Edmund',
  last_name: 'Wright',
  email: 'edmund.wright@gmail.com',
  password: 'password'
)
# u.avatar = File.open('/Users/aaronwong/desktop/yelp-clone/app/assets/images/edmund-wright.jpg')
# u.save!

u = User.create(
  first_name: 'Jake',
  last_name: 'Park',
  email: 'jake.park@gmail.com',
  password: 'password'
)
# u.avatar = File.open('/Users/aaronwong/desktop/yelp-clone/app/assets/images/jake-park.jpg')
# u.save!

u = User.create(
  first_name: 'Jordan',
  last_name: 'Roth',
  email: 'jordan.roth@gmail.com',
  password: 'password'
)
# u.avatar = File.open('/Users/aaronwong/desktop/yelp-clone/app/assets/images/jordan-roth.jpg')
# u.save!

u = User.create(
  first_name: 'Leah',
  last_name: 'Lin',
  email: 'Leah.Lin@gmail.com',
  password: 'password'
)
# u.avatar = File.open('/Users/aaronwong/desktop/yelp-clone/app/assets/images/leah-lin.jpg')
# u.save!

u = User.create(
  first_name: 'Marwan',
  last_name: 'Sulaiman',
  email: 'Marwan.Sulaiman@gmail.com',
  password: 'password'
)
# u.avatar = File.open('/Users/aaronwong/desktop/yelp-clone/app/assets/images/marwan-sulaiman.jpg')
# u.save!

Review.create(
  user_id: 1,
  restaurant_id: 1,
  body: 'I can eat here all day!',
  rating: 5
)

Review.create(
  user_id: 2,
  restaurant_id: 1,
  body: 'They give so much food for the price. I always have leftovers after lunch.',
  rating: 4
)

Review.create(
  user_id: 3,
  restaurant_id: 2,
  body: 'After I eat here, I fall asleep while pair programming. You have to try the firebird!',
  rating: 5
)

Review.create(
  user_id: 8,
  restaurant_id: 3,
  body: 'Way too noisy and the communal seating is way too cramped. The meatballs are nothing special at all. I ordered vegetarian meatballs but they gave me the wrong order. I am vegetarian so it was really bad. I was so mad. Dont believe the hype about this place. The food is mediocre at best. The service is the worst.',
  rating: 1
)

Review.create(
  user_id: 5,
  restaurant_id: 3,
  body: 'I decided to take a weekend trip to NYC and in my 48 hours there I decided I really wanted to eat here. I hauled my ass all the way there in the freezing cold all the while telling my friends how awesome this place is. BIG MISTAKE. For some reason I actually read the entire menu and discovered that they have PORK in ALL of their meatballs except the veggie balls. Imagine my disappointment when I learned that the place I worked so hard to get to puts PORK in every item. I was pissed. But that wasnt the best part. When I asked the waitress about this, she stated it was true and proceeded to explain why PORK wasnt that bad. She informed us that it was a white meat and it was actually good for you and then told us she was a VEGETARIAN. Youre trying to convince me that PORK isnt that bad when clearly Im not eating it for religious reasons and youre a vegetarian? I thought that was kind of ridiculous. I ended up ordering the veggie balls and was very unhappy with my meal. I still thoroughly enjoyed the salad and the ice cream sandwiches but the fact that they tell their customers that PORK is in every meatball in tiny fine print at the bottom really pisses me off. Im sorry but when I order a veggie meatball, I dont expect there to be pork in it. Ill never return again. P.S. I really think they should change their name to The PORK MEATBALL SHOP.',
  rating: 1
)

Review.create(
  user_id: 9,
  restaurant_id: 2,
  body: 'Good chicken but I left here hungry. Came here on a late night starving and ordered the "Wing Man". This place is indeed unique and way better than other fast food chicken places such as Popeyes and KFC. They have a  nice selection of sauces and soda flavors. Unfortunately my meal was not fulfilling. It came with 3 tiny pieces of chicken, a basket full of fries and cole slaw. The chicken was seasoned very well with a great dry rub and the fries were very good. Cole slaw was pretty good as well. I would have easily given this place 3.5-4 stars because it is indeed good fast food but the prices dont match up with the portions. Extra pieces of chicken start at $3 and up for just one piece. I was ready to entirely eat another meal after finishing. I would definitely come back here but next time I would like to try a sandwich which hopefully will be more filling.',
  rating: 3
)

Review.create(
  user_id: 4,
  restaurant_id: 1,
  body: 'Hole-in-the-wall curry shop near NYU, with an excellent katsukare- (freshly fried pork cutlet with rich curry sauce on a generous rice portion.  Other customers looked very satisfied with chicken katsu, or even the plain curry on rice.  Not many frills, but good food quickly at a great price. Whenever I come here, my boyfriend always makes me bring home a grand slam for him. He threatens to not pay the rent if I do not.',
  rating: 5
)
