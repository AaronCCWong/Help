json.extract! review, :body, :rating
json.user do
  json.partial! 'users/user', user: review.user
end
