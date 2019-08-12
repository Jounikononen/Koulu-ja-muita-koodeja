#Jakso 2 tehtävät

#Tehtävä 1

#Muokataan merkkijonoa
eka = "Balin palapeli"
toka = "tehdas!\n"
kolmas = eka + toka

print kolmas


#Tehtävä 2

#Muokataan merkkijonoa
eka = "Balin palapelitehdas!"
eka = eka.chop
eka = eka.gsub("li","ke")

print eka


#Tehtävä 3

#Muokataan merkkijonoa
puts "Kirjoita jotain: "

teksti = gets
teksti1 = teksti [0, 3]
puts "Ensimmäiset kolme merkkiä: " + teksti1

teksti2 = teksti.reverse
teksti2 = teksti2 [0,3]
teksti2 = teksti2.reverse
puts "Viimeiset kaksi merkkiä: " + teksti2

teksti3 = teksti [2, 10000]
puts "Kolmannesta merkistä eteenpäin: " + teksti3


#Tehtävä 4

#Listan muokkaamista
taulu = ["banaani","turtana","ananas","kaneli","unikko"]
taulu = taulu.sort

kohta = 2
taulu[kohta] = "karhea"

puts taulu


#Tehtävä 5

#Merkkijonosta lista
print "Kirjoita jotain: "
sanat = gets
sanat = sanat.split(" ")

sanat = sanat.uniq
sanat = sanat.sort
puts "Tässä sanat aakkosjärjestyksessä:"
puts sanat

