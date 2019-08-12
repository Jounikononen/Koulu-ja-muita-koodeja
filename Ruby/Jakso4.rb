#Jakso 4 tehtävät

#Tehtävä 1
#Potenssien lasku (While)
puts "Anna luku: "

luku = gets.to_i 
luku2 = luku
i = 1
kierrosmaara = 10
 
while kierrosmaara > 0
	puts i.to_s + ". potenssi on " + luku.to_s
	i = i + 1
    kierrosmaara = kierrosmaara - 1
	luku = luku * luku2
end


#Tehtävä 2
#Autonkulutuslaskuri
toista = true
while toista

print "Anna autolla ajetut kilometrit: "; luku1 = gets.to_i
print "Anna bensanhinta: "; luku2 = gets.to_f
print "Onko matka (1) maantieajoa vai (2) kaupunkiajoa?: "; luku3 = gets.to_i

kulutus = 0
if luku3 == 1
	kulutus = 5
	elsif luku3 == 2
	kulutus = 9
end
lasku1 = (luku2 * kulutus * luku1) / 100.0

puts "Matka maksoi #{lasku1} euroa"
print "Lasketaanko toinen matka? (k/e)?: "; luku4 = gets
	
	if luku4.chop == "e"
		toista = false
	end
end


#Tehtävä 3
#Etsitään luku joka on jaollinen viidellä, kolmella ja seitemällä
puts "Anna aloituspaikka:"
luku = gets.to_i
testi = luku

while testi >= luku
	
	if (testi % 3 == 0 and testi % 5 == 0 and testi % 7 == 0)
		puts "Sopiva luku löytyi: #{testi}"
		break
	else
	puts "#{testi} ei kelpaa..."
		testi = testi + 1
	end
end


#Tehtävä 4
#Fibonaccin luku
print "Montako kierrosta lasketaan?: "; luku = gets.to_i

a = 0
b = 1
c = ""

for i in 1..luku
	
	c = a + b
	a = b
	b = c
	
	testi2 = c
	puts "Seuraava Fibonaccin luku on #{b}."
end


#Tehtävä 5
#Ostoslistan tekeminen listan avulla
valinta = 0
lista = Array.new(0)

while valinta != 3
  
  puts "Ostoslistalla on seuraavaa;"
  if lista.empty?
    else
      for tuotteet in lista do
        print "#{tuotteet} "
      end
    end
print "\n"
  
puts "(1) Lisää tuote (2) Poista listan viimeinen tuote (3) Lopeta:"
  valinta = gets.to_i
  
  case valinta
    when 1 then puts "Mitä lisätään?: " 
		lisays = gets.chomp 
		lista.push(lisays)
	when 2 then puts "Poistetaan #{lista[0]}" 
		lista.delete_at(0) 
		lista = lista.compact	
  end
end

puts "Koriin jäi #{lista.length} tuotetta:"
puts lista







