# Schema Information

## restaurants
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## reviews
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
restaurant_id | integer   | not null, foreign key (references restaurants)
user_id       | integer   | not null, foreign key (references users)
useful        | integer   | not null, default: 0
funny         | integer   | not null, default: 0
cool          | integer   | not null, default: 0

## useful
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users)
review_id   | integer   | not null, foreign key (references reviews)

## funny
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users)
review_id   | integer   | not null, foreign key (references reviews)

## cool
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users)
review_id   | integer   | not null, foreign key (references reviews)

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique

## taggings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
restaurant_id   | integer   | not null, foreign key (references restaurants)
tag             | string    | not null
