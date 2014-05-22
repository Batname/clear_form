class CreateSocialIcons < ActiveRecord::Migration
  def change
    create_table :social_icons do |t|
      t.string :scr1
      t.string :scr2

      t.timestamps
    end
  end
end
