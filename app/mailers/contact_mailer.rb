class ContactMailer < ActionMailer::Base
  default from:  ENV['JESUSMLGWEB_EMAIL']

  def contact_mailer(msg,name)
    @msg = msg
    @name = name
    mail to: ENV['JESUSMLGWEB_EMAIL'] , subject: "Nuevo mensaje de www.jesusmlg.es"
  end
end
