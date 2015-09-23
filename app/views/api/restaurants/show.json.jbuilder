json.extract! @restaurant, :id, :name, :street_address, :city_zipcode, :average_rating
json.reviews do
  json.array! @restaurant.reviews do |review|
    json.partial! 'api/reviews/review', review: review
  end
end

json.taggings do
  json.array! @restaurant.taggings do |tagging|
    json.partial! 'api/taggings/tagging', tagging: tagging
  end
end
