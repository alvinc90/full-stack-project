class Api::CitiesController < ApplicationController
    def index 
        @cities = City.all 
        render :index 
        # render json: @cities 
    end
end
