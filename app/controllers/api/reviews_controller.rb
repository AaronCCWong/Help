class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.all
    render :index
  end

  def create
    @review = current_user.reviews.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def new
    @review = Review.new
    render json: @review
  end

  def show
    @review = Review.find(params[:id])
    render :show
  end

  def update

  end

  def edit

  end

  def destroy

  end

  private

  def review_params
    params.require(:review).permit(:body, :restaurant_id, :rating)
  end
end
