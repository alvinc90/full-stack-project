class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :num_guests, null: false
      t.date :date, null: false
      t.time :time, null: false
      t.text :special_request
      t.boolean :reserved, default: false
      t.integer :user_id, null: false
      t.integer :restaurant_id, null: false
      t.timestamps
    end
    add_index :reservations, :user_id
    add_index :reservations, :restaurant_id
    add_index :reservations, :date
  end
end
