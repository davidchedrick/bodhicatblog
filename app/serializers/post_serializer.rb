class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :user_id, :date, :author, :short_content

  def short_content
    "#{object.content[0..175]}..."
  end
end
