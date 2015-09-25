class Photo < ActiveRecord::Base
  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage/

  belongs_to :user
  belongs_to :restaurant
end
