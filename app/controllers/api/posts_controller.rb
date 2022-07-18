class Api::PostsController < ApplicationController

    def index
        post = Post.all
        render json: Post.all.order(created_at: :desc)
    end

    def show
        render json: Post.find(params[:id])
    end



end
