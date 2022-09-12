#include <stdio.h>
#include <stdlib.h>
void main()
{
	int i, n = 0;
	int item;
	char x[10][12];
	char temp[12];
	
	system("cls");
	printf("Enter each sreing on a separate line \n\n");
	printf("Type 'END' when over \n\n");
	
	/*Read in the list of string */
	do
	{
		printf("String %d: ", n + 1);
		scanf("%s", x[n]);
    }while (strcmp(x[n++], "END"));
    
    /*reorder the list of string */
    
    n = n - 1;
    for(item = 0; item < n - 1; ++item)
    {
     /* Find lowest of remaining string*/
    	for (i = item + 1; i < n; ++i)
    	{
    	 if(strcmp(x[item], x[i]) > 0)
    	 {
    	 	strcpy(temp, x[item]);
    	 	strcpy(x[item], x[i]);
    	 	strcpy(x[i], temp);
    	 	
		 }
		}
	}
	
	/* Display the arranged list of string*/
     printf("recorded the arrange list of strings: \n");
     
      for(i = 0; i < n; ++i)
    {
    	printf("\nString %d is %s", 1 + 1, x[i]);
	}
        
}
	
