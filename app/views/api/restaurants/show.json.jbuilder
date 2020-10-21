json.set! @restaurant.id do 
    json.extract! @restaurant, :id, :name, :address, :phone_num, :hours, :payment_option, :cuisine, :dress_code, :city_id
end