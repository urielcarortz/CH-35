package orgGeneration.Collections;

import java.util.Arrays;
import java.util.HashSet;
public class hashSetCollection {
	public static void main (String[] args) {
		//HashSet es una clase de Collections donde cada elemento es unico, es decir, no se repiten los elementos
		HashSet<String> animals = new HashSet<String>();
		
		animals.add("Buho");
		animals.add("Caballo");
		animals.add("Perro");
		animals.add("Gato");
		animals.add("Baca");
		animals.add("Cebra");
		animals.add("Capibara");
		animals.add("Capibara");
		animals.add("Capibara");
		animals.add("Capibara");
		animals.add("Capibara");
		animals.add("Capibara");
		animals.add("Capibara");
		
		//Imprimir el HashSet
		System.out.println(animals);
		
		//Conocer si un elemento se encuentra dentro del Set: contains();
		System.out.println(animals.contains("Capibara"));
		
		//Elimira un ele,ento: remove();
		animals.remove("Cebra");//Elimino
		System.out.println(animals); //Imprimo el set sin el elemento eliminado
		
		animals.addAll(Arrays.asList("Perrito", "Gatito", "Osito", "Nahual", "Tepezcuintle"));
		System.out.println(animals);
		
		/**
		 * La clase HashSet no va a garantizar que los elementos se muestren según el orden establecido ya que busca eficientar la búsqueda y recuperación de los elementos.
		 * Utiliza tablas hash para almacenar los elementos y mostrarlos al usuario
		 */
		
		//Limpiar el HashSet: .clear();
		animals.clear();
		System.out.println(animals);
	}

}
