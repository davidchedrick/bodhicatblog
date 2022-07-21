class Api::PostsController < ApplicationController
    

    def index
        post = Post.all
        render json: Post.all.order(created_at: :desc)
    end

    def show
        render json: Post.find(params[:id])
    end


    def create
        
        post = Post.create!(post_params)

        # session[:user_id] = user_id
        render json: post, status: :created
    end

    private

    def post_params 
        params.permit(:title, :content, :user_id)
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
