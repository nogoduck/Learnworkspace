#include <stdio.h>
#include <stdlib.h>

int main(void) {
  int i, j, k, input;

  scanf("%d", &input);
  
  int half = input / 2;

  for(i = 0; i < input; i++){
    int space = abs(i - half);
    int star = abs( half - abs(i - half)) * 2 + 1;

    for(j = 0; j < space; j++){
      printf(" ");
    }

    for(k = 0; k < star; k++){
      printf("*");
    }
    printf("\n");
  }
}