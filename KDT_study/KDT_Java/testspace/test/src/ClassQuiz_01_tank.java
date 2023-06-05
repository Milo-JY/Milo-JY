class Tank {
	String name;
	int cannon;
	boolean missile;
	boolean initTest;
	
	void initData(String name, int cannon, boolean missile) {
		this.name = name;
		this.cannon = cannon;
		this.missile = missile;
		initTest = true;
	}
		
	void inforTank() {
		if (initTest) {
			System.out.printf("탱크명 : %s", name);
			System.out.printf("포종류 : %d단계", cannon);
			System.out.printf("미사일 %s장착\n", missile ? "" : "미");
		} else {
			System.out.println("값을 넣어주세요.");
		}
	}
	
	void attack() {
		if (initTest) {
			String sound = null;
			
			System.out.printf("\n\n< %s 공격 >", name);
			switch (cannon) {
			case 1:
				sound = "펑";
				break;
			case 2:
				sound = "펑펑";
				break;
			case 3:
				sound = "콰광";
				break;
			}
			
			System.out.printf("대포발사 : %s\n", sound);
			
//		if (canon == 1) {
//			sound = "펑";
//		} else if (canon == 2) {
//			sound = "펑펑";
//		} else {
//			sound = "콰광";
//		}
			
			if (missile) {
				System.out.println("미사일 발사 : 초전박살");
			}
		}
	}
}

public class ClassQuiz_01_tank {
	public static void main(String[] args) {
		Tank tank1 = new Tank();
		Tank tank2 = new Tank();
		Tank tank3 = new Tank();
		
		tank1.initData("K1", 1, false);
		tank2.initData("K2", 2, false);
		tank3.initData("K3", 3, true);
		
		tank1.inforTank();
		tank2.inforTank();
		tank3.inforTank();
		
		tank1.attack();
		tank2.attack();
		tank3.attack();
	}
}
