
public class minmax {

	public static void main(String[] args) {
		int[] ar = { 19, 2, 16, 25, 66 };
		int cnt = 0;
		int a = 0;
		
		for (int i = 0; i < ar.length-1; i++) {
			cnt = 0;
			for (int j = 0, t; j < ar.length-1-i; j++) {
				if (ar[j] > ar[j+1]) {
					t = ar[j];
					ar[j] = ar[j+1];
					ar[j+1] = t;
					cnt++;
				}
				a++;
			}
			if(cnt == 0) break;
		}
		for(int i : ar) System.out.print(i + " ");
		System.out.println("\n" + cnt);
		System.out.println("\n" + a);
	}

}

// 셀렉션sort : 왼쪽 고정 왼쪽부터 쌓임
// 버블 : 왼쪽부터 비교해서 오른쪽으로 쌓임