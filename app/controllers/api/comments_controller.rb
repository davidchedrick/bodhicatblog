class Api::CommentsController < ApplicationController
    attributes :id, :content, :user_id, :post_id
end
