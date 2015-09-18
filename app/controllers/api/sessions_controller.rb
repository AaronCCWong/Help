class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if user
      sign_in!(user)
      render :show
    else
      render json: {}
    end
  end

  def show
    if current_user
      render :show
    else
      render json: {}
    end
  end

  def destroy
    sign_out!
    render json: {}
  end
end
