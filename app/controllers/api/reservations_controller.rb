class Api::ReservationsController < ApplicationController

    def index
        @reservations = Reservation.all
        render :index
    end

    def show
        @reservation = Reservation.find_by(id: params[:id])
        render :show
    end

    def create
        @reservation = current_user.reservations.new(reservation_params)

        if @reservation and @reservation.save 
            render :show
        else
            render json: @reservation.errors.full_messages, status: 404
        end
    end

    def update
        @reservation = current_user.reservations.find_by(id: params[:id])

        if @reservation and @reservation.update(reservation_params)
            render :show
        else
            render json: @reservation.errors.full_messages, status: 404
        end 
    end

    def destroy
        @reservation = current_user.reservations.find_by(id: params[:id])
        if @reservation.destroy
        else
            render json: ["Can't delete another user's reservation"]
        end
    end

    private

    def reservation_params
        params.require(:reservation).permit(:num_guests, :date, :time, :special_request, :reserved, :restaurant_id, :user_id)
    end

end
