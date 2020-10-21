class RemoveColumnAndIndexFromCitiesTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :cities, :restaurant_id
  end
end
