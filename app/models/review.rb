# == Schema Information
#
# Table name: reviews
#
#  id            :bigint           not null, primary key
#  body          :text             not null
#  overall       :integer          not null
#  food          :integer          not null
#  service       :integer          not null
#  ambience      :integer          not null
#  user_id       :integer          not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Review < ApplicationRecord
    validates :body, :overall, :food, :service, :ambience, :user_id, :restaurant_id, presence: true

    belongs_to :reviewer, 
        foreign_key: :user_id,
        class_name: :User

    belongs_to :restaurant, 
        foreign_key: :restaurant_id,
        class_name: :Restaurant
end
