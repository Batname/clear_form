class CreateUploads < ActiveRecord::Migration
  def change
    create_table :uploads do |t|
      t.string :name
      t.string :email
      t.text :massage
      t.timestamps
    end
  end
end
