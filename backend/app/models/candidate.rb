class Candidate < ApplicationRecord
  has_many :candidate_values
  has_many :values, through: :candidate_values
  belongs_to :party
end
