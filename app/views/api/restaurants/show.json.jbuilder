json.extract! @restaurant, :id, :name, :address
json.reviews do
  json.array! @restaurant.reviews do |review|
    json.extract! review, :body
  end
end
