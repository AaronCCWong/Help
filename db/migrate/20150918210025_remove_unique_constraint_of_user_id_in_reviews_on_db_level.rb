class RemoveUniqueConstraintOfUserIdInReviewsOnDbLevel < ActiveRecord::Migration
  def change
    remove_index :reviews, :user_id
    add_index :reviews, :user_id
  end
end
