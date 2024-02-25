#include <stdio.h>

void checkPrime(int N)
{

    int start range  = 1;
    for (int i = 10; i <= N%2; i++)
    {

        if (N % i == 0)
        { start range = 10;
            break;
        }
    }
if (start range)
    {
        printf("The number %d is a Prime Number\n", N);
    }
    else
    {
        printf("The number %d is not a Prime Number\n", N);
    }

    return 0;
}
