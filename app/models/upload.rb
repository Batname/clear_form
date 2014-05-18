class Upload < ActiveRecord::Base


  after_save :email_confirmation


  do_not_validate_attachment_file_type :attachment

  has_attached_file :attachment
  has_attached_file :other_attachment
  validates :name, :email, :massage, :presence => true

  # validates_attachment_content_type :attachment, :content_type => /\Aimage\/.*\Z/

  def email_confirmation
    UploadMailer.user_uploads(self).deliver
  end

end
