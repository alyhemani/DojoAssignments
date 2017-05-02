class UsersController < ApplicationController
  def new
  end

  def show
  	@user = User.find(params[:id])
  end

  def edit
  end
  def create
  	@user = User.new users_params
  	if @user.save
  		redirect_to "/sessions/new"
  	else
  		flash[:errors] = @user.errors.full_messages
  		redirect_to "/users/new"
  	end
  end

  private
  def users_params
  	params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
