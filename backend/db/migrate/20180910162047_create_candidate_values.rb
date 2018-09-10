class CreateCandidateValues < ActiveRecord::Migration[5.2]
  def change
    create_table :candidate_values do |t|
      t.integer :candidate_id
      t.integer :value_id
      t.integer :conviction

      t.timestamps
    end
  end
end
