/*
 * Tekijä: Jouni Kononen
 * Jakson numero: 3
 * Jakson tehtävänumero: 2
 * Päiväys: 26.3.2019
 */
package jakso3;

/**
 *
 * @author Jouni
 */

import java.applet.*;

import java.awt.*;

class vari extends Color

{

    String h;

    public vari(String hex)

    {

    super(Integer.valueOf(hex.substring(0,2),16).intValue(),

    Integer.valueOf(hex.substring(2,4),16).intValue(),

    Integer.valueOf(hex.substring(4,6),16).intValue());

    h = hex;

}

public void show(java.awt.Graphics g)

{

    g.setColor(this);

    g.drawString("Värikoodi on " + h, 10, 50); }

}

public class jakso3 extends Applet

{

public void paint(Graphics g)

{

    vari v1 = new vari("0df300");

    g.setColor(v1);

    g.drawString("Morjens! Tässä on johdettu Colors -luokasta oma luokka nimeltä 'vari'", 10, 20);

    v1.show(g);

}

}







