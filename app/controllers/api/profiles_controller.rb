class Api::ProfilesController < ApplicationController

    def show
        render json: Profile.find(params[:id]) 
    end

    private

    def post_params 
        params.permit(:name, :bio, :website, :picture, :user_id)
    end

end
