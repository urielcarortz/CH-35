package org.generation.exceptions;

public class Division {
	//Metodo para dividir
	public static int dividir(int num1, int num2) {
		return num1 / num2;
	}
	public static void main(String [] args) {
		/* 
		 *La clase Exception nos permite manejar cualquier caso excepcional con nuestro codigo, es el equivalente a los errores 
		 * 
		 * Utiliza una estructura de control  try.catch que permite manejar las excepciones.
		 * ->Try: envuelve el codigo que puede generar una excepcion y lo evalua
		 * ->Catch: contiene el codigo que se ejecuta cuando le lanza la excepcion
		 * 		Syntaxis
		 * 			try {	try {
		 *  			//Código protegido
		 *  		} catch (ExceptionName e){
		 *  			//Bloque de excepción
		 *  		}
		 *  - finally : Siempre se ejecuta. Se utiliza para mostrar un mensaje en caso 
		 *  de ser invocado. Podemos prescindir de finally
		 * 
		 * 
		 */
		//Exception que se arroja si un numero se divide entre 0
		try {
			int resultado = dividir(10, 0);
			System.out.println("El resultado de la division es: " + resultado);
		} catch (ArithmeticException e) {
			System.out.println("Error: no puedes dividir entre 0");
		}finally {
			System.out.println("Programa Finalizado");
		}
	}
}
