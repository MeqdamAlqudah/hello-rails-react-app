Rails.application.routes.draw do
  resources :messages
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root 'pages#index'
  namespace :v1, defaults: { format: 'json' } do
    get 'greetings', to: 'greetings#index'
  end
  get '*page', to: 'pages#index', constraints: lambda { |req|
    !req.xhr? && req.format.html?
  }
end
