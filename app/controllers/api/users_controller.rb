class Api::UsersController < ApplicationController
  wrap_parameters false

  def index
    @users = User.all
    render :index
  end

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def new
    @user = User.new
    render :new
  end

  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  protected

  def user_params
    self.params.require(:user).permit(
      :first_name,
      :last_name,
      :email,
      :password,
      :avatar
    )
  end
end
