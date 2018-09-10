class Api::V1::CandidatesController < ApplicationController

#GET fetch
 def index
   @candidates = Candidate.all
   render json: @candidates
 end

  #GET one fetch
  def show
    render json: Candidate.find(params[:id])
  end

  #POST fetch
  def create
    render json: Candidate.create(safe_params)
  end

  #PATCH fetch
  def update
    render json: Candidate.find_by_id(params[:id]).update(safe_params)
  end

  #DELETE fetch
  def destroy
    render json: Candidate.find(params[:id]).destroy()
  end

  private

  def safe_params
    params.require(:candidate).permit(:name, :tagline, :party_id)
  end

end
