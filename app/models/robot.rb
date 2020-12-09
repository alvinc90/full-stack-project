# == Schema Information
#
# Table name: robots
#
#  id         :bigint           not null, primary key
#  birth_date :date
#  birth_time :time
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Robot < ApplicationRecord
end
