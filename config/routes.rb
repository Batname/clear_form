Rails.application.routes.draw do


  root 'uploads#index'
  resources :uploads
  resources :users
  resources :sessions, only: [:new, :create, :destroy]


  match '/signup',  to: 'users#new',            via: 'get'
  match '/signin',  to: 'sessions#new',         via: 'get'
  match '/signout', to: 'sessions#destroy',     via: 'delete'
  match 'uploads' => 'uploads#create', :via => [:put]



  post ':controller/validate', action: 'validate', as: :validate_form


end
