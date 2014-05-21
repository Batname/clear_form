class CreateWorkCategories < ActiveRecord::Migration
  def change
    create_table :work_categories do |t|
      t.string :category

      t.timestamps
    end
  end
end
