package javaFunciones;
import java.util.ArrayList;
import java.util.List;

public class EcommerceJv {
		
		static class productos {
			String nombre;
			double precio;
			
			productos(String nombre, double precio) {
				
				this.nombre = nombre;
				this.precio = precio;
			}
			
			static class carritoCompras {
				List<productos> producto = new ArrayList<>();
				
				void agregarProducto(productos barbie) {
					producto.add(barbie);
				}
				
				double calcularTotal() {
					double total = 0;
					for (productos barbie : producto) {
						total += barbie.precio;
					}
					return total;	
				}
			}
		}

		

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		productos muneca1 = new productos ("chelsea", 98.70);
		productos muneca2 = new productos ("skip", 95.40);
		
		
		carritoCompras carrito = new carritoCompras ();
		
			carrito.agregarProducto(muneca1);
			carrito.agregarProducto(muneca2);
			
			
			double totalCarrito = carrito.calcularTotal();
			
			System.out.println("Total carrito: " + totalCarrito);
			
	}
}


