function mincost(arr)
{ 
//write your code here
// return the min cost
    arr.sort((a,b) => a-b);
	
	let totalCost = 0;
	while(arr.length > 1){
		const firstElement = arr.shift();
		const secondElement = arr.shift();

		const newRope = firstElement + secondElement;
			totalCost = totalCost+newRope;

		  arr.push(newRope);

		arr.sort((a,b) => a-b);
		
	}
	return totalCost;
  
}

module.exports=mincost;
