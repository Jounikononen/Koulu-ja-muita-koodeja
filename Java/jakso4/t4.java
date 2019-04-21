/*
 * Tekijä: Jouni Kononen
 * Jakson numero: 4
 * Jakson tehtävänumero: 4
 * Päiväys: 18.4.2019
 */

/**
 *
 * @author Jouni
*/

import java.util.Scanner;

public class t4 {
    
    public static void main(String[] args) {
        
        //Luodaan scanneri
        Scanner lukija = new Scanner(System.in);  
          System.out.print("Syötä merkki niin tulostan sen isona merkkinä: ");    
          String merkki = lukija.next();   

        //Muutetaan merkki isoksi toUpperCasea käyttämällä
        System.out.print("Kirjoittamasi merkki on nyt iso: " + merkki.toUpperCase()+"\n");
    }
}
