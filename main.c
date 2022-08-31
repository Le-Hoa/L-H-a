#include <stdio.h>
void main()
{
	printf("Te nmber 555.555 in vrious forms: \n");
 printf("In float form without modifier:\n");
    printf("[%f]\n", 555.55);
    printf("In expotial form without any modifier:\n");
    printf("[%e]\n", 555.55);
    printf("In float form with - modifier:\n");
    printf("[%-f]\n", 555.55);
    printf("In float form with digit string 10. as modifier\n");
    printf("[%10.3f]\n,555.55");
    printf("In float form with 0 as modifier:\n");
    printf("[%0f]\n", 555.55);
	printf("In float form with 0 and digit string 10.3");
	printf("as modifiers:\n");
	printf("[%010.3f]\n", 555.55);
	printf("In float form with -, 0 ");
	printf("and digit string 10.3 as modifier:\n");
	printf("[%-010.3f]\n", 555.55);
	printf("In exponential form with 0");
	printf("and digit string 10.3 as modifier:\n");
	printf("[%010.3e]\n", 555.55);
	printf("In exponenetial form with 0");
	printf(" and digit string 10.3 as moifiers:\n");
	printf("[%-010.3e]\n\n", 555.55);
}
	
    
 



