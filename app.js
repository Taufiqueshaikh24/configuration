let Location = document.getElementById('Location')
let vlan25 = document.getElementById("vlan25");
let vlan15 = document.getElementById("vlan15");
let vlan35 = document.getElementById("vlan35");
let subvlan15 = document.getElementById("subvlan15");
let subvlan25 = document.getElementById('subvlan25');
let subvlan35 = document.getElementById('subvlan35');
let prefix25  = document.getElementById('prefix1');
let prefix15  = document.getElementById('prefix2');
let prefix35  = document.getElementById('prefix3');
let file = document.querySelector('.file');
let btn = document.querySelector('.btn');

file.addEventListener('change' , (e) => {
   e.preventDefault();
   readXlsxFile(file.files[0]).then( data => {
                console.log(data);

                data.forEach((element , index) => {
                        
                        setTimeout(() => {

                        console.log(data);
                        let ek  = element[3]
                        Location.value  = ek;
                       //console.log(element[11], element[12] , element[13]);
                         let ll = element[11]
                         let  a = ll.split('');
                       //   let f = a[3];
                       //   let x = f.split('.')
                       let sp  = a.splice(-3)
                       let spj = sp.join('')
                       let j = a.join('')
                       //   let  sp = ll.splice(-1 , 3)
                   
                       let l2 = element[12]
                         let  b = l2.split('');
                       //   let f = a[3];
                       //   let x = f.split('.')
                       let sp2  = b.splice(-3)
                       let spj2 = sp2.join('')
                       let k = b.join('')


                    let l3 = element[13]
                     let c = l3.split('');
                     let sp3 = c.splice(-3);
                     let spj3 = sp3.join('')
                     let l  = c.join('');
                       

                         console.log(spj3);



                        console.log( j , k  , l );
                       vlan25.value = j ; 
                       vlan15.value = k ; 
                       vlan35.value = l ; 
                       prefix25.value = spj;
                       prefix15.value = spj2;
                       prefix35.value = spj3;
                       

                       
                       if (spj == '/1') {
                        subvlan25.value = '128.0.0.0';
                          
                        }
                        if (spj == '/2') {
                          subvlan25.value = '192.0.0.0';
                        }
                        if (spj == '/3' ) {
                          subvlan25.value = '224.0.0.0';
                        }
                        if (spj == '/4') {
                          subvlan25.value = '240.0.0.0';
                          
                        }
                        if (spj == '/5') {
                          subvlan25.value = '248.0.0.0';
                        }
                        if (spj == '/6' ) {
                          subvlan25.value = '252.0.0.0';
                        }
                        if (spj == '/7') {
                          subvlan25.value = '254.0.0.0';
                          
                        }
                        if (spj == '/8') {
                          subvlan25.value = '255.0.0.0';
                        }
                        if (spj == '/9' ) {
                          subvlan25.value = '255.128.0.0';
                        }
                        if (spj == '/10') {
                          subvlan25.value = '255.192.0.0';
                          
                        }
                        if (spj == '/11') {
                          subvlan25.value = '255.224.0.0  ';
                        }
                        if (spj == '/12' ) {
                          subvlan25.value = '255.240.0.0';
                        }
                        if (spj == '/13') {
                          subvlan25.value = '255.248.0.0';
                          
                        }
                        if (spj == '/14') {
                          subvlan25.value = '255.252.0.0';
                        }
                        if (spj == '/15' ) {
                          subvlan25.value = '255.254.0.0';
                        }
                        if (spj == '/16' ) {
                          subvlan25.value = '255.255.0.0';
                        }
                        if (spj == '/17' ) {
                          subvlan25.value = '255.255.128.0';
                        }
                        if (spj == '/18' ) {
                          subvlan25.value = '255.255.192.0';
                        }
                        if (spj == '/19' ) {
                          subvlan25.value = '255.255.224.0';
                        }
                        if (spj == '/20' ) {
                          subvlan25.value = '255.255.240.0';
                        }
                        if (spj == '/21' ) {
                          subvlan25.value = '255.255.248.0';
                        }
                        if (spj == '/22' ) {
                          subvlan25.value = '255.255.252.0';
                        }
                        if (spj == '/23' ) {
                          subvlan25.value = '255.255.254.0';
                        }
                        if (spj == '/24' ) {
                          subvlan25.value = '255.255.255.0';
                        }
                        if (spj == '/25' ) {
                          subvlan25.value = '255.255.255.128';
                        }
                        if (spj == '/26' ) {
                          subvlan25.value = '255.255.255.192';
                        }
                        if (spj == '/27' ) {
                          subvlan25.value = '255.255.255.224';
                        }
                        if (spj == '/28' ) {
                          subvlan25.value = '255.255.255.240';
                        }
                        if (spj == '/29' ) {
                          subvlan25.value = '255.255.255.248';
                        }
                        if (spj == '/30' ) {
                          subvlan25.value = '255.255.255.252';
                        }
                        if (spj == '/31' ) {
                          subvlan25.value = '255.255.255.254';
                        }
                        if (spj == '/32' ) {
                          subvlan25.value = '255.255.255.255';
                        }







                        
                        if (spj2 == '/1') {
                          subvlan15.value = '128.0.0.0';
                          
                        }
                        if (spj2 == '/2') {
                          subvlan15.value = '192.0.0.0';
                        }
                        if (spj2 == '/3' ) {
                          subvlan15.value = '224.0.0.0';
                        }
                        if (spj2 == '/4') {
                          subvlan15.value = '240.0.0.0';
                          
                        }
                        if (spj2 == '/5') {
                          subvlan15.value = '248.0.0.0';
                        }
                        if (spj2 == '/6' ) {
                          subvlan15.value = '252.0.0.0';
                        }
                        if (spj2 == '/7') {
                          subvlan15.value = '254.0.0.0';
                          
                        }
                        if (spj2 == '/8') {
                          subvlan15.value = '255.0.0.0';
                        }
                        if (spj2 == '/9' ) {
                          subvlan15.value = '255.128.0.0';
                        }
                        if (spj2 == '/10') {
                          subvlan15.value = '255.192.0.0';
                          
                        }
                        if (spj2 == '/11') {
                          subvlan15.value = '255.224.0.0  ';
                        }
                        if (spj2 == '/12' ) {
                          subvlan15.value = '255.240.0.0';
                        }
                        if (spj2 == '/13') {
                          subvlan15.value = '255.248.0.0';
                          
                        }
                        if (spj2 == '/14') {
                          subvlan15.value = '255.252.0.0';
                        }
                        if (spj2 == '/15' ) {
                          subvlan15.value = '255.254.0.0';
                        }
                        if (spj2 == '/16' ) {
                          subvlan15.value = '255.255.0.0';
                        }
                        if (spj2 == '/17' ) {
                          subvlan15.value = '255.255.128.0';
                        }
                        if (spj2 == '/18' ) {
                          subvlan15.value = '255.255.192.0';
                        }
                        if (spj2 == '/19' ) {
                          subvlan15.value = '255.255.224.0';
                        }
                        if (spj2 == '/20' ) {
                          subvlan15.value = '255.255.240.0';
                        }
                        if (spj2 == '/21' ) {
                          subvlan15.value = '255.255.248.0';
                        }
                        if (spj2 == '/22' ) {
                          subvlan15.value = '255.255.252.0';
                        }
                        if (spj2 == '/23' ) {
                          subvlan15.value = '255.255.254.0';
                        }
                        if (spj2 == '/24' ) {
                          subvlan15.value = '255.255.255.0';
                        }
                        if (spj2 == '/25' ) {
                          subvlan15.value = '255.255.255.128';
                        }
                        if (spj2 == '/26' ) {
                          subvlan15.value = '255.255.255.192';
                        }
                        if (spj2 == '/27' ) {
                          subvlan15.value = '255.255.255.224';
                        }
                        if (spj2 == '/28' ) {
                          subvlan15.value = '255.255.255.240';
                        }
                        if (spj2 == '/29' ) {
                          subvlan15.value = '255.255.255.248';
                        }
                        if (spj2 == '/30' ) {
                          subvlan15.value = '255.255.255.252';
                        }
                        if (spj2 == '/31' ) {
                          subvlan15.value = '255.255.255.254';
                        }
                        if (spj2 == '/32' ) {
                          subvlan15.value = '255.255.255.255';
                        }
                       




                        
                        if (spj3 == '/1') {
                          subvlan35.value = '128.0.0.0';
                          
                        }
                        if (spj3 == '/2') {
                          subvlan35.value = '192.0.0.0';
                        }
                        if (spj3 == '/3' ) {
                          subvlan35.value = '224.0.0.0';
                        }
                        if (spj3 == '/4') {
                          subvlan35.value = '240.0.0.0';
                          
                        }
                        if (spj3 == '/5') {
                          subvlan35.value = '248.0.0.0';
                        }
                        if (spj3 == '/6' ) {
                          subvlan35.value = '252.0.0.0';
                        }
                        if (spj3 == '/7') {
                          subvlan35.value = '254.0.0.0';
                          
                        }
                        if (spj3 == '/8') {
                          subvlan35.value = '255.0.0.0';
                        }
                        if (spj3 == '/9' ) {
                          subvlan35.value = '255.128.0.0';
                        }
                        if (spj3 == '/10') {
                          subvlan35.value = '255.192.0.0';
                          
                        }
                        if (spj3 == '/11') {
                          subvlan35.value = '255.224.0.0  ';
                        }
                        if (spj3 == '/12' ) {
                          subvlan35.value = '255.240.0.0';
                        }
                        if (spj3 == '/13') {
                          subvlan35.value = '255.248.0.0';
                          
                        }
                        if (spj3 == '/14') {
                          subvlan35.value = '255.252.0.0';
                        }
                        if (spj3 == '/15' ) {
                          subvlan35.value = '255.254.0.0';
                        }
                        if (spj3 == '/16' ) {
                          subvlan35.value = '255.255.0.0';
                        }
                        if (spj3 == '/17' ) {
                          subvlan35.value = '255.255.128.0';
                        }
                        if (spj3 == '/18' ) {
                          subvlan35.value = '255.255.192.0';
                        }
                        if (spj3 == '/19' ) {
                          subvlan35.value = '255.255.224.0';
                        }
                        if (spj3 == '/20' ) {
                          subvlan35.value = '255.255.240.0';
                        }
                        if (spj3 == '/21' ) {
                          subvlan35.value = '255.255.248.0';
                        }
                        if (spj3 == '/22' ) {
                          subvlan35.value = '255.255.252.0';
                        }
                        if (spj3 == '/23' ) {
                          subvlan35.value = '255.255.254.0';
                        }
                        if (spj3 == '/24' ) {
                          subvlan35.value = '255.255.255.0';
                        }
                        if (spj3 == '/25' ) {
                          subvlan35.value = '255.255.255.128';
                        }
                        if (spj3 == '/26' ) {
                          subvlan35.value = '255.255.255.192';
                        }
                        if (spj3 == '/27' ) {
                          subvlan35.value = '255.255.255.224';
                        }
                        if (spj3 == '/28' ) {
                          subvlan35.value = '255.255.255.240';
                        }
                        if (spj3 == '/29' ) {
                          subvlan35.value = '255.255.255.248';
                        }
                        if (spj3 == '/30' ) {
                          subvlan35.value = '255.255.255.252';
                        }
                        if (spj3 == '/31' ) {
                          subvlan35.value = '255.255.255.254';
                        }
                        if (spj3 == '/32' ) {
                          subvlan35.value = '255.255.255.255';
                        }


                        if (subvlan15.value === '') {
                            btn.disabled = true
                        }else {
                            btn.disabled = false
                            
                        }

                         btn.click();

}, index * 1000)


                  



});
            
   });
});

document.querySelector('.btn').addEventListener('click', (e) => {
            e.preventDefault();
   
    
 
     let vlan  = vlan25.value; 
     let n = vlan.split('.');
     let  a = n.slice(-1);
     let int = parseInt([a]) + 1  ;
     let sp  = n.splice(-1 , 0 , int)
         n.pop();
         let joi = n.join('.')
     
   let vlan2 = vlan15.value;
   let  m = vlan2.split('.');
   let b  = m.slice(-1);
   let int2 = parseInt([b]) + 1 ; 
   let sp1  = m.splice(-1 , 0 , int2);
   m.pop();
   let joi1 = m.join('.');

   let vlan3  =  vlan35.value;
   let  o = vlan3.split('.');
   let c  = o.slice(-1);
   let int3  = parseInt([c]) + 1 ;
   let sp2  = o.splice(-1 , 0 , int3)
    o.pop();
    let joi2 = o.join('.');


    let exclude = vlan25.value;
    let ex  = exclude.split('.');
    let  e0 =  ex.slice(-1);
    let int4 = parseInt([e0]) + 8 ;
    let sp4 = ex.splice(-1, 0 , int4);
       ex.pop();
       let joi4 = ex.join('.');

     let excludev = vlan35.value;
     let exv = excludev.split('.');
     let e1  = exv.slice(-1);
     let int5 = parseInt([e1]) + 4 ; 
     let sp5  = exv.splice(-1 , 0 , int5);
       exv.pop();
       let joi5  = exv.join('.');

 
    let sw1  = vlan25.value ;
    let sw   = sw1.split('.');
    let s1   =   sw.slice(-1);
    let int6 = parseInt([s1]) + 2 ;
    let sp6  =  sw.splice(-1 , 0 , int6);
        sw.pop();
      let joi6 = sw.join('.');



    
      let pp = prefix15.value;
      let pw  = pp.split('');
      let p1  = pw.splice(0 , 1 )
      let pre15 = pw.join('')

      let pq = prefix25.value;
      let px = pq.split('');
      let p2  = px.splice( 0 , 1 );
      let pre25 = px.join('');

      let pr = prefix35.value;
      let py = pr.split('');
      let p3 = py.splice(0 , 1 );
      let pre35 = py.join('');


     
   
 

     const link = document.createElement("a");



let p = `

$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ CISCO ROUTER $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


vlan 15
name ***Utility_VLAN***
#
vlan 25
name ***Data_VLAN***
description ***Data_VLAN***
#
vlan 35
name ***Voice_VLAN***



interface GigabitEthernet1/0/1
description *** uplink to switch ***
switchport mode trunk

interface Vlan 25
description ***Data_VLAN***
ip address ${joi} ${subvlan25.value}
!
interface Vlan15
description ***Utility_VLAN***
ip address  ${joi1} ${subvlan15.value}
!
interface Vlan 35
description ***Voice_VLAN***
ip address ${joi2} ${subvlan35.value}


ip prefix-list LAN-Subnet1  seq 60 permit  ${vlan25.value}${prefix25.value}
ip prefix-list LAN-Subnet1  seq 65 permit  ${vlan15.value}${prefix15.value}
ip prefix-list LAN-Subnet1  seq 70 permit  ${vlan35.value}${prefix35.value}
ip prefix-list LAN-Subnet2  seq 60 permit  ${vlan25.value}${prefix25.value}
ip prefix-list LAN-Subnet2  seq 65 permit  ${vlan15.value}${prefix15.value}
ip prefix-list LAN-Subnet2  seq 70 permit  ${vlan35.value}${prefix35.value}
ip prefix-list LAN          seq 60 permit  ${vlan25.value}${prefix25.value}
ip prefix-list LAN          seq 65 permit  ${vlan15.value}${prefix15.value}
ip prefix-list LAN          seq 70 permit  ${vlan35.value}${prefix35.value}
ip prefix-list for-sify     seq 60 permit  ${vlan25.value}${prefix25.value}
ip prefix-list for-sify     seq 65 permit  ${vlan15.value}${prefix15.value}
ip prefix-list for-sify     seq 70 permit  ${vlan35.value}${prefix35.value}





router bgp 65535
address-family ipv4
network ${vlan25.value}  mask  ${subvlan25.value}
network ${vlan15.value}  mask  ${subvlan15.value}
network ${vlan35.value}  mask  ${subvlan35.value}



service dhcp 

ip dhcp pool data
network ${vlan25.value} ${subvlan25.value}
domain-name hdfc.com
dns-server 10.0.0.233 10.3.0.250
default-router ${joi}
lease 7
!

ip domain name hdfc.com
ip dhcp bootp ignore
ip dhcp excluded-address ${joi} ${joi4}

ip dhcp pool voice
network ${vlan35.value} ${subvlan35.value}
domain-name hdfc.com
dns-server 10.0.0.233 10.3.0.250
default-router ${joi2}
lease 7



ip domain name hdfc.com
ip dhcp bootp ignore
ip dhcp excluded-address ${joi2} ${joi5}

$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ HP ROUTER $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

interface GigabitEthernet1/0/1
port link-mode bridge
description **Trunk for LAN **
port link-type trunk
port trunk permit vlan 1 15 25 35 

vlan 15
name ***Utility_VLAN***
#
vlan 25
name ***Data_VLAN***
description ***Data_VLAN***
#
vlan 35
name ***Voice_VLAN***


interface Vlan-interface15
description ***Utility_VLAN***
ip address ${joi} ${subvlan15.value}
no shut
interface Vlan-interface25
description ***Data_VLAN***
ip address ${joi1} ${subvlan25.value}
no shut
interface Vlan-interface35
description ***Voice_VLAN***
ip address ${joi2} ${subvlan35.value}



ip prefix-list LAN-Subnet1 index 60 permit ${vlan25.value} ${pre25}
ip prefix-list LAN-Subnet1 index 65 permit ${vlan15.value} ${pre15}
ip prefix-list LAN-Subnet1 index 70 permit ${vlan35.value} ${pre35}
ip prefix-list LAN-Subnet2 index 60 permit ${vlan25.value} ${pre25}
ip prefix-list LAN-Subnet2 index 65 permit ${vlan15.value} ${pre15}
ip prefix-list LAN-Subnet2 index 70 permit ${vlan35.value} ${pre35}
ip prefix-list LAN         index 60 permit ${vlan25.value} ${pre25}
ip prefix-list LAN         index 65 permit ${vlan15.value} ${pre15}
ip prefix-list LAN         index 70 permit ${vlan35.value} ${pre35}
ip prefix-list sify        index 60 permit ${vlan25.value} ${pre25}
ip prefix-list sify        index 65 permit ${vlan15.value} ${pre15}
ip prefix-list sify        index 70 permit ${vlan35.value} ${pre35}

bgp 65535

address-family ipv4 unicast
network ${vlan15.value} ${subvlan15.value}
network ${vlan25.value} ${subvlan25.value}
network ${vlan35.value} ${subvlan35.value}





dhcp server ip-pool data
gateway-list ${joi}
network ${vlan25.value} mask ${subvlan25.value}
forbiden-ip-range ${joi} ${joi4}
dns-list 10.0.0.233 10.3.0.250
domain-name hdfc.com



dhcp server ip-pool voice
gateway-list ${joi2}
network ${vlan35.value}  mask ${subvlan35.value}
address range ${joi2} ${joi5}
dns-list 10.0.0.233 10.3.0.250 
domain-name hdfc.com




$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$CISCO SWICH$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$



vlan X
name Data_VLAN
!
vlan X
name Utility_VLAN
!
vlan X
name Voice_VLAN
!
no cdp run
!





interface Vlan 25
description ***DATA VLAN***
ip address ${joi6} ${subvlan25.value}
no ip redirects
no ip unreachables
no ip proxy-arp


interface GigabitEthernet1/0/24
description ***Uplink connected to Router***
switchport mode trunk


interface GigabitEthernet1/0/2
description ***LAN Port ***
switchport access vlan X
switchport voice vlan X


interface GigabitEthernet1/0/
description ***LAN PORT***
switchport access vlan X
switchport mode access
switchport nonegotiate
switchport voice vlan X


ip default-gateway ${joi}





                ID	network address      Mask 			    prefix                  Gateway

Data           vlan 25 network ${vlan25.value}  mask ${subvlan25.value}  ${vlan25.value}${prefix25.value}   ${joi}
utility        vlan 15 network ${vlan15.value}  mask ${subvlan15.value}  ${vlan15.value}${prefix15.value}   ${joi1}
Voice          vlan 35 network ${vlan35.value}  mask ${subvlan35.value}  ${vlan35.value}${prefix35.value}   ${joi2}


$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$HP SWICH$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


vlan 35 
name Voice 
Voice 

vlan 15
name utility 

vlan 25 
name DATA


vlan 25 
ip address ${joi6} ${subvlan25.value} 


Trunking 
vlan 25
tagged ether 24

vlan 35 
tagged ethernet 24

vlan 15 
tagged ethernet 24



ID	network address      Mask 			    prefix                  Gateway

Data           vlan 25 network ${vlan25.value}  mask ${subvlan25.value}  ${vlan25.value} ${pre25.value}   ${joi}
utility        vlan 15 network ${vlan15.value}  mask ${subvlan15.value}  ${vlan15.value} ${pre15.value}   ${joi1}
Voice          vlan 35 network ${vlan35.value}  mask ${subvlan35.value}  ${vlan35.value} ${pre35.value}   ${joi2}







`;


















     const file = new Blob([p], { type: 'text/plain' });
     link.href = URL.createObjectURL(file);
     link.download = `${Location.value}`;
     link.click();
     URL.revokeObjectURL(link.href);
     //  Get the text field
      var copyText = document.getElementById("myInput");
      copyText.value = `${p}`;
      // Select the text field
      copyText.select();
     // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
    console.log(copyText.value);
    //document.querySelector('.from').reset();

});
