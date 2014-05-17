class AddOtherAttachmentToComment < ActiveRecord::Migration
  def change
    add_column :uploads, :other_attachment_file_name,    :string
    add_column :uploads, :other_attachment_content_type, :string
    add_column :uploads, :other_attachment_file_size,    :integer
    add_column :uploads, :other_attachment_updated_at,   :datetime
  end
end
