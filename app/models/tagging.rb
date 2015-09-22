class Tagging < ActiveRecord::Base
  validates :tag, :restaurant_id, presence: true

  belongs_to :restaurant
end
