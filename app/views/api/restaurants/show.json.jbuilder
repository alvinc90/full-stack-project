json.extract! @restaurant, :id, :name, :address, :phone_num, :hours, :payment_option, :cuisine, :description, :city_id, :price
if @restaurant.photo.attached? 
    json.photoUrl url_for(@restaurant.photo)
else
    json.photoUrl ""
end
if @restaurant.photos.attached?
    json.photoUrls @restaurant.photos.map { |file| url_for(file) }
else 
    json.photoUrls ""
end