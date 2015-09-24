json.extract! review, :id, :body, :rating, :updated_at, :useful_count, :funny_count, :cool_count, :restaurant_id
json.user do
  json.partial! 'api/users/user', user: review.user
end

json.restaurant do
  json.partial! 'api/restaurants/restaurant', restaurant: review.restaurant
end

json.helpfulnesses do
  json.array! review.helpfulness do |helpful|
    json.partial! 'api/helpfulnesses/helpfulness', helpfulness: helpful
  end
end
