class AddLatLngToRestaurants < ActiveRecord::Migration
  def change
    add_column :restaurants, :lat, :decimal
    add_column :restaurants, :lng, :decimal

    change_column :restaurants, :lat, :decimal, null: false
    change_column :restaurants, :lng, :decimal, null: false
  end
end
