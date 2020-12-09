# == Schema Information
#
# Table name: restaurants
#
#  id             :bigint           not null, primary key
#  name           :string           not null
#  address        :string           not null
#  phone_num      :string           not null
#  hours          :string           not null
#  payment_option :string           not null
#  cuisine        :string           not null
#  city_id        :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  description    :text             not null
#  price          :integer          not null
#
class Restaurant < ApplicationRecord

    validates :name, :address, :phone_num, :hours, :payment_option, :cuisine, :city_id, :description, presence: true 

    has_one_attached :photo

    belongs_to :city, 
        foreign_key: :city_id, 
        class_name: :City 

    has_many :reviews, 
        foreign_key: :restaurant_id, 
        class_name: :Review
    
    has_many :customers_reviewed, 
        through: :reviews, 
        source: :reviewer

    has_many :favorites,
        foreign_key: :restaurant_id,
        class_name: :Favorite

    has_many :follower, 
        through: :favorites,
        source: :user

    has_many :reservations, 
        foreign_key: :restaurant_id, 
        class_name: :Reservation

    has_many :customer_reservations,
        through: :reservations,
        source: :user

    has_many :menus,
        foreign_key: :restaurant_id,
        class_name: :Menu
end 
