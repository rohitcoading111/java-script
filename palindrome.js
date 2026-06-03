let palindrome = function(a){
   let left = 0;
   let right = a.length-1;
   
   while(left<right){
      if(a[left] == a[right]){
      left++;
      right--;
      }
      else{
        return false;
      }
   }
    return true;
}
console.log(palindrome("nitin"));
