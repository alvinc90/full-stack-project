class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :address, null: false 
      t.string :phone_num, null: false 
      t.string :hours, null: false 
      t.string :payment_option, null: false 
      t.string :cuisine, null: false 
      t.string :dress_code, null: false 
      t.integer :city_id, null: false 
      t.integer :reviewer_id, null: false 
      t.timestamps
    end
    add_index :restaurants, :city_id
    add_index :restaurants, :reviewer_id
  end
end
