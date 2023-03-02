
var array=[1,2,3,4,5,6,7,8,9]
function oddeven(array){
	for(i=0; i<array.length; i++){
		
		if(array[i]%2==0){
		console.log(array[i]+"evennumber");		
			
		}
		
				else{
						(array[i]%2!=0)
						console.log(array[i]+"oddnumber");
		
				}
		
	}
		
}
oddeven(array);



var add=[1,2,3,4,5,6,7,8,9]
	
function average(add){
var total=0;
	for(i=0; i<add.length; i++){
		
		(total+=add[i]);
		
		 console.log(total/add.length);
		 
		
	}
}

average(add);

let name=prompt("ENTER YOUR WORD")

var count=0;
function vowles(name){
	for(i=0; i<name.length; i++){
		
		if(name[i]=="a"||name[i]=="e"||name[i]== "i"||name[i]=="o"||name[i]=="u"){
			
			console.log(name[i]);

		}
		
		}
		count++;
		console.log(i);
		
}
vowles(name);




var a=[1,2,3,4,5,6,7,8,9];
var b=[1,2,3,4,5,6,7,8,9];
var c=[];
let counted=0;
function merge(c){

	for(i=0; i<a.length; i++){
		c.push(a[i]);
	}
	for(i=0; i<b.length; i++){
		c.push(b[i]);
	}
	counted++;
	console.log(c);
}

merge(c);




let aray=[1,2,3,4,5,6,7,8,9]

		
		aray[7]="hello";
		aray[1]=45;
		aray[8]="";
console.log(aray);







