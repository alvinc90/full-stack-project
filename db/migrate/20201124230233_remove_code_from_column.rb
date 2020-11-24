class RemoveCodeFromColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :cities, :code
  end
end
