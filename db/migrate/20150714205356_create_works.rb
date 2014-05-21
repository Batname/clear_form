class CreateWorks < ActiveRecord::Migration
  def change
    create_table :works do |t|

      t.integer :position
      t.string :name
      t.string :image
      t.boolean :visible
      t.text :content
      t.references :work_category, index: true
      t.timestamps
    end
  end
end
