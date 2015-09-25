json.extract! restaurant, :id, :name, :street_address, :city_zipcode, :average_rating, :latitude, :longitude, :number_of_reviews
json.photos restaurant.photos do |photo|
  json.image_url asset_path(photo.image.url(:original))
end
