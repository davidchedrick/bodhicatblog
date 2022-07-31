class Post < ApplicationRecord
  belongs_to :user
  has_one :profile, through: :user

  def date
    created_at.strftime('%B %e, %Y')
  end

  def author 
    user.username
  end

  def short_content
    "#{self.content[0..175]}..."
  end

end
