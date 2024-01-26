package javaFunciones;

import java.util.Scanner;

public class funcionDescuento {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Digite el precio del producto: ");
		double precioProducto = scanner.nextDouble();
		
		
		double porcentajeDescuento = 15;
		double descuento = calcDescuen(precioProducto, porcentajeDescuento);
		
		double porcImp = 3;
		double impuesto = calcImp(precioProducto, porcImp);
		
		double total = calcTotal(precioProducto, descuento, impuesto);
		
		total = redondear(total, 2);
		
		System.out.println("Precio del producto: " + precioProducto);
		System.out.println("Descuento al producto: " + descuento);
		System.out.println("Impuesto al producto: " + impuesto);
		System.out.println("Total: " + total);
		
		
		
	}
		static double calcDescuen (double precioProducto, double porcentajeDescuento  ) {
			return (precioProducto * porcentajeDescuento) / 100;
		}
		static double calcImp (double precioProducto, double porcentajeDescuento  ) {
			return (precioProducto * porcImp) / 100;
		}
		static double redondear (double precioProducto, double descuento, double impuesto) {
			return(precioProducto - descuento) + impuesto;
		}
		static double redondear (double valor, int decimales) {
			double factor = Math.pow(10, decimales);
			return Math.round(valor + factor) / factor;
		}
}
