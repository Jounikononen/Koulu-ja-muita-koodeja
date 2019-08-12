#Jakso 7 tehtävät

#Tehtävä 1
#Tarkastetaan onko luku alkuluku
print ("Monenteenko lukuun asti etsitään?: ")
luku = gets.to_i

lista = Array.new
lista.push(2)

puts("2 on alkuluku!")

jako = 3

while jako < luku
	for luvut in lista
		if (jako % luvut == 0)
			puts "#{jako} ei ole alkuluku."
			break
			
		elsif lista.index(luvut) == (lista.length - 1)
			puts "#{jako} on alkuluku!"
			lista.push(jako)
			break
		end
	end
		jako += 1
end


#Tehtävä 2
#Tiedoston sisällä olevien sanojen järjestäminen
tiedosto = File.open("7-2a_tiedosto.txt","r")
tekstit = Array.new
tiedosto.each{|rivi| tekstit.push(rivi)}
tiedosto.close

tekstit = tekstit.sort
tekstit = tekstit.uniq

File.open("7-2b_tiedosto.txt","w").puts(tekstit)


#Tehtävä 3
#Salasanageneraattori (Tiedoston sisältä haetaan numeroita vastaava kirjain)
lista = ""
File.open("7-3_tiedosto.txt","r").each{|rivi| lista += rivi}

i = 1

salasana = ""
puts "Luodaan salasana."

while i < 10
	print "Anna #{i}. luku väliltä 0-999: "
	luku = gets.to_i
	salasana += lista[luku]
	i += 1
end

puts "Ohjelma loi salasanan #{salasana}"

