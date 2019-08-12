#Jakso 6 tehtävät

#Tehtävä 1
#Määritellään metodi jossa on parametri
def tulostaja(sana, kertaa)
    sana = "#{sana}\n"
	kertaa = sana * kertaa
	puts "#{kertaa}"
   end
   
   #Kutsutaan luotua metodia muutaman kerran
   tulostaja("Metodit jyrää.",5)
   tulostaja("Näin on.",2)


#Tehtävä 2
#Syötteitä muokkaava ohjelma
# coding: utf-8
puts "Kirjoita jotain: "; 
syöte = gets

def muuntaja(syöte)
	syöte = syöte.gsub("a","y")
	syöte = syöte.gsub("l","g")
	syöte = syöte.upcase!
	print "Käsittelyn jälkeen tulos on: #{syöte}"
	
end
muuntaja("#{syöte}")


#Tehtävä 3
#Sensurointia. Ohjelma korvaa väärät mielipiteet tiedostoista "*****"-merkeillä ja tallentaa siistin version toiseen tiedostoon
sensuroi = Array.new
File.open("6-3a_tiedosto.txt","r").each{|rivi| sensuroi.push(rivi.chomp)}

testi = File.open("6-3c_tiedosto.txt","r")
teksti = ""
testi.each_line do |line|
	teksti += line
end
testi.close

i = 0

for alkiot in sensuroi
	teksti = teksti.gsub(alkiot,"*****")
	
	i += 1
end
puts "Tallennetaan siistitty versio..."

tiedosto = File.open("6-3b_tiedosto.txt","w")
tiedosto.puts(teksti)
tiedosto.close
puts "Valmis! Lopetetaan."


#Tehtävä 4
#palindrominkokeilija
#coding: utf-8
toista = true
while toista
	
print "Kirjoita testattava lause: "; 
lause = gets.chomp

def muuntaja(lause)
	lause1 = lause.delete(" ")
	lause1 = lause1.downcase
	lause2 = lause.reverse
	lause2 = lause2.delete(" ")
	lause2 = lause2.downcase
	lause3 = lause.reverse
	testi = lause.length
	
	if (testi < 5)
		puts "#{lause} ei ole kelvollinen sana."
		elsif (lause1 == lause2)
		puts "#{lause} on palindromi."
	else puts "#{lause} ei ole palindromi; se on väärinpäin #{lause3}."
	end
end

muuntaja("#{lause}")

print "Testataanko lisää? (k/e): "; valinta = gets
if valinta.chop == "e"
	toista = false
end
end


#Tehtävä 5
#Metodien oletusarvot, tulostaja
def tulostaja(teksti = "Oletusarvo", i = 5)
  
    until i < 1
      print teksti
      print " "
      i -= 1
  
    end
  print "\n"
end
  
tulostaja("Metodeilla voimaa!", 2)
tulostaja("Toimii!")
tulostaja