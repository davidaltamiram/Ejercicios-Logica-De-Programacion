package org.generations.ejercicio8;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Ejercicio8 {

	public static void main(String[] args) {
		ArrayList<Integer> primeArray = new ArrayList<>();
		ArrayList<Integer> nonPrimeArray = new ArrayList<>();

		Integer[] array = new Integer[10];
		Scanner sc = new Scanner(System.in);

		for (int i = 0; i < 10; i++) {
			System.out.print("Ingrese un numero: ");
			array[i] = sc.nextInt();

		}

		for (Integer num : array) {
			if (isPrime(num)) {
				primeArray.add(num);
			} else {
				nonPrimeArray.add(num);
			}
		}
		sc.close();
		
		

		
		List<Integer> sortArray = Stream.concat(primeArray.stream(), nonPrimeArray.stream()).
				collect(Collectors.toList());
	
		sortArray.stream().forEach(element->{
			System.out.println(element);
		}); 
		
	}

	private static boolean isPrime(Integer num) {
		if (num == 1) {
			return false;
		}
		for (int i = 2; i <= Math.sqrt(num); i++) {
			if (num % i == 0) {
				return false;
			}
		}
		return true;
	}

}
