json.extract! review, :body, :rating, :updated_at
json.user do
  json.partial! 'api/users/user', user: review.user
end

json.restaurant do
  json.partial! 'api/restaurants/restaurant', restaurant: review.restaurant
end
