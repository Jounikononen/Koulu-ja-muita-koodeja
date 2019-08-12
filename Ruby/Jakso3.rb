#Jakso 3 tehtävät

#Tehtävä 1
#Yhteen- ja vähennyslaskin
puts"Anna 1. luku: "
eka = gets

puts "Anna 2. luku: "
toka = gets

eka = eka.to_f
toka = toka.to_f

puts "(Y)hteen-, (V)ähennys- vai (K)ertolasku?"
valinta =gets

if valinta == "Y\n"
  puts "Tulos on #{eka+toka}"
  elsif valinta == "V\n"
    puts "Tulos on #{eka-toka}"
    elsif valinta == "K\n"
      puts "Tulos on #{eka*toka}"
      else
        puts "Virheellinen valinta."
    end


#Tehtävä 2
#Ehtolauseita
# coding: utf-8
print "Valitse x-akselin arvo väliltä 0-9: "; luku1 = gets.chomp
print "Valitse y-akselin arvo väliltä 0-9: "; luku2 = gets.chomp

if luku1 < "0" or luku2 < "0"
	puts "Annoit negatiivisen arvon."
elsif luku1 < "5" and luku2 < "5"
	puts "Olet vasemmassa alakulmassa."
elsif luku1 < "5" and luku2 >= "5"
	puts "Olet vasemmassa yläkulmassa."
elsif luku1 >= "5" and luku2 < "5"
	puts "Olet oikeassa alakulmassa."
elsif luku1 >= "5" and luku2 >= "5"
	puts "Olet oikeassa yläkulmassa."
end


#Tehtävä 3
 #coding: utf-8
 puts "Anna nimi: "
 nimi = gets
 
 #määritellään sopivat nimet
 oknimet = ["Erkki"]
 
#Tarkastetaan salasana
 if oknimet.include?(nimi.chomp!) == true
 puts "Anna salasana: "
 salasana = gets
 if salasana.chomp! == "haukionkala"
     puts "Hei #{nimi}!"
 else
     puts "Et ole Erkki."
 end
 else
 puts "En tunne sinua."
 end


 #Tehtävä 4
#Oraakkeli / Case-valinta
puts "Oraakkeli vastaa kyllä/ei-muodossa"
puts "Kirjoita kysymyksesi Oraakkelille:"
vastaus = gets.chomp
puts "Kysymyksesi oli: #{vastaus}"
puts "Tähän Oraakkeli vastasi:"

pisteet = rand(100)
tulos = case pisteet
when 0..19 then "Ei missään nimessä!"
when 20..44 then "Ei varmaankaan"
when 45..54 then "En osaa sanoa."
when 55..79 then "Luultavasti kyllä."
when 80..99 then "Ehdottomasti kyllä."
end
	
print tulos


#Tehtävä 5
#Torakka, jalka, ydinpommipeli (kivi,paperi,sakset)
pelaaja = 0
kone 	= 0

toista = true
while toista

puts "1: Torakka 2: Jalka 3: Ydinpommi 4: lopeta"
puts "Valitse (1-4):"

luku1 = gets.chomp

lista = ["1", "2", "3"].shuffle.first
	
if luku1 == "4"
	puts "Peli on pelaaja #{pelaaja} : tietokone #{kone}"
	toista = false

elsif luku1 == "1" and lista == "2"
	puts "Valitsit torakan, tietokone valitsi jalan."
	puts "Tietokone voitti."
	kone = kone + 1
	pelaaja = pelaaja + 0
	puts "Peli on pelaaja #{pelaaja} : tietokone #{kone}"
	
elsif luku1 == "2" and lista == "3"
	puts "Valitsit jalan, tietokone valitsi ydinpommin."
	puts "Tietokone voitti."
	kone = kone + 1
	pelaaja = pelaaja + 0
	puts "Peli on pelaaja #{pelaaja} : tietokone #{kone}"
	
elsif luku1 == "3" and lista == "1"
	puts "Valitsit ydinpommin, tietokone valitsi torakan."
	puts "Tietokone voitti."
	kone = kone + 1
	pelaaja = pelaaja + 0
	puts "Peli on pelaaja #{pelaaja} : tietokone #{kone}"
	
elsif luku1 == "1" and lista == "3"
	puts "Valitsit torakan, tietokone valitsi ydinpommin."
	puts "Voitit!"
	pelaaja = pelaaja + 1
	kone = kone + 0
	puts "Peli on pelaaja #{pelaaja} : tietokone #{kone}"
	
	elsif luku1 == "2" and lista == "1"
	puts "Valitsit jalan, tietokone valitsi torakan."
	puts "Voitit!"
	pelaaja = pelaaja + 1
	kone = kone + 0
	puts "Peli on pelaaja #{pelaaja} : tietokone #{kone}"
	
elsif luku1 == "3" and lista == "2"
	puts "Valitsit ydinpommin, tietokone valitsi jalan."
	puts "Voitit!"
	pelaaja = pelaaja + 1
	kone = kone + 0
	puts "Peli on pelaaja #{pelaaja} : tietokone #{kone}"
	
	elsif luku1 == lista
	puts "Valitsitte saman, tasapeli."
	kone = kone + 0
	pelaaja = pelaaja + 0
	puts "Peli on pelaaja #{pelaaja} : tietokone #{kone}"
end
end