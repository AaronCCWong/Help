class Restaurant < ActiveRecord::Base
  validates :name, :street_address, :city_zipcode, presence: true

  has_many :reviews
  has_many :taggings

  ratyrate_rateable "restaurant"

  include PgSearch
  multisearchable against: [:name, :street_address, :city_zipcode]

  def average_rating
    sum = reviews.inject(0) { |sum, review| sum + review.rating }
    sum / reviews.length
  end
end
