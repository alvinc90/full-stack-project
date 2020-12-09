@menus.each do |menu|
    json.set! menu.id do
        json.extract! menu, :id, :restaurant_id, :dish_1, :dish_2, :dish_3, :description_1, :description_2, :description_3
    end
end