
// Function to return the largest number possible
function maxnumber(n, k)
{
	// Generate the largest number after removal of the least K digits one by one.
	for (var j = 0; j < k; j++) {
        var ans = 0;
		var i = 1;
        // Remove the least digit after every iteration
		while (parseInt(n / i) > 0) {
        // Store the numbers formed after removing every digit once
			var temp = parseInt(n / (i * 10))* i + (n % i);
			i *= 10;
        // Compare and store the maximum
			ans = Math.max(ans, temp);
		}
        // Store the largest number remaining
		n = ans;
	}
    // Return the remaining number
	// after K removals
	return n;
}

// Driver code
var n = 678;
var k = 1;
console.log( maxnumber(n, k));


