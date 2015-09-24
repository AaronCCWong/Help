class ChangeLatLngColumnNames < ActiveRecord::Migration
  def change
    rename_column :restaurants, :lat, :latitude
    rename_column :restaurants, :lng, :longitude
  end
end
