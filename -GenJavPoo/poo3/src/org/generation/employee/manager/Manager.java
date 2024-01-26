package org.generation.employee.manager;



/*
 * La clase Manager sive como subclase (clase hija), por lo tanto, debe entender (heredar) desde 
 * la super clase (clase Employee) para poder accerder a los atribustos y metodos de la superclazse
 */
public class Manager extends Employee {
	
	//1. Atributos
	private int antiguedad;
	private double incremento;
	
	//2. Getters y setters

	public int getAntiguedad() {
		return antiguedad;
	}

	public void setAntiguedad(int antiguedad) {
		this.antiguedad = antiguedad;
	}

	public double getIncremento() {
		return incremento;
	}

	public void setBono(double bono) {
		this.bono = bono;
	}

	public double getSlarioBase() {
		return slarioBase;
	}

	public void setSlarioBase(double slarioBase) {
		this.slarioBase = slarioBase;
	}
	
	//3. Constructor
	public Manager(String nombreCompleto, int id, double salario, String puesto, int antiguedad, double bono) {
		super(nombreCompleto, id, salario, puesto);
		this.antiguedad = antiguedad;
		this.incremento = incremento;
	}
	
	//4. Metodo del usuario
	public void organizarReunion() {
		System.out.println("El manager " + this.getNombreCompleto() + " convoca a una reunion");
	}
	//Invocar el metodo de  la superclase que guarda el salario base en cualquier Employee
	double slarioBase = super.getSalario();
	
	//Overriding (anulacion de metodos)
	/*
	 *En la empresa los Managers reciben un bono de $100 si tienen 1 año o mas de antiguedad
	 *Después de recibir su primer bono, cada año recibe un bono de $500
	 */
	
	/*
	 *Verificar la antiguedad. Si es mayor o igual a 1año es true, si no, false
	 *Crear un metodo para verificar la antiguedad y calcura el incremento del bono
	 */
	public void calcularBono() {
		if (this.antiguedad > 1) {
			//Operacion matematica para determinar el bono con base en la antiguedad
			double incrementoTotal = 100 + (this.antiguedad - 1) * 500;
			this.setIncremento(incrementoTotal);
		} else {
			this.setIncremento(0);
			System.out.println("No hay Bono! ");
		}
	}
	//Metodo para calcular el salario con incremento (siempre que se cumpla la condicion)
	public void calcularSalario() {
		double salarioManager = salarioBase + this.getIncremento();
		System.out.println("El salario del Manager " + this.getNombreCompleto()+ " es de $ " + salarioManager);
	}
	
	//5. toString. Para generar el toString y mandar a llamar los atributos de la superclase, debo seleccionar los getters de los atributos heredados. Después, puedo modificar el return según mi conveniencia
		@Override
		public String toString() {
			return "Manager [antiguedad=" + antiguedad + ", incremento=" + incremento + ", nombre="
					+ getNombreCompleto() + ", id=" + getId() + ", salario=" + getSalario() + ", puesto="
					+ getPuesto() + "]";
		}
}
