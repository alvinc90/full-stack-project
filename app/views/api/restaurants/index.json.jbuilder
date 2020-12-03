@restaurants.each do |restaurant|
json.set! restaurant.id do 
    json.extract! restaurant, :id, :name, :address, :phone_num, :hours, :payment_option, :cuisine, :description, :city_id, :price
        if restaurant.photo.attached?
            json.photourl url_for(restaurant.photo)
        else
            json.photourl ""
        end
    end
end