Rails.application.routes.draw do
  resources :users
  resource :session, only: [:create, :new, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :restaurants, only: [:create, :new, :show]
  end
end
