/*
 * Tekijä: Jouni Kononen
 * Jakson numero: 3
 * Jakson tehtävänumero: 5
 * Päiväys: 6.4.2019
 */
package jakso3;


/**
 *
 * @author Jouni
 */


public class t5 {
  
  
    
    public static void main(String[] args) {
        
    murtoluku luvut = new murtoluku();

    int eka = luvut.luku1();
    int toka = luvut.luku2();
    int kolmas = luvut.luku3();
    int neljas = luvut.luku4();
    
    
    //Murtolukujen yhteenlasku
    int summa1 = (eka * neljas + toka * kolmas);
    int summa2 = (kolmas * neljas);
    //Murtolukujen kertolasku
    int kerto1 = (eka * toka);
    int kerto2 = (kolmas * neljas);
    //Murtolukujen jakolasku
    int jako1 = (eka * neljas);
    int jako2 = (kolmas * toka);
    
    System.out.println(eka + "/" + kolmas + " + " + toka + "/" + neljas + " = " + summa1 + "/" + summa2);
    System.out.println(eka + "/" + kolmas + " * " + toka + "/" + neljas + " = " + kerto1 + "/" + kerto2);
    System.out.println(eka + "/" + kolmas + " / " + toka + "/" + neljas + " = " + jako1 + "/" + jako2);
}
    
    
    
    
   }
    
    

    






