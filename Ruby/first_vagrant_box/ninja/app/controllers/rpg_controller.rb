class RpgController < ApplicationController
  def index
  	session[:gold] ||= 0
  	session[:activities] ||= []
  end
  def new
  	if params[:building] == 'farm'
  		gold = rand(10..20)
  	elsif params[:building] == 'cave'
  		gold = rand(5..10)
  	elsif params[:building] == 'house'
  		gold = rand(2..5)
  	elsif params[:building] == 'casino'
  		gold = rand(-50..50)
  	end

  	current_time = Time.now

  	if gold > 0
  		session[:activities] << "Earned #{gold} golds from the #{params[:building]}!(#{current_time.strftime('%Y/%m/%d %l:%M %P')})"
  	else
  		session[:activities] << "Lost #{gold} golds from the Casino!(#{current_time.strftime('%Y/%m/%d %l:%M %P')})"
  	end

  	session[:gold] += gold
  	redirect_to :root
  end
end
