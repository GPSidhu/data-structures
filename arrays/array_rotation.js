//Write a function rotate(ar[], d, n) that rotates arr[] of size n by d elements.
function leftRotate(array, d) {
    var n = array.length;
    var i,j,k,temp;
    for(i=0; i < gcd(d,n); i++) {
        temp = array[i];
        j = i;
        while(true) {
            k = j  + d;
            if (k >= n)
                k = k - n;
            if (k == i)
                break;
            array[j] = array[k];
            j = k;
        }
        array[j] = temp;
    }
    return array;
}

function gcd(a,b) {
    if (b === 0)
        return a;
    else
        return gcd(b, a % b);
}

var arr = [ 1, 2, 3, 4, 5, 6, 7 ];
console.log(leftRotate(arr, 2));