json.extract! @restaurant, :id, :name, :address, :phone_num, :hours, :payment_option, :cuisine, :description, :city_id
if @restaurant.photo.attached? 
    json.photoUrl url_for(@restaurant.photo)
else
    json.photoUrl ""
end