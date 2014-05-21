class Work < ActiveRecord::Base
  validates :work_category_id, presence: true
  belongs_to :work_category
end
