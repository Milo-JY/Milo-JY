import java.util.Scanner;

public class Mathod_binaryAndRecursiveCall_quiz {
   public static int binarySearch (int[] selectionSort, int findValue, int lowIdx, int highIdx) {
//	   예외 처리 우선.
	   if (lowIdx > highIdx) return -1;
	   
	   int midIdx = (lowIdx + highIdx) / 2;
	   
	   if (findValue == selectionSort[midIdx]) return midIdx;
	   else if (findValue < selectionSort[midIdx]) return midIdx - 1;
	   else lowIdx =  midIdx + 1;
	   
	   return binarySearch(selectionSort, findValue, lowIdx, highIdx);
	   
   }
   
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int[]selectionSort = { 33,11,77,66,55,100,22,88,44,99 };
		int findValue;
		int findIdx;
      
		for (int i = 0, t; i < selectionSort.length-1; i++) {
			for (int j = i + 1; j < selectionSort.length; j++) {
				if(selectionSort[i] > selectionSort[j]) {
					t = selectionSort[i];
					selectionSort[i] = selectionSort[j];
					selectionSort[j] = t;
				}
			}
		}
      
		System.out.println("검색 값 입력 : ");
		findValue=scanner.nextInt(); 
		scanner.close();
		findIdx = binarySearch(selectionSort, findValue, 0, selectionSort.length-1);
		
		if(findIdx == -1) {
			System.out.println("찾으려는 값이 존재하지 않습니다.");
		}else {
			System.out.printf("검색 값 %d는(은) selectionSort배열 %d번째 위치에 존재합니다.",selectionSort[findIdx], findIdx + 1);
		}
	}
}

