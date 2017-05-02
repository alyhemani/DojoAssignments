x = [3.5, "dojo", "rocks", "michael", "sensei"];
x.push(100);
x.push(["hello", "world", "JS is fun"]);
for (i=0; i<x.length; i++){
	console.log(x[i]);
}
sum = 0 
for (i=1; i<501; i++){
	sum += i 
}
console.log(sum);

var nums = [1,5,90,25,-3,0]
sum = 0
min = 0;
for (i=0; i<nums.length; i++){
	if(min>nums[i]){
		min=nums[i];
	}
}
console.log(min);

for (i=0; i<nums.length; i++){
	sum += nums[i]/nums.length;
}
console.log(sum);

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}
for (var key in newNinja){
	console.log(key, ":", newNinja[key]);
}