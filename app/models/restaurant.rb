class Restaurant < ActiveRecord::Base
  validates :name, :street_address, :city_zipcode, presence: true

  has_many :reviews
  has_many :taggings

  ratyrate_rateable "restaurant"
  geocoded_by :full_address
  after_validation :geocode

  include PgSearch
  multisearchable against: [:name, :street_address, :city_zipcode]

  def average_rating
    sum = reviews.inject(0) { |sum, review| sum + review.rating }
    reviews.length > 0 ? sum / reviews.length : 0
  end

  def full_address
    street_address + city_zipcode
  end
end
