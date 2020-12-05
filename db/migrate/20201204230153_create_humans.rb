class CreateHumans < ActiveRecord::Migration[5.2]
  def change
    create_table :humans do |t|
      t.date :birth_date
      t.time :birth_time
    end
  end
end
