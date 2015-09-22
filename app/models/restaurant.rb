class Restaurant < ActiveRecord::Base
  validates :name, :address, presence: true

  has_many :reviews
  has_many :taggings

  ratyrate_rateable "restaurant"

  include PgSearch
  multisearchable against: [:name, :address]
end
