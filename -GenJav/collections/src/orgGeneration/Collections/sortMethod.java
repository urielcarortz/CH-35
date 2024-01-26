package orgGeneration.Collections;

import java.util.ArrayList;
import java.util.Collections;

public class sortMethod {
	public static void main(String[] args ) {
		//El metodo .sort() permite ordenar las elementos de un ArrayList
		ArrayList<Integer> points = new ArrayList<Integer>();
		ArrayList<String> names = new ArrayList<String>();
	
		points.add(5);
		points.add(7);
		points.add(6);
		points.add(10);
		points.add(7);
		points.add(8);
			
		System.out.println(points);//No orenados de menor a mayor
		
		//Ordenamiento de menor a mayor utilizando sort
		Collections.sort(points);
		System.out.println(points);//Ordenados de menor a mayor
		
		names.add("Ximena");
		names.add("Martin");
		names.add("Rocio");
		names.add("Lucero");
		names.add("Lizbeth");
		names.add("angel");
		names.add("fernanda");
		System.out.println(names);
		//Ordenamiento de menor a mayor utilizando sort
		Collections.sort(names);
		System.out.println(names);//Toma en cuenta el ordenamiento con base ala tabla Ascii
		
	}
}
