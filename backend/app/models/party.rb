class Party < ApplicationRecord
  has_many :candidates
  has_many :values, through: :candidates
end
