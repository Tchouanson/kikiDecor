var content = document.querySelectorAll('.content');
   var index = 0;

   //next function

   function next(){
       content[index].classList.remove('active');
       index = (index + 1) % content.length;
       content[index].classList.add('active');
   }

   //prev function

   function prev(){
       content[index].classList.remove('active');
       index = (index - 1 + content.length) % content.length;
       content[index].classList.add('active');
   }

   //autoplay

   setInterval(next,20000);
