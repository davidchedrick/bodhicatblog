class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :user_id, :date, :author
end
