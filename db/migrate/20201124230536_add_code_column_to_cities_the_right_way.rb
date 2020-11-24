class AddCodeColumnToCitiesTheRightWay < ActiveRecord::Migration[5.2]
  def change
    add_column :cities, :code, :string
    change_column_null :cities, :code, false
  end
end
