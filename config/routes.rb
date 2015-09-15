Rails.application.routes.draw do
  resources :users
  resource :session, only: [:create, :new, :destroy]
  resources :restaurants, only: [:create, :new, :show]
end
