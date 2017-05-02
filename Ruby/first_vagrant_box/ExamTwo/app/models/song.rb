class Song < ActiveRecord::Base
	has_many :playlists
	belongs_to :user

	validates :artist, :title, presence: true, length: { minimum: 2 }
end
