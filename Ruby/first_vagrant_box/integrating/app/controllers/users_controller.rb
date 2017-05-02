class UsersController < ApplicationController
	def show
		render json: User.all
	end
	def create
		@user = User.create( name: params[:name])
		redirect_to root_url, alert: "Peace out"
	end
	def user
		render json: User.find(params[:id])
	end
	def edit
		@user = User.find(params[:id])
	end
	def total
		render json: {total: User.count}
	end
end
