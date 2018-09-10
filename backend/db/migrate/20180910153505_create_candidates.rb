class CreateCandidates < ActiveRecord::Migration[5.2]
  def change
    create_table :candidates do |t|
      t.string :name
      t.string :tagline
      t.integer :party_id
      t.string :image

      t.timestamps
    end
  end
end
