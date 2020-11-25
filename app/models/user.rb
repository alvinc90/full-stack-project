# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, :email, :session_token, uniqueness: true 
    validates :password, length: {minimum: 4, allow_nil: true}

    has_many :reviews, 
        foreign_key: :user_id,
        class_name: :Review

    has_many :reviewed_restaurants, 
        through: :reviews,
        source: :restaurant

    after_initialize :ensure_session_token
    # SPIRE 

    def password 
        @password 
    end

    def password=(password)
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token! 
        self.session_token = SecureRandom::urlsafe_base64
        self.save! 
        self.session_token
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password) 
    end

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user 
        user.is_password?(password) ? user : nil 
    end

    

    private 

    def ensure_session_token 
        self.session_token ||= SecureRandom.urlsafe_base64
    end
end     
