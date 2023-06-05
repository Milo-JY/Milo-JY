
public class Main {

	static int add (int...a) {				// 가변 인수 문법 : 타입명... 형식인수. -
		int s= 0;							// 동일 타입의 인수 여러 개를 배열 형태로 전달 받음.
											// 가변 인수 외 다른 탕입의 식인수 지정도 가능하나, 가변 인수가 항상 다
		for(int i : a) s += i;				// 타입의 인수보다 뒤에 와야 함에 주의.
		
		return s;
	}
	
	public static void main(String[] args) {
		int ar[]= {7,8,9,10};
		
		System.out.println( add( 1, 2 ) );
		System.out.println( add( 1, 2, 3 ) );
		System.out.println( add( 4, 5, 6, 7 ) );
		
		System.out.println( add(ar));		// 배열의 참조 또한 가변인수로 전달 가능하며 이는 단히 값의 복사가 아닌,
											// 배열의 연속성에 의한가변인수를 통한 배열 전체 요소의 참조 순회를 의미.
		System.out.println( add( new int[] {7,7}) );	// 임시 생성한 배열 요소도 전달 가능.
	}

}
