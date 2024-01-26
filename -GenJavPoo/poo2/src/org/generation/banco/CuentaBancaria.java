package org.generation.banco;

/*
 *En esta clase se definen los metodos para disparar las excepciones, es decir el try-catch.
 *Se definen otros metodos como depositar dinero, rettirar dinero.
 *	Requerimientos
 *	-> Trabajar bajo POO
 *	-> Encapsular (modificadores, getters y setters)
 *	-> Crear variables y metodos para instanciar objetos
 * 
 */
public class CuentaBancaria {
	private double saldo;
	private int idCuenta;
	//Contructor que recibe solamente el atributo numero
	public CuentaBancaria(int idCuenta) {
		this.idCuenta = idCuenta;
	}
	
	//Metodo para depositar dinero
	public void depositar (double monto) {
		saldo += monto; //Esto es igual a saldo + monto..
	}
	
	//Metodo para retirar dinero..
	/**
	 * Verificar si el monto a retirar es menor o igual al saldo actual.
	 * 	->true: Se puede retirar el monto solicitado
	 * 	->false: No se puede retira y calculamos cuanto falta para completar la operacion
	 * 
	 */
	public void retirar (double monto) {
		if (monto <= saldo) {
			saldo -= monto; //Esto es lo mismo que saldo = saldoi - monto;
		} else {
			double faltante = monto - saldo;
			//Crear la instancia de la clase FondosInsuficientesException con las 
			//palabras reservadas throw new e y le pasamos el parametro correspondiente al la variable que disparar la excepcion  
			throw new FondosInsuficientesException(faltante);  /* Esto nos va a marcar un error, 
			porque queremos instanciar de manera local y no lo encuentra, para ello necesitamos 
			"heredarlo" como parte del método con la palabra reservada throws y el nombre de la excepción*/
		}
	}
    //Getters y Setters
	public double getSaldo() {
		return saldo;
	}

	public void setSaldo(double saldo) {
		this.saldo = saldo;
	}

	public int getIdCuenta() {
		return idCuenta;
	}

	public void setIdCuenta(int idCuenta) {
		this.idCuenta = idCuenta;
	}
	
	
	
	
	
	

}
