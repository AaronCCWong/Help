class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.text :body, null: false
      t.integer :restaurant_id, null: false

      t.timestamps null: false
    end
    add_index :reviews, :user_id, unique: true
    add_index :reviews, :restaurant_id
  end
end
