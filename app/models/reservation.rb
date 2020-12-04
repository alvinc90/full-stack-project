# == Schema Information
#
# Table name: reservations
#
#  id              :bigint           not null, primary key
#  num_guests      :integer          not null
#  date            :date             not null
#  time            :time             not null
#  special_request :text
#  reserved        :boolean          default(FALSE)
#  user_id         :integer          not null
#  restaurant_id   :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Reservation < ApplicationRecord
    validates :num_guests, :date, :time, :user_id, :restaurant_id, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :restaurant, 
        foreign_key: :restaurant_id,
        class_name: :Restaurant
end
