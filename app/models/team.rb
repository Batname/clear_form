class Team < ActiveRecord::Base
  scope :sorted, lambda { order("teams.position ASC") }
end
