class Restaurant < ActiveRecord::Base
  validates :name, :address, presence: true
end
