class Value < ApplicationRecord
  has_many :candidate_values
  has_many :candidates, through: :candidate_values
end
