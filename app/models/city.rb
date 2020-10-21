# == Schema Information
#
# Table name: cities
#
#  id            :bigint           not null, primary key
#  name          :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  restaurant_id :integer          not null
#
class City < ApplicationRecord
    validates :name, presence: true

    has_many :restaurants, 
        foreign_key: :city_id,
        class_name: :Restaurant 
end
