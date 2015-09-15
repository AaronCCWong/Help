class UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      sign_in!(@user)
      render json: @user
    else
      render :new
    end
  end

  def new
    @user = User.new
    render :new
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end
end
