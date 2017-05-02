class User < ActiveRecord::Base
  has_secure_password

  has_many :songs
  has_many :playlists, through: :songs

  validates :first_name, :last_name, :email, :password, presence: true
end
