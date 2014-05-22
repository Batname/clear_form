Rails.application.routes.draw do

  # scope ":locale", locale: /#{I18n.available_locales.join("|")}/ do

    root 'uploads#index'
    resources :uploads
    resources :users
    resources :sessions, only: [:new, :create, :destroy]

    match '/resumes', to: 'uploads#alluploads', via: 'get'
    match '/signup', to: 'users#new', via: 'get'
    match '/signin', to: 'sessions#new', via: 'get'
    match '/signout', to: 'sessions#destroy', via: 'delete'
    match 'uploads' => 'uploads#create', :via => [:put]

    post ':controller/validate', action: 'validate', as: :validate_form
  # end

  #match '*path', to: redirect("/#{I18n.default_locale}/%{path}"), via: :get
  # match '', to: redirect("/#{I18n.default_locale}"), via: :get


end
