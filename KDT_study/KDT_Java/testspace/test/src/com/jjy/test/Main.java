package com.jjy.test;

interface Operator {
	int test(int n1, int n2);
	char getOpChar();
}

class Sum implements Operator {
	char opChar = '+';
	
	@Override
	public int test(int n1, int n2) {
		return n1 + n2;
	}
	
	@Override
	public char getOpChar() {
		return opChar;
	}
}

class Sub implements Operator {
	char opChar = '-';
	
	@Override
	public int test(int n1, int n2) {
		return n1 - n2;
	}
	
	@Override
	public char getOpChar() {
		return opChar;
	}
}

class Mul implements Operator {
	char opChar = '*';
	
	@Override
	public int test(int n1, int n2) {
		return n1 * n2;
	}
	
	@Override
	public char getOpChar() {
		return opChar;
	}
}

class Div implements Operator {
	char opChar = '/';
	
	@Override
	public int test(int n1, int n2) {
		return n1 / n2;
	}
	
	@Override
	public char getOpChar() {
		return opChar;
	}
}

// 익명 사용 시 타입을 알 수 없어 instanceof를 사용해 타입 검색.
public class Main{
	public static void calculator(int n1, int n2, Operator op) {
		System.out.printf("%d %c %d = %d\n", n1, op.getOpChar(), n2, op.test(n1, n2));
	}
	
	public static void main(String[] args) {
		calculator(10, 5, new Sum());
		calculator(10, 5, new Sub());
		calculator(10, 5, new Mul());
		calculator(10, 5, new Div());
	}
}