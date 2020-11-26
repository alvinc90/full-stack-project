class Api::ReviewsController < ApplicationController
    # before_action :require_logged_in!, only: [:new, :create, :edit, :update, :destroy]

    def index
        @reviews = Review.all
        render :index
    end
    
    def show 
        @review = Review.find_by(id: params[:id])
        render :show
    end

    def new
        @review = Review.new
        render :new
    end

    def create
        @review = current_user.reviews.new(review_params)

        if @review and @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 404
        end

    end

    def edit
        @review = Review.find_by(id: params[:id])
        render :edit
    end

    def update
        @review = current_user.reviews.find_by(id: params[:id])
        if @review and @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = current_user.reviews.find_by(id: params[:id])
        if @review.destroy 
            render :index
        else
            render json: ["Nothing to delete"]
        end
    end

    private 

    def review_params
        params.require(:review).permit(:body, :overall, :food, :service, :ambience, :user_id, :restaurant_id)
    end
end
