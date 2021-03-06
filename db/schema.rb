# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150714205357) do

  create_table "services", force: true do |t|
    t.integer  "position"
    t.string   "title"
    t.string   "image"
    t.boolean  "visible"
    t.text     "content"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "social_icons", force: true do |t|
    t.string   "scr1"
    t.string   "scr2"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "teams", force: true do |t|
    t.integer  "position"
    t.string   "name"
    t.string   "image"
    t.string   "teamclass"
    t.boolean  "visible"
    t.text     "content"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "uploads", force: true do |t|
    t.string   "name"
    t.string   "email"
    t.text     "massage"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "attachment_file_name"
    t.string   "attachment_content_type"
    t.integer  "attachment_file_size"
    t.datetime "attachment_updated_at"
    t.string   "other_attachment_file_name"
    t.string   "other_attachment_content_type"
    t.integer  "other_attachment_file_size"
    t.datetime "other_attachment_updated_at"
  end

  create_table "user_translations", force: true do |t|
    t.integer  "user_id",    null: false
    t.string   "locale",     null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "name"
  end

  add_index "user_translations", ["locale"], name: "index_user_translations_on_locale"
  add_index "user_translations", ["user_id"], name: "index_user_translations_on_user_id"

  create_table "users", force: true do |t|
    t.string   "name"
    t.string   "email"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "password_digest"
    t.string   "remember_token"
    t.boolean  "admin",           default: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["remember_token"], name: "index_users_on_remember_token"

  create_table "work_categories", force: true do |t|
    t.string   "category"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "works", force: true do |t|
    t.integer  "position"
    t.string   "name"
    t.string   "image"
    t.boolean  "visible"
    t.text     "content"
    t.integer  "work_category_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "works", ["work_category_id"], name: "index_works_on_work_category_id"

end
