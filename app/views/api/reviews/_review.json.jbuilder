json.extract! review, :body, :rating
json.user do
  json.partial! 'api/users/user', user: review.user
end
