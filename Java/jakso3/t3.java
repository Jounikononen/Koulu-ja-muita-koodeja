/*
 * Tekijä: Jouni Kononen
 * Jakson numero: 3
 * Jakson tehtävänumero: 3
 * Päiväys: 1.4.2019
 */
package jakso3;

/**
 *
 * @author Jouni
 */
class kaivinkone {
  protected String nimi = "Kaivinkone";
  
}

class telat extends kaivinkone {
  private int telat = 2;
  public static void main(String[] args) {
    telat tulostus = new telat();
    
    System.out.println(tulostus.nimi + " sisältää " + tulostus.telat + " telaa");
  }
}

