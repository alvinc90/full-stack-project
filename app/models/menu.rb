# == Schema Information
#
# Table name: menus
#
#  id            :bigint           not null, primary key
#  restaurant_id :integer          not null
#  dish_1        :string
#  description_1 :text
#  dish_2        :string
#  description_2 :text
#  dish_3        :string
#  description_3 :text
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Menu < ApplicationRecord
    validates :restaurant_id, presence: true

    belongs_to :restaurant,
        foreign_key: :restaurant_id,
        class_name: :Restaurant
end
