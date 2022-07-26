class Post < ApplicationRecord
  belongs_to :user
  has_one :profile, through: :user

  def date
    created_at.strftime('%B %e, %Y')
  end

  def author 
    user.username
  end

end
