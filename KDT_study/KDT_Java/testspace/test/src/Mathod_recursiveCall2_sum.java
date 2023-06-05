/*
 *       당누적합 = 전누적합 + 당대상값      -      당기준 시점
 * 
 *       차누적합 = 당누적합 + 차대상값      -      차시점
/*
public class Main{
   public static int sum( 전누적합, 당대상값) {
      if( 차대상값 조건 ) return 전누적합(최종 당누적합);
      
      return sum( 전누적합+당대상값, 차대상값 );      // sum(  당누적합, 차대상값 )
   }
   
   public static void main(String[] args) {
      System.out.println(  sum( 전누적합, 당대상값 )  );
   }
}
*/

// 순서대
//public class Mathod_recursiveCall2_sum{
//   public static int sum(int s, int n) {   // s : 전누적합,   n : 당대상값
//      
//      if( n>=11 ) return s;            // n : 최종 차대상값,      s : 최종 당누적합
//      
//      return sum(s+n, n+1);            // sum(   당누적합[전누적합 + 당대상값], 차대상값   )
//   }
//   
//   public static void main(String[] args) {
//      System.out.println( sum(0,1) );      // sum( 전누적합, 당대상값 )
//   }
//}

// 역순 누적합

public class Mathod_recursiveCall2_sum{
	   public static int sum(int n) {   // s : 전누적합,   n : 당대상값
	      
	      if( n <= 0 ) return 0;            // n : 최종 차대상값,      s : 최종 당누적합
	      
	      return sum(n - 1) + n;            // sum(   당누적합[전누적합 + 당대상값], 차대상값   )
	   }
	   
	   public static void main(String[] args) {
	      System.out.println( sum(10) );      // sum( 전누적합, 당대상값 )
	   }
	}