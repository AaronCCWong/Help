class RemovePresenceValidationRestaurants < ActiveRecord::Migration
  def change
    remove_column :restaurants, :latitude, :decimal, null: false
    remove_column :restaurants, :longitude, :decimal, null: false

    add_column :restaurants, :latitude, :decimal
    add_column :restaurants, :longitude, :decimal
  end
end
