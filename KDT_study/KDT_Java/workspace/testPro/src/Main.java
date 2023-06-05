public class Main{
   public static void main(String[] args) {
      int[] ar = { 75, 17, 23, 5, 66 };
      
//       0  1  2  3  4 5 = 6
//       	     	  l-1
//       	     	  
//  i = 0 4  = 합이 leng-1
//      1 3
//      2 2
      
      for (int i = 0, t; i < ar.length/2; i++) {
		t = ar[i];
		ar[i] = ar[ar.length-1-i];
		ar[ar.length-1-i] = t;
      }
      
      for (int i : ar) System.out.print(i + " ");
   }
}