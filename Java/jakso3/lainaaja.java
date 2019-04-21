/*
 * Tekijä: Jouni Kononen
 * Jakson numero: 3
 * Jakson tehtävänumero: 6
 * Päiväys: 8.4.2019
 */
package jakso3;

/**
 *
 * @author Jouni
 */

import java.util.Scanner;

public class lainaaja {
    
   

    
   public static void main(String args[]){                       
          String s = "Hei lainaaja!";  
          //Luodaan scanneri 
          Scanner scan = new Scanner(s);  
            
          //Tietojen syöttäminen
          System.out.println(scan.nextLine());  
          scan.close();           
          System.out.println("--------Syötä alas tietosi-------- ");  
          Scanner in = new Scanner(System.in);  
          System.out.print("Etunimesi: ");    
          String etunimi = in.next();   
          System.out.print("Sukunimesi: ");  
          String sukunimi = in.next();
          System.out.print("Kotipaikkasi: ");  
          String kotipaikka = in.next(); 
          System.out.print("Asiakasnumerosi: ");  
          int asiakasnumero = in.nextInt(); 
          System.out.println("Kiitos! tietosi ovat nyt järjestelmässämme!");  
           
          //Tulostetaan lainaajan syöttämät tiedot
          System.out.println("Lainaajan tiedot:");
          System.out.println("Etunimi: " + etunimi);
          System.out.println("Sukunimi: " + sukunimi);
          System.out.println("Kotipaikka: " + kotipaikka);
          System.out.println("Asiakasnumero: " + asiakasnumero);
                 
          in.close();           
          } 
}

