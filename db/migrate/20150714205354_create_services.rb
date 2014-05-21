class CreateServices < ActiveRecord::Migration
  def change
    create_table :services do |t|
      t.integer :position
      t.string :title
      t.string :image
      t.boolean :visible
      t.text :content

      t.timestamps
    end
  end
end
