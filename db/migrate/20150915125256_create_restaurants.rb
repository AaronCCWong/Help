class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.name :string, null: false
      t.address :string, null: false

      t.timestamps null: false
    end
  end
end
