class UploadMailer < ActionMailer::Base

  default from: "dadubinin@gmail.com"

  def user_uploads(upload)
    @upload = upload
    mail(to: upload.email, subject: "Hello #{upload.name}")
  end

  def admin_uploads(upload)
    @upload = upload
    mail(to:"dadubinin@gmail.com", subject: "Mail from #{upload.name}")
  end

end
