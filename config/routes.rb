Rails.application.routes.draw do

  root 'welcome#index'
  get 'welcome/index'
  # sign up a new user
  get '/register', to: 'users#new'

  resources :users, only: [:new, :create, :index, :show, :destroy]
  resources :rebuttals, only: [:create, :destroy]
  resources :reviews, only: [:create, :destroy, :put, :update]
  resources :profiles, only: [:create, :update, :put]
  namespace :admin do
  root to: 'reviews#index'
    resources :reviews, only: [:index, :destroy, :edit, :update]
    resources :users, only: [:index, :destroy]
    resources :categories, only: [:index, :new, :create, :destroy]
    resources :flags, only: [:index]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
   # these routes are for showing users a login form, logging them in, and logging them out.
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'
  get '/search', to: 'search#show'
end
