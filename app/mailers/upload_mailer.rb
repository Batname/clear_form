class UploadMailer < ActionMailer::Base




  default from: "dadubinin@gmail.com"

  def user_uploads(upload)
    @upload = upload
    mail(to: "dadubinin@gmail.com")
  end

end
