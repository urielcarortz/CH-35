package org.generation.banco;


/*
 *En cajero se instancia el objeto de tipo CuentaBancaria y se invocan los metodos definidos
 *Aqui si, se pueden establecer los try-catch de la excepcion  que se definio en el metodo retirar
 *Los resultados se muentran en consola
 * 
 */
public class Cajero {
	public static void main(String[] args) {
		CuentaBancaria cuentaDaniel = new CuentaBancaria(6889); //Cuenta bancaria con su idCuenta
		
		//Simulamos que tenemos un Scanner y el cliente introduce dinero
		System.out.println("Deposito: $500 ");
		cuentaDaniel.depositar(500);
		
		//Revisar si se actualiza el saldo (debe haber 500 psos)
		System.out.println("El saldo nuevo es de $: " + cuentaDaniel.getSaldo());
		
		//Retirar dinero
		try {
			//Simulamos nuevamente el scanner para retirar
			System.out.println("Retiraste $300");
			cuentaDaniel.retirar(300);
			System.out.println("El nuevo saldo es de $" + cuentaDaniel.getSaldo()); //Output: $200
			
			System.out.println("Retirando $200");
			cuentaDaniel.retirar(200);
			System.out.println("El nuevo saldo es de $" + cuentaDaniel.getSaldo()); //Output: $0
			
			System.out.println("Retirando $300");
			cuentaDaniel.retirar(300);
			System.out.println("El nuevo saldo es de $" + cuentaDaniel.getSaldo()); //Output: Exception
		} catch (FondosInsuficientesException e) {
			System.out.println("\u001B[31mLo siento, te faltan $\u001B[31m" + e.getMonto());
			System.out.println("\u001B[31mLo siento, te faltan $\u001B[31m" + e.getMonto());
			e.printStackTrace(); //Método de excepciones que imprime el seguimiento del flujo de la excepción
		}
	}
}
