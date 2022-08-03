class Api::UsersController < ApplicationController

    skip_before_action :confirm_authentication
    
    def show
      render json: current_user, status: :ok
    end

    def create
      user = User.create(user_params)
      if user.valid?
        session[:user_id] = user.id
        Profile.create(user_id: user.id)
        render json: user, include: :posts, status: :ok
      else
        render json: { error: user.errors }, status: :unprocessable_entity
      end
    end
  
    private
  
    def user_params
      params.permit(:username, :password, :password_confirmation)
    end
  


end
