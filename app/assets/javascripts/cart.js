function addToCart(){
	if (!supportsLocalStorage()) { 
		alert('Your browser cannot run this demo properly because it does not support HTML5 localStorage'); 
		return false;
	}

	var url = $("input[id='url']").val();
	var quantity = $("input[id='quantity']").val();
	//alert("url: " + url);
	//alert("quantity: " + quantity);
	
	try {
		if(localStorage.getItem(url) == null)
		{
			//alert("first time");
		} else{ 
			//alert("exists!");
			quantity = parseInt(quantity) + parseInt(localStorage.getItem(url));
		}
		localStorage.setItem(url, quantity);
	} 
	catch (e) {
		if (e == QUOTA_EXCEEDED_ERR) {
			alert('Quota exceeded!');
		}
	}
}

function supportsLocalStorage() {
    return ('localStorage' in window) && window['localStorage'] !== null;
}

function showShoppingCart(){
	var i=0;
	var numItems = localStorage.length - 1;

	if (numItems >= 0) {
		for (i = 0; i <= numItems; i++) {
			var url = localStorage.key(i);
			var quantity = localStorage.getItem(url);
					
			$.ajax({
				url: "/products/list?url=" + url + "&quantity=" + quantity,
				cache: false,
				success: function(html){
					$("#shopping_cart").append(html);
				}	
			});
		}
	}
	else {
		html = '<li class="empty">There are no items in your shopping cart.</li>';
		$("#shopping_cart").html(html);
	}
}

function checkout(){
	localStorage.clear();
}
