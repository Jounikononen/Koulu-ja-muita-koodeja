#Jakso 8 tehtävät

#Tehtävä 1
# Tiedoston nimen pyytäminen ja tulostus

while true
    puts "Anna luettavan tiedoston nimi:"
    nimi = gets
    nimi.chop!
    
    begin
      tiedosto = File.open(nimi)
      tiedosto.each{|rivi| print rivi}
      tiedosto.close
      break
    rescue 
      puts "Tiedoston nimi ei kelpaa."
    end
  
  end


#Tehtävä 2
#Numeron arvauspeli
puts("Arvaa luku väliltä 0-99.")

toista = true
while toista
	
print "Arvaus: "
luku = gets.to_i

arvo = rand(100)
	
	if luku == arvo
      puts "Arvasit oikein!"
		print "Pelataanko uudestaan? (k/e): "
		valinta = gets
		if valinta == "k"
      puts ("Arvaa luku väliltä 0-99.")
		else break
		end
    elsif luku > arvo
      puts "Haettu luku on pienempi."
    else
      puts "Haettu luku on suurempi."
    end
end


#Tehtävä 3
#Yksinkertainen luokka
class Pelastaja
    def initialize
        puts "Pelastaja on paikalla!"
      end
    end
  
  uusi = Pelastaja.new()


#Tehtävä 4
#Luokka joka tekee jotain
class Laatikko
	
	def initialize(sisus = nil)
		@sisus = sisus
	end
	def sisus
		return @sisus
	end
	def sisus= (arvo)
		@sisus = arvo
	end

end
	Varasto = Laatikko.new()
    Varasto.sisus = "puuhapakki"

puts "Varastossa on sisällä #{Varasto.sisus}."


#Tehtävä 5
#HTML-purkaja (Ei pääohjelma vaan pieni ohjelma mikä toteuttaa toiminnon)
def siisti(tekstit)
	tekstit.gsub!(%r{</?[^>]+?>}, " ")
	
	return tekstit
end
