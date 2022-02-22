import React from 'react';
import Saidbar from './Saidbar'
function About() {
    return (
        <div style={{display : 'flex'}}>
            
        <div style={{width:'25%'}}><Saidbar style={{marginLeft: '500px'}}/></div>
        <div id="imh1" style={{width: '75%', padding :'50px',color: 'white', textAlign: 'start'}}>
            <h1 style={{textAlign: 'center'}}>About me</h1>
            <div style={{width:'50%',display: 'inline-block'}}>
                <h2>Men haqimda</h2>
            <p>
                Men Ergashev Xayrullo. Men 2005 yilning 8-mayda Farg'ona viloyati, Rishton tumani, Oq-yer qishlog'ida tug'ilganman. Men shu qishloqdagi 18-umumiy o'rta ta'lim maktabining 10-sinfida tahsil olaman . Men dasturlashni 2020 yili bahorda boshlaganman .</p>
          <h2>About me</h2>
           <p>
        I am Ergashev Khayrullo. I was born on May 8, 2005 in the village of Ak-Yer, Rishtan district, Fergana region. I am studying in the 10th class of the 18th general secondary school in this village. I started programming in the spring of 2020.</p>
           <h2>Oбо мне</h2>
           <p>
        Я Эргашев Хайрулло. Я родился 8 мая 2005 года в селе Ак-Ер Риштанского района Ферганской области. Я учусь в 10 классе 18-й общеобразовательной школы этого села. Я начал программировать весной 2020 года.</p>
            </div>
            <div style={{width:'50%',display: 'inline-block'}}>
                <img style={{width: '400px', height: '500px'}} src="https://xayrullocodemyuz.netlify.app/assets/images/photo_2021-12-12_18-00-11.jpg" alt="rasm"/>
            </div>
            </div>
       
     </div>
    );
}

export default About;