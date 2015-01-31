class User < ActiveRecord::Base
  validates_presence_of :name
  validates   :phone, presence: true, 
                      length: { minimum: 10 },
                      format: {
                        with: /\d\d\d\d\d\d\d\d\d\d/, message: " number must not contain any special characters. Ex - 9141231234"
                      }

end
