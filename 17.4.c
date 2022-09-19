#include <stdio.h>
#include <stdlib.h>
void main()
{
     char name1[15] = "Le Quang Hoa";
     char name2[15] = "Le Quang Hung";
     char name3[15] = "Nguyen Thi Thuy";
     char name4[15] = "Le Thi Phuong Thao";
     int i;
     
     system("cls");
     
     i = strcmp(name1,name2);
     printf("%s compared with %s returned %d\n", name1, name2, i);
     
     i = strcmp(name1,name3);
     printf("%s compared with %s returned %d\n", name1, name3, i);
     
     i = strcmp(name1,name4);
     printf("%s compared with %s returned %d\n", name1, name4, i);
     
     getch();
     
     
     
}
