package controlFlujo;
import java.util.Scanner;
public class flujoControl {

	public static void main(String[] args) {//Debe coincidir la clase con el nombre del document
		// TODO Auto-generated method stub
		
		//Primero defino una variable de tipo string donde se guarda un dato
		/*String viaje = null; //se inicializa la variable en null y despues, se le asigna la fecha y con esto reemplazarlo por fecha 
		
		
		//Para validar si podemos viajar en determinada fecha
		if (viaje != null) {
			System.out.print("Sin fecha disponible");
		} else {
			System.out.print("Con fechas disponibles");
		}*/
		
		
		/* //Validacion de contraseña
		Scanner scanner = new Scanner (System.in);
		
		//Solicitamos la primera contraseña
		System.out.print("Ingrese su contraseña: ");
		String contraseña1 = scanner.nextLine();
		 // Solicitar la segunda contraseña
        System.out.print("Ingrese la contraseña nuevamente: ");
        String contraseña2 = scanner.nextLine();

        // Verificar si las contraseñas coinciden
        if (contraseña1.equals(contraseña2)) {
            System.out.println("Las contraseñas coinciden. Acceso permitido.");
        } else {
            System.out.println("Las contraseñas no coinciden. Acceso denegado.");
        }

        // Cerrar el scanner
        scanner.close(); */
		System.out.println("Bienvenido a la Dulceria");
		System.out.println("<<>>");
		System.out.println("Que desea Ordenar Elija un Numero: ");
		System.out.println("1. Palomitas ");
		System.out.println("2. Refresco ");
		System.out.println("3. Nachos ");
		System.out.println("4. HotDog ");
		System.out.println("5. Pagar");
		
		Scanner scanner = new Scanner (System.in);
		int num = scanner.nextInt();
		
		switch (num) {
			case 1: 
				System.out.println("Agrego Palomitas a su combo");
				break;
			case 2: 
				System.out.println("Agrego Refresco a su combo");
				break;
			case 3: 
				System.out.println("Agrego Nachos a su combo");
				break;
			case 4: 
				System.out.println("Agrego HotDog a su combo");
				break;
			case 5: 
				System.out.println("Paga su combo");
				break;
			default:
				System.out.println("Opcion no Valida");
				break;
			}
		
		 
        
        
        
        
	}//Main

}//class
