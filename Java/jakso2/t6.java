/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jakso2_t2;
/*
 *Tekijä: Jouni Kononen
 * Jakson numero: 2
 * Jakson tehtävänumero: 6
 * Päiväys: 11.3.2019
 * @author Jouni
 */
public class t6 {
    public static void main(String[] args) {
        
        int random;
        int parillinen = 0;
        int pariton = 0;
        
        for (int i = 0; i < 10; i++) {
        random = (int) (Math.random()*46)+5;
        
        if(random % 2 == 0) {
            parillinen++;
            
        } else {
            
            pariton++;
            
        }
        System.out.println(random);
        }
        
        System.out.println("Parilliset: " + parillinen+"\n"
        +"Parittomat: " + pariton);
        
    }
}
