class Review < ActiveRecord::Base
  validates :user_id, :restaurant_id, :body, presence: true
  validates :user_id, uniqueness: true

  belongs_to :restaurant
  belongs_to :user
end
