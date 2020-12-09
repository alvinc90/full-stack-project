class CreateMenus < ActiveRecord::Migration[5.2]
  def change
    create_table :menus do |t|
      t.integer :restaurant_id, null: false
      t.string :dish_1
      t.text :description_1
      t.string :dish_2
      t.text :description_2
      t.string :dish_3
      t.text :description_3
      t.timestamps
    end
    add_index :menus, :restaurant_id
  end
end
