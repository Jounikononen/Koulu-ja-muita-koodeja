/*
 * Tekijä: Jouni Kononen
 * Jakson numero: 4
 * Jakson tehtävänumero: 5
 * Päiväys: 18.4.2019
 */

/**
 *
 * @author Jouni
 */
import java.applet.*;
import java.awt.*;
import java.util.*;
import java.awt.event.*;

public class t5 extends Applet {
    
    public void init()

    {
        setLayout(new GridLayout(2,1));
        add (new threadPanel());
    }

}

class threadPanel extends Panel implements ActionListener, Runnable {

    //Alustetaan tiedot
    int sekunnit = -1;
    int minuutit = 0;
    int kauanko;
    Button nappi;
    TextField aika;
    Thread pros;

    // muodostin
    public threadPanel() {
        //Tehdään sekunttien syöttämiseen laatikko ja nappi
        add(aika = new TextField(10));
        add(nappi = new Button("Aja"));
        nappi.addActionListener(this);
    }

    public void run() {

        while (true)
        try {

            Thread.sleep(1000);
            repaint();
        }

        catch (InterruptedException e) {}

        }

    public void actionPerformed(ActionEvent e) {
        
        //Luetaan syötetty sekuntien määrä
        String sek = aika.getText();
        
        int k = Integer.parseInt(sek);
        kauanko = k;
        pros = new Thread(this);
        pros.start();
    }

    public void paint(Graphics g) {

        //Lisätään sekuntteja kunnes sekunnit ovat sama kuin syötetty luku
        //Tämän jälkeen nollataan kello
        sekunnit++;
        if (sekunnit > kauanko) {
        sekunnit = 0;
        pros.stop();
    }

    g.setFont(new Font("Arial", Font.PLAIN, 36));
    g.drawString("" + sekunnit,40,80);

}
}
