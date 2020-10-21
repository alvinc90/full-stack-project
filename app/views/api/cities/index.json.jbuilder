@cities.each do |city|
    json.set! city.id do 
        json.extract! city, :id, :name
    end
end

# json.extract! @cities, :id, :name
 