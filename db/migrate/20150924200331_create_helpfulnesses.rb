class CreateHelpfulnesses < ActiveRecord::Migration
  def change
    create_table :helpfulnesses do |t|
      t.string :helpfulness, null: false
      t.integer :review_id, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
    add_index :helpfulnesses, :review_id
    add_index :helpfulnesses, :user_id
  end
end
