/*
 * Tekijä: Jouni Kononen
 * Jakson numero: 7
 * Jakson tehtävänumero: 1
 * Päiväys: 10.5.2019
 */

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class t1 extends JApplet implements ActionListener {

    /*
    Luodaan "message" mihin tulostetaan käyttäjälle ohjeita ja tekstiä
    käyttäjän valintojen perusteella
    */
   JLabel message;  

   /*
   Värivalitsimen alkuväri. Tätä käytetään myös muistamaan käyttäjän 
   valitsema värivalinta myöhemmin
   */
   Color selectedColor = Color.GRAY; 
                                   
   public void init() {
       
       /*
       Tässä asetetaan applettiin viestikenttä appletin ylälaitaan ja erinlaisia
       painikkeita mitkä avaavat erinlaisia juttuja kuten dialogeja 
       */
      JPanel content = new JPanel();
      setContentPane(content);
      
       //Asetetaan taustaväri
       content.setBackground(Color.GRAY);
       
       //Luodaan messagelle oma paikka ylhäältä keskeltä
       content.setLayout( new GridLayout(3,1,3,3) );
       message = new JLabel("Paina painikkeita avataksesi dialogeja", JLabel.CENTER);
       message.setForeground(new Color(180,0,0));
       message.setBackground(Color.WHITE);
       message.setOpaque(true);
       getContentPane().add(message);

       //Alustetaan painikkeita ja niiden tyylejä sekä asetteluja
       JPanel buttonBar;
       JButton button;

       buttonBar = new JPanel();
       buttonBar.setLayout(new GridLayout(1,2,3,3));
       buttonBar.setBackground(Color.GRAY);
       content.add(buttonBar);
       
       //Lisätään pelkkä tekstidialogi
       button = new JButton("Teksti Dialogi");
       button.addActionListener(this);
       buttonBar.add(button);
       
       //Lisätään dialogi missä on painikkeita
       button = new JButton("Painike Dialogi");
       button.addActionListener(this);
       buttonBar.add(button);

       buttonBar = new JPanel();
       buttonBar.setLayout(new GridLayout(1,2,3,3));
       buttonBar.setBackground(Color.GRAY);
       content.add(buttonBar);
       
       //Lisätään dialogi mihin voi syöttää tekstiä
       button = new JButton("Dialogi");
       button.addActionListener(this);
       buttonBar.add(button);
       
       //Lisätään dialogi mikä sisältää värivalitsimen
       button = new JButton("Color Chooser");
       button.addActionListener(this);
       buttonBar.add(button);
       
       //Reunaviivat
       content.setBorder(BorderFactory.createLineBorder(Color.GRAY,5));

   } 
   
   /*
    Tässä tarkastetaan if-lausekkeilla mitä käyttäjä tekee ja tulostetaan 
    messageen tekstiä käyttäjän tekemien valintojen perusteella
    */
   public void actionPerformed(ActionEvent evt) {

      String command = evt.getActionCommand();

      //If-lausekkeilla valintojen tarkastus ja tekstin tulostus
      if (command.equals("Teksti Dialogi")) {
         message.setText("Valitsit tekstidialogin!");
         JOptionPane.showMessageDialog(null,
             "Tässä on tekstidialogi!");
         message.setText("Suljit tekstidialogin");
      }
      
      //If-lausekkeella tarkastusta ja switchin käyttöä painikkeiden valinnoille
      else if (command.equals("Painike Dialogi")) {
         message.setText("Valitsit painikedialogin!");
         int response = JOptionPane.showConfirmDialog(null,
             "Tässä on painkedialogi!\n" 
               + "Paina mistä tahansa napista.");
         switch(response) {
            case JOptionPane.YES_OPTION: 
               message.setText("Valitsit \"Yes\".");
               break;
            case JOptionPane.NO_OPTION: 
               message.setText("Valitsit \"No\".");
               break;
            case JOptionPane.CANCEL_OPTION: 
               message.setText("Valitsit \"Cancel\".");
               break;
            case JOptionPane.CLOSED_OPTION: 
               message.setText("Suljit dialogin valitsematta mitään.");
         }
      }

      //If-lausekkeilla tarkastusta
      else if (command.equals("Dialogi")) {
         message.setText("Valitsit dialogin mihin voit syöttää tekstiä!");
         String response = JOptionPane.showInputDialog(null,
             "Tähän dialogiin voit kirjoittaa tekstiä\n" 
               + "Kirjoita tekstiä ja paina painiketta.");
         if (response == null)
            message.setText("Suljit dialogin!");
         else if (response.trim().length() == 0)
            message.setText("Jätit dialogin tekstikentän tyhjäksi!");
         else
            message.setText("Kirjoitit \"" + response + "\".");
      }

      //Tässä käyttäjä voi valita värin
      else if (command.equals("Color Chooser")) {
         message.setText("Valitsit dialogin missä voit valita värin!");
         Color c = JColorChooser.showDialog(null,"Valitse väri",selectedColor);
         if (c == null)
            message.setText("Poistuit dialogista.");
         else {
            selectedColor = c;  //Laitetaan värivalinta muistiin seuraavaa kertaa varten
            int r = c.getRed();
            int g = c.getGreen();
            int b = c.getBlue();
            message.setText("Valitsit RGB = (" + r + "," + g + "," + b + ").");
         }
      }
   } 
} 


