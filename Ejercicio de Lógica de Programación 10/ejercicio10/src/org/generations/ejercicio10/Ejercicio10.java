package org.generations.ejercicio10;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.Scanner;

public class Ejercicio10 {
	private final static Map<String, String> diccionario = new HashMap<>();
	private final static ArrayList<String> randomList = new ArrayList<>();	
	
	static {
		diccionario.put("hola", "Hello");
		diccionario.put("adios", "Goodbye");
		diccionario.put("nombre", "Name");
		diccionario.put("gato", "Cat");
		diccionario.put("perro", "Dog");
		diccionario.put("sandia", "Watermelon");
		diccionario.put("programador", "Programmer");
		diccionario.put("escuela", "School");
		diccionario.put("rojo", "Red");
		diccionario.put("verde", "Green");
		diccionario.put("azul", "Blue");
		diccionario.put("lunes", "Monday");
		diccionario.put("martes", "Tuesday");
		diccionario.put("miercoles", "Wednesday");
		diccionario.put("sabado", "Saturday");
		diccionario.put("domingo", "Sunday");
		diccionario.put("ver", "See");
		diccionario.put("comer", "Eat");
		diccionario.put("Arbol", "Tree");
		diccionario.put("manzana", "apple");
	}
	static {
		randomList.add("hola");
		randomList.add("adios");
		randomList.add("nombre");
		randomList.add("gato");
		randomList.add("perro");
		randomList.add("sandia");
		randomList.add("programador");
		randomList.add("escuela");
		randomList.add("rojo");
		randomList.add("verde");
		randomList.add("azul");
		randomList.add("lunes");
		randomList.add("martes");
		randomList.add("miercoles");
		randomList.add("sabado");
		randomList.add("domingo");
		randomList.add("ver");
		randomList.add("comer");
		randomList.add("Arbol");
		randomList.add("manzana");
	}
	
	
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		Integer palabCorrectas = 0;
		ArrayList<String> randomWords = new ArrayList<>();
		
			randomWords.add(random(randomList));
			randomWords.add(random(randomList));
			randomWords.add(random(randomList));
			randomWords.add(random(randomList));
			randomWords.add(random(randomList));
		
			System.out.println("Traduzca las palabras: ");
			for (String palabra: randomWords) {
				System.out.print("Palabra: ");
				System.out.println(palabra);
				String intento = sc.nextLine().toLowerCase();
				
				if (intento.equals(diccionario.get(palabra).toLowerCase())){
					palabCorrectas++;
				}
				System.out.print("Siguiente palabra... \n\n");
			}
			Double calificacion = (((double) palabCorrectas)/5)*100;
			
			System.out.printf("El numero de palabras correctas fue: %d.%n"
					+ "Calificacion de %.1f",palabCorrectas,calificacion) ;
			
		sc.close();
	}
	
	public static String random(ArrayList<String> randomList) {
		Random randomWord = new Random();
		int randomIndex = randomWord.nextInt(randomList.size());
		return randomList.get(randomIndex);	
	}
	
}
