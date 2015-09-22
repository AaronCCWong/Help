json.total_count @search_results.total_count

json.results do
  json.array! @search_results do |search_result|
    if search_result.searchable_type == "Restaurant"
      json.partial! "api/restaurants/restaurant", restaurant: search_result.searchable
      json._type "Restaurant"
    end
  end
end
