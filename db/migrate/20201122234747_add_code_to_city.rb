class AddCodeToCity < ActiveRecord::Migration[5.2]
  def change
    add_column :cities, :code, :string, null: false
  end
end
