class Api::V1::ValuesController < ApplicationController

  def index
    @values = Value.all
    render json: @values
  end

   #GET one fetch
   def show
     render json: Value.find(params[:id])
   end

   #POST fetch
   def create
     render json: Value.create(safe_params)
   end

   #PATCH fetch
   def update
     render json: Value.find_by_id(params[:id]).update(safe_params)
   end

   #DELETE fetch
   def destroy
     render json: Value.find(params[:id]).destroy()
   end

   private

   def safe_params
     params.require(:value).permit(:name, :description)
   end


end
