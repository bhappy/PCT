module ProductsHelper
  require 'open-uri'
 
  def product_path(u, action = 'show')
    path = "http://" + SITE + "/products/" + action + "?url=" + u
    return  path
  end
end
