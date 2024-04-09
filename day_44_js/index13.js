<script>
    // javascript program to print the series 
    // 2, 1, 4, 3, 6, 5, …. up to N terms
    
    // Function to print the series
    function printPattern( N)
    {
    
        for (let i = 1; i <= N; i++) 
        {
    
            // Find and print the ith term
            document.write(" " + ((i % 2 == 0) ? (i - 1) : (i + 1)));
        }
    }
    
    // Driver code
    
        // Get the value of N
        let N = 10;
    
        // Print the Series
        printPattern(N);
        
    // This code is contributed by Rajput-Ji
    
    </script>
    