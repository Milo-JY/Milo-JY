import java.util.Scanner;

public class Mathod_shapeOfMathod {

	public static void main(String[] args) {
		
	}

	static void numOfTwo_Sum() {
		Scanner scanner = new Scanner(System.in);
		
		int sum;
		int a, b;
		int min, max;
		
		System.out.println("< 두 자연수 사이의 합 (0포함)> - 두 수중 하나가 음수이면 종료.");
		for(;;) {
			sum=0;
			System.out.print("첫 번째 수 입력 : ");
			a=scanner.nextInt();
			System.out.print("두 번째 수 입력 : ");
			b=scanner.nextInt();
			
			if( a<0 || b<0) {
				System.out.println("연산 종료.");
				scanner.close();
			return; 				// 함수의 종료. 함수 내에서 return을 하면 루프에 대
									// -반복과 관계 없이 무조건 함수를 종료시킴.	
			}else if(a>b) {
				min=b;
				max=a;
			}else {
				min=a;
				max=b;
			}
			
			for (int i = min; i <= max; i++) {
				sum += i;
			}
			
			System.out.printf("%d와 %d의 합은 %d다.\n\n", min, max, sum);
			
		}
	}
}
