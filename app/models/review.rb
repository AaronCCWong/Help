class Review < ActiveRecord::Base
  validates :user_id, :restaurant_id, :body, presence: true
  validates :user_id, uniqueness: { scope: :restaurant_id,
    message: "cant only write one review per restaurant" }

  belongs_to :restaurant
  belongs_to :user
end
