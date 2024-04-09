


#include <stdio.h>

    int main() {
        int a = 3; // first term
        int d = 7 - 3; // common difference (7 is the second term)
        int n = 4; // number of terms
        
        printf("Arithmetic Progression: ");
        for(int i = 0; i < n; i++) {
            printf("%d ", a + i * d);
        }
        printf("\n");
        
        return 0;
    }
    