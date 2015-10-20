class Review < ActiveRecord::Base
  validates :user_id, :restaurant_id, :body, presence: true
  validates :user_id, uniqueness: { scope: :restaurant_id,
    message: "can only write one review per restaurant" }

  belongs_to :restaurant
  belongs_to :user

  has_many :helpfulness

  def useful_count
    count = 0
    seen_users = []
    helpfulness.each do |helpful|
      if helpful.helpfulness == 'Useful' && !seen_users.include?(helpful.user_id)
        count += 1

        seen_users << helpful.user_id
      end
    end

    count
  end

  def funny_count
    count = 0
    seen_users = []
    helpfulness.each do |helpful|
      if helpful.helpfulness == 'Funny' && !seen_users.include?(helpful.user_id)
        count += 1

        seen_users << helpful.user_id
      end
    end

    count
  end

  def cool_count
    count = 0
    seen_users = []
    helpfulness.each do |helpful|
      if helpful.helpfulness == 'Cool' && !seen_users.include?(helpful.user_id)
        count += 1

        seen_users << helpful.user_id
      end
    end

    count
  end
end
