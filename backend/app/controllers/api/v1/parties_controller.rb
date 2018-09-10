class Api::V1::PartiesController < ApplicationController
  #GET fetch
   def index
     @parties = Party.all
     render json: @parties
   end

    #GET one fetch
    def show
      render json: Party.find(params[:id])
    end

    #POST fetch
    def create
      render json: Party.create(safe_params)
    end

    #PATCH fetch
    def update
      render json: Party.find_by_id(params[:id]).update(safe_params)
    end

    #DELETE fetch
    def destroy
      render json: Party.find(params[:id]).destroy()
    end

    private

    def safe_params
      params.require(:party).permit(:name, :slogan, :colors)
    end

end
