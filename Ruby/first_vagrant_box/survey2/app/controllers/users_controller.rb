class UsersController < ApplicationController
  def index
  	session[:views] ||= 0
  end
  def process_survey
  	@user = User.create(user_params)
  	session[:views] = session[:views] + 1
  	session[:result] = params[:user]
  	flash[:success] = "Thanks for submitting this form! You have submitted this form #{session[:views]} times now."
  	redirect_to '/users/result'
  end
  def result
  	@result = session[:result]
  end
end
private
	def user_params
		params.require(:user).permit(:name, :location, :language, :comment)
	end