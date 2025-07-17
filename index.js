

const data= fetch('https://dummyjson.com/users');
      data.then((value)=>{ return (value.json())}).then((show)=>{
        console.log(show);
      

      for(let i of show.users){
        let div = document.createElement('div');
            div.className = 'box'
  

        let header = document.createElement('div');
            header.className ='divhead';

        let img = document.createElement('img')
            img.src= i.image;
            img.className='image'

        let name = document.createElement('h3')
            name.innerText=`${i.firstName},${i.lastName}`
            name.className = 'name';
        
        let age = document.createElement('p');
            age.innerText = "Age : "+  i.age;
            age.className ='content'

        let email= document.createElement('p');
            email.innerText ="Email Id : "+ i.email;
            email.className ='content'
    
        let phone = document.createElement('p');
            phone.innerText = "Phone No : " + i.phone;
            phone.className ='content'
            

        let birth = document.createElement('p');
            birth.innerText = "BirthDtae : " + i.birthDate;
            birth.className ='content'
            

        let blood = document.createElement('p')
             blood.innerText ="BloodGroup : " + i.bloodGroup;
             blood.className ='content'
             

        let user = document.createElement('p')
            user.innerText ="Username : " + i.username;
            user.className ='content'
            

        let pass= document.createElement('p');
            pass.innerText ="Password : "+ i.password;
            pass.className ='content'
            

        let add = document.createElement('p');
            add.innerText = `Address : ${i.address.address},${i.address.city},${i.address.state},${i.address.postalCode}`;
            add.className ='content'
            
        let btn =document.getElementById('eye')
            btn.innerText ='👁️‍🗨️';
        let colors= false;


        btn.addEventListener('click',()=>{
            if(colors){
                document.body.style.backgroundColor='white';
            }else{
                document.body.style.backgroundColor='#34495e'
            }
            colors = !colors;
        })

        header.appendChild(name);
        header.appendChild(img);
              div.appendChild(header)
       

        div.appendChild(age);
        div.appendChild(phone);
        div.appendChild(birth);
        div.appendChild(blood);
        div.appendChild(email);
        div.appendChild(user);
        div.appendChild(pass);
        div.appendChild(add)
       
        
        
        
        document.getElementById('root').appendChild(div)
      } 
    });