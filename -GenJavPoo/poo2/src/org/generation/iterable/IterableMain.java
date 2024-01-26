package org.generation.iterable;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

public class IterableMain {
	public static void main(String[] args) {
		//Podemos iterar sobre una collecion de 3 maneras:
		//1. Iteracion mediante ciclo for-each
		List<String> nombres = new ArrayList<String>();
		
		nombres.addAll(Arrays.asList("Braulio", "Fernanda", "Rodrigo", "Ruben", "Marco", "Rey"));
		
		for(String nombre : nombres) {
			System.out.println(nombre);
		}
		
		//Iterar mediante Iterador
		List<String> apellidos = new ArrayList<String>();
		
		apellidos.addAll(Arrays.asList("Aleman", "Garcia", "Martinez", "Cardoso", "Razo", "Ceja"));
		
		//Util.izar un nuevo iterador y le vamos a pasar el metodo .iterator() a nuestro ArrayList
		Iterator<String> iterador = apellidos.iterator();
		
		//Utilizando while, devuelve verdadero si la iteracion tiene mas elementos, si no se termina el ciclo
		while(iterador.hasNext()) {
			String elemento = iterador.next();
			System.out.println(elemento);
		}
		
		//Mediante forEach que toma una expresion Java Lambda como parametro.
		List<String> animales = new ArrayList<String>();
		
		animales.addAll(Arrays.asList("Cuyo", "Nahula", "Perro", "Gato", "Cebra","Jirafa"));
		
		animales.forEach((animal) -> {
			System.out.println(animal);
			
		});
		
	}

}
