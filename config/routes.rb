Rails.application.routes.draw do
  post '/rate' => 'rater#create', :as => 'rate'
  root 'root#home'


  namespace :api, defaults: { format: :json } do
    resources :restaurants, only: [:index, :create, :new, :show] do
      resources :reviews, only: [:create, :new]
    end

    resource :session, only: [:create, :show, :destroy]
    resources :users
    resources :reviews, only: [:index, :update, :edit, :destroy]
  end
end
