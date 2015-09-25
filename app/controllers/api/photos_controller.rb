class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render json: @photo
    else
      render json: @photo.errors.full_messages, status: :unproccessable_entity
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:user_id, :restaurant_id, :image);
  end
end
