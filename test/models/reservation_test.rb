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
require 'test_helper'

class ReservationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
