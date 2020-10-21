class AddRestaurantIdToCitiesTable < ActiveRecord::Migration[5.2]
  def change
    add_column :cities, :restaurant_id, :integer, null: false
    add_index :cities, :restaurant_id 
  end
end
