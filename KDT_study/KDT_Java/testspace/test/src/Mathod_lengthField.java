class Mathod_lengthField {
	static void gridLine(String str, char line) {
//		string 타입의 str라는 클래스 내부에 있는 기능 중 length() 메소드를 불러오기 때문에 Java의 문법 규칙
		for (int i = 0; i < str.length(); i++) {
			System.out.print(line);
		}
		System.out.println();
	}
	
	static void messageBox(String str, char line) {
		gridLine(str, line);
		System.out.println(str);
		gridLine(str, line);
	}
	
	public static void main(String[] args) {
		String str1 = "| Hello |";
		String str2 = "| Congratulation |";
		
		messageBox(str1, '-');
		messageBox(str2, '=');
	}
}
