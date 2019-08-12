#Jakso 5 tehtävät

#Tehtävä 1
#Luetaan tiedostosta tietoa
tiedosto = File.open("5-1_tiedosto.txt","r")
tiedosto.each {|rivi| print rivi}
tiedosto.close


#Tehtävä 2
#Tiedostoon kirjoittaminen
while toista

    tiedosto = File.open("5-2_tiedosto.txt","a")
    puts "Kirjoita jotain (lopeta lopettaa):";
    syote = gets;
        
        if syote.chop == "lopeta"
            toista = false
            
            puts "Tiedostoon kirjoitettiin:"
            tiedosto = File.open("5-2_tiedosto.txt","r")
    tiedosto.each {|rivi| print rivi}
            break   
    end
    
    tiedosto.puts(syote)
    tiedosto.close
    end


#Tehtävä 3
#Kirjainlaskuri
tiedosto = File.open("5-3_tiedosto.txt","r")

maara = File.size?(tiedosto) - 4
kirjain1 = File.read(tiedosto).count("a")
kirjain2 = File.read(tiedosto).count("f")

puts "#{maara} merkkiä: #{kirjain1} a:ta, #{kirjain2} f:ää."
tiedosto.close


#Tehtävä 4
#"Hanhi"-sanojen ja rivien etsiminen tiedoston sisältä
tiedosto = File.open("5-4_tiedosto.txt","r")
teksti = Array.new

tiedosto.each{|rivi| teksti.push(rivi.chomp)}
rivi = 1

for i in teksti
  if i == "hanhi"
    puts "Hanhi rivillä #{rivi}!"
  end
  rivi = rivi + 1;
end


#Tehtävä 5
#"Luovakone" - Keksii tiedostojen sisällä olevista sanoista luovia ideoita
adje = Array.new
File.open("5-5a_tiedosto.txt","r").each{|rivi| adje.push(rivi.chomp)}

subs = Array.new
File.open("5-5b_tiedosto.txt","r").each{|rivi| subs.push(rivi.chomp)}

tarinat = Array.new
File.open("5-5c_tiedosto.txt","r").each{|rivi| tarinat.push(rivi.chomp)}

print "Uuden jutun nimi voisi olla vaikkapa seuraava:\n"
print "#{adje[rand(3)]} "
print "#{subs[rand(3)]} "
puts "#{tarinat[rand(3)]}"




