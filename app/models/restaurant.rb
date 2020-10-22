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
#
class Restaurant < ApplicationRecord

    validates :name, :address, :phone_num, :hours, :payment_option, :cuisine, :city_id, :description, presence: true 

    has_one_attached :photo

    belongs_to :city, 
        foreign_key: :city_id, 
        class_name: :City 
end 
