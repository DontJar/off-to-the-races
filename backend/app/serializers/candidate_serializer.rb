class CandidateSerializer < ActiveModel::Serializer
  belongs_to :party
  has_many :candidate_values
  has_many :values, through: :candidate_values
  attributes :id, :name, :tagline, :party_id, :image
end
