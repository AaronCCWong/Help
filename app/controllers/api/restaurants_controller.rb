class Api::RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)
    if @restaurant.save
      render json: @restaurant
    else
      render json: @restaurant.errors.full_messages, status: 422
    end
  end

  def new
    @restaurant = Restaurant.new
    render json: @restaurant
  end

  def show
    @restaurant = Restaurant.find(params[:id])
    render :show
  end

  private

  def restaurant_params
    params
      .require(:restaurant)
      .permit(:name, :street_address, :city_zipcode, :latitude, :longitude)
  end
end
