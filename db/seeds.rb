Restaurant.create(
  name: 'Go!Go!Curry!',
  address: '231 Thompson St New York, NY 10012'
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
