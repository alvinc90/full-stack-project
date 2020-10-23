class Api::CitiesController < ApplicationController
    def index 
        @cities = City.all 
        render :index 
        # render json: @cities 
    end

    def show 
        @city = City.find_by(id: params[:id])
        render :show 
    end
end
