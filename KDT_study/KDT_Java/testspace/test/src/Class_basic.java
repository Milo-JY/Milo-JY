class DataBox {
	int n;	// 디폴트 값으로 초기화 됨.
	double d;
	String str;
	boolean initTest;
	
	
	void initData(int n, double d, String str) {
		this.n = n;
		this.d = d;
		this.str = str;
		initTest = true;
	}
	
	// 클래스 내부에서는 동등한 관계여서 
	// 데이터 타입은 void
	void outputData () {
		if (initTest) {
			System.out.printf("n = %d\n", n);
			System.out.printf("d = %f\n", d);
			System.out.printf("str = %s\n", str);
			System.out.println();
		} else {
			System.out.println("초기화 하세요\n\n");
		}
	}
}

// 공간 할당, 주소 반환
// 클래스 타입은 모두 참조용 주소
// 클래스 내부 메소드 사용시 멤버연산자(.)을 사용. 
public class Class_basic {
	public static void main(String[] args) {
		// 지역 변수는 초기화 하지 않으면, 쓰레기 값.
		
		DataBox dataBox1 = new DataBox();
		DataBox dataBox2 = new DataBox();
		
//		dataBox1.n = 1;
//		dataBox1.d = 1.1;
//		dataBox1.str = "box1";
//		
//		dataBox2.n = 2;
//		dataBox2.d = 2.2;
//		dataBox2.str = "box2";
		dataBox1.initData(1, 1.1, "box1");
//		dataBox2.initData(2, 2.2, "box2");
		
		dataBox1.outputData();
		dataBox2.outputData();
	}

}
