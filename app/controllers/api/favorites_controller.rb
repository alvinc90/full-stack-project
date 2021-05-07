class Api::FavoritesController < ApplicationController

    def index 
        @favorites = current_user.favorites
        render :index
    end

    def create
        @favorite = current_user.favorites.new(favorite_params)

        if @favorite and @favorite.save 
            render :show
        else
            render json: @favorite.errors.full_messages, status: 422
        end
    end

    def destroy
        @favorite = current_user.favorites.find_by(id: params[:id])
        if @favorite.destroy
        else
            render json: ["Not allow to unfavorite if it is not a favorite to begin with"]
        end
    end

    private

    def favorite_params 
        params.require(:favorite).permit(:user_id, :restaurant_id)
    end
end

