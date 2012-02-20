class CreateCollections < ActiveRecord::Migration
  def change
    create_table :collections do |t|
      t.string :url
      t.string :thumbnail
      t.integer :status

      t.timestamps
    end
  end
end
