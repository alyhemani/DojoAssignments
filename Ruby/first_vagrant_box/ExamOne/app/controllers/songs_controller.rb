class SongsController < ApplicationController
  before_action :authorize_user

  def index
  	@current_user = current_user
  	@songs = Song.all
  end
  def create
  	song = Song.new song_params
  	song.user = session[:user_id]
  	if song.valid?
  		song.save
  	else
  		flash[:song_errors] = song.errors.full_messages
  	end
  	redirect_to '/songs'
  end
  def show
  	@song = Song.find(params[:id])
  	@playlists = Song.find(params[:id]).playlists
  end

  private
  def song_params
  		params.require(:song).permit(:artist, :title)
  	end
end
