class CreateTaggings < ActiveRecord::Migration
  def change
    create_table :taggings do |t|
      t.integer :restaurant_id, null: false
      t.string :tag, null: false

      t.timestamps null: false
    end
    add_index :taggings, :restaurant_id
  end
end
