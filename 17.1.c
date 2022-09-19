#include <stdio.h>
#include <stdlib.h>
void main()
{
	char name[20];
	/*name is declared as a single dimensional character array*/
	system("cls");    /* Clears the screen */
	  puts("Enter your name :"); /* Display a message */
	  
	  gets(name);   /* Accepts the input */
	  puts("Hi there: ");
	  puts(name); /* Displays the input */
	  getch();
}
