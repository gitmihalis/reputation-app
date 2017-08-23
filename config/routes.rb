Rails.application.routes.draw do

  root 'welcome#index'
  get 'welcome/index'
  # sign up a new user
  get '/register', to: 'users#new'

  get '/users/:username', to: 'users#show'

  resources :users, only: [:new, :create, :index, :show, :destroy], param: :username do
    resources :profiles, only: [:show]
  end
  resources :rebuttals, only: [:create, :destroy]
  resources :flags, only: [:create, :destroy]
  resources :reviews, only: [:create, :destroy, :put, :update]
  resources :profiles, only: [:create, :update, :put]

  namespace :admin do
  root to: 'reviews#index'
    resources :reviews, only: [:index, :destroy, :edit, :update]
    resources :users, only: [:index, :destroy]
    resources :categories, only: [:index, :new, :create, :destroy]
    resources :flags, only: [:index]
  end

  namespace :embed do
    resources :profiles  , only: :show, path:""
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # these routes are for showing users a login form, logging them in, and logging them out.
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'
end
