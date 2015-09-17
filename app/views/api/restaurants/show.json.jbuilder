json.extract! @restaurant, :id, :name, :address
json.reviews do
  json.array! @restaurant.reviews do |review|
    json.extract! review, :user_id, :body
    json.user do
      json.partial! 'users/user', user: review.user
    end
  end
end
