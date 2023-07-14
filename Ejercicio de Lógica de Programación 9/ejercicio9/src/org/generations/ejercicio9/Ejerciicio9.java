package org.generations.ejercicio9;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Ejerciicio9 {
	private final static Map<String, String> diccionario = new HashMap<>();

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

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Boolean exit = false;

		while (!exit) {
			System.out.println("Ingrese una palabra: ");
			String palabra = diccionario.get(sc.nextLine());
			if (palabra != null) {
				System.out.println("Su traducción al inglés: " + palabra);
			} else {
				System.out.println("Palabra no encontrada, intente nuevamente");
			}
			System.out.println("¿Intentar otra vez?");
			if (sc.nextLine().equals("no")) {
				exit = true;
			}
		}
		sc.close();
	}

}
