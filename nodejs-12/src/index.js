const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

const query = (ids,productsList) => { return ids.map(id => productsList.filter( (item) => { return item.id == id })).flat() };

const finish_cart = ( shopping_cart ) => { return shopping_cart.map((item) => { return { name: item.name, category: item.category } }) };

const get_categories = ( shopping_cart ) => { return shopping_cart.map((item) => { return item.category })};

const calc = ( vals ) => { return vals.reduce((initVal, val)=> { initVal = initVal+val; return initVal },0) } 

const calc_list = ( shopping_cart, discount_type ) => { 
	let list_ids = [];
	let final_list = [];
	for (l=0; l <shopping_cart.length;l++){
		for (i=0; i<shopping_cart[l].promotions.length;i++){
			if( shopping_cart[l].promotions[i].looks.includes(discount_type) && !( list_ids.includes(shopping_cart[l].id) ) ){
				list_ids.push(shopping_cart[l].id);
				final_list.push(shopping_cart[l].promotions[i].price);
			}else if(!( list_ids.includes(shopping_cart[l].id) ) &&  i + 1  === shopping_cart[l].promotions.length){
				list_ids.push(shopping_cart[l].id)
				final_list.push(shopping_cart[l].regularPrice);
			}
		}

	}
	return final_list;
 }

const calc_discount = ( shopping_cart, discount_type ) => { 
	const full_price = calc(shopping_cart.map((item)=> {return item.regularPrice}));
	let discount_price;
	let list = [];
	if(discount_type === "FULL LOOK"){
		discount_price = calc( calc_list(shopping_cart, "FULL LOOK"))
	}else if(discount_type === "TRIPLE LOOK"){
		discount_price = calc( calc_list(shopping_cart, "TRIPLE LOOK"))
	}else if(discount_type === "DOUBLE LOOK"){
		discount_price = calc( calc_list(shopping_cart, "DOUBLE LOOK"))
	}else if(discount_type === "SINGLE LOOK"){
		discount_price = calc( calc_list(shopping_cart, "SINGLE LOOK"))
	}
	const discount_percentage = String((100-(discount_price/full_price)*100).toFixed(2)+"%");
	const discount_value = String(parseFloat(full_price - discount_price).toFixed(2));
	return {
		totalPrice: String(discount_price.toFixed(2)),
		discountValue: discount_value,
		discountPercentage: discount_percentage
	}
};

const finish_shopping = ( ids,productsList ) => {
	const shopping_cart = query(ids,productsList).flat(); 
	const list_categories = get_categories(shopping_cart);

	const num_tshirt = list_categories.filter( count => count === "T-SHIRTS").length
	const num_pants = list_categories.filter( count => count === "PANTS").length
	const num_shoes = list_categories.filter( count => count === "SHOES").length
	const num_bags = list_categories.filter( count => count === "BAGS").length
	const conf_list = [num_tshirt,num_pants,num_shoes,num_bags] 
	
	let discount_list;
	let promotion_name;

	if(num_tshirt>0 && num_shoes>0 && num_pants>0 && num_bags>0){
		promotion_name = "FULL LOOK";
		discount_list = calc_discount(shopping_cart, promotion_name);
	}else if(conf_list.filter( count => count >0).length >= 3){
		promotion_name = "TRIPLE LOOK";
		discount_list = calc_discount(shopping_cart, promotion_name);
	}else if(conf_list.filter(count => count > 0).length>=2){
		promotion_name ="DOUBLE LOOK";
		discount_list = calc_discount(shopping_cart, promotion_name);
	}else if(conf_list.filter(count => count === 0).length===3){
		promotion_name ="SINGLE LOOK";
		discount_list = calc_discount(shopping_cart, promotion_name);
	}

	finish_list = finish_cart(shopping_cart);
	return {
		products: finish_list,
		promotion: promotion_name,
		totalPrice: discount_list.totalPrice,
		discountValue: discount_list.discountValue,
		discount: discount_list.discountPercentage
	}
 };

function getShoppingCart(ids, productsList) {
	return finish_shopping(ids,productsList);
}

module.exports = { getShoppingCart };
