class CollectionsController < ApplicationController
  def show
    @products = Collection.all
  end

  def add
    url = params[:url]
    thumbnail = params[:thumbnail]
    @product = Collection.new(:url=>url, :thumbnail=>thumbnail, :status=>1)
    respond_to do |format|
      if @product.save
        format.js { render 'add' } 
      else 
        format.js { render :nothing => true }
      end
    end

  end

  def remove
    url = params[:url]
    product = Collection.find_by_url(url)
    if product
      product.destroy  
    end 
    respond_to do |format|
        format.js { render :nothing=>true}
    end
  end
end