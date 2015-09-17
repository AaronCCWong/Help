class Restaurant < ActiveRecord::Base
  validates :name, :address, presence: true

  has_many :reviews

  ratyrate_rateable "restaurant"
end
