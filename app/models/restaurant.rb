class Restaurant < ActiveRecord::Base
  validates :name, :address, presence: true

  has_many :reviews
  has_many :taggings

  ratyrate_rateable "restaurant"

  include PgSearch
  multisearchable against: [:name, :address]

  def average_rating
    sum = reviews.inject(0) { |sum, review| sum + review.rating }
    sum / reviews.length
  end
end
