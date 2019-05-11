/*
 * Tekijä: Jouni Kononen
 * Jakson numero: 6
 * Jakson tehtävänumero: 1
 * Päiväys: 9.5.2019
 */

import java.awt.*;
import javax.swing.*;
import java.net.*;
import java.io.*;

public class t1 {
    public static void main(String[] args) throws Exception {
        
    //Luodaan käyttöliittymä
    JFrame f= new JFrame("http://www.centria.fi");  
    JTextArea t1;  
    t1=new JTextArea("");  
    t1.setBounds(50,100, 600,300);   
    f.add(t1);  
    f.setSize(700,700);  
    f.setLayout(null);  
    f.setVisible(true); 
        
        //Luetaan URLin tiedot
        URL oracle = new URL("https://web.centria.fi/");
        BufferedReader in = new BufferedReader(
        new InputStreamReader(oracle.openStream()));
        
        //Käydään tietoja läpi rivi kerrallaan
        String inputLine;
        while ((inputLine = in.readLine()) != null)
            
            //Lisätään Tekstikenttään sivun tietoja rivi kerrallaan allekkain
            t1.append(inputLine + "\n");
        
    }
   
    //Tee ScrollBarit ennen palautusta
    
}