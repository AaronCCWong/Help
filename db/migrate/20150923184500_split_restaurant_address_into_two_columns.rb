class SplitRestaurantAddressIntoTwoColumns < ActiveRecord::Migration
  def change
    remove_column :restaurants, :address, :string, null: false

    add_column :restaurants, :street_address, :string
    change_column :restaurants, :street_address, :string, null: false

    add_column :restaurants, :city_zipcode, :string
    change_column :restaurants, :city_zipcode, :string, null: false
  end
end
