Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :restaurants, only: [:index, :show]
    # get 'cities/:id/restaurants', to: 'restaurants#index'
    resources :cities, only: [:index, :show] 
  end

  root to: "static_pages#root"
end 
