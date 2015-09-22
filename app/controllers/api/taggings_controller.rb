class Api::TaggingsController < ApplicationController
  def create
    @tag = Tagging.new(tag_params)
    if @tag.save
      render json: @tag
    else
      render json: @tag.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def tag_params
    params.require(:tagging).permit(:restaurant_id, :tag)
  end
end
