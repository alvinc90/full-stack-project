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
require 'test_helper'

class RestaurantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
