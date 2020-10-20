class AddInfoAndRemoveDressCodeFromRestaurantsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :description, :text, null: false 
    remove_column :restaurants, :dress_code 
  end
end
