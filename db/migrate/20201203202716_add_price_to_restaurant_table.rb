class AddPriceToRestaurantTable < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :price, :integer
    change_column_null :restaurants, :price, false
  end
end
