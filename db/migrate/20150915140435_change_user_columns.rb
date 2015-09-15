class ChangeUserColumns < ActiveRecord::Migration
  def change
    remove_column :users, :username

    add_column :users, :first_name, :string
    change_column :users, :first_name, :string, null: false

    add_column :users, :last_name, :string
    change_column :users, :last_name, :string, null: false

    add_column :users, :email, :string
    change_column :users, :email, :string, null: false
  end
end
