Rails.application.routes.draw do
  root 'root#home'

  resources :users
  resource :session, only: [:create, :new, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :restaurants, only: [:index, :create, :new, :show]
    resources :reviews, only: [:create, :new, :update, :edit, :destroy]
  end
end
