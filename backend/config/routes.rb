Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :candidates, :parties, :values, :candidate_values
    end
  end
end
