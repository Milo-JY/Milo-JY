import java.util.Scanner;

public class Score {
   public static void main(String[] args) {   // main method 프로그램 시작/종료
      Scanner sc = new Scanner(System.in);
      int stCnt;
      int stSc;
      int tot = 0;
      
      for(;;) {
         tot = 0;
         
         System.out.print("학생수 : ");
         stCnt = sc.nextInt();
         
         if(stCnt <= 0) {
            sc.close();
            break;
         }
         
         System.out.println();
         
         for (int i = 0; i < stCnt; i++) {
            System.out.printf("%d번째 학생점수 : ", i+1);
            stSc = sc.nextInt();
            
            if( stSc < 0 || stSc > 100) {
               i--;
            } else {
               tot += stSc;
            }
         }
         
         System.out.printf("\n총점 : %d", tot);
         System.out.printf("\n평균 : %d", tot/stCnt);
         System.out.println("\n\n=======================\n\n");
      }
      
      System.out.println("\n< 프로그램 종료 >\n");
   }
}