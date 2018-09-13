class Api::V1::CandidateValuesController < ApplicationController

  # Some sample stuff:
  # --------------------------------------------
  # before_action :find_note, only: [:update]
  #  def index
  #    @notes = Note.all
  #    render json: @notes
  #  end
  #

  def index
    @candidatevalues = CandidateValue.all
    render json: @candidatevalues
  end

  def update
    render json: CandidateValue.find_by_id(params[:id]).update(safe_params)
  end

  def create
    render json: CandidateValue.create(safe_params)
  end


   private

   def safe_params
     params.require(:candidate_value).permit(:candidate_id, :value_id, :conviction)
   end

end
