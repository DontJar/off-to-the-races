class PartySerializer < ActiveModel::Serializer
  attributes :id, :name, :colors, :image, :slogan
  has_many :candidates
end
