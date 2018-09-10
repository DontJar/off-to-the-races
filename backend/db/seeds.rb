# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Party.create(name: 'Pirate Revolution Party', slogan: 'A tall mast and square sail for every child', colors: "blue and off-blue", image: "/Users/JS/dev_school/labs/mod3/off_to_the_races/frontend/images/pirateParty.webp")
Party.create(name: 'The 2002', slogan: 'Bringing back MySpace', colors: "tan and black", image: "/Users/JS/dev_school/labs/mod3/off_to_the_races/frontend/images/2002.jpg")


Candidate.create(name: "H. Hoover", tagline: "Not the vaccum", party_id: 1)
Candidate.create(name: "H. Truman", tagline: "Ask me about my middle name", party_id: 1)
Candidate.create(name: "G. Washington", tagline: "Wooden teeth for all", party_id: 2)
Candidate.create(name: "A. Hamilton", tagline: "Watch me sing, hear me dance", party_id: 2)

Value.create(name: "Flag respect", description: "Respect for flags. Not the flag, ALL flags")
Value.create(name: "Family", description: "Wife and kids")
Value.create(name: "Environment", description: "Global warming?")
Value.create(name: "Economy", description: "Gold standard")

CandidateValue.create(candidate_id: 1, value_id: 1, conviction: 10)
CandidateValue.create(candidate_id: 1, value_id: 2, conviction: 7)
CandidateValue.create(candidate_id: 2, value_id: 4, conviction: 10)
CandidateValue.create(candidate_id: 2, value_id: 1, conviction: 9)
CandidateValue.create(candidate_id: 3, value_id: 2, conviction: 8)
CandidateValue.create(candidate_id: 3, value_id: 3, conviction: 9)
CandidateValue.create(candidate_id: 4, value_id: 4, conviction: 10)
CandidateValue.create(candidate_id: 4, value_id: 3, conviction: 7)
