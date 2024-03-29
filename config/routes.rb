Rails.application.routes.draw do
  
  namespace :api do
    resources :posts 
    resources :profiles, only: [:show, :update]
    resources :comments

    get "/me", to: "users#show"
    post "/signup", to: "users#create"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"

    get "/sort", to: "comments#sort_comments"
  end

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
