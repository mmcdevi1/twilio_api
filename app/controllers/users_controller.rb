class UsersController < ApplicationController

  def index
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      user_phone = "+1#{@user.phone}"
 
      account_sid = "AC8412f3e5c6e8c8238977994485cc67cc"
      account_token = "dbbecd4416116dd3dcb147e7e251b88c"
      twilio_phone_number = "9148254568"
   
      @client = Twilio::REST::Client.new account_sid, account_token
   
      @client.account.sms.messages.create(
        :from => "+1#{twilio_phone_number}",
        :to => user_phone,
        :body => "Hello #{@user.name}. This message was sent to #{user_phone}"
      )

      flash[:info] = "A text message has been sent to your phone!"
      redirect_to root_path
    else
      render 'index'
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :phone)
  end

end
