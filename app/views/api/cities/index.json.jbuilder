@cities.each do |city|
    json.set! city.id do 
        json.extract! city, :id, :name, :code
    end
end
