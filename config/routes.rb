Rails.application.routes.draw do
  get '/auth/:provider/callback' => 'api/sessions#omniauth'
  post '/rate' => 'rater#create', :as => 'rate'
  root 'root#home'

  namespace :api, defaults: { format: :json } do
    get "/search", to: "search#search"

    resources :restaurants, only: [:index, :create, :new, :show] do
      resources :reviews, only: [:show, :create, :new]
      resources :taggings, only: [:create, :show]
      resources :photos, only: [:create]
    end

    resource :session, only: [:create, :show, :destroy]
    resources :users
    resources :reviews, only: [:index, :update, :edit, :destroy] do
      resources :helpfulnesses, only: [:create, :destroy]
    end

    resources :helpfulnesses, only: [:index]
  end
end
