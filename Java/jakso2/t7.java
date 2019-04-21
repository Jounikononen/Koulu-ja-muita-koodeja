/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jakso2_t2;
/*
 *Tekijä: Jouni Kononen
 * Jakson numero: 2
 * Jakson tehtävänumero: 7
 * Päiväys: 11.3.2019
 * @author Jouni
 */
import java.applet.*;
import java.util.Arrays;

public class t7 extends Applet {
    
    public static void main(String[] args) {
        
        //Taulukon alustaminen
        int taulu[] = new int[30];
        
        //Taulukko täyteen satunnaislukuja 0-50 väliltä
        int random;
        
        for (int k = 0; k < taulu.length; k++)
            taulu[k] = (int) ((Math.random()*51)+0);
        
        //Taulukon maksimiarvon tarkastaminen
        int koko = taulu.length;
        int max = taulu[0];
       
        for (int k = 1; k < koko; k++)
            if (max < taulu[k]) max = taulu[k];
        
        //Tulostetaan tiedot
        System.out.println(Arrays.toString(taulu));
        System.out.println("taulukon maksimiarvo on: " + max);
        
    }
    
    }



