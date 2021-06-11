// task 01
function is_array(arr){
    return Array.isArray(arr);
}
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
// expected output :
// false
// True

// task 02
function array_Clone(arr){
    return arr.slice(0,arr.length);
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
// Expected Output :
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

// task 03
function first(x,n){
    if (n==null){
        return x[0];
    }if(n<0){
        return [];
    }
    return x.slice(0,n);
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

// task 04
myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"
var ans=myColor.join();
console.log(ans);
var anss=myColor.join(",");
console.log(anss);
var ansss= myColor.join("+");
console.log(ansss);
// task 05
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )
var n=arr1.length;
var c=0;
var maxc=0;
var ans='';
for(var i=0;i<n;i++){
    for(var j=0;j<n;j++){
        if (arr1[i]==arr1[j]){
            c+=1;
            if (c>maxc){
                maxc=c;
                ans=arr1[i];
            }
        }
    }
    c=0;
}
console.log(ans+" ( "+maxc+" times)");