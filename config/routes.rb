Rails.application.routes.draw do
  resources :users
  resources :restaurants, only: [:create, :new, :show]
end
