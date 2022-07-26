class Api::ProfilesController < ApplicationController

    def show
        profile = Profile.find(params[:id]) 
        # byebug

        render json: profile
    end

    private

    def profile_params 
        params.permit(:name, :bio, :website, :picture)
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

end
