package orgGeneration.Collections;
import java.util.Arrays;
import java.util.ArrayList;
public class arrayListCollections {
	public static void main(String[ ]args) {
		
		//******************Arrays************//
		String[] names = {"Jonathan", "Eunice", "Arturo", "Lizbeth", "Martin", "Lucero"};
		//Imprimir Arrays
		System.out.println(Arrays.toString(names));
		
		int[] edades = {23, 27, 28, 22, 29 };
		System.out.println(Arrays.toString(edades));
		
		//Acceder a cada elemento del Array
		String name1 = names[0];
		System.out.println("El primer elemento de la lista es " + name1);
		int edad1 = edades[1];
		System.out.println("Edad de " + name1 + " es de: " + edad1 + " años");
		
		
		//Obtener la longitud de Array
		int longitudNames = names.length;
		System.out.println("El Array names tiene: " + longitudNames + " elementos");
		
		
		//Obtener el ultimo elemento
		//String ultimoElemento = names[longitudNames - 1]; *La longitud ya vive en la variable ´longitudNames´ *
		String ultimoElemento = names[names.length - 1];//La longitud NO vive en una variable
		System.out.println("El ultimo elemento del Array name es " + ultimoElemento );
		
		//Mostrar cada elemento utilizando forEach
		for(String name : names) {
			System.out.println(name);
		}
		
		//**********ArrayList********//
		//ArrayList es un array que puede cambiar de tamaño. Es la clase de java que representa la esgtructura de datos Arrays
		//Permite elementos duplicados y recibe varios metodos para su manipulacion
		ArrayList<String> films = new ArrayList<String>();
		ArrayList<Integer> matricula = new ArrayList<>();//Wrapper Class
		ArrayList<Character> characters = new ArrayList<>();
		
		//Agregar elementos
		films.add("Inception");
		films.add("Se7even");
		films.add("The Shining");
		films.add("Pulp fiction");
		films.add("Mr Nodoby");
		films.add("The shutter island");
		films.add("Ready Player One");
		
		System.out.println(films);
		
		//Obtener un elemento: name.get(index);
		String film1 = films.get(0);
		System.out.println("La primer pelicula es: " + film1);
		
		//Modificar un elemento: name.set(index, newValue)
		String film3 = films.set(3, "Memento");
		String film3Get = films.get(3);
		System.out.println(film3Get);
		
		//Conocer el tamaño del ArrayList: name.size();
		int sizefilms = films.size();
		System.out.println("El tamaño del ArrayList films es de: " + sizefilms + " elementos");
		
		//Agregar un elemento y despues eliminarlo: name.remove(index);
		films.add("The fountain");
		System.out.println(films);
		
		films.remove(7);
		System.out.println(films);
		
		//Mostrando los elementos del ArrayList en forma de lista
		System.out.println("*** Films en lista ****");
		for(String film : films) {
			System.out.println(film);
			
		}
		
		
		
	}
}
