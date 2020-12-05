class CreateRobots < ActiveRecord::Migration[5.2]
  def change
    create_table :robots do |t|
      t.date :birth_date
      t.time :birth_time
      t.timestamps
    end
  end
end
