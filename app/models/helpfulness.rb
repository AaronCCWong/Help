class Helpfulness < ActiveRecord::Base
  validates :helpfulness, :review_id, :user_id, presence: true

  belongs_to :review
  belongs_to :user
end
