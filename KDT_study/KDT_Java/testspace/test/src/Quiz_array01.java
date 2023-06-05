
public class Quiz_array01 {

	public static void main(String[] args) {
		int[][][] gradeOrganization = new int[3][][];
		int[] classSize= { 5, 8, 10 };  
		
		for (int i = 0; i < gradeOrganization.length ; i++) {
			gradeOrganization[i] = new int[classSize[i]][20];
		}
		
		int stNum = 0;
		for (int i = 0; i < gradeOrganization.length; i++) {
			for (int j = 0; j < gradeOrganization[i].length; j++) {
				for (int j2 = 0; j2 < gradeOrganization[i][j].length; j2++) {
					gradeOrganization[i][j][j2] = ++stNum;
				}
			}
		}
		
		System.out.println(stNum);
		
		for (int i = 0; i < gradeOrganization.length; i++) {
			System.out.printf("< %d학년 >\n", gradeOrganization.length - i);
			
			for (int j = 0; j < gradeOrganization[i].length; j++) {
				System.out.printf("%2d 반 : ",j + 1);
				
				for (int j2 = 0; j2 < gradeOrganization[i][j].length; j2++) {
					System.out.printf("%3d번 ", gradeOrganization[i][j][j2]);
				}
				System.out.println();
			}
		}
		
		System.out.printf("<");
	}

}
