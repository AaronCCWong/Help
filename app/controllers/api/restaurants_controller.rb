class Api::RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
    render json: @restaurants
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)
    if @restaurant.save
      render json: @restaurant
    else
      render json: @restaurant, status: 422
    end
  end

  def new
    @restaurant = Restaurant.new
    render json: @restaurant
  end

  def show
    @restaurant = Restaurant.find(params[:id])
    render json: @restaurant
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:name, :address)
  end
end
