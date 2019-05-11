/*
 * Tekijä: Jouni Kononen
 * Jakson numero: 5
 * Jakson tehtävänumero: 1
 * Päiväys: 8.5.2019
 */

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class t1 extends JApplet implements ActionListener {

    //Luodaan "message" mihin tulostetaan käyttäjälle ohjeita (ylimääräistä testailua)
   JLabel message;  

   // Luodaan appletti missä on dialogi -nappula ja tekstiä
   public void init() {
          
      JPanel content = new JPanel();
      setContentPane(content);
      
       //Luodaan messagelle oma paikka ylhäältä keskeltä
       content.setLayout( new GridLayout(3,1,3,3) );
       message = new JLabel("Paina nappia avataksesi dialogin", JLabel.CENTER);
       getContentPane().add(message);
       JPanel buttonBar;
       JButton button;

       
       buttonBar = new JPanel();
     
       //Lisätään nappula nimeltä "Dialogi"
       content.add(buttonBar);
       button = new JButton("Dialogi");
       button.addActionListener(this);
       buttonBar.add(button);
       
       //Luodaan appletin reunoille harmaat reunaviivat
       content.setBorder(BorderFactory.createLineBorder(Color.GRAY,3));

   } 
   
   
   
   //Tässä avataan dialogi ikkuna ja näytetään käyttäjälle ohjeita messageen
   public void actionPerformed(ActionEvent evt) {

      String command = evt.getActionCommand();

      /*Kun nappia painetaan niin avataan dialogi. Tarkastetaan myös 
      If-lausekkeella mitä käyttäjä on tehnyt ja tämän perusteella tulostetaan
      tekstiä messageen
      */
       if (command.equals("Dialogi")) {
         message.setText("Painoit Dialogia");
         String response = JOptionPane.showInputDialog(null,
             "Tämä on dialogi-ikkuna.\n" 
               + "Kirjoita tähän jotain ja paina nappulaa");
         if (response == null)
            message.setText("Poistuit dialogi-ikkunasta");
         else if (response.trim().length() == 0)
            message.setText("Et kirjoittanut dialogi-ikkunaan mitään");
         else
            message.setText("Kirjoitit \"" + response + "\".");
      }

   } 

} 

