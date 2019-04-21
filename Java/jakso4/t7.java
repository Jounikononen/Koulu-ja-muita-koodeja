/*
 * Tekijä: Jouni Kononen
 * Jakson numero: 4
 * Jakson tehtävänumero: 7
 * Päiväys: 18.4.2019
 */

/**
 *
 * @author Jouni
 */

import java.util.Scanner;

public class t7 {
    
    
    public static void main(String[] args) {
        
        //Luodaan scanneri
        Scanner lukija = new Scanner(System.in);  
          System.out.print("Syötä Sotu: ");    
          String sotu = lukija.next();   
        
          //Etsitään vuosisata -merkintä (+, -, A)
          String tarkastus = sotu.substring(6, 7);
          int vuosi;
          
          //Tehdään tarkastus vuosisadalle ja tulostetaan syntymäaika
          if (tarkastus.equals("-")) {
              System.out.println("Syntymäaikasi on: " + sotu.substring(0,2) + "." + sotu.substring(2,4) + ".19" + sotu.substring(4,6));
          } else if (tarkastus.equals("+")) {
              System.out.println("Syntymäaikasi on: " + sotu.substring(0,2) + "." + sotu.substring(2,4) + ".18" + sotu.substring(4,6));
          } else if (tarkastus.equals("A")) {
             System.out.println("Syntymäaikasi on: " + sotu.substring(0,2) + "." + sotu.substring(2,4) + ".20" + sotu.substring(4,6));         
          } 
    }   
}
