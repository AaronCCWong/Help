class Helpfulness < ActiveRecord::
  validates :helpfulness, :review_id, :user_id, presence: true
end
