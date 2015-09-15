class SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if user
      sign_in!(user)
      render json: user
    else
      render :new
    end
  end

  def new
    render :new
  end

  def destroy
    sign_out!
    redirect_to new_session_url
  end
end
