class User < ApplicationRecord
    has_many :posts, dependent: :nullify

    has_secure_password
    
    validates :username, presence: true, uniqueness: true
end

