Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :restaurants, only: [:index, :show]
    resources :cities, only: [:index, :show]
    resources :reviews
  end

  root to: "static_pages#root"
end 
