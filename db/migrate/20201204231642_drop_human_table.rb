class DropHumanTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :humans
  end
end
