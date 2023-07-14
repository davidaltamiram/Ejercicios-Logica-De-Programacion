package org.generations.ejercicio7;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.time.temporal.ChronoUnit;
import java.time.temporal.TemporalAdjusters;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Ejercicio7 {
	
	//Voy a crear un map para verificar la hora en español, ya que DayOfWeek solo funciona con dias en ingles
	//Este hashmap va a mapear un dia de la semana en español con un dia en ingles
	private static final Map<String, DayOfWeek> diaEspaniol = new HashMap<>();
	//Se instancia una fecha con el formato local
	static LocalDate date = LocalDate.now();
	
	//Se coloca de manera estatica los valores de la semana para el map diaEspaniol sin necesidad de crear una instancia
	static {
	diaEspaniol.put("lunes", DayOfWeek.MONDAY);
	diaEspaniol.put("martes", DayOfWeek.TUESDAY);
	diaEspaniol.put("miércoles", DayOfWeek.WEDNESDAY);
	diaEspaniol.put("jueves", DayOfWeek.THURSDAY);
	diaEspaniol.put("viernes", DayOfWeek.FRIDAY);
	}

	public static void main(String[] args) {
		//Abrimos un escaner
		Scanner sc = new Scanner(System.in);

		//Se crea una instancia que corresponde a cuando inicia el fin de semana, Viernes 15:00
		//La instancia de localDate recibe la fecha local por año, mes y dia y la hora con minutos (15 y 0)
		//Finalmente se regresa la fecha modificada con TemporalAdjusters para que tome el valor del viernes proximo,
		//independientemente de cuando sea ese viernes
		LocalDateTime finDeSemana = LocalDateTime.of(date.getYear(), date.getMonth(), date.getDayOfMonth(), 15, 0)
				.with(TemporalAdjusters.next(DayOfWeek.FRIDAY));
		
//Se crea un loop que termina hasta que el usuario ingresa los datos correctos
		while (true) {
			//Se piden los datos al usuario
			System.out.print("Ingresa un día de la semana (Lunes - Viernes): ");
			String diaSemana = sc.nextLine();
	        
			System.out.print("Ingresa una hora (horas:minutos): ");
			String hora = sc.nextLine();
			
			//Se transforman los valores string a dia de la semana y hora respectivamente
	        DayOfWeek diaValido = diaValido(diaSemana);
	        LocalTime horaValida = horaValida(hora);
	        
	        //Se verifica que ambos valores sean validos y que ninguno sea null
	        if(diaValido == null || horaValida ==null) {
	        	System.out.println("Ingrese una fecha/hora validos\n");
	        }else {
	        	//Si los valores son correctos se crea un formato de hora para la hora y fecha pasadas por el usuario
	        	LocalDateTime tiempoUsuario = convertidor(diaValido, horaValida);
	        	//Se comparan los minutos entre los dos formatos(el de la fecha que paso el usuario y 
	        	//el del inicio dle fin de semana, hacienbdo uso de ChronoUnit, que mide el tiempo en minutos
	        	//de los dos eventos pasados, y finalmente se imprime en consola
	        	System.out.println("Faltan " + ChronoUnit.MINUTES.between(tiempoUsuario, finDeSemana)+ " minutos Para el fin de semana");
	        	break;
	        }
		}
		sc.close();
	}

	
	private static LocalDateTime convertidor(DayOfWeek diaValido, LocalTime horaValida) {
		//Nuevamente se crea una instancia con date, para la fecha local y la hora correcta arrojada por el usuario
		//y se modifica el dia(ajusta) a el dia de la semana valido que paso el usuario para crear 
		//una instancia de LocalDateTime con fecha y hora pasadas por el usuario
		return LocalDateTime.of(date, horaValida).with(TemporalAdjusters.next(diaValido));
	}

	private static LocalTime horaValida(String hora) {
		//Se crea un formato para la hora, de acuerdo al input solicitado (hora :minutos)
		DateTimeFormatter formatoHora = DateTimeFormatter.ofPattern("HH:mm");
		//Se intentara parsear el valor introducido por elusuario a localTime de acuerdo al formato creado,
		//si es correcto el formato del usuario con el creado en formatoHora se regresa la hora
		try {
			return LocalTime.parse(hora, formatoHora);
			//En caso de que sea incorrecta el formato de hora pasada (0-24 horas):(0-60 minutos), se atrapa la excepcion
			//creada y se regresa un null
		}catch(DateTimeParseException e){
			return null;
		}
	}

	private static DayOfWeek diaValido(String diaSemana) {
		//Se recibe el dia de la semana por medio del input del usuario(lun-vier), como es un hashMap
		//Se busca el valor del key(diaSemana del usuario) en lowercase para evitar errores de coicidencias
		//y con base a este key se obtiene un value correspondiente al dia en ingles y se regresa como la clase
		//DayOfWeek, si se pasa un valor invalido, ej:sabado, no se encontrara el valor y se regresara null
		return diaEspaniol.get(diaSemana.toLowerCase());
	}

}

