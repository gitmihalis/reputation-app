Rails.application.routes.draw do
  root 'welcome#index'
  get 'welcome/index'
  # sign up a new user
  get '/register', to: 'users#new'

  resources :users, only: [:new, :create, :index, :show, :destroy]

  namespace :admin do
    root to: 'reviews#index'
    resources :reviews, only: [:index, :destroy, :edit]
    resources :users, only: [:index, :destroy]
    resources :catagories, only: [:index, :new, :create, :destroy]
    resources :flags, only: [:index]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
