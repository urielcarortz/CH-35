package org.generation.overloading;

import java.math.BigDecimal;

public class SumaMain {
	public static void main(String[] args) {
		//Invocamos el metodo de tipo static mediante su clase y no mediante la instancia de un objeto
		int suma1 = Suma.sumar(8, 5);
		double suma2 = Suma.sumar(4.3, 6.26);
		
		//Para imprimir BigDecimal, debemos guardar los valores de los parametros en objetos de tipo BigDecimal y
		//asignarlos como argumentos de string de cada nueva instancia
		BigDecimal sum1 = new BigDecimal("4.3"); //Primero objeto instanciado
		BigDecimal num2 = new BigDecimal("6.26"); //Segundo objeto instanciado
		
		//Mando a llamar los objetos instanciandos del BigDecimal como los parametros del metodo
			BigDecimal suma3 = Suma.sumar(sum1, num2);
			
		
		System.out.println("La suma de enteros es: " + suma1);
		System.out.println("La suma de decimales es: " + suma2);
		System.out.println("La suma exacta de decimales es: " + suma3);
		
		//crear un tercer metodo 
		
		/* */
		
	}
}
//BigDecimal