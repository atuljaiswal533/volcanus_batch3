#include<stdio.h>
void main(){
    float percentages;

    printf("\n enter your percentage");
    scanf("%f",&percentages);

    if(percentages>=0 && percentages<33){
        printf("\n failed");
    }
     else if(percentages>=33 && percentages<50){
        printf("\n grade D");
    }
    else if(percentages>=50 && percentages<60){
        printf("\n GARDE C");
    }
    else if(percentages>=60 && percentages<70){
        printf("\n garde b");
    }
    else if(percentages>=70 && percentages<80){
        printf("\n garde a");
    }
    else if(percentages>=80 && percentages<100){
        printf("\n garde a+");
    }
    else{
        printf("\n invalid input");
    }
}