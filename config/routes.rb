Rails.application.routes.draw do

  get 'welcome/index'

  root 'welcome#index'

  resources :users, only: [:new, :create, :index, :show, :destroy]
    get 'register', to: 'users#new'

  namespace :admin do
    root to: 'reviews#index'
    resources :reviews, only: [:index, :destroy]
    resources :users, only: [:index, :destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
