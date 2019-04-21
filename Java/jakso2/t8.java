/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jakso2_t2;
/*
 *Tekijä: Jouni Kononen
 * Jakson numero: 2
 * Jakson tehtävänumero: 8
 * Päiväys: 11.3.2019
 * @author Jouni
 */
import java.awt.*;

import java.applet.*;

public class t8 extends Applet

{

public void paint(Graphics g)

{

    double x = 30.66;

    double y = 20.33;

double erotus;

erotus = Erota(x,y);

g.drawString("Lukujen erotus on " + erotus, 10, 50);

}

public double Erota(double a, double b)

{

return (double) (a - b);

}

}
