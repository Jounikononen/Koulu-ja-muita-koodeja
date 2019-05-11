  /*
 * Tekijä: Jouni Kononen
 * Jakson numero: 5
 * Jakson tehtävänumero: 2
 * Päiväys: 8.5.2019
 */  


import javax.swing.*;  

    class t2  {  
        //Alustetaan menu ja menuitemit
        JMenu menu;  
        JMenuItem eka, toka;  
              
            t2() {  
            //Luodaan ikkuna
            JFrame f= new JFrame("Ikkuna");  
            
            //Luodaan menubar ja sinne valikot
            JMenuBar mb=new JMenuBar();  
            menu=new JMenu("Tiedosto");    
            eka=new JMenuItem("Avaa");  
            toka=new JMenuItem("Lopeta");  
               
            //Lisätään menu applettiin
            menu.add(eka); menu.add(toka);
            mb.add(menu);  
            f.setJMenuBar(mb);
            
            //Appletin koko 400*400
            f.setSize(400,400);  
            //Laitetaan appletti näkyviin
            f.setLayout(null);  
            f.setVisible(true);  
    }  
            
    //Ajetaan ohjelma
    public static void main(String args[])  {  
        
        new t2();  
        
    }
    
    }  