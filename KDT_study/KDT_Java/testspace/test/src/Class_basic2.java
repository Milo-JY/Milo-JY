class Car {
	String name;
	String color;
	boolean gasoline;
	
	void initData(String name, String color, boolean gasoline) {
		this.name = name;
		this.color = color;
		this.gasoline = gasoline;                       
	}
	
	void inforCar() {
		System.out.println("차량명 : "+ name);
		System.out.println("색상 : "+ color);
		if(gasoline) {
			System.out.println("내연기관 : 가솔린 차량");
		} else {
			System.out.println("내연기관 : 디젤 차량");
		}
	}
	
	void run() {
		if(gasoline) {
			System.out.println("부릉 부릉");
		} else {
			System.out.println("덜컹 덜컹");
		}
	}
	
	void stop() {
		System.out.println("끼이익!");
	}
}

public class Class_basic2 {
	public static void main(String[] args) {
		Car pride=new Car();
		
//		pride.name="프라이드";
//		pride.color="파랑";
//		pride.gasoline=true;
		
		pride.initData("프라이드", "파랑", true);
		
		pride.inforCar();
		pride.run();
		pride.stop();
		
	}
}
