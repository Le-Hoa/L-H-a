#include <stdio.h>
#include <stdlib.h>

void main()
{
	char name[20];
	system("cls");
	printf("Enter your name: ");
	scanf("%s", name);
	printf("Hi there: %s",name);
	getch();
}
