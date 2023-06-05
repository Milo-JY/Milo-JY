import java.util.Scanner;

public class Mathod_recursiveCall2_sum_quiz {
   public static int validateSum(int min, int max, int firstMax) {
	  int tot;
      if ( max < min ) return 0;
      
      // return을 tot를 변수로 담아 딜레이.
	  tot = validateSum(min, max - 1, firstMax) + max;
	  
	  // 시작 고정값 필요 -> firstMax를 사용.
	  System.out.printf("%d%s", max, max < firstMax ? " + " : "\n\n");
	  
	  return tot;
   }
   
   public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      int tot=0;
      int n1, n2;
      int min, max;
      
      System.out.print("정수1 : ");
      n1=scanner.nextInt();
      System.out.print("정수2 : ");
      n2=scanner.nextInt();
      scanner.close();
      
      if(n1>n2) {
         max=n1;
         min=n2;
      } else {
         max=n2;
         min=n1;
      }
      
      for (int i = min; i <=max ; i++) {
         tot+=i;
      }
      System.out.printf("<루프 이용 검증>%d부터 %d까지의 합은 : %d\n\n", min, max, tot);
      
      System.out.printf("<재귀호출을 이용한 누적합> %d부터 %d까지의 합은 : %d", min, max, validateSum(min, max, max) );
   }
}
