 #   create_table :collections do |t|
 #     t.string :url
 #     t.string :thumbnail
 #     t.integer :status

 #     t.timestamps

class Collection < ActiveRecord::Base
  validates_uniqueness_of :url
end
