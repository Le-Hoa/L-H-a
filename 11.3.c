#include <stdio.h>
#include <stdlib.h>

void main()
{
	char alpha[26];
	int i, j;
	
	for(i = 65, j = 0; i < 91; i++, j++)
	{
		alpha[i] = i;
		 printf("The character now assigned is %c\n", alpha[j]);
	}
	getchar();
	
	
}
