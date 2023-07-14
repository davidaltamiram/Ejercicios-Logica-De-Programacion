package org.generation.ejercicio6;

import java.util.Scanner;

public class Ejerciciio6 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Ingrese una oracion:");
		
		String print = new StringBuilder(sc.nextLine()).reverse().toString();
		
		System.out.println(print);
		
		sc.close();
	}

}
