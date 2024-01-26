package org.generation.banco;

//En esta clase de definen los metodos que arrojan Excepciones, siempre que en la clase Cajero sde dispare dicha 
/*
 *Requerimientos: 
 *	1. Trabajar bajo el paradigam POO
 *	2. Indicar que la clase es una Exception mediante herencia (extends)
 *	3. Crear variables y metodos para instanciar objetos
 *	4. Encapsular 
 * 
 */
public class FondosInsuficientesException extends Exception{
	private static final long serialVersionUID = 1L; //No es necesario, pero es buena practica asignarla
	//Atributos
	private double monto;
	
	//Contructor
	public FondosInsuficientesException(double monto) {
		this.monto = monto;
	}
	//Getter y Setter
	public double getMonto() {
		return monto;
	}
	
	public void setMonto(double monto) {
		this.monto = monto;
	}
}
