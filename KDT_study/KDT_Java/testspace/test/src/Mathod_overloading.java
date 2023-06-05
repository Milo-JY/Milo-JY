
public class Mathod_overloading {

	static int add(int a, int b) {
		return a + b;
	}
	
	static int add(int a, int b, int c) {
		return a + b + c;
	}
	
	static double add(double a, double b) {
		return a + b;
	}
	
//	static long add(int a, int b) {			// 메서드의 오버로딩은 인수의 갯수나
//		return (long)(a + b);				// -타입에 의해	결정되며 리턴 타입
//	}										// -오버로딩의 요건이 되지 못함.	
	
	public static void main(String[] args) {
		System.out.println(add(1,2));
		System.out.println(add(1,2,3));
		System.out.println(add(4.3,5.));
	}

}
