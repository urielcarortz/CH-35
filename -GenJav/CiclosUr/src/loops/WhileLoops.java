package loops;
import java.util.Scanner;

public class WhileLoops {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/*While ejecuta un bloque de codigo hasta que se cumpla una condicion dada
		 * 
		 * While (expresion){
		 * 	bloque de codigo a ejecutar
		 * (contador-itarador)
		 * }
		 */
		
			/*int cuenta = 0;
			while (cuenta < 10) {
				cuenta ++;
				System.out.println("La cuenta es de: " + cuenta);
				*/
			
			/*Crear un programa que solicite al usuario un número. 
			 * Dicho número será tomado como el número final de una cuenta. 
			 * Dicha cuenta inicia en 1.
			 *  Debe mostrar en consola la cuenta del 1 hasta el número proporcionado.
			1. Importar un scanner e implementarlo
			2. Un mensaje para darle contexto al usuario
			3. Almacenar el número del usuario en una variable.
			4. Guardar en variable el número que iniciar la cuenta (1)
			5. Implementar un ciclo While
			6. Mostrar por consola el resultado.		
			*/
			/* //Pso 1. 
			Scanner sc = new Scanner(System.in);
			//Pso 2.
			System.out.println("Escribe un numero que servira como numero final de una cuenta:  ");
			//Pso 3.
			int numFinal = sc.nextInt();
			//Pso 4.
			int numInic = 1;
			//Pso 5.
			while (numInic <= numFinal) {
				System.out.println("La cuenta va en: " + numInic);
				numInic++;
			}
			sc.close();
			*/
			/*
			 * Crear un programa para un cajero bancario
			 * - El programa me mostrará 4 opciones:
			 * 1. Consultar saldo
			 * 2. Ingresar dinero
			 * 3. Retirar dinero
			 * 4. Salir
			 * - Mostrar mensaje de bienvenida al usuario, darle contexto y solicitar que elija una opción (número)
			 * - Mostrar al usuario la opción que eligió y permitir que elija otra opción
			 * - El usuario puede salir del programa escribiendo 4 (salir)
			 */
			
			/* System.out.println("BIenvenido: ");
				
			System.out.println("1. Consultar saldo ");
			System.out.println("2. Ingresar dinero");
			System.out.println("3. Retirar dinero");
			System.out.println("4. Salir");
			
			Scanner src = new Scanner(System.in);
			int opcion;
			
			do {
				opcion = src.nextInt();
				
				switch(opcion) {
				case 1:
					System.out.println("Consultar saldo ");
					break;
				case 2: 
					System.out.println("Ingresar dinero ");
					break;
				case 3:
					System.out.println("Retirar dinero");
					break;
				case 4:
					System.out.println("Salir");
					break;
						default:
							System.out.println("Opcion no valida");
							break;
				}
			}while (opcion != 4);
			
			src.close();
			*/
		
		
		boolean repetir = true;
		int opcion = 1;	
		int dinero = 0;
		int añadir = 0;
		int retirar = 0;
		
		do {
			System.out.println("Bienvenido al cajero automático. Seleccione una opción");
			System.out.println("1. Consultar saldo ");
			System.out.println("2. Ingresar dinero");
			System.out.println("3. Retirar dinero");
			System.out.println("4. Salir");
			
			opcion=scanner.nextInt();
			
			System.out.println("Usted eligió la opción "+ opcion);
			
			switch(opcion) {
			case 1:
				System.out.println("Su saldo es "+ dinero);
				break;
			case 2:
				System.out.println("Ingrese el monto por añadir");
					añadir=scanner.nextInt();
					dinero+=añadir;
				break;
			case 3:
				System.out.println("Ingrese el monto a retirar ");
				retirar=scanner.nextInt();
				dinero-=retirar;
				break;
			case 4:
				repetir = false;
				break;
			
			}
			
			System.out.println("¿Desea elegir otra opción? (true/false) ");
			repetir=scanner.nextBoolean();
			
		}while(repetir);
		
		
		
		
		}
	}


