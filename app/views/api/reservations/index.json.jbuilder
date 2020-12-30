@reservations.each do |reservation|
    debugger
    json.set! reservation.id do
        json.extract! reservation, :id, :num_guests, :date, :time, :special_request, :reserved, :user_id, :restaurant_id
    end
end