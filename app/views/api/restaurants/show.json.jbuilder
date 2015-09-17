json.extract! @restaurant, :id, :name, :address
json.reviews do
  json.array! @restaurant.reviews do |review|
    json.partial! 'api/reviews/review', review: review
  end
end
