class LocationsController < ApplicationController
  def index
  	@locations = Location.all
  end
  def create
  	@location = Location.new(location_params)

  	if @location.save
  		redirect_to root_url, notice: "You have successfully created a Dojo"
  	else
  		flash[:errors] = @location.errors.full_messages
  		redirect_to :back
  	end
  end
end
private
	def location_params
		params.require(:location).permit(:branch, :street, :city, :state)
	end
