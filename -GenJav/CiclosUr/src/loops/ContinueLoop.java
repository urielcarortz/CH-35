package loops;

public class ContinueLoop {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/*
		 *Instrucciones de salto: 
		 *-Continue- Interrumpe la iteracion del bucle, si se procede una condicion
		 * especifica y continua con la siguiente 
		  
		  
		 * Con contiene, ejecutando la sentencia condicional pero cumpliendo la 
		 * condicion del bucle for 
		 */
		
		for (int cliente = 1; cliente <= 20; cliente++ ); {
			if (cliente == 5) {
					System.out.println("Cliente numero: " + cliente + " Has sido el !Ganador!");
				continue;	
			}System.out.println("Eres el cliente " + cliente );
			
			
			
		}
	}

}
