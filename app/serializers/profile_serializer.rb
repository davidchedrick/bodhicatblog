class ProfileSerializer < ActiveModel::Serializer
    attributes :id, :name, :bio, :website, :user_id
  
  
  end
  