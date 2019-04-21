/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jakso2_t2;
/*
 *Tekijä: Jouni Kononen
 * Jakson numero: 2
 * Jakson tehtävänumero: 2
 * Päiväys: 11.3.2019
 * @author Jouni
 */
public class Jakso2_t2 {

    /**
     * tehtävä 2.1
     */
    public static void main(String[] args) {
        int x = 30;
        int y = 2;
        int z = 5;
        
        int summa       = x+y+z;
        int erotus      = x-y-z;
        int tulo        = x*y*z;
        int osamaara    = x/y/z;
        
        System.out.print(" Summa: " + summa+"\n" +
                " erotus: " + erotus+"\n" + 
                " tulo: " + tulo+"\n" + 
                " osamaara: " + osamaara);
    }
    
}
