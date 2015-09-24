class ChangeLatLngTypeToFloat < ActiveRecord::Migration
  def change
    remove_column :restaurants, :latitude, :decimal
    remove_column :restaurants, :longitude, :decimal

    add_column :restaurants, :latitude, :float
    add_column :restaurants, :longitude, :float
  end
end
