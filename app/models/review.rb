class Review < ActiveRecord::Base
  validates :user_id, :restaurant_id, :body, presence: true
  validates :user_id, uniqueness: { scope: :restaurant_id,
    message: "cant only write one review per restaurant" }

  belongs_to :restaurant
  belongs_to :user

  has_many :helpfulness

  def useful_count
    count = 0
    helpfulness.each do |helpful|
      if helpful.helpfulness == 'Useful'
        count += 1
      end
    end

    count
  end

  def funny_count
    count = 0
    helpfulness.each do |helpful|
      if helpful.helpfulness == 'Funny'
        count += 1
      end
    end

    count
  end

  def cool_count
    count = 0
    helpfulness.each do |helpful|
      if helpful.helpfulness == 'Cool'
        count += 1
      end
    end

    count
  end
end
