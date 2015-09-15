Rails.application.routes.draw do
  resources :restaurants, only: [:create, :new, :show]
end
