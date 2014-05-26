class Upload < ActiveRecord::Base

  after_save :email_confirmation, :admin_confirmation

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i


  do_not_validate_attachment_file_type :attachment

  has_attached_file :attachment
  has_attached_file :other_attachment
  validates :name, presence: true, length: { maximum: 100, }
  validates :massage, presence: true, length: { maximum: 300, }
  validates :email, presence: true,
            format: { with: VALID_EMAIL_REGEX }

  # validates_attachment_content_type :attachment, :content_type => /\Aimage\/.*\Z/


  private

  def email_confirmation
    UploadMailer.user_uploads(self).deliver
  end

  def admin_confirmation
    UploadMailer.admin_uploads(self).deliver
  end

end
