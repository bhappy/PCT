class ProductsController < ApplicationController
  require 'open-uri'
  require 'cgi'
  
  def index
    xml = Nokogiri::HTML(open(bn_call(HOMEREC)))
    @products = xml.xpath('//r')
  end

  def show
   url = params[:url]
   xml = Nokogiri::HTML(open(bn_call("AllDocuments", "&attrFilter=bnUri:%22"+url+"%22" )))
   @product = xml.xpath('//r')
   
   xml = Nokogiri::HTML(open(bn_call(PDPREC, "&url="+url)))
   @results = xml.xpath('//r')
  end

  def purchase
   url = params[:url]
   xml = Nokogiri::HTML(open(bn_call("AllDocuments", "&attrFilter=bnUri:%22"+url+"%22" )))
   @product = xml.xpath('//r')
   
   xml = Nokogiri::HTML(open(bn_call(PDPREC, "&url="+url)))
   @results = xml.xpath('//r')
      
  end
  
  def offer
   @city = params[:city]
   @state = params[:state]
   #xml = Nokogiri::HTML(open(bn_call("Offers", "&city=bnUri:%22"+url+"%22" )))
   #@offer = xml.xpath('//r')
   render :layout => false
  end
    
  def add 
   url = params[:url]
   xml = Nokogiri::HTML(open(bn_call("AllDocuments", "&attrFilter=bnUri:%22"+url+"%22" )))
   @product = xml.xpath('//r')
   
   xml = Nokogiri::HTML(open(bn_call(CARTREC, "&url="+url)))
   @results = xml.xpath('//r')
  end
  
  def list
    url = params[:url]
    xml = Nokogiri::HTML(open(bn_call("AllDocuments", "&attrFilter=bnUri:%22"+url+"%22" )))
    @product = xml.xpath('//r')
    @quantity = params[:quantity]
    
    render :layout=>false
  end
  
  def search
    @query = params[:search]
   
    xml = Nokogiri::HTML(open(bn_call(HOMEREC, "&query=" + CGI.escape(@query) )))
    @products = xml.xpath('//r')
    
  end
  
  private
  
  def bn_call(guide, params=nil)
    url = BN_SERVER + "/baynote/guiderest?" 
    url += "customerId=" + CN
    url += "&code=" + CC
    url += "&guide=" + guide
    url += params unless params.nil?
    url += "&mode=WIP"
    url += "&attrList=*"
    url += "&v=1"
  end
  
  def map_call(lat, lng)
    url = "http://maps.googleapis.com/maps/api/geocode/xml?latlng="
    url += lat
    url += ','
    url += lng
    url += "&sensor=true"
  end
  
end
