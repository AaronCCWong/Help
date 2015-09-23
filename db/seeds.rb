Restaurant.create(
  name: 'Go!Go!Curry!',
  address: "231 Thompson St New York, NY 10012"
)

Restaurant.create(
  name: 'Blue Ribbon Fried Chicken',
  address: '28 E 1st St New York, NY 10003'
)

Restaurant.create(
  name: 'Meatball Shop',
  address: '84 Stanton St New York, NY 10002'
)

Restaurant.create(
  name: 'Chipotle',
  address: '625 Broadway New York, NY 10012'
)

User.create(
  first_name: 'Aaron',
  last_name: 'Wong',
  email: 'aarn.wong@gmail.com',
  password: 'password'
)

User.create(
  first_name: 'Aiven',
  last_name: 'Song',
  email: 'aiven.song@gmail.com',
  password: 'password'
)

User.create(
  first_name: 'Derek',
  last_name: 'Chan',
  email: 'derek.chan@gmail.com',
  password: 'password'
)

User.create(
  first_name: 'Ariel',
  last_name: 'Hou',
  email: 'ariel.hou@gmail.com',
  password: 'password'
)

User.create(
  first_name: 'Edmund',
  last_name: 'Wright',
  email: 'edmund.wright@gmail.com',
  password: 'password'
)

User.create(
  first_name: 'Jake',
  last_name: 'Park',
  email: 'jake.park@gmail.com',
  password: 'password'
)

User.create(
  first_name: 'Jordan',
  last_name: 'Roth',
  email: 'jordan.roth@gmail.com',
  password: 'password'
)

User.create(
  first_name: 'Leah',
  last_name: 'Lin',
  email: 'Leah.Lin@gmail.com',
  password: 'password'
)

User.create(
  first_name: 'Marwan',
  last_name: 'Sulaiman',
  email: 'Marwan.Sulaiman@gmail.com',
  password: 'password'
)

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
  rating: 5
)

Review.create(
  user_id: 3,
  restaurant_id: 2,
  body: 'After I eat here, I fall asleep while pair programming. You have to try the firebird!',
  rating: 5
)

Review.create(
  user_id: 8,
  restaurant_id: 1,
  body: 'If I didnt smell like curry all day that day, the day after, and even possibly the day after that, this place would get five stars. Stopped by here right after stopping by the uncommons as a quick bite and it was worth it! The food:  Im pretty snobby when it comes to East Asian curry. Even more so when it comes to donkatsu. But I was definitely satisfied here! For five or six dollars, this is some of the best food you can get. For a little extra, you can add a sausage, an egg, some deep fried shrimp, etc. Its great. The curry was slightly spicy but the hot sauce on premise makes it just right. The donkatsu was fried well and the rice was neither too little or too much in both quantify and overall doneness. The other add ons seemed interesting but Ill have to come again to try them out! The venue:  Small and cramped. It only has seating for maybe eight people at most. Definitely not a place to come sit and eat with a crowd or even when its rush hour. Come here late at night or just to grab something to-go. The service:  No real service here. Just order, get your order, eat, return tray. The guy was nice though if that counts. Overall would definitely come again to try their other options. Just maybe with a change of clothes wrapped in odorless bags.',
  rating: 4
)

Review.create(
  user_id: 5,
  restaurant_id: 1,
  body: 'This place rocks! If you want some delicious katsu curry without having to pay a bunch of money and tip to a waiter at some restaurant, this place is great! Beware, it reeks of fried food in there and you will too if you eat inside! Small place, you might as well go eat in Washington Square Park (a block away) anyways... Simple menu, good prices, service is usually (though not always) great! Check it out!',
  rating: 5
)
