json.extract! @restaurants, :id, :name, :address
json.reviews do
  json.array! @restaurants.reviews do |review|
    json.extract! review, :body
  end
end
